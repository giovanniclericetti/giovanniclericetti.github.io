import Vue from 'vue'

// Match the home introduction's wrapping without changing either page's copy.
const homeCopy = {
  en: ["Hey! I'm Giovanni, a ", 'Visual Designer', ' working in the sports industry. I currently work with ', 'AC Milan', ', focusing on brand communication and commercial partnerships.'],
  it: ['Ciao! Sono Giovanni, ', 'Visual Designer', ' nel Mondo dello Sport. Collaboro con ', 'AC Milan,', ' lavorando a progetti di Comunicazione Visiva e Partnership Commerciali.'],
}

function fitIntroduction(el, state) {
  el.style.removeProperty('font-size')
  if (!window.matchMedia('(max-width: 767.98px)').matches) return

  const style = getComputedStyle(el)
  const baseSize = parseFloat(style.fontSize)
  const lineHeight = parseFloat(style.lineHeight)
  const reference = document.createElement('div')
  Object.assign(reference.style, {
    position: 'fixed', left: '-10000px', top: '0', visibility: 'hidden',
    width: `${el.getBoundingClientRect().width}px`,
    fontFamily: style.fontFamily, fontSize: style.fontSize,
    fontWeight: style.fontWeight, lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing, textWrap: 'pretty',
  })
  reference.setAttribute('aria-hidden', 'true')
  homeCopy[state.language === 'it' ? 'it' : 'en'].forEach((text, index) => {
    const span = document.createElement('span')
    span.textContent = text
    if (index === 1) {
      span.style.fontWeight = '800'
      span.style.fontSize = '1.0625em'
    }
    if (index === 3) span.style.whiteSpace = 'nowrap'
    span.style.lineHeight = style.lineHeight
    reference.appendChild(span)
  })
  document.body.appendChild(reference)
  const lines = Math.round(reference.getBoundingClientRect().height / lineHeight)
  reference.remove()

  const countLines = () => Math.round(el.getBoundingClientRect().height / lineHeight)
  if (countLines() === lines) return
  // Search for the largest size that fits the same number of lines as the home.
  let low = Math.min(16, baseSize)
  let high = baseSize
  for (let step = 0; step < 12; step++) {
    const size = (low + high) / 2
    el.style.fontSize = `${size}px`
    if (countLines() > lines) high = size
    else low = size
  }
  el.style.fontSize = `${low}px`
}

Vue.directive('mobile-intro', {
  inserted(el, binding) {
    const state = { language: binding.value }
    state.schedule = () => {
      cancelAnimationFrame(state.frame)
      state.frame = requestAnimationFrame(() => fitIntroduction(el, state))
    }
    state.observer = new ResizeObserver(state.schedule)
    state.observer.observe(el.parentElement)
    window.addEventListener('resize', state.schedule)
    document.fonts.ready.then(() => {
      if (!state.destroyed) state.schedule()
    })
    el.mobileIntroState = state
    state.schedule()
  },
  componentUpdated(el, binding) {
    const state = el.mobileIntroState
    state.language = binding.value
    state.schedule()
  },
  unbind(el) {
    const state = el.mobileIntroState
    state.destroyed = true
    state.observer.disconnect()
    window.removeEventListener('resize', state.schedule)
    cancelAnimationFrame(state.frame)
    delete el.mobileIntroState
  },
})
