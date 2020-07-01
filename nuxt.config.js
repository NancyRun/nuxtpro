export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '埋堆堆-最全粤语港剧社区平台',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'TVB，粤语，港剧，高清，免费，在线点播，翡翠台',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '埋堆堆APP拥有海量全网正版独播的TVB剧集、全粤语直播频道及TVB粉丝汇聚的埋堆社区，为用户提供丰富的影视文娱内容，让用户粤享精彩娱乐时光',
      },
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '//activity-1254361794.file.myqcloud.com/mp/images/img/icon.png',
      },
    ],
    noscript: [
      {
        innerHTML: 'Body No Scripts',
        body: true,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    // 项目里要用的 CSS 文件
    '@/assets/css/common.css',
    // 项目里要使用的 SCSS 文件
    '@/assets/css/common.scss'
  ],
  loading: {
    color: '#ffc400',
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/axios'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
