const fs = require('fs')
const path = require('path')
module.exports = function imageFallbacks() {
  const routes = {}
  for (const name of fs.readdirSync(path.join(__dirname, '../pages'))) {
    if (!name.endsWith('.vue')) continue
    const content = fs.readFileSync(
      path.join(__dirname, '../pages', name),
      'utf8'
    )
    routes['/' + name.replace('.vue', '')] = [
      ...content.matchAll(/data-image-src="([^"]+)"/g),
    ].map((m) => m[1])
  }
  // The noscript fallback remains responsive to the original art direction.
  const components = fs
    .readdirSync(path.join(__dirname, '../components'))
    .map((name) =>
      fs.readFileSync(path.join(__dirname, '../components', name), 'utf8')
    )
    .join('\n')
  routes['/'] = [
    ...components.matchAll(
      /(?:thumbnail|mobileThumbnail):\s*['"]([^'"]+)['"]/g
    ),
  ].map((m) => m[1])
  routes['/about'] = ['/images/aboutme/aboutme.png']
  fs.writeFileSync(
    path.join(__dirname, '../generated/background-routes.json'),
    JSON.stringify(routes)
  )
}
if (require.main === module) module.exports()
