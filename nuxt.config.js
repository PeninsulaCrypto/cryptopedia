import theme from '@nuxt/content-theme-docs'

export default theme({
  /*
   ** You can extend the nuxt configuration
   ** Doc: https://content.nuxtjs.org/themes-docs#nuxtconfigjs
   */
  docs: {
    primaryColor: '#0786ff'
  },

  components: {
    dirs: [
      '~/components',
      '~/components/global/app',
      '~/components/global/icons',
      '~/components/global/markdown'
    ]
  },
  colorMode: {
    preference: 'system'
  },
  i18n: {
    // silentTranslationWarn: true,
    // strategy: 'no_prefix',
    vueI18n: {
      silentTranslationWarn: true
    },
    lazy: true,
    locales: () => [{
      code: 'zh',
      iso: 'zh-CN',
      file: 'zh-CN.js',
      name: '简体中文'
    }, 
    // {
    //   code: 'en',
    //   iso: 'en-US',
    //   file: 'en-US.js',
    //   name: 'English'
    // }
  ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    defaultLocale: 'zh'  // NOTE: Chinese only at the beginning
  },

  content: {
    // Disable for security reason on CodeSandBox
    liveEdit: true
    // markdown: {
    //   rehypePlugins: ['~/plugins/rehype-content-image.js']
    // }
  },

  modules: ['@nuxtjs/gtm'],

  gtm: {
    id: 'GTM-T9R7BZ4' // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  }
})
