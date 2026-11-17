import Vue from 'vue'
import { imageInfo } from '~/utils/portfolio-images'

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
  if (!motionQuery.matches && window.innerWidth >= 992 && window.matchMedia('(hover: hover) and (pointer: fine)').matches) schedule()
}

function render() {
  frame = 0
  const viewport = window.innerHeight
  const enabled = !motionQuery.matches && window.innerWidth >= 992 && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  entries.forEach((entry, el) => {
    const { width, height, top } = el.getBoundingClientRect()
    if (!width || !height) return
    // Opt-in frame movement preserves the photograph without overscanning it.
    if (el.dataset.parallaxMode === 'frame') {
      const progress = Math.max(0, Math.min(1, (viewport - top) / (viewport + height)))
      const offset = enabled ? (progress - 0.5) * 12 : 0
      el.style.transform = `translateY(${offset}px)`
      el.style.backgroundSize = 'cover'
      el.style.backgroundPosition = 'center'
      el.style.backgroundRepeat = 'no-repeat'
      return
    }
    loadImage(el)
    if (!entry.image.naturalWidth) return

    // Use the original aspect ratio, unaffected by rounding in resized files.
    const original = imageInfo(el.dataset.imageSrc)
    const naturalWidth = original ? original.width : entry.image.naturalWidth
    const naturalHeight = original ? original.height : entry.image.naturalHeight
    const travel = enabled ? TRAVEL : 0
    // Reserve enough image above and below the frame even for wide photographs.
    const scale = Math.max(
      width / naturalWidth,
      (height + travel) / naturalHeight
    )
    const imageWidth = naturalWidth * scale
    const imageHeight = naturalHeight * scale
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
    el.addEventListener('portfolio:image-ready', schedule)
    entries.set(el, {
      image: new Image(),
      original: {
        transform: el.style.transform,
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
    el.removeEventListener('portfolio:image-ready', schedule)
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
