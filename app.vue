<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const { locale, setLocaleMessage } = useI18n()

if (typeof window !== 'undefined') {
  window.addEventListener('demo:update', () => {
    const demoData = (window as any).__DEMO_CONTENT__?.[locale.value]
    if (demoData) {
      setLocaleMessage(locale.value, demoData)
    }
  })
}
</script>
