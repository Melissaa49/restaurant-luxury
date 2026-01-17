<template>
  <footer class="footer-minimal">
    <div class="footer-inner">

      <!-- IDENTITÉ DU LIEU -->
      <p class="footer-name">
        {{ t('footer.name') }}
      </p>

      <!-- ADRESSE -->
      <p class="footer-address" v-html="t('footer.address')" />

      <!-- TÉLÉPHONE -->
      <a
        href="tel:+33789655907"
        class="footer-phone"
      >
        {{ t('footer.phone') }}
      </a>

      <!-- SÉPARATEUR -->
      <span class="footer-line"></span>

      <!-- LIENS LÉGAUX -->
      <nav class="footer-legal">
  <NuxtLink to="/chefs">
    Les chefs
  </NuxtLink>

  <span>•</span>

  <NuxtLink to="/mentions-legales">
    {{ t('footer.legal.mentions') }}
  </NuxtLink>

  <span>•</span>

  <NuxtLink to="/conditions-generales">
    {{ t('footer.legal.terms') }}
  </NuxtLink>

  <span>•</span>

  <NuxtLink to="/rgpd">
    {{ t('footer.legal.privacy') }}
  </NuxtLink>
</nav>


      <!-- COPYRIGHT -->
      <p class="footer-credit">
        © {{ new Date().getFullYear() }}
        {{ t('footer.copyright') }}
        —
        {{ t('footer.credit.text') }}
        <a
          href="https://maisondellalucia.fr"
          target="_blank"
          rel="noopener"
        >
          {{ t('footer.credit.agency') }}
        </a>
      </p>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* =========================================================
   FOOTER — SIGNATURE FINALE
========================================================= */
.footer-minimal {
  background: #0b0b0b;
  padding: 140px 24px 180px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(180, 150, 95, 0.25);
}

/* =========================================================
   CONTENU
========================================================= */
.footer-inner {
  text-align: center;
  max-width: 460px;
  margin: 0 auto;
  font-family: var(--font-title);
  color: rgba(235, 225, 210, 0.85);
}

/* =========================================================
   NOM
========================================================= */
.footer-name {
  font-size: 22px;
  letter-spacing: 0.1em;
  margin-bottom: 18px;
}

/* =========================================================
   ADRESSE
========================================================= */
.footer-address {
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.75;
  margin-bottom: 14px;
}

/* =========================================================
   TÉLÉPHONE
========================================================= */
.footer-phone {
  display: inline-block;
  font-size: 16px;
  letter-spacing: 0.12em;
  color: var(--gold);
  margin-bottom: 56px;
  text-decoration: none;
}

/* =========================================================
   LIGNE
========================================================= */
.footer-line {
  display: block;
  width: 140px;
  height: 1px;
  margin: 0 auto 40px;
  background: linear-gradient(
    to right,
    transparent,
    var(--gold),
    transparent
  );
  opacity: 0.8;
}

/* =========================================================
   LIENS LÉGAUX
========================================================= */
.footer-legal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  letter-spacing: 0.14em;
  margin-bottom: 32px;
}

.footer-legal a {
  color: rgba(235, 225, 210, 0.6);
  text-decoration: none;
}

.footer-legal a:hover {
  color: var(--gold);
}

.footer-legal span {
  opacity: 0.35;
}

/* =========================================================
   COPYRIGHT & CRÉDIT
========================================================= */
.footer-credit {
  font-size: 12px;
  line-height: 1.6;
  opacity: 0.5;
}

.footer-credit a {
  color: rgba(235, 225, 210, 0.65);
  text-decoration: none;
}

.footer-credit a:hover {
  opacity: 1;
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .footer-name {
    font-size: 24px;
  }

  .footer-address {
    font-size: 16px;
  }
}
</style>
