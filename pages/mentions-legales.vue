<template>
  <section class="legal-page">

    <!-- EN-TÊTE -->
    <header class="legal-header">
      <span class="legal-kicker">
        {{ t('legal.kicker') }}
      </span>
      <h1>{{ t('legal.title') }}</h1>
    </header>

    <!-- CONTENU -->
    <div class="legal-content">

      <section class="legal-section">
        <h2>{{ t('legal.section1.title') }}</h2>
        <p>{{ t('legal.section1.p1') }}</p>
        <p>{{ t('legal.section1.p2') }}</p>
        <p>{{ t('legal.section1.p3') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ t('legal.section2.title') }}</h2>
        <p>{{ t('legal.section2.p1') }}</p>
        <p>{{ t('legal.section2.p2') }}</p>
        <p>{{ t('legal.section2.p3') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ t('legal.section3.title') }}</h2>
        <p>{{ t('legal.section3.p1') }}</p>
        <p>{{ t('legal.section3.p2') }}</p>
        <p>
          {{ t('legal.section3.contact') }}
          <strong>contact@laitthymsel.fr</strong>
        </p>
      </section>

      <section class="legal-section">
        <h2>{{ t('legal.section4.title') }}</h2>
        <p>{{ t('legal.section4.p1') }}</p>
        <p>
          {{ t('legal.section4.p2') }}
          <a
            href="https://laitthymsel.com/politique-des-cookies/"
            target="_blank"
            rel="noopener"
          >
            {{ t('legal.section4.link') }}
          </a>.
        </p>
      </section>

      <section class="legal-section">
        <h2>{{ t('legal.section5.title') }}</h2>
        <p>{{ t('legal.section5.p1') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ t('legal.section6.title') }}</h2>

        <p v-html="t('legal.section6.owner')" />
        <p v-html="t('legal.section6.company')" />
        <p v-html="t('legal.section6.publisher')" />
        <p v-html="t('legal.section6.creator')" />
        <p>{{ t('legal.section6.hosting') }}</p>
        <p>{{ t('legal.section6.credits') }}</p>
      </section>

    </div>

  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
/* =========================================================
   PAGE — MENTIONS LÉGALES
========================================================= */
.legal-page {
  background: #0b0b0b;
  color: rgba(235, 225, 210, 0.85);
  padding: 180px 24px 220px;
  font-family: var(--font-body);
}

/* =========================================================
   HEADER
========================================================= */
.legal-header {
  text-align: center;
  margin-bottom: 120px;
}

.legal-kicker {
  display: block;
  font-size: 12px;
  letter-spacing: 0.4em;
  color: var(--gold);
  margin-bottom: 18px;
}

.legal-header h1 {
  font-family: var(--font-title);
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.06em;
}

/* =========================================================
   CONTENU
========================================================= */
.legal-content {
  max-width: 760px;
  margin: 0 auto;
}

.legal-section {
  margin-bottom: 72px;
}

.legal-section h2 {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 400;
  color: var(--gold);
  letter-spacing: 0.08em;
  margin-bottom: 24px;
}

.legal-section p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
  opacity: 0.9;
}

.legal-section a {
  color: var(--gold);
  text-decoration: none;
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .legal-header h1 {
    font-size: 40px;
  }

  .legal-section p {
    font-size: 16px;
  }
}
</style>
