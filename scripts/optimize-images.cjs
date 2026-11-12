/* Original files are read-only. Derivatives are reproducible on every platform. */
const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')
const sharp = require('sharp')
const root = path.resolve(__dirname, '..')
const widths = [96, 320, 480, 640, 768, 960, 1280, 1600, 1920, 2560]
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  return (
    await Promise.all(
      entries
        .filter((e) => e.name !== 'optimized')
        .map((e) =>
          e.isDirectory()
            ? walk(path.join(dir, e.name))
            : path.join(dir, e.name)
        )
    )
  ).flat()
}
async function main() {
  await fs.mkdir(path.join(root, 'static/optimized'), { recursive: true })
  await fs.mkdir(path.join(root, 'generated'), { recursive: true })
  await fs.mkdir(path.join(root, 'reports'), { recursive: true })
  require('./image-fallbacks.cjs')()
  const files = (await walk(path.join(root, 'static')))
    .filter((f) => /\.(png|jpe?g|svg|gif|webp|avif)$/i.test(f))
    .sort()
  const cached = JSON.parse(
    await fs
      .readFile(path.join(root, 'generated/image-cache.json'), 'utf8')
      .catch(() => '{}')
  )
  const pending = new Map()
  const cache = {}
  const manifest = {}
  const audit = []
  let cursor = 0
  async function worker() {
    while (cursor < files.length) {
      const file = files[cursor++]
      const input = await fs.readFile(file)
      const src =
        '/' +
        path.relative(path.join(root, 'static'), file).split(path.sep).join('/')
      // Preserve fine sponsor logos and lettering in the supplied cover artwork.
      const losslessCover = /^\/images\/acm-partner-visibility\/(acm2_sm|acm2-next|acm2-card|preview_acm2|milan-card|acm3)\.png$/.test(src)
      const photographic =
        src.startsWith('/images/acm-partner-visibility/') && !losslessCover
      const policy = photographic ? 'photo-webp-responsive-v2' : 'lossless-v1'
      const hash = crypto.createHash('sha256').update(input).digest('hex')
      if (
        cached[src] &&
        cached[src].hash === hash &&
        (cached[src].policy || 'lossless-v1') === policy &&
        (
          await Promise.all(
            cached[src].entry.variants
              .filter((v) => v.url.startsWith('/optimized/'))
              .map((v) =>
                fs.stat(path.join(root, 'static', v.url)).catch(() => null)
              )
          )
        ).every(Boolean)
      ) {
        manifest[src] = cached[src].entry
        cache[src] = cached[src]
        audit.push(cached[src].audit)
        continue
      }
      const metadata = await sharp(input, { animated: true })
        .metadata()
        .catch(() => ({}))
      const { width, height, format } = metadata
      audit.push({
        src,
        bytes: input.length,
        width,
        height,
        format,
        sha256: hash,
      })
      if (
        !width ||
        !height ||
        !['jpeg', 'png'].includes(format) ||
        metadata.pages > 1
      )
        continue
      const variants = [{ width, url: src, bytes: input.length }]
      // Keep the orientation and colour interpretation of the browser's original.
      if (metadata.orientation && metadata.orientation !== 1) continue
      for (const w of [
        ...new Set([...widths.filter((w) => w < width), width]),
      ]) {
        const quality = w >= 960 ? 94 : 86
        const name = `${hash.slice(0, 16)}${photographic ? '-q' + quality : ''}-${w}.webp`
        if (!pending.has(name))
          pending.set(
            name,
            (async () => {
              const dest = path.join(root, 'static/optimized', name)
              let stat = await fs.stat(dest).catch(() => null)
              if (!stat) {
                const temporary = dest + '.tmp'
                await sharp(input)
                  .resize({ width: w, withoutEnlargement: true })
                  .webp(photographic ? { quality, effort: 4 } : { lossless: true, effort: 0 })
                  .toFile(temporary)
                await fs.rename(temporary, dest)
                stat = await fs.stat(dest)
              }
              // Never serve a derivative heavier than the untouched source.
              if (stat.size >= input.length) {
                await fs.unlink(dest)
                return null
              }
              return { width: w, url: '/optimized/' + name, bytes: stat.size }
            })()
          )
        const variant = await pending.get(name)
        if (variant) variants.push(variant)
      }
      manifest[src] = {
        width,
        height,
        ...(photographic ? { lossy: true } : {}),
        variants: variants.sort(
          (a, b) => a.width - b.width || a.bytes - b.bytes
        ),
      }
      cache[src] = {
        hash,
        policy,
        entry: manifest[src],
        audit: audit.find((item) => item.src === src),
      }
      console.log(`Optimized ${src}`)
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker))
  // Remove derivatives whose sources or optimization policies are no longer used.
  const retained = new Set(
    Object.values(manifest).flatMap((entry) =>
      entry.variants.map((variant) => variant.url)
    )
  )
  for (const name of await fs.readdir(path.join(root, 'static/optimized'))) {
    if (name.endsWith('.webp') && !retained.has('/optimized/' + name)) {
      await fs.unlink(path.join(root, 'static/optimized', name))
    }
  }
  await fs.writeFile(
    path.join(root, 'generated/image-cache.json'),
    JSON.stringify(cache)
  )
  await fs.writeFile(
    path.join(root, 'generated/image-manifest.json'),
    JSON.stringify(manifest)
  )
  await fs.writeFile(
    path.join(root, 'reports/image-audit.json'),
    JSON.stringify(
      audit.sort((a, b) => b.bytes - a.bytes),
      null,
      2
    ) + '\n'
  )
  const originals = Object.values(manifest).reduce(
    (n, m) =>
      n + m.variants.find((v) => !v.url.startsWith('/optimized/')).bytes,
    0
  )
  const native = Object.values(manifest).reduce(
    (n, m) =>
      n +
      Math.min(
        ...m.variants.filter((v) => v.width === m.width).map((v) => v.bytes)
      ),
    0
  )
  console.log(
    `${audit.length} assets audited; ${
      Object.keys(manifest).length
    } raster images. Native-size selection: ${originals} → ${native} bytes. Originals preserved.`
  )
}
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
