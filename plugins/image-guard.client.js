// Discourage casual saving; browser-delivered images remain accessible.
export default () => {
  const protect = (event) => {
    if (!(event.target instanceof Element)) return
    const image = event.target.closest('img, [data-image-src], .gallery-image, .cover-mobile')
    if (!image) return
    const src = image.getAttribute('data-image-src') || image.getAttribute('src') || ''
    if (image.closest('.acmilan, .acmilan3') || /\/images\/acm-|\/images\/covers\/.*(?:milan|acm)/.test(src)) {
      event.preventDefault()
    }
  }
  document.addEventListener('contextmenu', protect)
  document.addEventListener('dragstart', protect)
}
