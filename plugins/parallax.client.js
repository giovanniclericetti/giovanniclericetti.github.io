import Vue from 'vue'

// Every image travels 64px while crossing the viewport, regardless of its crop.
const TRAVEL = 64
const entries = new Map()
let frame = 0
let resizeObserver
let motionQuery

function schedule() {
  if (!frame) frame = window.requestAnimationFrame(render)
}

function scheduleScroll() {
  if (!motionQuery.matches && window.innerWidth >= 768) schedule()
}

function render() {
  frame = 0
  const viewport = window.innerHeight
  const enabled = !motionQuery.matches && window.innerWidth >= 768
  entries.forEach((entry, el) => {
    const { width, height, top } = el.getBoundingClientRect()
    if (!width || !height) return
    loadImage(el)
    if (!entry.image.naturalWidth) return

    const travel = enabled ? TRAVEL : 0
    // Reserve enough image above and below the frame even for wide photographs.
    const scale = Math.max(
      width / entry.image.naturalWidth,
      (height + travel) / entry.image.naturalHeight
    )
    const imageWidth = entry.image.naturalWidth * scale
    const imageHeight = entry.image.naturalHeight * scale
    const progress = Math.max(
      0,
      Math.min(1, (viewport - top) / (viewport + height))
    )
    const offset = (progress - 0.5) * travel
    el.style.backgroundSize = `${imageWidth}px ${imageHeight}px`
    el.style.backgroundPosition = `50% ${(height - imageHeight) / 2 + offset}px`
    el.style.backgroundRepeat = 'no-repeat'
  })
}

function loadImage(el) {
  const entry = entries.get(el)
  if (!el.getClientRects().length) return
  const background = window.getComputedStyle(el).backgroundImage
  if (entry.background === background) return
  entry.background = background
  const match = background.match(/^url\(["']?(.*?)["']?\)$/)
  entry.image.onload = null
  entry.image = new Image()
  entry.image.onload = schedule
  if (match) entry.image.src = match[1]
  schedule()
}

Vue.directive('parallax', {
  inserted(el) {
    if (!entries.size) {
      motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      motionQuery.addEventListener('change', schedule)
      window.addEventListener('scroll', scheduleScroll, { passive: true })
      window.addEventListener('resize', schedule)
      resizeObserver = new ResizeObserver(schedule)
    }
    entries.set(el, {
      image: new Image(),
      original: {
        backgroundSize: el.style.backgroundSize,
        backgroundPosition: el.style.backgroundPosition,
        backgroundRepeat: el.style.backgroundRepeat,
      },
    })
    resizeObserver.observe(el)
    loadImage(el)
  },
  componentUpdated(el) {
    loadImage(el)
  },
  unbind(el) {
    const entry = entries.get(el)
    if (!entry) return
    entry.image.onload = null
    Object.assign(el.style, entry.original)
    resizeObserver.unobserve(el)
    entries.delete(el)
    if (!entries.size) {
      resizeObserver.disconnect()
      motionQuery.removeEventListener('change', schedule)
      window.removeEventListener('scroll', scheduleScroll)
      window.removeEventListener('resize', schedule)
      window.cancelAnimationFrame(frame)
      frame = 0
    }
  },
})
