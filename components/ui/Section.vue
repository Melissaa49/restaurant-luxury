<template>
  <section
    :class="[
      'section',
      dark ? 'is-dark' : '',
      paper ? 'is-paper' : '',
      tight ? 'is-tight' : ''
    ]"
  >
    <div class="inner">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  dark?: boolean
  paper?: boolean
  tight?: boolean
}>()
</script>

<style scoped>
.section {
  padding: 72px 24px;
}

.section.is-tight {
  padding: 48px 24px;
}

.section.is-dark {
  background: var(--black-deep);
  color: var(--text-main);
}

.section.is-paper {
  background: var(--paper);
  color: rgba(20,20,20,.82);
}

.inner {
  max-width: 980px;
  margin: 0 auto;
}
</style>
