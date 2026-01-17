<template>
  <section class="cgu">
    <div class="cgu-inner">

      <header class="cgu-header">
        <h1>Conditions Générales</h1>
        <p class="cgu-intro">
          Les présentes Conditions Générales régissent les relations
          entre le restaurant Lait Thym Sel et ses clients.
        </p>
      </header>

      <article class="cgu-content">

        <h2>Préambule</h2>
        <p>
          Les présentes Conditions Générales régissent les relations entre
          la SARL FG2M Restaurant Lait Thym Sel, SARL au capital de 10 000 euros,
          immatriculée sous le numéro 830 927 380 RCS Angers,
          exploitant le restaurant Lait Thym Sel (ci-après la « Société »),
          et toute personne physique ou morale souhaitant effectuer
          une demande de réservation (ci-après le « Client »).
        </p>

        <p>
          Le Client reconnaît expressément avoir pris connaissance
          et accepter les présentes Conditions Générales
          lors du processus de réservation en ligne.
        </p>

        <h2>Article 1 – Objet</h2>
        <p>
          Les présentes Conditions Générales ont pour objet de déterminer
          les conditions dans lesquelles le Client peut effectuer,
          par le biais du système de réservation accessible sur le site
          <strong>laitthymsel.com</strong>, une demande de réservation
          afin de bénéficier des services de restauration proposés
          par le restaurant Lait Thym Sel situé
          au 17 rue Boisnet – 49100 Angers.
        </p>

        <h2>Article 2 – Modalités de réservation</h2>
        <p>
          La réservation en ligne s’effectue via le formulaire accessible
          à l’adresse <strong>https://www.laitthymsel.com/reserver</strong>,
          propulsé par la plateforme Zenchef.
        </p>

        <p>
          Le Client s’engage à renseigner l’ensemble des champs demandés,
          notamment la date, le service, l’horaire et le nombre de couverts.
          En cas d’indisponibilité, une alternative pourra lui être proposée,
          qu’il demeure libre d’accepter ou de refuser.
        </p>

        <p>
          L’empreinte bancaire demandée lors de la réservation
          constitue une garantie et ne correspond ni à un acompte,
          ni à un débit immédiat.
        </p>

        <h2>Article 3 – Annulation</h2>
        <p>
          Le Client dispose d’un délai de 12 heures avant l’horaire prévu
          pour modifier ou annuler sa réservation.
        </p>

        <p>
          Toute demande d’annulation peut être effectuée :
        </p>

        <ul>
          <li>par e-mail à l’adresse : <strong>contact@laitthymsel.fr</strong></li>
          <li>par téléphone au <strong>02 41 27 20 40</strong></li>
        </ul>

        <h2>Article 4 – Pénalités</h2>
        <p>
          En cas de non-présentation du Client sans annulation préalable
          dans les conditions ci-dessus, une pénalité pourra être appliquée.
          Cette pénalité est fixée à <strong>500 € par couvert réservé</strong>
          et sera prélevée automatiquement via l’empreinte bancaire.
        </p>

        <h2>Article 5 – Paiement sécurisé</h2>
        <p>
          Le système de réservation utilise la solution de paiement sécurisé
          Payzen, garantissant un haut niveau de sécurité.
          Les données bancaires sont cryptées via le protocole SSL
          et ne sont jamais conservées par la Société.
        </p>

        <h2>Article 6 – Responsabilité</h2>
        <p>
          La Société s’engage à fournir les prestations de restauration
          dans les conditions confirmées lors de la réservation.
          Elle ne saurait être tenue responsable en cas de défaut
          de présentation du Client.
        </p>

        <p>
          Les informations figurant sur le site,
          notamment les menus et visuels,
          sont fournies à titre indicatif et non contractuel.
        </p>

        <h2>Article 7 – Données personnelles</h2>
        <p>
          Les données collectées lors de la réservation sont destinées
          exclusivement à la gestion des réservations.
          Conformément à la loi « Informatique et Libertés »,
          le Client dispose d’un droit d’accès et de rectification.
        </p>

        <h2>Article 8 – Droit applicable</h2>
        <p>
          Les présentes Conditions Générales sont soumises
          au droit français.
          Tout litige sera porté devant les juridictions
          compétentes d’Angers.
        </p>

      </article>

      <footer class="cgu-footer">
        <span>
          Site conçu et réalisé par
          <a href="https://maisondellalucia.fr" target="_blank" rel="noopener">
            Maison della Lucia
          </a>
        </span>
      </footer>

    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   FOND & STRUCTURE
========================================================= */
.cgu {
  background: #0b0b0b;
  padding: 180px 24px 200px;
  color: rgba(235, 225, 210, 0.9);
}

.cgu-inner {
  max-width: 760px;
  margin: 0 auto;
  font-family: var(--font-title);
}

/* =========================================================
   HEADER
========================================================= */
.cgu-header {
  text-align: center;
  margin-bottom: 80px;
}

.cgu-header h1 {
  font-size: 34px;
  letter-spacing: .12em;
  font-weight: 400;
  color: var(--gold);
  margin-bottom: 20px;
}

.cgu-intro {
  font-size: 16px;
  line-height: 1.7;
  opacity: .7;
}

/* =========================================================
   CONTENU
========================================================= */
.cgu-content h2 {
  margin-top: 56px;
  margin-bottom: 18px;
  font-size: 18px;
  letter-spacing: .08em;
  color: var(--gold);
}

.cgu-content p,
.cgu-content li {
  font-size: 15px;
  line-height: 1.8;
  opacity: .85;
}

.cgu-content ul {
  padding-left: 18px;
}

/* =========================================================
   FOOTER
========================================================= */
.cgu-footer {
  margin-top: 120px;
  text-align: center;
  font-size: 13px;
  opacity: .6;
}

.cgu-footer a {
  color: var(--gold);
  text-decoration: none;
}

.cgu-footer a:hover {
  opacity: .9;
}
</style>
