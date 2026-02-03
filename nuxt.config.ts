export default defineNuxtConfig({
  /* =========================
     STYLES
     ========================= */
  css: [
    '~/assets/styles/tokens.css',
    '~/assets/styles/typography.css',
    '~/assets/styles/base.css'
  ],

  /* =========================
     HEAD / SEO
     ========================= */
  app: {
    head: {
      title: 'Lait Thym Sel — Cuisine gastronomique à Angers',
      meta: [
        {
          name: 'description',
          content: 'Restaurant gastronomique à Angers'
        }
      ]
    }
  },

  /* =========================
     AUTORISATION IFRAME (ÉDITEUR)
     ========================= */
  routeRules: {
    '/**': {
      headers: {
        // Autorise l’iframe UNIQUEMENT depuis ton éditeur
        'X-Frame-Options': 'ALLOW-FROM https://site-melissa-brown.vercel.app',

        // Obligatoire pour les navigateurs modernes
        'Content-Security-Policy':
          "frame-ancestors https://site-melissa-brown.vercel.app"
      }
    }
  }
})
