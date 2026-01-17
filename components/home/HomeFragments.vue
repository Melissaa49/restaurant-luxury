<template>
  <section class="fragments">

    <div class="canvas">

      <!-- HAUT GAUCHE -->
      <figure class="item item-plat">
        <img
          src="/images/plat-2.png"
          :alt="t('fragments.alt.dish')"
        />
      </figure>

      <!-- MILIEU DROITE -->
      <figure class="item item-table">
        <img
          src="/images/table-2.png"
          :alt="t('fragments.alt.room')"
        />
      </figure>

      <!-- BAS GAUCHE -->
      <figure class="item item-chef">
        <img
          src="/images/chef-2.png"
          :alt="t('fragments.alt.chef')"
        />
      </figure>

    </div>

    <!-- TEXTE -->
    <div class="fragments-text">
      <p v-html="t('fragments.text')" />
      <span class="divider"></span>
    </div>

  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* =========================================================
   SECTION
========================================================= */
.fragments {
  position: relative;
  padding: 200px 0 220px;
  overflow: hidden;

  background-image: url('/images/fond-mineral.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
   min-height: calc(100vh - 160px);
}

/* =========================================================
   CANVAS
========================================================= */
.canvas {
  position: relative;
  width: 100%;
  max-width: 560px;
  height: 880px;
  margin: 0 auto;
}

/* =========================================================
   IMAGES
========================================================= */
.item {
  position: absolute;
}

.item img {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 28px 46px rgba(0,0,0,.25));
}

/* =========================================================
   DISPOSITION — DESKTOP
========================================================= */
.item-plat {
  top: -150px;
  left: -80px;
  width: 300px;
}

.item-table {
  top: 250px;
  right: -60px;
  width: 280px;
}

.item-chef {
  top: 640px;
  left: -60px;
  width: 260px;
}

/* =========================================================
   TEXTE
========================================================= */
.fragments-text {
  margin-top: 160px;
  text-align: center;
  font-family: var(--font-title);
  color: rgba(32, 28, 24, 0.78); /* noir minéral */
}

.fragments-text p {
  font-size: 28px;
  line-height: 1.45;
  letter-spacing: .04em;
}

.divider {
  display: block;
  width: 72px;
  height: 1px;
  background: var(--gold);
  margin: 28px auto 0;
}

/* =========================================================
   RESPONSIVE MOBILE
========================================================= */
@media (max-width: 768px) {

  .fragments {
    padding: 160px 0 180px;
  }

  .canvas {
    max-width: 360px;
    height: 760px;
  }

  .item-plat {
    top: -120px;
    left: -40px;
    width: 240px;
  }

  .item-table {
    top: 220px;
    right: -30px;
    width: 220px;
  }

  .item-chef {
    top: 520px;
    left: -30px;
    width: 210px;
  }

  .fragments-text {
    margin-top: 120px;
  }

  .fragments-text p {
    font-size: 24px;
  }
}
/* =========================================================
   DESKTOP LARGE — ÉDITORIAL ASSUMÉ
========================================================= */
@media (min-width: 1200px) {

  .canvas {
    max-width: 820px;
    height: 1100px;
  }

  /* HAUT GAUCHE */
  .item-plat {
    top: -220px;
    left: -140px;
    width: 420px;
  }

  /* MILIEU DROITE */
  .item-table {
    top: 300px;
    right: -140px;
    width: 380px;
  }

  /* BAS GAUCHE */
  .item-chef {
    top: 760px;
    left: -120px;
    width: 360px;
  }

  .fragments-text {
    margin-top: 220px;
  }

  .fragments-text p {
    font-size: 32px;
  }
}

</style>
