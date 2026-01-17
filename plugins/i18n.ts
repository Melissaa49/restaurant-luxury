import { createI18n } from 'vue-i18n'

import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false, // IMPORTANT pour Composition API
    globalInjection: true,

    locale: 'fr',
    fallbackLocale: 'en',

    messages: {
      fr,
      en
    }
  })

  nuxtApp.vueApp.use(i18n)
})
