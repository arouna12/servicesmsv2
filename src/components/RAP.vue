<template>
  <div>
  <Navigation/>
    <section class="section__container top__container blog__details">
      <h1 class="title center__text">RAT'PAS VOTRE BUS</h1>
      <h2 class="title center__text">Une solution qui vous permet de prendre le contrôle<br /> en main des
        <strong>informations horaires</strong> en temps réel<br /> partout au Sénégal.</h2>
    
      <p><strong>Les Horaires de vos Bus à portée d’alerte par sms !</strong></p>
      <ul>
        <li>
          Si vous ne voulez plus attendre dans la chaleur ou sous la pluie.
        </li>
        <li>Si vous ne voulez plus courir après votre bus.</li>
        <li>Si vous ne voulez plus rester longtemps dans les arrêts.</li>

         <div>
        <img
          class= "marche__image img__responsivetitle"
          
          src="/../images/arret-bus.png"
          alt="" 
        />
      </div>
        <p>
          Rat ‘pas votre bus est fait pour vous alors que SERVICE-SMS à intégrer
          dans sa plate-forme une autre solution qui permettra de prendre le
          contrôle en main des horaires de bus partout au Sénégal par un simple
          SMS.
        </p>
        <p>
          Avec les projets structurants du <strong>« Plan Sénégal émergent »</strong>, le pays
          envisage de réaliser de nombreux investissements et infrastructures
          modernes dans le secteur du transport urbain et interurbain.
        </p>
        <p>
          Ce service vise à aider la population sur le transport urbain avec les
          bus TATA et Dakar Dem-Dikk en les simplifiant les voyages à Dakar,
          dans les autres régions ou même en dehors du pays. Ce service <strong>horaire
          par SMS</strong> est de parvenir à simplifier la vie quotidienne des millions
          de sénégalais qui se déplacent chaque jour pour vaquer aux nombreuses
          occupations dans tout le pays.
        </p>
        <p>
          Le service payant affiche sur votre téléphone portable des
          informations horaires en temps réel.
        </p>
        <li><strong>Aucune connexion internet requise sur le téléphone portable</strong> ;</li>
        <li><strong>L’argent sera déduit directement du compte Orange Money</strong> ;</li>
        <li><strong>Economiser du temps</strong></li>
      </ul>
      <p>
        Il vous suffit d’envoyer un SMS pour recevoir en moins d’une minute les
        trois propositions horaires les plus rapides pour atteindre votre
        destinataire. Pour pouvoir en profiter, inscrivez-vous exemple : 2828…
      </p>
      <p>
        Le numéro de téléphone portable doit être enregistré sur un compte
        orange money ou bancaire ou autre.
      </p>
      <p>
        <strong> Pour le bus : </strong> encodez le numéro votre de ligne de bus
        <strong>« ligne 12 »</strong> ou si vous ne connaissez pas votre ligne tapez le nom de
        votre gare de départ <strong>« Dakar »</strong> suivi d’un espace et du nom de votre gare
        d’arriver <strong>« Ouakam »</strong> puis envoyez le tout à l’exemple : 2828…
      </p>
      <p>
        <strong> Pour le TER :</strong> encodez le nom de votre gare de départ
        suivi d’un espace et du nom de votre gare d’arriver, puis envoyez le
        tout à l’exemple : 2828…
      </p>
      <p>
        <strong>Pour le vol : </strong> pour recevoir les infos sur le vol de
        votre destinataire encodez le nom de votre pays de départ <strong>« Sénégal »</strong>
        suivi d’un espace et du nom de votre pays d’arrivé<strong> « Maroc »</strong>
      </p>
      <p>
        L’usager reçoit automatiquement dans la minute un message donnant tous
        les détails pour vous rendre au plus vite à destination. S’il souhaite
        obtenir de plus amples informations sur l’un des trois itinéraires
        proposés par service-sms il envoie<strong> 1</strong>,<strong>2</strong> ou <strong>3</strong> par <strong>SMS</strong>.
      </p>
      <p>La consultation d’un horaire ou d’une information détaillée vous coutera <strong>100 Francs CFA</strong>.</p>

      *Bientôt disponible
      <h4 class="center__text">Horaire par SMS</h4>
      <h4 class="center__text">Maitrisez votre temps</h4>
    </section>
  <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
</style>
