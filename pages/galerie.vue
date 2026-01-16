<template>
  <Section dark>
    <h1 class="title">Galerie</h1>

    <div class="stack">
      <img class="photo" src="/images/table.png" alt="Salle" />
      <Divider />

      <div class="texture" aria-hidden="true" />
      <Divider />

      <img class="photo" src="/images/plat.png" alt="Plat" />
      <Divider />

      <img class="photo" src="/images/chef.png" alt="Chef" />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../components/ui/Section.vue'
import Divider from '../components/ui/Divider.vue'
</script>

<style scoped>
.title {
  text-align: center;
  font-family: var(--font-title);
  font-size: 34px;
  margin: 0 0 36px;
  letter-spacing: .04em;
}

.stack {
  max-width: 920px;
  margin: 0 auto;
}

.photo {
  width: 100%;
  border-radius: 2px;
  box-shadow: 0 30px 60px rgba(0,0,0,.35);
}

.texture {
  width: 100%;
  height: 90px;
  border-radius: 2px;
  background: url('/images/texture-stone.jpg') center/cover no-repeat;
  opacity: .8;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
}
</style>
