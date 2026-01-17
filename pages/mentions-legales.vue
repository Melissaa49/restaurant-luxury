<template>
  <section class="legal-page">

    <!-- EN-TÊTE -->
    <header class="legal-header">
      <span class="legal-kicker">Informations légales</span>
      <h1>Mentions légales</h1>
    </header>

    <!-- CONTENU -->
    <div class="legal-content">

      <section class="legal-section">
        <h2>1 – Informations</h2>
        <p>
          Les informations publiées, y compris dans leur aspect et leurs caractéristiques,
          sur le site internet <strong>laitthymsel.com</strong> sont non contractuelles.
        </p>
        <p>
          Le Restaurant <strong>Lait Thym Sel</strong> met tout en œuvre pour s’assurer que
          les informations accessibles par l’intermédiaire de son site internet sont exactes
          et à jour. Toutefois, il ne saurait garantir l’exactitude, la complétude ou l’actualité
          des informations diffusées.
        </p>
        <p>
          En conséquence, le Restaurant Lait Thym Sel décline toute responsabilité pour tout
          dommage direct ou indirect pouvant résulter de l’accès ou de l’utilisation du site.
        </p>
      </section>

      <section class="legal-section">
        <h2>2 – Propriété intellectuelle</h2>
        <p>
          Le site internet <strong>laitthymsel.com</strong> constitue une œuvre de l’esprit
          protégée par les dispositions du Code de la propriété intellectuelle.
        </p>
        <p>
          L’ensemble du site, ainsi que les textes, images, photographies, graphismes,
          logos et contenus, sont la propriété exclusive de la société
          <strong>Lait Thym Sel</strong>, sauf mentions contraires.
        </p>
        <p>
          Toute reproduction, représentation, modification ou adaptation, totale ou partielle,
          du site ou de l’un de ses éléments, sans autorisation écrite préalable, est strictement
          interdite et constitue une contrefaçon.
        </p>
      </section>

      <section class="legal-section">
        <h2>3 – Données personnelles</h2>
        <p>
          Le Restaurant Lait Thym Sel est susceptible de collecter des données personnelles
          via les formulaires présents sur le site afin d’assurer la gestion des demandes
          et des réservations.
        </p>
        <p>
          Ces données sont destinées exclusivement au Restaurant Lait Thym Sel.
          Conformément au Règlement Général sur la Protection des Données (RGPD),
          l’utilisateur dispose d’un droit d’accès, de rectification, de suppression
          et d’opposition.
        </p>
        <p>
          Toute demande peut être adressée à :
          <strong>contact@laitthymsel.fr</strong>
        </p>
      </section>

      <section class="legal-section">
        <h2>4 – Cookies</h2>
        <p>
          Le site peut être amené à déposer des cookies afin d’améliorer l’expérience
          utilisateur et les performances du site.
        </p>
        <p>
          L’utilisateur peut configurer son navigateur pour refuser les cookies.
          Pour plus d’informations :
          <a href="https://laitthymsel.com/politique-des-cookies/" target="_blank" rel="noopener">
            consulter la politique des cookies
          </a>.
        </p>
      </section>

      <section class="legal-section">
        <h2>5 – Responsabilité</h2>
        <p>
          Le Restaurant Lait Thym Sel ne saurait être tenu responsable de tout dommage
          direct ou indirect résultant de l’utilisation ou de l’impossibilité d’utiliser le site.
        </p>
      </section>

      <section class="legal-section">
        <h2>6 – Informations légales</h2>

        <p><strong>Propriétaire du site :</strong><br />
          Lait Thym Sel – SARL F2GM<br />
          17, rue Boisnet – 49100 Angers<br />
          Téléphone : 02 41 27 20 40<br />
          E-mail : contact@laitthymsel.fr
        </p>

        <p>
          Capital social : 10 000 €<br />
          RCS Angers : 830 927 380<br />
          Code APE : 5610A
        </p>

        <p>
          <strong>Responsable de publication :</strong><br />
          Lait Thym Sel – SARL F2GM
        </p>

        <p>
          <strong>Création & développement du site :</strong><br />
          <a
            href="https://maisondellalucia.fr"
            target="_blank"
            rel="noopener"
          >
            Maison della Lucia
          </a><br />
          Direction artistique & développement web
        </p>

        <p>
          <strong>Hébergement :</strong><br />
          À compléter selon l’hébergeur du site.
        </p>

        <p>
          <strong>Crédits photographiques :</strong><br />
          Laura Evrat
        </p>
      </section>

    </div>

  </section>
</template>

<style scoped>
/* =========================================================
   PAGE — MENTIONS LÉGALES
========================================================= */
.legal-page {
  background: #0b0b0b;
  color: rgba(235, 225, 210, 0.85);
  padding: 180px 24px 220px;
  font-family: var(--font-body);
}

/* =========================================================
   HEADER
========================================================= */
.legal-header {
  text-align: center;
  margin-bottom: 120px;
}

.legal-kicker {
  display: block;
  font-size: 12px;
  letter-spacing: 0.4em;
  color: var(--gold);
  margin-bottom: 18px;
}

.legal-header h1 {
  font-family: var(--font-title);
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.06em;
}

/* =========================================================
   CONTENU
========================================================= */
.legal-content {
  max-width: 760px;
  margin: 0 auto;
}

.legal-section {
  margin-bottom: 72px;
}

.legal-section h2 {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 400;
  color: var(--gold);
  letter-spacing: 0.08em;
  margin-bottom: 24px;
}

.legal-section p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
  opacity: 0.9;
}

.legal-section a {
  color: var(--gold);
  text-decoration: none;
}

/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 1024px) {
  .legal-header h1 {
    font-size: 40px;
  }

  .legal-section p {
    font-size: 16px;
  }
}
</style>
