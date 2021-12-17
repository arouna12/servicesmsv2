<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
            
      <h1 class="title center__text">Envoi campagne SMS PRO pour les (cafés, hôtels, restaurants)</h1>
          <img class="card__image" src="/../images/cafe.png" alt="" />
      <p>
        Les entreprises dans le secteur des cafés, hôtels et restaurants sont<strong> de
        plus en plus nombreuses à faire appel au SMS et ce à juste titre !</strong>
      </p>
      <p>
        L’objectif étant de communiquer rapidement et efficacement avec vos
        clients afin <strong>d’établir une relation de proximité, de confiance et d’en
        attirer de nouveaux.</strong>
      </p>
      <p>
        De plus, grâce aux statistiques vous pourrez facilement connaître la
        délivrabilité de vos SMS (envoyés, reçus, lus) et suivre votre ROI
        (Retour sur Investissement) en fonction <strong>de la fréquentation et du nombre
        de réservations de votre établissement.</strong>
      </p>
      <p>
        Pour les CHR, l’usage du SMS peut se faire <strong>au quotidien de
        façon régulière</strong>, ainsi qu’à <strong>titre événementiel et donc de façon
        plus ponctuelle.</strong>
      </p>
      <h2>Au quotidien</h2>
      <p>
        Vous pouvez envoyer chaque matin les plats du jour, une fois par semaine
        vos offres promotionnelles… Ces actions récurrentes <strong>renforceront
        l’attachement de vos clients à votre restaurant et ne vous prendra que
        quelques minutes.</strong>
      </p>
      <p>
        Aussi, il est également très apprécié par les consommateurs de recevoir
        une <strong>confirmation de leur réservation</strong>. Cela leur permet d’être assurés
        que leur réservation a bien été prise en compte et ils peuvent avoir
        accès à tous les détails en un instant seulement (ex : ajout du lien
        plan dans votre SMS).
      </p>
      <p>
        Également, le SMS est <strong>un allié pour tous les imprévus entrainant la
        fermeture de votre établissement </strong>(évènement météorologique, grève…).
      </p>
      <h2>A titre évènementiel</h2>
      <p>
        Vous avez prévu une soirée spéciale dans votre établissement comme un
        concert, ou bien un cocktail ? Envoyez un <strong>SMS marketing précisant le
        jour et l’heure de l’événement à vos clients.</strong>
      </p>
      <p>
        Ainsi, terminé les évènements ratés et les clients déçus de ne pas avoir
        été informés et ce malgré vos autres supports de communication (ex
        flyers…) !
      </p>
      <p>
        Le SMS peut également être opportun pour informer : <strong>du lancement d’une
        nouvelle carte ou lors des fêtes </strong>(St-Valentin, Fête des Mères, Noël…).
      </p>
      <h3>Exemples de campagnes SMS :</h3>
     
     
    
      <div class="cards">
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
        « Chers clients, <br>nous avons le plaisir de vous inviter à un cocktail
        pour découvrir nos nouveaux locaux ! Voici le lien du plan : Https :
        plan.wf /Rtf »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Monsieur Diop, <br>nous vous confirmons votre réservation numéro AFG1245.
        Votre chambre sera disponible le 23juillet dès 10h du matin. Merci de
        faire confiance à notre hôtel. »
      </p>
       </div>
       <div class="card">
         <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
          <p>
        « Bonjour Mr Ousmane, <br>Nous vous invitons à venir découvrir de nouvelles
        saveurs, suite à la mise en place de notre nouvelle carte. -10% sur
        votre repas sur présentation de ce SMS avant la fin du mois. <br>Restaurant
        Senthieboudjien. »
      
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
