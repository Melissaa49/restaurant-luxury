<template>
  <section class="menu">
    <h1>La carte du moment</h1>

    <div v-for="acte in actes" :key="acte.title" class="acte">
      <span>{{ acte.title }}</span>
      <h2>{{ acte.subtitle }}</h2>
      <p v-for="item in acte.items" :key="item">{{ item }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const actes = [
  {
    title: 'ACTE I',
    subtitle: 'Entrées',
    items: ['Asperge blanche, sabayon au jasmin', 'Légumes de saison, herbes fraîches']
  },
  {
    title: 'ACTE II',
    subtitle: 'Poissons',
    items: ['Saint-Pierre, poire & oseille']
  },
  {
    title: 'ACTE III',
    subtitle: 'Viandes',
    items: ['Selle d’agneau, artichaut, ail des ours']
  },
  {
    title: 'ACTE IV',
    subtitle: 'Desserts',
    items: ['Gariguette, petits pois, estragon']
  }
]
</script>
