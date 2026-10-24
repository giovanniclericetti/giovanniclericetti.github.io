import manifest from '~/generated/image-manifest.json'

export function imageSource(src) {
  if (/^(https?:|data:|blob:)/.test(src || '')) return src
  return (src || '').replace(/^~\/?static\//, '/').replace(/\/{2,}/g, '/')
}
export function imageInfo(src) {
  return manifest[imageSource(src)]
}
export function imageVariant(src, width) {
  src = imageSource(src)
  const info = imageInfo(src)
  if (!info) return { url: src }
  const required = Math.min(width || info.width, info.width)
  return info.variants
    .filter((v) => v.width >= required)
    .sort((a, b) => a.bytes - b.bytes)[0]
}
export function imageCandidates(src) {
  const info = imageInfo(src)
  if (!info) return undefined
  const candidates = info.variants.filter(
    (v) => imageVariant(src, v.width).url === v.url
  )
  return candidates.map((v) => `${v.url} ${v.width}w`).join(', ')
}
