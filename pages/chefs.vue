<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

/* =========================
   BLOCS I18N (tableaux sûrs)
========================= */
const story = computed<string[]>(() =>
  Array.isArray(tm('chefs.story')) ? tm('chefs.story') as string[] : []
)

const duoIntro = computed<string[]>(() =>
  Array.isArray(tm('chefs.duo.intro')) ? tm('chefs.duo.intro') as string[] : []
)

const fannyBio = computed<string[]>(() =>
  Array.isArray(tm('chefs.fanny.bio')) ? tm('chefs.fanny.bio') as string[] : []
)

const gaetanBio = computed<string[]>(() =>
  Array.isArray(tm('chefs.gaetan.bio')) ? tm('chefs.gaetan.bio') as string[] : []
)

const closing = computed<string[]>(() =>
  Array.isArray(tm('chefs.closing')) ? tm('chefs.closing') as string[] : []
)
</script>

<template>
  <section class="chefs">

    <!-- =========================
         HERO
    ========================== -->
    <div class="hero">
      <img
        src="/images/chef-1.png"
        :alt="t('chefs.hero.alt')"
      />

      <div class="hero-overlay"></div>

      <div class="hero-content">
        <span class="kicker">
          {{ t('chefs.hero.kicker') }}
        </span>

        <h1>
          {{ t('chefs.hero.title') }}
        </h1>
      </div>
    </div>

    <!-- =========================
         CONTENU
    ========================== -->
    <div class="content">

      <!-- INTRO -->
      <p class="intro" v-html="t('chefs.intro')" />

      <!-- HISTOIRE -->
      <section class="story">
        <p
          v-for="(paragraph, i) in story"
          :key="i"
        >
          {{ paragraph }}
        </p>
      </section>

      <!-- SIGNATURE DU NOM -->
      <section class="signature">
        <p v-html="t('chefs.signature')" />
        <span class="line"></span>
      </section>

      <!-- DUO -->
      <section class="duo">
        <h2>{{ t('chefs.duo.title') }}</h2>

        <p
          v-for="(paragraph, i) in duoIntro"
          :key="i"
        >
          {{ paragraph }}
        </p>
      </section>

      <!-- FANNY -->
      <section class="chef">
        <h2>{{ t('chefs.fanny.name') }}</h2>

        <p
          v-for="(paragraph, i) in fannyBio"
          :key="i"
        >
          {{ paragraph }}
        </p>
      </section>

      <!-- GAËTAN -->
      <section class="chef">
        <h2>{{ t('chefs.gaetan.name') }}</h2>

        <p
          v-for="(paragraph, i) in gaetanBio"
          :key="i"
        >
          {{ paragraph }}
        </p>
      </section>

      <!-- CONCLUSION -->
      <section class="closing">
        <p
          v-for="(paragraph, i) in closing"
          :key="i"
        >
          {{ paragraph }}
        </p>
      </section>

    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   PAGE
========================================================= */
.chefs {
  background: #0b0b0b;
  color: rgba(235, 225, 210, 0.88);
  font-family: var(--font-title);
}

/* =========================================================
   HERO
========================================================= */
.hero {
  position: relative;
  height: 80vh;
  margin-top: 120px;
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,.75),
    rgba(0,0,0,.45),
    rgba(0,0,0,.9)
  );
}

.hero-content {
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.kicker {
  display: block;
  font-size: 12px;
  letter-spacing: .4em;
  color: var(--gold);
  margin-bottom: 18px;
}

.hero-content h1 {
  font-size: 38px;
  font-weight: 400;
  letter-spacing: .08em;
}

/* =========================================================
   CONTENU
========================================================= */
.content {
  max-width: 760px;
  margin: 0 auto;
  padding: 140px 24px 220px;
  text-align: center;
}

.intro {
  font-size: 20px;
  line-height: 1.8;
  opacity: .75;
  margin-bottom: 120px;
}

/* =========================================================
   BLOCS TEXTE
========================================================= */
.story p,
.duo p,
.chef p,
.closing p {
  font-size: 16px;
  line-height: 1.9;
  opacity: .85;
  margin-bottom: 28px;
}

/* =========================================================
   TITRES
========================================================= */
h2 {
  font-size: 26px;
  font-weight: 400;
  letter-spacing: .12em;
  color: var(--gold);
  margin: 140px 0 48px;
}

/* =========================================================
   SIGNATURE
========================================================= */
.signature {
  margin: 160px 0;
}

.signature p {
  font-size: 16px;
  line-height: 2;
  letter-spacing: .12em;
}

.signature strong {
  color: var(--gold);
  font-weight: 400;
}

.line {
  display: block;
  width: 120px;
  height: 1px;
  margin: 48px auto 0;
  background: linear-gradient(
    to right,
    transparent,
    var(--gold),
    transparent
  );
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .hero {
    height: 85vh;
  }

  .hero-content h1 {
    font-size: 44px;
  }

  .intro {
    font-size: 22px;
  }
}
</style>
