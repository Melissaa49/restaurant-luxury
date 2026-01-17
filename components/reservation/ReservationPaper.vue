<template>
  <section class="reservation-section">
    <div class="paper">

      <!-- =========================
           FORMULAIRE
      ========================== -->
      <template v-if="!confirmed">
        <header class="paper-header">
          <h1>{{ t('reservation.title') }}</h1>
          <p v-html="t('reservation.intro')" />
        </header>

        <div class="form">

          <!-- DATE -->
          <div class="field">
            <label>{{ t('reservation.fields.date') }}</label>
            <input type="date" v-model="date" />
          </div>

          <!-- CONVIVES -->
          <div class="field">
            <label>{{ t('reservation.fields.guests') }}</label>
            <select v-model="guests">
              <option v-for="n in 6" :key="n" :value="n">
                {{ n }} {{ t('reservation.guests', n) }}
              </option>
            </select>
          </div>

          <!-- SERVICE -->
          <div class="field">
            <label>{{ t('reservation.fields.service') }}</label>
            <div class="service-toggle">
              <button
                :class="{ active: service === 'dejeuner' }"
                @click="service = 'dejeuner'"
              >
                {{ t('reservation.service.lunch') }}
              </button>
              <button
                :class="{ active: service === 'diner' }"
                @click="service = 'diner'"
              >
                {{ t('reservation.service.dinner') }}
              </button>
            </div>
          </div>

          <!-- HORAIRES -->
          <div class="field">
            <label>{{ t('reservation.fields.time') }}</label>
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
            {{ t('reservation.cta.confirm') }}
          </button>

          <small>
            {{ t('reservation.note') }}
          </small>
        </div>
      </template>

      <!-- =========================
           CONFIRMATION
      ========================== -->
      <template v-else>
        <header class="paper-header confirm">
          <span class="confirm-kicker">
            {{ t('reservation.confirmation.kicker') }}
          </span>
          <h1>{{ t('reservation.confirmation.title') }}</h1>
          <p v-html="t('reservation.confirmation.intro')" />
        </header>

        <div class="confirmation">
          <div class="recap">
            <p><strong>{{ formattedDate }}</strong></p>
            <p>{{ serviceLabel }} · {{ selectedTime }}</p>
            <p>
              {{ guests }} {{ t('reservation.guests', guests) }}
            </p>
          </div>

          <p class="confirm-note">
            {{ t('reservation.confirmation.note') }}
          </p>

          <NuxtLink to="/" class="cta outline">
            {{ t('reservation.cta.back') }}
          </NuxtLink>
        </div>
      </template>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const confirmed = ref(false)

const date = ref('')
const guests = ref(2)
const service = ref<'dejeuner' | 'diner'>('dejeuner')
const selectedTime = ref('')

const lunchTimes = ['12:00', '12:15', '12:30', '12:45']
const dinnerTimes = ['19:30', '19:45', '20:00', '20:15', '20:30']

const times = computed(() =>
  service.value === 'dejeuner'
    ? lunchTimes
    : dinnerTimes
)

watch(service, () => {
  selectedTime.value = ''
})

const canConfirm = computed(() =>
  date.value && guests.value && service.value && selectedTime.value
)

const serviceLabel = computed(() =>
  service.value === 'dejeuner'
    ? t('reservation.service.lunch')
    : t('reservation.service.dinner')
)

const formattedDate = computed(() => {
  if (!date.value) return ''
  return new Date(date.value).toLocaleDateString(
    locale.value === 'en' ? 'en-US' : 'fr-FR',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    }
  )
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
