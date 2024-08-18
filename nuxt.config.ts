// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  plugins: [
    '@/plugins/vue-json-pretty'
  ],
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
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: [
    'vue-json-pretty/lib/styles.css',
    '~/assets/scss/global.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/partials/_colors.scss" as *;
            @use "~/assets/scss/partials/_typography.scss" as *;
            @use "~/assets/scss/partials/_breakpoints.scss" as *;
            @use "~/assets/scss/partials/_anim.scss" as *;
          `
        }
      }
    }
  }
});
