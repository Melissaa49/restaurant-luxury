<template>
  <section class="cgu">
    <div class="cgu-inner">

      <header class="cgu-header">
        <h1>{{ t('cgu.title') }}</h1>
        <p class="cgu-intro">
          {{ t('cgu.intro') }}
        </p>
      </header>

      <article class="cgu-content">

        <h2>{{ t('cgu.preamble.title') }}</h2>
        <p>{{ t('cgu.preamble.p1') }}</p>
        <p>{{ t('cgu.preamble.p2') }}</p>

        <h2>{{ t('cgu.article1.title') }}</h2>
        <p>{{ t('cgu.article1.content') }}</p>

        <h2>{{ t('cgu.article2.title') }}</h2>
        <p>{{ t('cgu.article2.p1') }}</p>
        <p>{{ t('cgu.article2.p2') }}</p>
        <p>{{ t('cgu.article2.p3') }}</p>

        <h2>{{ t('cgu.article3.title') }}</h2>
        <p>{{ t('cgu.article3.p1') }}</p>
        <p>{{ t('cgu.article3.p2') }}</p>

        <ul>
          <li>{{ t('cgu.article3.email') }}</li>
          <li>{{ t('cgu.article3.phone') }}</li>
        </ul>

        <h2>{{ t('cgu.article4.title') }}</h2>
        <p>{{ t('cgu.article4.content') }}</p>

        <h2>{{ t('cgu.article5.title') }}</h2>
        <p>{{ t('cgu.article5.content') }}</p>

        <h2>{{ t('cgu.article6.title') }}</h2>
        <p>{{ t('cgu.article6.p1') }}</p>
        <p>{{ t('cgu.article6.p2') }}</p>

        <h2>{{ t('cgu.article7.title') }}</h2>
        <p>{{ t('cgu.article7.content') }}</p>

        <h2>{{ t('cgu.article8.title') }}</h2>
        <p>{{ t('cgu.article8.content') }}</p>

      </article>

      <footer class="cgu-footer">
        <span>
          {{ t('common.credit') }}
          <a
            href="https://maisondellalucia.fr"
            target="_blank"
            rel="noopener"
          >
            Maison della Lucia
          </a>
        </span>
      </footer>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
/* =========================================================
   FOND & STRUCTURE
========================================================= */
.cgu {
  background: #0b0b0b;
  padding: 180px 24px 200px;
  color: rgba(235, 225, 210, 0.9);
}

.cgu-inner {
  max-width: 760px;
  margin: 0 auto;
  font-family: var(--font-title);
}

/* =========================================================
   HEADER
========================================================= */
.cgu-header {
  text-align: center;
  margin-bottom: 80px;
}

.cgu-header h1 {
  font-size: 34px;
  letter-spacing: .12em;
  font-weight: 400;
  color: var(--gold);
  margin-bottom: 20px;
}

.cgu-intro {
  font-size: 16px;
  line-height: 1.7;
  opacity: .7;
}

/* =========================================================
   CONTENU
========================================================= */
.cgu-content h2 {
  margin-top: 56px;
  margin-bottom: 18px;
  font-size: 18px;
  letter-spacing: .08em;
  color: var(--gold);
}

.cgu-content p,
.cgu-content li {
  font-size: 15px;
  line-height: 1.8;
  opacity: .85;
}

.cgu-content ul {
  padding-left: 18px;
}

/* =========================================================
   FOOTER
========================================================= */
.cgu-footer {
  margin-top: 120px;
  text-align: center;
  font-size: 13px;
  opacity: .6;
}

.cgu-footer a {
  color: var(--gold);
  text-decoration: none;
}

.cgu-footer a:hover {
  opacity: .9;
}
</style>
