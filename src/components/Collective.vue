<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
       

      <h1 class="title center__text">
        Envoi SMS PRO pour les collectivités locales, mairies
      </h1>
               <img class="card__image" src="/../images/local.png" alt="" />
      <h2>La fonctionnalité révolutionnaire pour le service public</h2>
      <p>
        Vous êtes acteur de la fonction publique ? Grâce à notre plateforme
        Service-SMS, ne perdez plus de temps pour l’envoi de vos sms en masse
        pour rappeler vos rendez-vous. L’organisation de votre accueil public se
        trouvera améliorée et simplifiée grâce à notre plateforme. Vous pourrez
        optimiser la gestion de votre agenda d’accueil du public par rendez-vous
        et diminuer jusqu’à 75% le taux de rendez-vous reportés ou manqués pour
        cause d’absentéisme. La plateforme servicesms.sn vous permet d’envoyer
        directement des SMS en masse en un simple clic à vos contacts.
      </p>
      <p>
        Votre administré reçoit une alerte SMS qui lui indique de ne pas oublier
        qu’il a rendez-vous dans votre service à la date indiquée.
      </p>
      <p>
        Les avantages du rappel de rendez-vous avec servicesms.sn :
      </p>
      <p>
        Le SMS, le rappel le plus efficace en un simple clic, dans <strong>95%</strong> des cas
        il sera ouvert et retenu, surtout si vous prévoyez de le faire la veille
        à une heure programmée tel que le début de soirée. Il sera lu dans les <strong>5
        minutes</strong> qui suivent son envoi effectif grâce à nos <strong>solutions SMS PRO</strong>.
      </p>
      <h2>Comment être proche de vos administrés ?</h2>
      <p>
        De nombreux sondages montrent qu’un service public de qualité passe par
        une <strong>communication de proximité claire, simple, rapide et moderne</strong> .
        Informer ses administrés de la ville de sa commune, de son département ou
        de sa région renforce le sentiment de dépense publique bien gérée, utile
        à tous.
      </p>
      <h3>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le secteur public. <br>En voici quelques exemples :
      </h3>
      <p>
        <li>la diffusion d’informations pratiques,</li>
         <li>des alertes :</li>
         <p>
      
      <p>
        <li>météo, <br /></li>
        <li>d’ordre sanitaire, <br /></li>
        <li>de modifications de circulation, <br /></li>
        <li>de travaux temporaires…</li>
        <p>
      
      <p>
       <li> des notifications de remise de pièces administratives en attente, <br /></li>
        <li>des rencontres sportives, <br /></li>
        <li>d’événements culturels …</li>
      <p>
      <h3>Exemples de campagnes SMS dans le secteur public :</h3>
      <div class="cards">
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
            « Alerte info : <br>Des coupures d’eau sont prévues ce jeudi à partir de
            7h. Retour à la normale vers 20H. Prévoyez des réserves d’eau
            suffisantes pour vous hydrater. <br />
            Les services techniques de la mairie. »
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
            « Bonjour M. Sow <br />
            Vous avez commandé une nouvelle poubelle pour vos déchets
            recyclables. Les services techniques de la commune vous la livreront
            ce mercredi entre 8H et 12H. »
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
            « Monsieur Sarr, <br> Nous avons bien reçu votre demande de permis de
            construire F24C3678. Les services du cadastre vous proposent un
            rendez le 16/06/2021 pour compléter votre dossier. L’urbanisme tél :
            01234567890″ »
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

.card{
    background: $color-grey;
}
</style>
