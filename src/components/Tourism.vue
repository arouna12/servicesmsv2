<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
              

      <h1 class="title center__text">Envoi SMS Pro pour les agences de voyage</h1>
        <img class="card__image" src="/../images/tourist.png" alt="" />
      <p>
        Le tourisme, comme de nombreux secteurs d’activité, vit une vraie
        révolution numérique. Les agences de voyages bénéficient aujourd’hui de
        nombreux canaux de communication variés pour accroître leur clientèle
        tout en fidélisant leurs clients déjà consommateurs et faire face au
        poids des géants de la réservation en ligne. <br />Le <strong>SMS professionnel</strong> est
        très pertinent par sa capacité à s’adapter à tous les besoins. Il permet
        à la fois de se <strong>différencier</strong>, nde <strong>communiquer</strong> sur son <strong>image</strong> et de créer
        rapidement et efficacement une relation privilégiée avec ses clients
        grâce au <strong>SMS d’alerte</strong>. Les fonctionnalités et avantages du <strong>SMS pro</strong> en
        font un outil idéal pour les agences de voyage qui désirent avoir une
        <strong>communication</strong> efficace et rapide avec leurs clients.
      </p>
      <p>
        Dans le but de fidéliser votre clientèle et présenter une image de
        qualité, la communication est un enjeu primordial. C’est pour cela que
        servicesms.sn vous propose d’envoyer des <strong>SMS de qualité</strong> au prix le plus
        compétitif du marché.
      </p>
      <p>
        Avec l’<strong>augmentation</strong> du nombre annuel de <strong>touristes</strong> tout comme leur niveau
        d’exigence, <strong>les informer rapidement</strong> sur une catastrophe naturelle, un
        retard, des grèves ou des annulations semble indispensable. Cette
        <strong>communication</strong> qui se doit d’être <strong>optimale</strong>, est un réel challenge.<br /> <br />
        Servicesms.sn vous aide à simplifier votre organisation en envoyant de
        nombreux SMS en un clic seulement. Le but est de <strong>fidéliser vos clients</strong>
        actuels et d’en attirer de nouveaux.
      </p>
      <h2>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile pour les agences de voyage. <br />En voici quelques exemples:
      </h2>
      <p>
        <li>Itinéraire Remerciements <br /></li>
        <li>Alerte météo <br /></li>
        <li>Confirmation d’achat <br /></li>
        <li>Changement d’horaire <br /></li>
        <li>Retard <br /></li>
        <li>Annulation <br /></li>
        <li>Ticket électronique <br /></li>
        <li>Bagage perdu <br /></li>
        <li>Chambre d’hôtel prête <br /></li>
        <li>Promotions</li>
      <p>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
       <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
        « Pour noël, <br>votre agence de voyages vous propose de nombreux séjours à -30%.
         RDV sur notre site www.voyages.sn »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Monsieur Diop, <br>nous vous confirmons votre réservation pour le week-end du 12 Juin.
         Votre vol partira de Maroc à 10h samedi matin. »

      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
        « La compagnie Sene’Air vous informe que de nombreux vols seront retardés aujourd’hui 
        et demain à cause de mouvements sociaux.
         Plus d’information au : 1 23 45 67 890. »

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
