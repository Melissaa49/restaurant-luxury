<template>
  <div class="header-spacer" aria-hidden="true"></div>
</template>

<style scoped>
.header-spacer {
  height: var(--header-height-mobile);
}

@media (min-width: 1024px) {
  .header-spacer {
    height: var(--header-height-desktop);
  }
}
</style>
