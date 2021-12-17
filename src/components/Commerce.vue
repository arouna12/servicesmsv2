<template>
  <div>
    <Navigation />

  <div class="grid__section">
    <section class="section__container top__container blog__details">
       <h1 class="title center__text">Envoi SMS PRO pour les commerces, boutiques de luxe, épiceries</h1>
                     <img class="card__image" src="/../images/boutique.png" alt="" />

      <h2>Les clients intéressés par les SMS commerciaux</h2>

      <p>
        Selon une publication rédigée conjointement par la Mobile Marketing
        Association, en 2016, <strong>82%</strong> des personnes recevant des messages mobiles de
        type commercial <strong>trouvent leurs contenus intéressants</strong>. Alors n’attendez
        plus et envoyez votre première campagne <strong>SMS PRO</strong> avec Servicesms.sn,
        votre <strong>plateforme SMS 100% Sénégalaise !</strong>
      </p>
      <h2>
        Comment créer de l’animation autour de votre activité de commerce ?
      </h2>
      <p>
        Les thèmes et les occasions de communiquer avec votre clientèle ne
        manquent pas. Le <strong>taux d’ouverture des SMS PRO par les clients est bien
        supérieur</strong> aux autres médias de marketing tels que le démarchage
        téléphonique, le mailing ou le marketing direct papier.
      </p>
      <p>
        Votre clientèle apprécie que vous puissiez lui envoyer un <strong>message
        personnalisé</strong> autour d’une information vous concernant. De plus en plus
        de commerçants mettent en place une politique de fidélisation via SMS
        pour envoyer à tous leurs contacts une invitation pour :
      </p>
      
        <li>une dégustation,</li>
        <li>une vente privée,</li>
        <li>une nouvelle technique de soin, </li>
        <li>ou encore avertir d’une livraison, d’un retrait en magasin.</li>
    
      <p>
        Ils créent également des campagnes SMS de manière rationnelle en
        utilisant les nos gammes de fonctionnalités d’envois différés etc...
      </p>
      <p>
        Enfin, en complément de vos diffusions programmées, bâtissez un fichier
        de contacts précis qui vous permettra d’optimiser l’utilisation des
        fonctionnalités de <strong>SMS personnalisés</strong>. Vos clients recevront un SMS
        indiquant leur <strong>prénom</strong> ou leur <strong>titre</strong> <strong> « Madame »</strong>, <strong>« Monsieur »</strong>, ou encore
        <strong>« Cher Aly »</strong> qui mettra en avant la proximité de lien et de
        considération que vous leur témoignez.
      </p>
      <h3>Exemples de campagnes SMS :</h3>

      <div class="cards">
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
            « Bonjour Fatima,<br> Seneboutique vous invite à découvrir la nouvelle
            collection en exclusivité lors de notre vente privée vendredi soir.
            Soirée et conseils maquillage rien que pour vous. Confirmez votre
            réponse au 37833″ »
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
            « Chers clients,<br> Vendredi 18H, venez à notre dégustation de nos
            nouveaux plats et partagez une expérience unique avec notre chef
            cuisinière invité pour la soirée. <br>Infos sur :
             senethieboudjien.sn »
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
            « Bonjour Mr Faye, <br>L’épicerie Terranga vous remercie pour votre
            inscription à l’atelier cuisine. <br>Rendez-vous à la boutique samedi
            8H00. »
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
