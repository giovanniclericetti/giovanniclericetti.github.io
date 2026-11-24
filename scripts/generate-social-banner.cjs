const path = require('path')
const fs = require('fs/promises')
const sharp = require('sharp')

async function main() {
  const root = path.resolve(__dirname, '..')
  const output = path.join(root, 'static/images/social/giovanni-clericetti.jpg')
  const background = Buffer.from(`<svg width="1200" height="420" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="brand" x1="0" y1="1" x2="1" y2="0">
      <stop stop-color="#FFA857"/><stop offset="1" stop-color="#FF4466"/>
    </linearGradient></defs>
    <rect width="1200" height="420" fill="url(#brand)"/>
  </svg>`)
  const name = await sharp({ text: {
    text: '<span foreground="white">Giovanni Clericetti</span>',
    font: 'Bricolage Grotesque Heavy 76',
    fontfile: path.join(root, 'static/font/bricolage-grotesque-variable.ttf'),
    rgba: true,
  } }).extend({ top: 2, bottom: 2, left: 2, right: 2, background: '#ffffff00' })
    .dilate(1).png().toBuffer()
  await fs.mkdir(path.dirname(output), { recursive: true })
  await sharp(background).composite([{ input: name, gravity: 'centre' }])
    .jpeg({ quality: 92, mozjpeg: true }).toFile(output)
  console.log(output)
}

main().catch((error) => { console.error(error); process.exitCode = 1 })
