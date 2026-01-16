<template>
  <div class="divider" :class="[center ? 'is-center' : '', soft ? 'is-soft' : '']">
    <span />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  center?: boolean
  soft?: boolean
}>()
</script>

<style scoped>
.divider {
  width: 100%;
  margin: 28px 0;
}

.divider span {
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(199,168,103,.28);
}

.divider.is-center span {
  width: 120px;
  margin: 0 auto;
}

.divider.is-soft span {
  background: rgba(199,168,103,.18);
}
</style>
