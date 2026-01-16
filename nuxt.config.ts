export default defineNuxtConfig({
  css: [
    '~/assets/styles/tokens.css',
    '~/assets/styles/typography.css',
    '~/assets/styles/base.css'
  ],
  app: {
    head: {
      title: 'Lait Thym Sel — Cuisine gastronomique à Angers',
      meta: [
        { name: 'description', content: 'Restaurant gastronomique à Angers' }
      ]
    }
  }
})
