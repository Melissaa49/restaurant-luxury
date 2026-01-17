<template>
  <div>
    <header class="site-header">
      <div class="top-row">

        <!-- LOGO → ACCUEIL -->
        <NuxtLink to="/" class="home-link logo-link">
          <img
            src="/images/logo-or.png"
            alt="Logo Lait Thym Sel"
            class="logo"
          />
        </NuxtLink>

        <!-- TITRE → ACCUEIL -->
        <NuxtLink to="/" class="home-link brand">
          LAIT THYM SEL
        </NuxtLink>

        <!-- LANGUES -->
        <div class="lang-switch">
          <button
            :class="{ active: locale === 'fr' }"
            @click="switchLang('fr')"
          >
            FR
          </button>
          <span>|</span>
          <button
            :class="{ active: locale === 'en' }"
            @click="switchLang('en')"
          >
            EN
          </button>
        </div>

      </div>

      <div class="divider"></div>

      <!-- NAVIGATION -->
      <nav class="main-nav">
        <NuxtLink to="/menu">
          {{ t('nav.menu') }}
        </NuxtLink>

        <span>|</span>

        <NuxtLink to="/galerie">
          {{ t('nav.galerie') }}
        </NuxtLink>

        <span>|</span>

        <NuxtLink to="/reserver">
          {{ t('nav.reserver') }}
        </NuxtLink>
      </nav>
    </header>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

function switchLang(lang: 'fr' | 'en') {
  locale.value = lang
}
</script>

<style scoped>
/* =========================================================
   HEADER
========================================================= */
.site-header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 28px 24px 14px;
  text-align: center;
}

/* ALIGNEMENT */
.top-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

/* LIEN ACCUEIL */
.home-link {
  color: inherit;
  text-decoration: none;
}

/* LOGO */
.logo-link {
  justify-self: start;
}

.logo {
  width: 100px;
  opacity: .95;
  filter: drop-shadow(0 0 10px rgba(200,170,110,.45));
}

/* TITRE */
.brand {
  justify-self: center;
  font-family: var(--font-title);
  font-size: 18px;
  letter-spacing: .32em;
}

/* LANG SWITCH */
/* LANG SWITCH — FIN & ITALIQUE */
.lang-switch {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 6px;          /* plus petit */
  letter-spacing: .14em;  /* plus serré */
  font-style: italic;     /* élégance */
}

.lang-switch button {
  background: none;
  border: none;
  padding: 0;

  font-family: var(--font-title);
  font-style: italic;

  color: rgba(235, 225, 210, .45);
  cursor: pointer;
  transition: color .3s ease, opacity .3s ease;
}

.lang-switch button:hover {
  color: rgba(235, 225, 210, .7);
}

.lang-switch button.active {
  color: var(--gold);
  opacity: 1;
}

.lang-switch span {
  opacity: .3;
  font-size: 9px;
}


/* DIVIDER */
.divider {
  margin: 16px auto 12px;
  width: 180px;
  height: 1px;
  background: rgba(200,170,110,.6);
}

/* NAV */
.main-nav {
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 12px;
  letter-spacing: .24em;
}

.main-nav span {
  opacity: .4;
}

.main-nav a {
  opacity: .7;
  color: inherit;
  text-decoration: none;
}

.main-nav a.router-link-active {
  color: var(--gold);
  opacity: 1;
}
</style>
