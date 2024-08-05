// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  components: true,
  app: {
    head: {
      title: 'online-schedule',
      meta: [
        {
          'name': 'viewport',
          'content': 'width=device-width, initial-scale=1'
        },
        {
          'charset': 'utf-8'
        },
      ],
    }
  },
  modules: ['@pinia/nuxt'],
});
