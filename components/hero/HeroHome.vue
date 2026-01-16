<template>
  <section class="hero">
    <div class="overlay"></div>

    <div class="content">
      <p class="headline">
        Une table, un instant, une cuisine.
      </p>

      <p class="subtitle">
        Cuisine gastronomique à Angers
      </p>

      <NuxtLink to="/reserver" class="cta">
        RÉSERVER UNE TABLE
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background: url('/images/hero.png') center / cover no-repeat;
  color: #fff;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,.65),
    rgba(0,0,0,.25),
    rgba(0,0,0,.6)
  );
  z-index: 1;
}

/* CONTENT */
.content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding-top: 140px; /* ← espace header */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* TEXTE PRINCIPAL */
.headline {
  font-family: var(--font-title);
  font-size: 22px;
  letter-spacing: .14em;
  margin-bottom: 10px;
}

/* SOUS TEXTE */
.subtitle {
  font-size: 18px;
  opacity: .75;
  letter-spacing: .08em;
  margin-bottom: 44px;
}

/* CTA */
.cta {
  border: 1px solid var(--gold);
  color: var(--gold);
  padding: 15px 20px;
  font-size: 10px;
  letter-spacing: .28em;
  background: rgba(0,0,0,.25);
  transition: all .25s ease;
}

.cta:hover {
  background: rgba(200,170,110,.08);
  transform: translateY(-1px);
}
</style>
