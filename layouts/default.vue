<template>
  <div>
    <header class="site-header">
      <div class="top-row">
        <img
          src="/images/logo-or.png"
          alt="Logo Lait Thym Sel"
          class="logo"
        />

        <span class="brand">LAIT THYM SEL</span>

        <div />
      </div>

      <div class="divider"></div>

      <nav class="main-nav">
        <NuxtLink to="/menu">MENUS</NuxtLink>
        <span>|</span>
        <NuxtLink to="/galerie">GALERIE</NuxtLink>
        <span>|</span>
        <NuxtLink to="/reserver">RÉSERVER</NuxtLink>
      </nav>
    </header>

    <slot />
  </div>
</template>

<style scoped>
.site-header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 28px 24px 14px;
  text-align: center;
}

/* ALIGNEMENT OPTIQUE */
.top-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

/* LOGO GRAND */
.logo {
  justify-self: start;
  width: 100px; /* ← TAILLE COMME TA CAPTURE */
  opacity: .95;
  filter: drop-shadow(0 0 10px rgba(200,170,110,.45));
}

/* TEXTE CENTRÉ RÉEL */
.brand {
  justify-self: center;
  font-family: var(--font-title);
  font-size: 18px;
  letter-spacing: .32em;
}

/* DIVIDER */
.divider {
  margin: 16px auto 12px;
  width: 180px;
  height: 1px;
  background: rgba(200,170,110,.6);
}

/* NAV */
.main-nav {
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 12px;
  letter-spacing: .24em;
}

.main-nav span {
  opacity: .4;
}

.main-nav a {
  opacity: .7;
}

.main-nav a.router-link-active {
  color: var(--gold);
  opacity: 1;
}
</style>
