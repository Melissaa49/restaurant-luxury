<template>
  <section class="reservation-section">
    <div class="paper">

      <!-- ÉTAT : FORMULAIRE -->
      <template v-if="!confirmed">
        <header class="paper-header">
          <h1>Réserver une table.</h1>
          <p>
            Nous vous accueillons<br />
            sur réservation uniquement.
          </p>
        </header>

        <div class="form-mock">

          <div class="field">
            <span>Date</span>
            <div class="input">mercredi 24 avril</div>
          </div>

          <div class="field">
            <span>Nombre de convives</span>
            <div class="input">2 convives</div>
          </div>

          <div class="field">
            <span>Service</span>
            <div class="input">Déjeuner</div>
          </div>

          <div class="times">
            <button>12:00</button>
            <button>12:15</button>
            <button>12:30</button>
            <button>12:45</button>
          </div>

          <button class="cta" @click="confirm">
            Confirmer la réservation
          </button>

          <small>
            Réservation en ligne
          </small>
        </div>
      </template>

      <!-- ÉTAT : CONFIRMATION -->
      <template v-else>
        <header class="paper-header confirm">
          <span class="confirm-kicker">Confirmation</span>
          <h1>Votre table est réservée.</h1>
          <p>
            Nous avons le plaisir de vous<br />
            confirmer votre réservation.
          </p>
        </header>

        <div class="confirmation">

          <div class="recap">
            <p><strong>Mercredi 24 avril</strong></p>
            <p>Déjeuner · 12:30</p>
            <p>2 convives</p>
          </div>

          <p class="confirm-note">
            Un e-mail de confirmation vous sera adressé
            avec les détails de votre réservation.
          </p>

          <NuxtLink to="/" class="cta outline">
            Retour à l’accueil
          </NuxtLink>

        </div>
      </template>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const confirmed = ref(false)

function confirm() {
  confirmed.value = true
}
</script>

<style scoped>
/* =========================================================
   PAGE — FOND NOIR
========================================================= */
.reservation-section {
  padding: 160px 16px 220px;
  display: flex;
  justify-content: center;
  background: #0b0b0b;
}

/* =========================================================
   CARTE PAPIER
========================================================= */
.paper {
  width: 100%;
  max-width: 420px;
  background: url('/images/fond-mineral.png') center / cover no-repeat;
  border-radius: 6px;

  box-shadow:
    0 50px 100px rgba(0,0,0,.45),
    inset 0 0 0 1px rgba(0,0,0,.06);

  padding: 40px 28px 48px;
}

/* =========================================================
   TITRES
========================================================= */
.paper-header {
  text-align: center;
  margin-bottom: 36px;
  color: #2a2623;
}

.paper-header.confirm {
  margin-bottom: 28px;
}

.paper-header h1 {
  font-family: var(--font-title);
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 14px;
}

.paper-header p {
  font-size: 15px;
  line-height: 1.6;
  opacity: .75;
}

.confirm-kicker {
  display: block;
  font-size: 11px;
  letter-spacing: .24em;
  text-transform: uppercase;
  color: rgba(160,130,90,.9);
  margin-bottom: 10px;
}

/* =========================================================
   FORMULAIRE FAKE
========================================================= */
.form-mock {
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #2a2623;
}

.field span {
  display: block;
  font-size: 12px;
  letter-spacing: .14em;
  margin-bottom: 6px;
  opacity: .65;
}

.input {
  padding: 14px;
  border-radius: 4px;
  background: rgba(255,255,255,.75);
  border: 1px solid rgba(0,0,0,.15);
  font-size: 15px;
}

/* HORAIRES */
.times {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 8px;
}

.times button {
  padding: 12px 0;
  border-radius: 4px;
  background: transparent;
  border: 1px solid rgba(0,0,0,.25);
  font-family: var(--font-title);
  cursor: pointer;
}

/* CTA */
.cta {
  margin-top: 18px;
  padding: 14px;

  background: transparent;
  border: 1px solid rgba(160,130,90,.8);
  color: #2a2623;

  font-family: var(--font-title);
  letter-spacing: .08em;
  cursor: pointer;

  transition: all .35s ease;
  text-align: center;
  text-decoration: none;
}

.cta:hover {
  background: rgba(160,130,90,.12);
}

.cta.outline {
  margin-top: 26px;
}

/* FOOTNOTE */
small {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  opacity: .6;
}

/* =========================================================
   CONFIRMATION
========================================================= */
.confirmation {
  text-align: center;
  color: #2a2623;
}

.recap {
  margin: 26px 0 24px;
  font-size: 15px;
  line-height: 1.8;
}

.confirm-note {
  font-size: 14px;
  opacity: .7;
  margin-bottom: 28px;
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .paper {
    max-width: 520px;
    padding: 56px 48px 64px;
  }

  .paper-header h1 {
    font-size: 30px;
  }
}
</style>
