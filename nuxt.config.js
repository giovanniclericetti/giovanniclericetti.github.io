import { portfolioTitle, portfolioDescription } from './utils/portfolio-seo'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: portfolioTitle,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: portfolioDescription },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'robots', name: 'robots', content: 'noimageindex, max-image-preview:none' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/locale.js',
    '~/plugins/mobile-intro.js',
    '~/plugins/responsive-background.js',
    { src: '~/plugins/image-guard.client.js', mode: 'client' },
    { src: '~/plugins/parallax.client.js', mode: 'client' },
    { src: '~/plugins/vue-prlx.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  image: {
    provider: 'portfolio',
    providers: { portfolio: { provider: '~/providers/portfolio.js' } },
  },

  bootstrapVue: {
    // Register only the components and icons actually used by this portfolio.
    components: [
      'BRow', 'BCol', 'BBadge', 'BCard', 'BCardBody', 'BCardHeader',
      'BCollapse', 'BEmbed', 'BIcon', 'BIconChevronDown', 'BIconChevronUp',
      'BIconArrowLeftCircleFill', 'BIconArrowUpRightCircleFill',
      'BIconArrowDownRightCircleFill',
    ],
    directives: ['VBToggle'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
