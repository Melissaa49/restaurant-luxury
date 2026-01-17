<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const commitments = tm('rgpd.commitments') as { title: string; text: string }[]
const dataUses = tm('rgpd.dataUses') as string[]
const partners = tm('rgpd.partners') as { name: string; text?: string; link?: string }[]
</script>

<template>
  <section class="rgpd">
    <div class="rgpd-inner">

      <!-- HEADER -->
      <header class="rgpd-header">
        <h1>{{ t('rgpd.title') }}</h1>
        <p class="rgpd-intro">
          {{ t('rgpd.intro') }}
        </p>
      </header>

      <article class="rgpd-content">

        <!-- ENGAGEMENTS -->
        <h2>{{ t('rgpd.sections.commitments.title') }}</h2>
        <p>{{ t('rgpd.sections.commitments.text') }}</p>

        <ul>
          <li v-for="(item, i) in commitments" :key="i">
            <strong>{{ item.title }}</strong> {{ item.text }}
          </li>
        </ul>

        <p>{{ t('rgpd.sections.commitments.note') }}</p>

        <!-- CONSENTEMENT -->
        <h2>{{ t('rgpd.sections.consent.title') }}</h2>
        <p>{{ t('rgpd.sections.consent.text') }}</p>

        <p class="muted">
          {{ t('rgpd.sections.consent.cookies') }}
          <a
            :href="t('rgpd.sections.consent.cookiesLink')"
            target="_blank"
            rel="noopener"
          >
            {{ t('rgpd.sections.consent.cookiesLink') }}
          </a>
        </p>

        <!-- DONNÉES -->
        <h2>{{ t('rgpd.sections.data.title') }}</h2>
        <p>{{ t('rgpd.sections.data.text') }}</p>

        <ul>
          <li v-for="(item, i) in dataUses" :key="i">
            {{ item }}
          </li>
        </ul>

        <p>{{ t('rgpd.sections.data.direct') }}</p>
        <p>{{ t('rgpd.sections.data.payment') }}</p>
        <p>{{ t('rgpd.sections.data.sensitive') }}</p>

        <!-- SÉCURITÉ -->
        <h2>{{ t('rgpd.sections.security.title') }}</h2>
        <p>{{ t('rgpd.sections.security.text1') }}</p>
        <p>{{ t('rgpd.sections.security.text2') }}</p>

        <!-- CONSERVATION -->
        <h2>{{ t('rgpd.sections.retention.title') }}</h2>
        <p>{{ t('rgpd.sections.retention.text1') }}</p>
        <p>{{ t('rgpd.sections.retention.text2') }}</p>

        <!-- STOCKAGE -->
        <h2>{{ t('rgpd.sections.storage.title') }}</h2>
        <p>{{ t('rgpd.sections.storage.text1') }}</p>
        <p>{{ t('rgpd.sections.storage.text2') }}</p>
        <p>{{ t('rgpd.sections.storage.text3') }}</p>

        <!-- DROITS -->
        <h2>{{ t('rgpd.sections.rights.title') }}</h2>
        <p>{{ t('rgpd.sections.rights.text') }}</p>
        <p>
          <strong>{{ t('rgpd.sections.rights.contact') }}</strong>
        </p>

        <ul>
          <li v-for="(partner, i) in partners" :key="i">
            <strong>{{ partner.name }}</strong>
            <span v-if="partner.text"> — {{ partner.text }}</span>
            <a
              v-if="partner.link"
              :href="partner.link"
              target="_blank"
              rel="noopener"
            >
              {{ partner.link }}
            </a>
          </li>
        </ul>

        <p>{{ t('rgpd.sections.rights.cnil') }}</p>
      </article>

      <footer class="rgpd-footer">
        <span>
          {{ t('common.credit') }}
          <a href="https://maisondellalucia.fr" target="_blank" rel="noopener">
            Maison della Lucia
          </a>
        </span>
      </footer>

    </div>
  </section>
</template>


<style scoped>
/* =========================================================
   WRAPPER LUXE
========================================================= */
.rgpd {
  background: #0b0b0b;
  padding: 180px 24px 200px;
  color: rgba(235, 225, 210, 0.9);
}

.rgpd-inner {
  max-width: 820px;
  margin: 0 auto;
  font-family: var(--font-title);
}

/* =========================================================
   HEADER
========================================================= */
.rgpd-header {
  text-align: center;
  margin-bottom: 80px;
}

.rgpd-header h1 {
  font-size: 34px;
  letter-spacing: .12em;
  font-weight: 400;
  color: var(--gold);
  margin: 0 0 20px;
}

.rgpd-intro {
  font-size: 16px;
  line-height: 1.8;
  opacity: .72;
  margin: 0 auto;
  max-width: 760px;
}

/* =========================================================
   CONTENU
========================================================= */
.rgpd-content h2 {
  margin: 56px 0 18px;
  font-size: 18px;
  letter-spacing: .08em;
  color: var(--gold);
}

.rgpd-content p,
.rgpd-content li {
  font-size: 15px;
  line-height: 1.85;
  opacity: .86;
}

.rgpd-content ul {
  padding-left: 18px;
  margin: 14px 0 0;
}

.rgpd-content a {
  color: var(--gold);
  text-decoration: none;
  opacity: .9;
}

.rgpd-content a:hover {
  opacity: 1;
}

.muted {
  opacity: .65;
  font-size: 14px;
}

/* =========================================================
   FOOTER
========================================================= */
.rgpd-footer {
  margin-top: 120px;
  text-align: center;
  font-size: 13px;
  opacity: .6;
}

.rgpd-footer a {
  color: var(--gold);
  text-decoration: none;
}

.rgpd-footer a:hover {
  opacity: .9;
}
</style>
