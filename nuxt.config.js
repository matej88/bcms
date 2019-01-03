const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Base CMS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ccc', height:'5px', duration: 5000 },

  /*
  ** Global CSS
  */
  css: [
  '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  '~plugins/core-components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@neneos/nuxt-animate.css',
    ['storyblok-nuxt', {accessToken: 'cr8zd06JFQMS4JVYzb3Ybwtt', chacheProvider: 'memory'} ]
  ],
  
  axios: {
    baseURL: process.env.BASE_URL || 'https://base-cms-a171d.firebaseio.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://base-cms-a171d.firebaseio.com',
    fbAPIKey: 'AIzaSyA7KEcipuDsx97xzwKinr3m_ak3b341aWE'
  },
  transition: {
    name:'fade',
    mode: 'out-in'
  }
}
