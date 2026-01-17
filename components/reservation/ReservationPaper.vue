<template>
  <section class="reservation-section">
    <div class="paper">

      <!-- =========================
           FORMULAIRE
      ========================== -->
      <template v-if="!confirmed">
        <header class="paper-header">
          <h1>Réserver une table.</h1>
          <p>
            Nous vous accueillons<br />
            sur réservation uniquement.
          </p>
        </header>

        <div class="form">

          <!-- DATE -->
          <div class="field">
            <label>Date</label>
            <input type="date" v-model="date" />
          </div>

          <!-- CONVIVES -->
          <div class="field">
            <label>Convives</label>
            <select v-model="guests">
              <option v-for="n in 6" :key="n" :value="n">
                {{ n }} convive{{ n > 1 ? 's' : '' }}
              </option>
            </select>
          </div>

          <!-- SERVICE -->
          <div class="field">
            <label>Service</label>
            <div class="service-toggle">
              <button
                :class="{ active: service === 'dejeuner' }"
                @click="service = 'dejeuner'"
              >
                Déjeuner
              </button>
              <button
                :class="{ active: service === 'diner' }"
                @click="service = 'diner'"
              >
                Dîner
              </button>
            </div>
          </div>

          <!-- HORAIRES -->
          <div class="field">
            <label>Horaire</label>
            <div class="times">
              <button
                v-for="time in times"
                :key="time"
                :class="{ active: selectedTime === time }"
                @click="selectedTime = time"
              >
                {{ time }}
              </button>
            </div>
          </div>

          <!-- CTA -->
          <button
            class="cta"
            :disabled="!canConfirm"
            @click="confirm"
          >
            Confirmer la réservation
          </button>

          <small>
            Réservation en ligne — confirmation immédiate
          </small>
        </div>
      </template>

      <!-- =========================
           CONFIRMATION
      ========================== -->
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
            <p><strong>{{ formattedDate }}</strong></p>
            <p>{{ serviceLabel }} · {{ selectedTime }}</p>
            <p>{{ guests }} convive{{ guests > 1 ? 's' : '' }}</p>
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
import { ref, computed, watch } from 'vue'

const confirmed = ref(false)

const date = ref('')
const guests = ref(2)
const service = ref<'dejeuner' | 'diner'>('dejeuner')
const selectedTime = ref('')

/* =========================
   HORAIRES PAR SERVICE
========================= */
const lunchTimes = ['12:00', '12:15', '12:30', '12:45']
const dinnerTimes = ['19:30', '19:45', '20:00', '20:15', '20:30']

/* =========================
   HORAIRES COURANTS
========================= */
const times = computed(() => {
  return service.value === 'dejeuner'
    ? lunchTimes
    : dinnerTimes
})

/* =========================
   RESET HORAIRE AU CHANGEMENT
========================= */
watch(service, () => {
  selectedTime.value = ''
})

/* =========================
   VALIDATION
========================= */
const canConfirm = computed(() =>
  date.value &&
  guests.value &&
  service.value &&
  selectedTime.value
)

const serviceLabel = computed(() =>
  service.value === 'dejeuner' ? 'Déjeuner' : 'Dîner'
)

const formattedDate = computed(() => {
  if (!date.value) return ''
  return new Date(date.value).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })
})

function confirm() {
  confirmed.value = true
}
</script>


<style scoped>
/* =========================================================
   PAGE
========================================================= */
.reservation-section {
  padding: 160px 16px 220px;
  display: flex;
  justify-content: center;
  background: #0b0b0b;
}

/* =========================================================
   CARTE
========================================================= */
.paper {
  width: 100%;
  max-width: 420px;
  background: url('/images/fond-mineral.png') center / cover no-repeat;
  border-radius: 6px;
  padding: 40px 28px 48px;

  box-shadow:
    0 50px 100px rgba(0,0,0,.45),
    inset 0 0 0 1px rgba(0,0,0,.06);
}

/* =========================================================
   TITRES
========================================================= */
.paper-header {
  text-align: center;
  margin-bottom: 36px;
  color: #2a2623;
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
  font-size: 11px;
  letter-spacing: .28em;
  color: var(--gold);
  margin-bottom: 10px;
  display: block;
}

/* =========================================================
   FORM
========================================================= */
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #2a2623;
}

.field label {
  display: block;
  font-size: 12px;
  letter-spacing: .14em;
  margin-bottom: 6px;
  opacity: .65;
}

input,
select {
  width: 100%;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.2);
  background: rgba(255,255,255,.8);
  font-size: 15px;
  color: #2a2623;
}

/* SERVICE */
.service-toggle {
  display: flex;
  gap: 10px;
}

.service-toggle button {
  flex: 1;
  padding: 12px 0;
  border: 1px solid rgba(160,130,90,.6);
  background: transparent;
  font-family: var(--font-title);
  cursor: pointer;
}

.service-toggle button.active {
  background: rgba(160,130,90,.18);
  border-color: var(--gold);
}

/* HORAIRES */
.times {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.times button {
  padding: 12px 0;
  border: 1px solid rgba(160,130,90,.6);
  background: transparent;
  font-family: var(--font-title);
  cursor: pointer;
}

.times button.active {
  background: rgba(160,130,90,.18);
  border-color: var(--gold);
}

/* CTA */
.cta {
  margin-top: 18px;
  padding: 14px;
  border: 1px solid var(--gold);
  background: transparent;
  font-family: var(--font-title);
  letter-spacing: .1em;
  cursor: pointer;
}

.cta:disabled {
  opacity: .4;
  cursor: not-allowed;
}

.cta.outline {
  margin-top: 26px;
}

/* CONFIRMATION */
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

/* DESKTOP */
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
