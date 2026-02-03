<template>
  <section class="hero">
    <div class="overlay"></div>

    <div class="content">
      <p class="headline">
        {{ heroHeadline }}
      </p>

      <p class="subtitle">
        {{ heroSubtitle }}
      </p>

      <NuxtLink to="/reserver" class="cta">
        {{ heroCta }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from '#imports'

declare global {
  interface Window {
    __DEMO_CONTENT__?: Record<string, any>
  }
}

const route = useRoute()
const isDemo = computed(() => route.query.demo === '1')

const { t, locale } = useI18n()

// contiendra le JSON reçu depuis l'éditeur
const demoContent = ref<any>(null)

function pullDemoContent() {
  demoContent.value = window.__DEMO_CONTENT__?.[locale.value] || null
}

function onDemoUpdate() {
  pullDemoContent()
}

onMounted(() => {
  if (!isDemo.value) return
  pullDemoContent()
  window.addEventListener('demo:update', onDemoUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('demo:update', onDemoUpdate)
})

// helpers : si démo -> demoContent, sinon -> i18n
const heroHeadline = computed(() => {
  return (isDemo.value && demoContent.value?.hero?.headline) ? demoContent.value.hero.headline : t('hero.headline')
})

const heroSubtitle = computed(() => {
  return (isDemo.value && demoContent.value?.hero?.subtitle) ? demoContent.value.hero.subtitle : t('hero.subtitle')
})

const heroCta = computed(() => {
  return (isDemo.value && demoContent.value?.hero?.cta) ? demoContent.value.hero.cta : t('hero.cta')
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background: url('/images/hero.png') center / cover no-repeat;
  color: #fff;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,.65),
    rgba(0,0,0,.25),
    rgba(0,0,0,.6)
  );
  z-index: 1;
}

/* CONTENT */
.content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* TEXTE PRINCIPAL */
.headline {
  font-family: var(--font-title);
  font-size: 22px;
  letter-spacing: .14em;
  margin-bottom: 10px;
}

/* SOUS TEXTE */
.subtitle {
  font-size: 18px;
  opacity: .75;
  letter-spacing: .08em;
  margin-bottom: 44px;
}

/* CTA */
.cta {
  border: 1px solid var(--gold);
  color: var(--gold);
  padding: 15px 20px;
  font-size: 10px;
  letter-spacing: .28em;
  background: rgba(0,0,0,.25);
  transition: all .25s ease;
}

.cta:hover {
  background: rgba(200,170,110,.08);
  transform: translateY(-1px);
}
</style>
