import heroes from './hero-images.json'
import { imageVariant, imageCandidates } from './portfolio-images'
import backgrounds from '~/generated/background-routes.json'

export function imagePreloads(route) {
  let images = heroes[route.replace(/\/$/, '')] || []
  if (route === '/')
    images = [
      {
        src: '/images/covers/cards/milan-card-v2.jpg',
        media: '(min-width: 992px)',
        sizes: '400px',
      },
      {
        src: '/images/covers/cards/avi-card-v2.jpg',
        media: '(min-width: 992px)',
        sizes: '400px',
      },
      {
        src: '/images/covers/cards/sourdata-card.jpg',
        media: '(min-width: 992px)',
        sizes: '400px',
      },
      {
        src: '/images/mobile/events-card.webp',
        media: '(max-width: 767.98px)',
        sizes: '100vw',
      },
      {
        src: '/images/covers/cards/milan-card-v2.jpg',
        media: '(min-width: 768px) and (max-width: 991px)',
        sizes: '720px',
      },
    ]
  return images.map((image, index) => ({
    hid: `portfolio-image-${index}`,
    rel: 'preload',
    as: 'image',
    fetchpriority: 'high',
    href: imageVariant(image.src).url,
    ...(imageCandidates(image.src)
      ? { imagesrcset: imageCandidates(image.src), imagesizes: image.sizes }
      : {}),
    media: image.media,
  }))
}

export function imageFallback(route) {
  const sources = backgrounds[route.replace(/\/$/, '') || '/'] || []
  const css = sources
    .map(
      (src) =>
        `[data-image-src="${src}"]{background-image:url("${
          imageVariant(src).url
        }")!important}`
    )
    .join('')
  const mobile = sources
    .map(
      (src) =>
        `[data-mobile-image-src="${src}"]{background-image:url("${
          imageVariant(src).url
        }")!important}`
    )
    .join('')
  return `<style>${css}@media(max-width:767px){${mobile}}</style>`
}
