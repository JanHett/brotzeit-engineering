import formatSiteMetadata from './utils/format-site-metadata';

export default {
  target: "static",
  /**
   * Headers of the page
   */
  head: {
    title: process.env.TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...formatSiteMetadata({
        description: process.env.npm_package_description,
        image: "favicon.png",
        type: "website",
        url: process.env.BASE_URL,
        title: process.env.TITLE,
      })
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: process.env.WEBFONTS },
      {
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL,
      },
    ],
    script: [
      // Cloudflare Web Analytics
      {
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        "data-cf-beacon": process.env.CLOUDFLARE_ANALYTICS_TOKEN,
        defer: true,
        body: true,
      },
      // End Cloudflare Web Analytics
    ]
  },
  /**
   * Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /**
   * Global CSS
   */
  css: [
    '@/assets/css/common.css'
  ],
  /*
** Plugins to load before mounting the App
*/
  plugins: [
  ],
  /*
** Nuxt.js dev-modules
*/
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  /*
** Nuxt.js modules
*/
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/content'
  ],
  /** nuxt content options */
  content: {
    liveEdit: false,
  },
  /** nuxt image options */
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 2048,
      '3xl': 4096,
    },
  },
  /*
** Build configuration
*/
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(/* config, ctx */) {
    }
  },
  generate: {
  },
  /** Constants set at compile time */
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}
