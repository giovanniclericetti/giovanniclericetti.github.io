// Use an existing Playwright installation; no production dependency is required.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright')
const fs = require('fs')
const out = process.env.AUDIT_OUT || '/tmp/portfolio-responsive'
const base = process.env.AUDIT_URL || 'http://127.0.0.1:51487'
fs.mkdirSync(out, { recursive: true })
;(async () => {
  const b = await chromium.launch({ channel: 'chrome', headless: true })
  const page = await b.newPage({ deviceScaleFactor: 1 })
  const errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  const routes = fs
    .readdirSync('pages')
    .filter((x) => x.endsWith('.vue'))
    .map((x) => (x === 'index.vue' ? '' : x.replace('.vue', '')))
    .filter(
      (route) =>
        !process.env.AUDIT_ROUTES ||
        process.env.AUDIT_ROUTES.split(',').includes(route || '/')
    )
  const results = []
  for (const width of [
    320, 360, 375, 390, 414, 430, 600, 768, 844, 1024, 1440,
  ]) {
    await page.setViewportSize({ width, height: width === 844 ? 390 : 900 })
    for (const route of routes) {
      const response = await page.goto(base + '/' + route, {
        waitUntil: 'domcontentloaded',
      })
      await page.waitForFunction(() => window.$nuxt && window.$nuxt._isMounted)
      await page.evaluate(() => document.fonts.ready)
      await page.waitForTimeout(100)
      if ([320, 390, 768, 1024, 1440].includes(width)) {
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 650) {
            window.scrollTo(0, y)
            await new Promise((r) => setTimeout(r, 35))
          }
          window.scrollTo(0, 0)
        })
        await page.waitForTimeout(900)
      }
      const result = await page.evaluate(() => {
        const visible = (e) =>
          !!e.getBoundingClientRect().width &&
          !!e.getBoundingClientRect().height
        return {
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          overflowElements: [...document.querySelectorAll('main *')]
            .filter(
              (e) =>
                visible(e) &&
                e.getBoundingClientRect().right > innerWidth + 2 &&
                getComputedStyle(e).position !== 'fixed'
            )
            .slice(0, 12)
            .map((e) => e.tagName + '.' + e.className),
          badImages: [...document.images]
            .filter(
              (e) => visible(e) && e.currentSrc && e.complete && !e.naturalWidth
            )
            .map((e) => e.currentSrc),
          missingNames: [...document.querySelectorAll('a,button,iframe')]
            .filter(
              (e) =>
                visible(e) &&
                !e.textContent.trim() &&
                !e.getAttribute('aria-label') &&
                !e.getAttribute('title') &&
                ![...e.querySelectorAll('img')].some((i) => i.alt)
            )
            .map((e) => e.outerHTML.slice(0, 150)),
          missingBackgrounds: [...document.querySelectorAll('[data-image-src]')]
            .filter(
              (e) =>
                visible(e) && getComputedStyle(e).backgroundImage === 'none'
            )
            .map((e) => e.getAttribute('data-image-src')),
          titleSizes: [...document.querySelectorAll('.titlemob')]
            .filter(visible)
            .map((e) => getComputedStyle(e).fontSize),
          layout: [
            ...document.querySelectorAll(
              'h1,h2,h3,h4,p,.projectcard,.gallery-image,.cover-mobile,.imgbox,.footer'
            ),
          ]
            .filter(visible)
            .map((e) => ({
              tag: e.tagName,
              text: e.textContent.trim().slice(0, 60),
              x: e.getBoundingClientRect().x,
              y: e.getBoundingClientRect().y,
              w: e.getBoundingClientRect().width,
              h: e.getBoundingClientRect().height,
              font: getComputedStyle(e).fontSize,
            })),
        }
      })
      results.push({
        route: route || '/',
        width,
        status: response.status(),
        ...result,
      })
      if ([320, 390, 768, 1024, 1440].includes(width))
        await page.screenshot({
          path: `${out}/${route || 'index'}-${width}.png`,
          fullPage: true,
        })
      console.log(
        width,
        route || '/',
        result.overflow ? 'OVERFLOW' : 'ok',
        result.badImages.length ? 'BROKEN IMAGE' : ''
      )
      fs.writeFileSync(
        out + '/results.json',
        JSON.stringify({ errors, results }, null, 2)
      )
    }
  }
  await b.close()
  if (
    errors.length ||
    results.some(
      (r) =>
        r.status !== 200 ||
        r.overflow ||
        r.badImages.length ||
        r.missingNames.length ||
        ([320, 390, 768, 1024, 1440].includes(r.width) &&
          r.missingBackgrounds.length)
    )
  ) {
    process.exitCode = 1
  }
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
