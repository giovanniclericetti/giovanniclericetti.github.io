import { imageVariant } from '~/utils/portfolio-images'

// All URLs already exist in static/: no IPX server or Vercel image API required.
export function getImage(src, { modifiers = {} } = {}) {
  return { url: imageVariant(src, modifiers.width).url }
}
