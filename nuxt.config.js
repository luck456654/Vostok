export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stroiVostok',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fonts/TTNormsPro/stylesheet.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
 /* generate: {
    routes() {
      return axios.get('https://api.stroivostok.ru/api/main/city/CityNames.php?sitemap=true').then(res => {
        return res.data.map(page => {
          let cat = page.class_key == 'modDocument' ? 'catalog' : '';
          cat = page.class_key == 'msCategory' ? 'catalog' : cat;
          cat = page.class_key == 'msProduct' ? 'product' : cat;
          return {
            route: '/' + cat + '/' + page.alias,
            //payload: '/' + cat + '/test/' + page.alias
          }
        })
      })
    }
  },*/
  router: {
    prefetchLinks: false
  },
  router: {
    //динамические папки в роуте
    extendRoutes (routes) {
      const locale = '/:locale(aprelevka|balashiha|bronnicy|vereya|vidnoe|volokolamsk|voskresensk|vysokovsk|golicyno|dedovsk|dzerzhinskij|dmitrov|dolgoprudnyj|domodedovo|drezna|dubna|egorevsk|zhukovskij|zarajsk|zvenigorod|ivanteevka|istra|kashira|klin|kolomna|korolyov|kotelniki|krasnoarmejsk|krasnogorsk|krasnozavodsk|krasnoznamensk|kubinka|kurovskoe|likino-dulyovo|lobnya|losino-petrovskij|luhovicy|lytkarino|lyubercy|mozhajsk|mytishchi|naro-fominsk|noginsk|odincovo|ozyory|orekhovo-zuevo|pavlovskij-posad|peresvet|podolsk|protvino|pushkino|pushchino|ramenskoe|reutov|roshal|ruza|sergiev-posad|serpuhov|solnechnogorsk|staraya-kupavna|stupino|taldom|fryazino|himki|hotkovo|chernogolovka|chekhov|shatura|shchyolkovo|ehlektrogorsk|ehlektrostal|ehlektrougli|yahroma)?'

      routes.forEach(route => {
        route.path = locale + route.path
      })

    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
