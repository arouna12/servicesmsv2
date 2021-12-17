<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
    
      <h1 class="title center__text">
        Envoi SMS PRO pour les boutiques prêt-à-porter
      </h1>
          <img class="card__image" src="/../images/porter.png" alt="" />
      <h2>
        L’utilisation des campagnes SMS pour les magasins de prêt-à-porter
      </h2>
      <p>
        Les magasins de prêt-à-porter connaissent aujourd’hui une véritable
        transformation numérique. L’utilisation de nouveaux moyens de
        communication tels que les réseaux sociaux ou l’email se fait de plus en
        plus. Cela leur permet de diffuser plus largement leurs offres et donc
        d’accroître leur chiffre d’affaires. L’envoi de <strong>campagnes SMS</strong> est
        utilisé fréquemment par les magasins de prêt-à-porter. Cet outil ne
        cesse d’évoluer et possède des avantages que peu de moyens de
        communication ont à ce jour. Les magasins de prêt-à-porter l’utilisent
        pour sa <strong>rapidité</strong> et son <strong>efficacité</strong>, notamment en utilisant le <strong>sms
        marketing</strong> pour diffuser leurs offres en masse.
      </p>
      <h3>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le prêt à porter.<br> Voici quelques exemples de SMS mode / prêt
        à porter :
      </h3>
      <p>
        <li>Ventes privées <br /></li>
        <li>Soldes <br /></li>
        <li>Nouvelles collections <br /></li>
        <li>Programme de fidélité <br /></li>
        <li>Ouverture exceptionnelle</li>
      <p>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
           <p class="card__details">
        « Votre Boutique Gold Swiss vous attend dès le lundi 10 juin pour les
        soldes privées et profitez ainsi de promotions jusqu’à -50%. Offre
        valable sur présentation de ce SMS. »
      </p>
      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
       <p class="card__details">
        « Madame Diop, <br>nous vous informons que les nouveaux Bazin Riche sont
        bien arrivés. Vous pouvez venir les récupérer du lundi au samedi de 10h
        à 19h. »
      </p>
      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « La 2éme démarque a commencé dans votre Boutique gold. Profitez de
        promotions allant jusqu’à -60%. »
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
import SideNav from "./SideNav"
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
