<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
           
      <h1 class="title center__text">Envoi SMS PRO pour le Marketing et la communication</h1>
           <img class="card__image" src="/../images/marketing.png" alt="" />
      <p>
        Le SMS pro marketing s’est imposé comme l’un des <strong>outils de fidélisation
        le plus efficace en B to C</strong> ces dernières années. <br>Le SMS pro est aussi
        également exploité dans le cadre d’un plan multimédia de <strong>prospection</strong>.
      </p>
      <p>
        Le SMS est <strong>peu coûteux</strong>, il possède un taux d’ouverture frôlant les 98 %.
        Il est un bon support de <strong>cross marketing</strong>. Il rencontre un taux d’intérêt
        marqué pour ses messages commerciaux, bien plus que pour les autres
        médias que sont le mailing, le démarchage téléphonique, ou encore le
        marketing direct papier. Rappelons enfin que le temps d’ouverture moyen
        d’un mail de promotion est de 15 heures alors que celui du SMS est
        d’environ <strong>3 minutes</strong>. De plus, un smartphone est consulté environ 150
        fois par jour ! Autant d’arguments à prendre en compte pour sa
        communication d’entreprise.
      </p>
      <p>
        Les excellents taux d’ouverture poussent les professionnels du secteur à
        l’utiliser pour renvoyer leurs messages vers :
      </p>
      
        <li>de la vidéo, <br /></li>
        <li>des réseaux sociaux, <br /></li>
        <li>des liens, <br /></li>
        <li>du SMS 2.0 renvoyant vers des sites dédiés smartphones, <br /></li>
        <li>de l’événementiel…</li>
      
      <p>
        Mais le SMS PRO comme support de lien n’est pas le seul usage que l’on
        peut avoir. En effet, au-delà des fonctionnalités d’envoi de masse et de
        personnalisation de vos messages vous apporte le choix de communiquer
        par ce média entraine des externalités positives à votre image qui sera
        associée à la <strong>modernité et à la proximité client</strong>.
      </p>
      <p>
        Offrez aux clients de votre agence un <strong>plan de communication efficace</strong>.
      </p>
      <p>
        Préparez une campagne en quelques clics :
      </p>
      <p>
        <li>complète, </li>
        <li>personnalisée, </li>
        <li>suivant les taux d’ouverture,</li>
        <li>gérant les envois en différés, </li>
        <li>gérant les stop,</li>
        <li>permettant la personnalisation du nom d’émetteur et les noms
        commerciaux, </li>
        <li>et bien plus encore…</li>
      <p>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Monsieur Mbacké,<br> nous vous informons que votre abonnement pour la
        chaine Touba Tv arrive à terme. Pensez à vous réabonnez en cliquant sur
        ce lien : https://toubatv.sn »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
        « C’est la semaine des affaires chez Swiss Gold Bazin. Saisissez le code
        « PROMO » dans votre e-panier pour bénéficier de 15% de remise jusqu’au
        18/08/2021. L’équipe swiss gold bazin »
      </p>
       </div>

       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
        « C’est le moment de consulter nos offres d’abonnements sur notre site
        internet : www.mag.sn <br>Nous vous offrons une remise de 30% à partir de 2
        abonnements hebdomadaires à nos magazines. »
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
import SideNav from './SideNav';
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
