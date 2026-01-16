<template>
  <Section dark>
    <h1 class="title">Mentions légales</h1>
    <Divider center />

    <div class="content">
      <h2>Éditeur du site</h2>
      <p>
        Lait Thym Sel<br />
        Angers — France
      </p>

      <h2>Hébergement</h2>
      <p>
        À compléter (ex : Vercel, OVH, etc.)
      </p>

      <h2>Crédits</h2>
      <p>
        Photographies : à compléter.<br />
        Design & développement : Maison della Lucia (si tu veux le signer).
      </p>

      <h2>Données personnelles</h2>
      <p>
        Ce site ne collecte pas de données personnelles sans consentement.
        La réservation en ligne est assurée par ZenChef, via leur interface.
      </p>
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
  margin: 0;
  letter-spacing: .04em;
}

.content {
  max-width: 760px;
  margin: 40px auto 0;
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1.7;
}

h2 {
  font-family: var(--font-title);
  color: var(--text-main);
  font-size: 18px;
  letter-spacing: .06em;
  margin: 32px 0 10px;
}
</style>
   