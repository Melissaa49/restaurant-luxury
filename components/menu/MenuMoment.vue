<template>
  <section class="menu-moment">

    <!-- TITRE -->
    <h2 class="menu-title">
      {{ t('menu.title') }}
    </h2>

    <!-- WRAPPER -->
    <div class="menu-wrapper">

      <!-- CAROUSEL -->
      <div
        ref="carousel"
        class="menu-carousel"
        @scroll="onScroll"
      >

        <!-- MENU SOLAIRE -->
        <article class="menu-panel">
          <span class="panel-kicker">
            {{ lunch.kicker }}
          </span>

          <div
            v-for="(item, index) in lunch.items"
            :key="index"
            class="acte"
          >
            <span class="line"></span>
            <em>{{ item.title }}</em>
            <p v-html="item.description" />
            <span class="price">{{ item.price }}</span>
          </div>
        </article>

        <!-- MENU LUNAIRE -->
        <article class="menu-panel">
          <span class="panel-kicker">
            {{ dinner.kicker }}
          </span>

          <div
            v-for="(item, index) in dinner.items"
            :key="index"
            class="acte"
          >
            <span class="line"></span>
            <em>{{ item.title }}</em>
            <p v-html="item.description" />
            <span class="price">{{ item.price }}</span>
          </div>
        </article>

      </div>

      <!-- INDICATEURS -->
      <div class="carousel-indicators" aria-hidden="true">
        <span
          v-for="i in 2"
          :key="i"
          class="dot"
          :class="{ active: activeIndex === i - 1 }"
        />
      </div>

    </div>

    <!-- NOTE -->
    <p class="note" v-html="t('menu.note')" />

  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

/* =========================
   TYPES
========================= */
type MenuItem = {
  title: string
  description: string
  price: string
}

type MenuBlock = {
  kicker: string
  items: MenuItem[]
}

/* =========================
   MENUS (tm = objets)
========================= */
const lunch = computed<MenuBlock>(() =>
  tm('menu.lunch') as MenuBlock
)

const dinner = computed<MenuBlock>(() =>
  tm('menu.dinner') as MenuBlock
)

/* =========================
   CAROUSEL
========================= */
const carousel = ref<HTMLElement | null>(null)
const activeIndex = ref(0)

const onScroll = () => {
  if (!carousel.value) return

  const panels = Array.from(
    carousel.value.querySelectorAll('.menu-panel')
  ) as HTMLElement[]

  const center =
    carousel.value.scrollLeft +
    carousel.value.offsetWidth / 2

  let closest = 0
  let minDistance = Infinity

  panels.forEach((panel, index) => {
    const panelCenter =
      panel.offsetLeft + panel.offsetWidth / 2

    const distance = Math.abs(center - panelCenter)

    if (distance < minDistance) {
      minDistance = distance
      closest = index
    }
  })

  activeIndex.value = closest
}
</script>



<style scoped>
/* =========================================================
   SECTION
========================================================= */
.menu-moment {
  background: #0b0b0b;
  padding: 160px 0 200px;
  color: rgba(235, 225, 210, 0.92);
  font-family: var(--font-title);
  overflow: hidden;
}

/* =========================================================
   TITRE
========================================================= */
.menu-title {
  text-align: center;
  font-size: 32px;
  letter-spacing: .12em;
  font-weight: 400;
  margin-bottom: 96px;
}

/* =========================================================
   WRAPPER
========================================================= */
.menu-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

/* =========================================================
   CAROUSEL
========================================================= */
.menu-carousel {
  display: flex;
  gap: 80px;
  padding: 0 16px;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.menu-carousel::-webkit-scrollbar {
  display: none;
}

/* =========================================================
   PANNEAUX
========================================================= */
.menu-panel {
  flex: 0 0 400px;
  text-align: center;
  scroll-snap-align: center;
}

/* =========================================================
   KICKER
========================================================= */
.panel-kicker {
  display: block;
  margin-bottom: 72px;
  font-size: 13px;
  letter-spacing: .4em;
  color: var(--gold);
}

/* =========================================================
   ACTES
========================================================= */
.acte {
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  width: 120px;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
  margin-bottom: 20px;
  opacity: .8;
}

.acte em {
  font-size: 18px;
  font-style: italic;
  margin-bottom: 16px;
}

.acte p {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 18px;
}

.price {
  font-size: 18px;
  letter-spacing: .1em;
  color: var(--gold);
}

/* =========================================================
   INDICATEURS
========================================================= */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 56px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(200,170,110,.35);

  transition:
    transform 0.6s cubic-bezier(.22,.61,.36,1),
    background-color 0.6s ease,
    opacity 0.6s ease;
}

.dot.active {
  background: var(--gold);
  transform: scale(1.4);
  opacity: 1;
}

/* =========================================================
   NOTE
========================================================= */
.note {
  max-width: 560px;
  margin: 120px auto 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
  opacity: .65;
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .menu-carousel {
    justify-content: center;
    padding: 0;
  }

  .menu-panel {
    flex: 0 0 520px;
  }

  .menu-title {
    font-size: 38px;
  }
}
</style>
