import Vue from 'vue'
import { imageInfo, imageSource, imageVariant } from '~/utils/portfolio-images'

const entries = new Map()
let intersection
let resize
let frame

function update(el) {
  const entry = entries.get(el)
  if (!entry || !entry.visible) return
  const { width, height } = el.getBoundingClientRect()
  if (!width || !height) return
  const options =
    typeof entry.value === 'string' ? { src: entry.value } : entry.value
  // Preserve the homepage's original tablet/phone art direction.
  const src = imageSource(
    options.mobile && window.innerWidth < 768 ? options.mobile : options.src
  )
  const info = imageInfo(src)
  const travel =
    el.hasAttribute('data-parallax-image') &&
    window.innerWidth >= 768 &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 64
      : 0
  const required = info
    ? Math.max(width, ((height + travel) * info.width) / info.height) *
      (window.devicePixelRatio || 1)
    : width
  const url = imageVariant(src, required * 1.06).url
  if (entry.url === url) return
  entry.url = url
  const image = new Image()
  image.fetchPriority =
    el.getBoundingClientRect().top < window.innerHeight ? 'high' : 'auto'
  image.onload = () => {
    if (!entries.has(el) || entry.url !== url) return
    el.style.backgroundImage = `url("${url}")`
    // Only the resource changes; the existing directive still owns motion/cropping.
    el.dispatchEvent(new Event('portfolio:image-ready'))
  }
  image.onerror = () => {
    if (!entries.has(el) || entry.url !== url) return
    el.style.backgroundImage = `url("${src}")`
    el.dispatchEvent(new Event('portfolio:image-ready'))
  }
  image.src = url
}
function schedule() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = null
    entries.forEach((_, el) => update(el))
  })
}
Vue.directive('responsive-background', {
  inserted(el, binding) {
    if (!entries.size) {
      intersection =
        'IntersectionObserver' in window
          ? new IntersectionObserver(
              (records) => {
                records.forEach((record) => {
                  if (record.isIntersecting) {
                    entries.get(record.target).visible = true
                    update(record.target)
                    intersection.unobserve(record.target)
                  }
                })
              },
              { rootMargin: '350px' }
            )
          : null
      resize = 'ResizeObserver' in window ? new ResizeObserver(schedule) : null
      window.addEventListener('resize', schedule, { passive: true })
    }
    entries.set(el, { value: binding.value, visible: !intersection })
    if (intersection) intersection.observe(el)
    if (resize) resize.observe(el)
    update(el)
  },
  update(el, binding) {
    const entry = entries.get(el)
    if (entry) {
      entry.value = binding.value
      update(el)
    }
  },
  unbind(el) {
    if (intersection) intersection.unobserve(el)
    if (resize) resize.unobserve(el)
    entries.delete(el)
    if (!entries.size) {
      if (intersection) intersection.disconnect()
      if (resize) resize.disconnect()
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
      frame = null
    }
  },
})
