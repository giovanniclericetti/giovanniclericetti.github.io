const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const Vue = require('vue')
const compiler = require('vue-template-compiler')
const italian = require('../locales/it.json')

const root = path.resolve(__dirname, '..')
const read = file => fs.readFileSync(path.join(root, file), 'utf8')
const localeSource = read('utils/locale.js').replace(/^import .*\n/, '').replace(/export /g, '')
const { translate, languageStorageKey, isLanguage } = vm.runInNewContext(
  `${localeSource}; ({ translate, languageStorageKey, isLanguage })`, { italian }
)
const projects = JSON.parse(read('utils/project-content.js').split('export default ')[1])

async function main() {
  assert.equal(translate(' About Me ', 'it'), ' About ')
  assert.equal(translate(' About Me ', 'en'), ' About Me ')
  assert.equal(translate(undefined, 'it'), undefined)
  assert.equal(translate('AC Milan', 'it'), 'AC Milan')
  assert.equal(translate('project', 'it'), '.')
  assert.equal(translate('Branding', 'it', 'previewpretest.pill1'), 'Identità visiva')
  assert.equal(translate('Branding', 'it', 'acmilan3.pill1'), 'Brand design')
  assert.equal(translate('Presentation', 'it', 'audiovisualidentity.sections.2.title'), 'Dalla discussione di tesi alla didattica')
  assert.equal(translate('Branding', 'en', 'acmilan3.pill1'), 'Branding')

  const source = compiler.parseComponent(read('components/ProjectCopy.vue')).script.content
  const copyOptions = vm.runInNewContext(`(${source.replace('export default', '')})`)
  let paragraphs = 0
  for (const project of Object.values(projects)) {
    for (const field of ['bio', 'overview', 'contribution', 'projectType', 'pill1', 'pill2', 'pill3']) {
      const text = project[field]
      if (text && text !== 'UX/UI') assert.ok(Object.hasOwn(italian, text), `Missing translation: ${text}`)
    }
    const copies = [[project.overview, project.emphasis], [project.contribution, project.contributionEmphasis],
      ...(project.sections || []).map(section => [section.description, section.emphasis])]
    for (const [text, emphasis] of copies) {
      if (!text) continue
      const copy = new Vue({ ...copyOptions, propsData: { text, emphasis }, methods: { $t: value => translate(value, 'it') } })
      assert.equal(copy.before + copy.highlight + copy.after, translate(text, 'it'))
      if (emphasis) assert.ok(copy.highlight, `Missing Italian emphasis: ${emphasis}`)
      paragraphs++
    }
  }

  let saved = 'it'
  const storage = { getItem: () => saved, setItem: (key, value) => { assert.equal(key, languageStorageKey); saved = value } }
  const pluginSource = read('plugins/locale.js').replace(/^import .*\n/gm, '').replace('export default', '')
  const plugin = vm.runInNewContext(`(${pluginSource})`, {
    Vue, translate, languageStorageKey, isLanguage, process: { client: true }, Event: class {},
    window: { localStorage: storage, dispatchEvent() {} },
  })
  const app = {}
  plugin({}, (key, value) => { app[key] = value })
  assert.equal(app.locale.state.language, 'en', 'Hydration must start in the generated language')
  const component = new Vue({ computed: { label: () => app.t('About Me') } })
  let updated
  component.$watch('label', value => { updated = value })
  app.locale.restore()
  await Vue.nextTick()
  assert.equal(component.label, 'About')
  assert.equal(updated, 'About', 'Mounted components must react to language changes')
  app.locale.setLanguage('fr')
  assert.equal(app.locale.state.language, 'it')
  app.locale.setLanguage('en')
  await Vue.nextTick()
  assert.equal(component.label, 'About Me')
  assert.equal(saved, 'en')
  const freshApp = {}
  plugin({}, (key, value) => { freshApp[key] = value })
  app.locale.setLanguage('it')
  assert.equal(freshApp.locale.state.language, 'en', 'Each app must have isolated state')
  freshApp.locale.restore()
  assert.equal(freshApp.locale.state.language, 'it', 'A fresh app restores the saved preference')
  storage.getItem = storage.setItem = () => { throw new Error('Storage unavailable') }
  assert.doesNotThrow(() => { app.locale.restore(); app.locale.setLanguage('en') })
  console.log(`Verified ${Object.keys(italian).length} translations, ${paragraphs} project paragraphs, emphasis, reactive switching and persistence.`)
}

main().catch(error => { console.error(error); process.exitCode = 1 })
