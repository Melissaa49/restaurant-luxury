<template>
  <nav class="nav">
    <span class="logo">LAIT THYM SEL</span>

    <div class="links">
      <NuxtLink to="/menu">Menus</NuxtLink>
      <NuxtLink to="/galerie">Galerie</NuxtLink>
      <NuxtLink to="/reserver" class="reserve">Réserver</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,.05);
}

.logo {
  font-family: var(--font-title);
  letter-spacing: .14em;
}

.links a {
  margin-left: 18px;
  font-size: 14px;
  letter-spacing: .08em;
}

.reserve {
  color: var(--gold);
}
</style>
