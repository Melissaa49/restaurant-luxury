<template>
  <section class="hero-reservation">
    <div class="hero-inner">
      <h1 class="hero-title">
        La table est ouverte.
      </h1>

      <NuxtLink to="/reservation" class="hero-cta">
        Réserver une table
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   HERO — FOND IMAGE
========================================================= */
.hero-reservation {
   min-height: calc(100vh - 160px);
  background-image: url('/images/fond-mineral.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 0 24px;
}

/* =========================================================
   CONTENU CENTRÉ
========================================================= */
.hero-inner {
  max-width: 480px;
  margin: 0 auto;
}

/* =========================================================
   TITRE
========================================================= */
.hero-title {
  font-family: var(--font-title);
  font-size: 26px;
  font-weight: 400;
  color: rgba(40, 35, 30, 0.85);
  letter-spacing: 0.02em;
  margin-bottom: 48px;
}

/* =========================================================
   CTA — BOUTON LUXE FIN
========================================================= */
.hero-cta {
  display: inline-block;
  padding: 14px 32px;

  font-family: var(--font-title);
  font-size: 15px;
  letter-spacing: 0.12em;
  text-transform: none;

  color: rgba(40, 35, 30, 0.85);
  border: 1px solid rgba(180, 150, 95, 0.7);
  text-decoration: none;

  transition: all 0.35s ease;
}

.hero-cta:hover {
  background: rgba(180, 150, 95, 0.08);
  border-color: rgba(180, 150, 95, 1);
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 30px;
  }

  .hero-cta {
    font-size: 16px;
    padding: 16px 40px;
  }
}
</style>
