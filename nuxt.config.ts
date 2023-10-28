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
          content: 'Youverify Frontend Final Assessement'
        },
        {
          name: 'description',
          content: 'We are a B2B company that builds SaaS and PaaS compliance products to help businesses establish economic relationships without compliance worries'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'}
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // plugins: [
    // { src: '~/plugins/google-maps.ts', mode: 'client' },
  // ],
  css: ["~/assets/css/main.css",],
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

