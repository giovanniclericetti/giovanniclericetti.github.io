// Mobile-only derivatives: original files and desktop image selection are preserved.
const sharp = require('sharp')
const fs = require('fs/promises')
const path = require('path')
const root = path.resolve(__dirname, '..')
const images = [
  ['images/acm-partner-visibility/acm3.png', 'events-card.webp', 647, 92],
  ['images/aboutme/aboutme.png', 'portrait.webp', 1280, 88],
  [
    'images/acm-events-matchday/GCR24765_0PQcufMC_20261102113848 2.png',
    'events-cover.webp',
    1280,
    88,
  ],
]
;(async () => {
  await fs.mkdir(path.join(root, 'static/images/mobile'), { recursive: true })
  for (const [src, name, width, quality] of images) {
    const info = await sharp(path.join(root, 'static', src))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(path.join(root, 'static/images/mobile', name))
    console.log(name, info.width, info.height, info.size)
  }
})().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
