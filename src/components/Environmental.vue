<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">   

      <h1 class="title center__text">Envoi SMS Pro Evénementiel</h1>
           <img class="card__image" src="/../images/environment.png" alt="" />
      <p>
        La communication est un enjeu crucial dans l’événementiel. Servicesms.sn
        vous offre les outils idéaux pour <strong>améliorer votre stratégie marketing</strong> et
        ainsi assurer la bienséance de vos événements.
      </p>
      <p>
        Grâce à l’envoi automatique de SMS, gagnez du temps en transmettant une
        <strong>invitation</strong>, une <strong>information</strong> ou un <strong>formulaire d’inscription</strong> à vos
        contacts ciblés! Nous vous offrons l’opportunité de communiquer sur vos
        événements <strong>rapidement</strong>, <strong>efficacement</strong> et à moindres coûts.
      </p>
      <p>
        L’envoi de <strong>SMS en masse</strong> vous permet également de <strong>comptabiliser
        rapidement qui sera présent</strong>, ce qui facilite donc l’organisation
        générale. En effet, de par notre plateforme, vous pouvez consulter les
        réponses à vos messages ainsi que toutes les <strong>statistiques</strong> relatives à
        l’ouverture du SMS ou même le nombre de « clics » sur votre lien.
      </p>
      <p>
        Grâce à Servicesms.sn, faites la <strong>promotion de vos événements</strong> en toute
        autonomie et simplement ! Nos solutions vous permettent aussi d’être
        efficace d’un point de vue organisationnel et de minimiser vos efforts
        pour un maximum de résultats.
      </p>
      <h3>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans l’événementiel. <br>En voici quelques exemples :
      </h3>
      <p>
        <li>Invitations (soirées, salons, séminaires) <br /></li>
        <li>Invitations (Mariages, baptêmes, anniversaires) <br /></li>
        <li>Relance des visiteurs préinscrits <br /></li>
        <li>Relance des inscrits aux conférences <br /></li>
        <li>Remerciement visiteurs / exposants post salon <br /></li>
        <li>Prospection pour de la location de salle ou autres lieux <br /></li>
        <li>Communication avec les fournisseurs</li>
      <p>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Monsieur Diop, <br>Directeur BWTECH est heureux de vous inviter lundi 24
        avril, lors de sa soirée de l’entrepreneuriat. Nous vous attendons
        impatiemment ! »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
       <p class="card__details">
        « Madame, Monsieur, <br>nous vous rappelons votre inscription au concert de
        Youssou Ndour organisé demain soir au grand théâtre. Nous vous y
        attendons à partir de 19h30. »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
        « Nous remercions tous nos invités pour cette agréable soirée. Nous
        espérons que ous avez passé un moment inoubliable ! Retrouvez nous sur :
        www.senevent.sn pour d’autres évènement dans la région. »
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
