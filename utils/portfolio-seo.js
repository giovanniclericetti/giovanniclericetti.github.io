import projects from './project-content'
import heroes from './hero-images.json'
import italianSeo from '../locales/it-seo.json'

const origin = 'https://portfolio-giovanniclericetti.vercel.app'
export const portfolioTitle = 'Giovanni Clericetti — Visual & Brand Designer | Sports & Commercial Design'
export const portfolioDescription = 'Portfolio of Giovanni Clericetti, Milan-based Visual & Brand Designer working across sports, commercial partnerships, brand identities, digital experiences and live production.'

export function portfolioSeo(path, language = 'en') {
  const route = path.replace(/\/$/, '') || '/'
  const project = projects[route.slice(1)]
  const localized = language === 'it' ? italianSeo[route] : undefined
  const title = localized ? localized.title : project ? `${project.title} — Giovanni Clericetti` : route === '/about' ? 'About — Giovanni Clericetti | Visual & Brand Designer' : portfolioTitle
  const description = localized ? localized.description : project ? project.bio : portfolioDescription
  const isPortfolioBanner = route === '/' || route === '/about'
  const imagePath = isPortfolioBanner ? '/images/social/giovanni-clericetti.jpg' : route === '/acmilan' ? '/images/covers/cards/milan-card.jpg' : route === '/acm-partner-visibility'
    ? '/images/acm-partner-visibility/preview_acm2.png'
    : (heroes[route] || [])[0]?.src || '/images/covers/cards/milan-card.jpg'
  const image = new URL(imagePath, origin).href
  const url = `${origin}${route}`
  return {
    title,
    link: [{ hid: 'canonical', rel: 'canonical', href: url }],
    meta: [
      { hid: 'description', name: 'description', content: description },
      ...Object.entries({ title, description, image, url, type: 'website', site_name: 'Giovanni Clericetti' }).map(([key, content]) => ({ hid: `og:${key}`, property: `og:${key}`, content })),
      ...(isPortfolioBanner ? Object.entries({ 'image:width': '1200', 'image:height': '420', 'image:type': 'image/jpeg', 'image:alt': 'Giovanni Clericetti' }).map(([key, content]) => ({ hid: `og:${key}`, property: `og:${key}`, content })) : []),
      ...Object.entries({ card: 'summary_large_image', title, description, image }).map(([key, content]) => ({ hid: `twitter:${key}`, name: `twitter:${key}`, content })),
      ...(isPortfolioBanner ? [{ hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Giovanni Clericetti' }] : []),
    ],
  }
}
