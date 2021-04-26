export default {
  head: {
    title: 'nuxt-apollo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: [
    '@/plugins/apollo.ts'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql-weather-api.herokuapp.com/',
        persisting: true,
        ssr: true,
      }
    },
    includeNodeModules: true
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/apollo',
  ],

  build: {
    transpile: [
      '@vue/apollo-composable'
    ],
    extend (config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
      config.resolve.alias['@vue/apollo-composable'] = '@vue/apollo-composable/dist'
    }
  }
}
