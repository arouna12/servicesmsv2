<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
             

      <h1 class="title center__text">
        Envoi SMS Pro pour les agences de recrutement
      </h1>
         <img class="card__image" src="/../images/recruit.png" alt="" />
      <h2>Recruter et gérer son personnel via une plateforme SMS</h2>
      <p>
        Le domaine des ressources humaines est en pleine évolution numérique,
        notamment en ce qui concerne le recrutement. Les moyens de <strong>communication</strong>
        sont de plus en plus nombreux et offrent de nouvelles possibilités pour
        gérer le personnel et les embauches. Le <strong>SMS professionnel</strong>, de <strong>masse</strong> ou
        <strong>unitaire</strong>, est aujourd’hui un véritable atout, autant pour les <strong>agences
        intérim</strong> que pour les services <strong>RH</strong> des grandes et petites entreprises.
        Avec un taux de lecture de 97%, le SMS professionnel est sans aucun
        doute le canal le plus rentable, permettant de réaliser des <strong>campagnes
        sms</strong> en quelques minutes seulement, de rappeler les <strong>entretiens</strong> aux
        candidats grâce aux <strong>alertes SMS</strong> ou de promouvoir des offres d’emplois…
        <strong>C’est un outil simple, universel et rapide.</strong>
      </p>

      <h3>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le domaine du recrutement. <br>En voici quelques exemples:
      </h3>
      <p>
      <li>Alertes offres d’emploi <br></li>
      <li>Envoyer un message d’admissibilité à un candidat <br></li>
      <li>Rappel de rendez-vous <br></li>
      <li>Rappel de dates de mission <br></li>
     <li>Conseils de préparation pour un entretien ou trouver un emploi</li>
      <p>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
      « Nous cherchons un consultant junior pour agrandir notre Equipe. RDV sur notre site internet pour plus d’informations : https://recrutement.sn »
      </p>
      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
      « Bonjour Khadija,<br> votre mission commerciale reprend le 26 Janvier à 8h30. Votre chef d’équipe va vous contactez pour plus d’informations » 
      </p>
      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
       <p class="card__details">
      « Bonjour Fatima, <br>nous avons une mission pour vous du lundi 13 au vendredi 17h juin. Merci de nous contacter au 1 23 45 67 890 pour plus de renseignements. »
      </p>
      </div>
      </div>
    
    
     
    </section>
    <SideNav/>
    </div>
     <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
import SideNav from "./SideNav";
export default {
  components: {
    Navigation,
    Footer,
    SideNav
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
</style>
