<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
            

      <h1 class="title center__text">
        Envoi SMS PRO pour les professionnels de santé,
        pharmacie, ambulances, vétérinaires
      </h1>
          <img class="card__image" src="/../images/sante.png" alt="" />
      <p>
        Vous êtes secrétaire médicale ? Grâce à cette plate-forme, <strong>ne perdez
        plus de temps</strong> envoyer des sms en masse à vos contacts pour rappeler vos
        rendez-vous. L’organisation de votre accueil public se trouvera
        améliorée et simplifiée grâce à cette plateforme via SMS. Vous pourrez
        <strong>optimiser la gestion de votre agenda</strong> et diminuer jusqu’à 75% le taux de
        rendez-vous manqués pour cause d’absentéisme. Servicesms.sn unique vous
        permet d’envoyer directement des <strong>SMS en masse</strong> en un simple clic aux
        contacts de vos clients.
      </p>
      <p>
        Votre patient reçoit une <strong>alerte SMS</strong> qui lui indique de ne pas oublier
        qu’il a rendez-vous à votre cabinet à la date indiquée.
      </p>
      <h2>Les avantages du rappel de rendez-vous avec Servicesms.sn :</h2>

      <p>
        Le SMS, le rappel le plus efficace en un simple clic, dans <strong>95%</strong> des cas
        il sera ouvert et retenu, surtout si vous prévoyez de le faire la veille
        à une heure programmée telle que le début de soirée. Il sera lu dans les
        <strong>5 minutes</strong> qui suivent son envoi effectif grâce à notre solution <strong>SMS PRO</strong>.
      </p>
      <h2>
        Médecins, laboratoires, infirmières, professionnels de l’Hospitalisation
        à Domicile (HAD)
      </h2>
      <p>
        Tous les professionnels de santé sont confrontés à la problématique de
        <strong>gestion de leur agenda</strong> au sein de leur secrétariat médical. Utiliser
        servicesms.sn pour améliorer la proximité avec vos patients.
      </p>
      <p>
        <li>Les rappels de rendez-vous, <br /></li>
        <li>Les avis de passages pour des soins, <br /></li>
        <li>La réponse à des demandes d’interventions, <br /></li>
        <li>L’avis de livraison de dispositifs médicaux… <br /></li>
        <li>Envoi de résultats et diagnostics par SMS <br /></li>
        <li>SMS contenant un mot de passe unique pour accès à un extranet sécurisé
        (résultats d’analyses) <br /></li>
        <li>SMS prévenant d’un retard <br /></li>
        <li>Communication avec tous vos partenaires</li>
      <p>
      <p>
        Autant de circonstances qui, gérées avec notre solution d’envoi SMS Pro
        en masse, vous permettra à vos partenaires de santé de <strong>réduire la
        distance et le temps d’attente</strong> des patients à domicile ou au cabinet.
      </p>
      <h3>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le domain médical. <br>En voici quelques exemples :
      </h3>
      <li>Rappel de rendez-vous programmé</li>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
       <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
        « Bonjour Mme Sarr, <br>N’oubliez pas votre RDV de demain 9h45 chez le
        Docteur Sané. En cas d’empêchement merci de nous prévenir au plus tôt
        par SMS ou appel au 1234567890. <br />
        Cabinet du Dr Sané »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Pharmacie du centre-ville Votre renouvellement de médicament est
        disponible. ref : 86456 <br />
        Cordialement. »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
        « Bonjour, <br>nous vous rappelons votre RDV du 13/01/2021 pour la révision
        de votre machine. Cordialement, CXG OXY. »
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
