// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt'],

  routeRules: {
    '/': { prerender: true },
  },

  content: {
    highlight: {
      theme: 'dracula',
      preload: ['python', 'javascript', 'css', 'html', 'bash', 'vue'],
    },
  },

  compatibilityDate: '2024-07-26',
});
