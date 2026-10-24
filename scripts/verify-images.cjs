const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const assert = require('assert/strict')
const crypto = require('crypto')
async function main() {
  const audit = JSON.parse(
    await fs.readFile('reports/image-audit.json', 'utf8')
  )
  const manifest = JSON.parse(
    await fs.readFile('generated/image-manifest.json', 'utf8')
  )
  let variants = 0
  let exact = 0
  for (const item of audit) {
    const buffer = await fs.readFile(path.join('static', item.src))
    assert.equal(
      crypto.createHash('sha256').update(buffer).digest('hex'),
      item.sha256,
      `Original changed: ${item.src}`
    )
  }
  for (const [src, info] of Object.entries(manifest)) {
    for (const variant of info.variants) {
      const file = path.join('static', variant.url)
      const result = await sharp(file)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true })
      assert.equal(
        result.info.width,
        variant.width,
        `Invalid srcset width: ${file}`
      )
      if (variant.url.startsWith('/optimized/')) {
        variants++
        assert.ok(
          variant.bytes < (await fs.stat(path.join('static', src))).size
        )
        if (variant.width === info.width) {
          const original = await sharp(path.join('static', src))
            .ensureAlpha()
            .raw()
            .toBuffer()
          assert.equal(original.length, result.data.length)
          for (let i = 0; i < original.length; i += 4) {
            assert.equal(
              original[i + 3],
              result.data[i + 3],
              `Alpha changed: ${file}`
            )
            if (!original[i + 3]) continue // RGB under fully transparent pixels is invisible.
            for (let channel = 0; channel < 3; channel++) {
              assert.equal(
                original[i + channel],
                result.data[i + channel],
                `Visible pixel changed: ${file}`
              )
            }
          }
          exact++
        }
      }
    }
  }
  console.log(
    `${audit.length} original hashes verified; ${variants} derivatives decoded; ${exact} native-size WebP images visually pixel-identical to originals.`
  )
}
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
