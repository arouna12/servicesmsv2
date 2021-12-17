<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
               

      <h1 class="title center__text">
        Envoi SMS Pro Parti Politique
      </h1>
       <img class="card__image" src="/../images/vote.png" alt="" />
      <p>
        La <strong>communication</strong> avec le public est un enjeu primordial pour un parti
        politique. En effet, la réussite du parti est entièrement due à la
        communication des valeurs, principes, normes et idéaux de celui-ci.
      </p>
      <p>
        Servicesms.sn vous propose de <strong>moderniser votre image</strong> mais aussi de gagner en efficacité
        grâce à l’envoi automatique de SMS. De plus, grâce à nos services, vos adhérents se sentiront
        d’autant plus impliqués dans la vie sociale de votre parti.
      </p>
      <p>
        La <strong>stratégie en communication</strong> d’un parti politique se doit d’être
        <strong>innovante</strong>, <strong>directe</strong> et <strong>efficace</strong>. Servicesms.sn vous propose de nombreux
        services et diverses options pour atteindre vos objectifs. Envoyez des
        SMS à tous vos adhérents en un clic pour les inviter à un événement
        politique ! Vous pouvez également les inviter à vous joindre lors d’une
        réunion d’information. L’envoi de SMS peut également être utilisé pour
        <strong>attirer de nouveaux adhérents</strong> à votre cause et ainsi accroitre vos
        chances aux élections.
      </p>
      <p>
        Le SMS est le média le plus efficace car il est <strong>directement reçu</strong> par vos
        destinataires puis lu en quelques minutes seulement. C’est en ce sens
        que Servicesms.sn vous offre la possibilité de rassembler et de
        <strong>mobiliser un maximum de personnes en un temps record</strong>.
      </p>
      <p>
        Un parti politique se doit également de remercier ceux supportant leur
        cause après une victoire mais aussi une défaite. Le SMS personnalisé,
        grâce au publipostage, vous permettra ainsi de garder une certaine
        proximité avec vos adhérents et de transmettre une image publique de
        qualité.
      </p>

      <h3>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile pour un parti politique. <br>En voici quelques exemples :
      </h3>

      <p>
        <li>Animation d’une campagne électorale <br /></li>
        <li>Invitation des adhérents à une réunion d’information <br /></li>
        <li>Invitation à une réunion militante <br /></li>
        <li>Mobilisation autour d’une interview <br /></li>
        <li>Mobilisation autour d’une manifestation <br /></li>
        <li>Annonce des résultats d’une élection <br /></li>
        <li>Remerciement des adhérents et militants post campagne <br /></li>
        <li>Appels au vote <br /></li>
        <li>Annonces de résultats <br /></li>
        <li>Appels aux dons <br /></li>
      <p>
  <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Nous attendons tous les adhérents du parti samedi soir à partir de 18h pour une réunion d’information. »
        </p>
      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
       <p class="card__details">
       « Retrouvez votre élu ce soir sur RTS1 TV à partir de 20h30 pour un grand débat politique. »
       </p>

      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
         « Les bureaux de vote sont ouverts samedi de 8h à 20h. Nous comptons sur tous nos adhérents pour s’y rendre et se mobiliser ! »
         </p>
      </div>
      </div>
    </section>
   <SideNav/>
    </div>
    <Footer />
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
