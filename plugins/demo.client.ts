export default defineNuxtPlugin(() => {
if (typeof window === 'undefined') return

  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'UPDATE_CONTENT') return

    const { locale, data } = event.data

    // stocker les données de démo sur window
    ;(window as any).__DEMO_CONTENT__ ||= {}
    ;(window as any).__DEMO_CONTENT__[locale] = data

    // notifier l’app
    window.dispatchEvent(new CustomEvent('demo:update'))
  })
})
