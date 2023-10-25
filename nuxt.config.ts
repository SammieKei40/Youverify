// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Youverify',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'title',
          content: 'SystemShift Limited'
        },
        {
          name: 'description',
          content: 'Youverify Frontend Final Assessement'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

