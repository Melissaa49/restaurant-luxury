<template>
  <section class="menu-moment">

    <!-- TITRE -->
    <h2 class="menu-title">Les menus</h2>

    <!-- CAROUSEL HORIZONTAL MANUEL -->
    <div class="menu-carousel">

      <!-- =========================
           MENU SOLAIRE
      ========================== -->
      <article class="menu-panel">
        <span class="panel-kicker">DÉJEUNER · SOLAIRE</span>

        <div class="acte">
          <span class="line"></span>
          <em>Mise en lumière</em>
          <p>
            Menu en <strong>3 étincelles</strong><br />
            Service possible en 1 heure<br />
            Pour celles et ceux disposant d’un temps limité
          </p>
          <span class="price">49 €</span>
        </div>

        <div class="acte">
          <span class="line"></span>
          <em>Le chant des flammes</em>
          <p>
            Menu en <strong>6 étincelles</strong><br />
            Version végétarienne sur demande
          </p>
          <span class="price">95 €</span>
        </div>

        <div class="acte">
          <span class="line"></span>
          <em>La danse du feu</em>
          <p>
            Menu en <strong>9 étincelles</strong>
          </p>
          <span class="price">145 €</span>
        </div>
      </article>

      <!-- =========================
           MENU LUNAIRE
      ========================== -->
      <article class="menu-panel">
        <span class="panel-kicker">DÎNER · LUNAIRE</span>

        <div class="acte">
          <span class="line"></span>
          <em>Incandescence</em>
          <p>
            Menu en <strong>5 étincelles</strong><br />
            Servi du mardi au jeudi<br />
            (hors vendredi et samedi)
          </p>
          <span class="price">85 €</span>
        </div>

        <div class="acte">
          <span class="line"></span>
          <em>Crépitement des étoiles</em>
          <p>
            Menu en <strong>7 étincelles</strong><br />
            Version végétarienne sur demande<br />
            Servi du mardi au jeudi<br />
            (hors vendredi et samedi)
          </p>
          <span class="price">120 €</span>
        </div>

        <div class="acte">
          <span class="line"></span>
          <em>La danse du feu</em>
          <p>
            Menu en <strong>9 étincelles</strong>
          </p>
          <span class="price">145 €</span>
        </div>
      </article>

    </div>

    <!-- NOTE ALLERGIES -->
    <p class="note">
      Les menus ne sont pas proposés sans lactose,
      sans gluten ou sans œuf.<br />
      Merci de signaler toute allergie ou régime particulier
      lors de votre réservation.
    </p>

  </section>
</template>

<style scoped>
/* =========================================================
   SECTION — FOND NOIR LUXE
========================================================= */
.menu-moment {
  background: #0b0b0b;
  padding: 140px 0 200px;
  color: rgba(235, 225, 210, 0.92);
  font-family: var(--font-title);
  overflow: hidden;
}

/* =========================================================
   TITRE
========================================================= */
.menu-title {
  text-align: center;
  font-size: 30px;
  letter-spacing: .1em;
  font-weight: 400;
  margin-bottom: 96px;
}

/* =========================================================
   CAROUSEL NATIF
========================================================= */
.menu-carousel {
  display: flex;
  gap: 100px;
  padding: 0 24px;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
}
.menu-carousel::-webkit-scrollbar {
  display: none;
}

/* =========================================================
   PANNEAUX
========================================================= */
.menu-panel {
  flex: 0 0 88%;
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  scroll-snap-align: center;
}

/* =========================================================
   KICKER
========================================================= */
.panel-kicker {
  display: block;
  margin-bottom: 72px;
  font-size: 13px;
  letter-spacing: .4em;
  color: var(--gold);
}

/* =========================================================
   ACTES
========================================================= */
.acte {
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* LIGNE RITUELLE */
.line {
  width: 120px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--gold),
    transparent
  );
  margin-bottom: 20px;
  opacity: .8;
}

.acte em {
  font-size: 18px;
  font-style: italic;
  margin-bottom: 16px;
}

.acte p {
  font-size: 18px;
  line-height: 1.7;
  max-width: 420px;
  margin-bottom: 18px;
}

.price {
  font-size: 18px;
  letter-spacing: .1em;
  color: var(--gold);
}

/* =========================================================
   NOTE
========================================================= */
.note {
  max-width: 560px;
  margin: 120px auto 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
  opacity: .65;
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .menu-carousel {
    padding: 0 160px;
  }

  .menu-panel {
    flex: 0 0 60%;
    max-width: 680px;
  }

  .menu-title {
    font-size: 36px;
  }

  .acte p {
    font-size: 19px;
  }
}
</style>
