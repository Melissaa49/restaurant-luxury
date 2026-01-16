<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    class="btn"
    :class="[
      gold ? 'is-gold' : '',
      dark ? 'is-dark' : '',
      paper ? 'is-paper' : ''
    ]"
    type="button"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  to?: string
  gold?: boolean
  dark?: boolean
  paper?: boolean
}>()
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 34px;
  font-family: var(--font-title);
  letter-spacing: .08em;
  font-size: 14px;
  border-radius: var(--radius);
  border: 1px solid rgba(255,255,255,.12);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: transform .15s ease, opacity .2s ease, border-color .2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  opacity: .95;
}

.btn.is-gold {
  border-color: var(--gold);
  color: var(--gold);
}

.btn.is-dark {
  background: rgba(0,0,0,.35);
}

.btn.is-paper {
  border-color: rgba(20,20,20,.18);
  color: rgba(20,20,20,.82);
}
</style>
