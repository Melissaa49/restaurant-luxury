export default defineNuxtPlugin(() => {
if (typeof window === 'undefined') return

  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'UPDATE_CONTENT') return

    const { locale, data } = event.data

    // on stocke le contenu reçu
    window.__DEMO_CONTENT__ = window.__DEMO_CONTENT__ || {}
    window.__DEMO_CONTENT__[locale] = data

    // on notifie l'app
    window.dispatchEvent(new Event('demo:update'))
  })
})

declare global {
  interface Window {
    __DEMO_CONTENT__?: Record<string, any>
  }
}
