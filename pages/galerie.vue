<template>
  <HeaderSpacer />

  <Section dark>
    <div class="gallery-container">

      <figure class="media media--intro">
        <img src="/images/table.png" alt="Salle" />
      </figure>

      <Divider />

      <figure class="media media--texture" aria-hidden="true" />

      <Divider />

      <figure class="media">
        <img src="/images/plat.png" alt="Plat" />
      </figure>

      <Divider />

      <figure class="media">
        <img src="/images/chef.png" alt="Chef" />
      </figure>

    </div>
  </Section>
</template>

<script setup lang="ts">
import HeaderSpacer from '@/components/navigation/HeaderSpacer.vue'
import Section from '@/components/ui/Section.vue'
import Divider from '@/components/ui/Divider.vue'
</script>

<style scoped>
.gallery-container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  /* ❌ padding supprimé */
}

/* BASE LUXE */
.media {
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
  border-radius: 2px;

  box-shadow:
    0 26px 56px rgba(0,0,0,.4),
    inset 0 0 0 1px rgba(255,255,255,.04);
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


/* MOBILE FIRST */
.media--intro {
  height: 180px; /* ← PAS TROP HAUT */
}

.media:not(.media--intro):not(.media--texture) {
  height: 260px;
}

.media--texture {
  height: 110px;
  background: url('/images/fond-mineral.png') center/cover no-repeat;
  opacity: .9;
}

/* DESKTOP */
@media (min-width: 1024px) {
  .gallery-container {
    padding: 0;
  }

  .media--intro {
    height: 260px;
  }

  .media:not(.media--intro):not(.media--texture) {
    height: 440px;
  }

  .media--texture {
    height: 180px;
  }
}

</style>
