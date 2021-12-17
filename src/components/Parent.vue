<template>
  <div>
    <Navigation />
    <div class="grid__section">

    <section class="section__container top__container blog__details">
      <h1 class="title center__text">
        Envoi sms aux parents d’élèves. Écoles, collèges, lycées, Formation,
        Universités
      </h1>

      <img class="card__image" src="/../images/teach-80x80.png" alt="" />

      <p>
        Notre plateforme va vous permettre de
        <strong>diffuser de l’information vers vos parents d’élèves</strong> et
        ce en temps réel grâce à la rapidité, la simplicité et l’universalité du
        SMS.
      </p>
      <p>
        Cette solution est très utile pour les établissements scolaires. Que ce
        soit pour une <strong>école maternelle</strong>,
        <strong>primaire</strong>, un <strong>collège</strong>, un
        <strong>lycée</strong> ou encore une <strong>école privée</strong>, un
        <strong>institut de formation</strong>, <strong>université</strong>, ou
        toute autre structure recevant des élèves, vos contraintes sont
        sensiblement les mêmes.
      </p>
      <p>
        La diffusion d’informations telles que des
        <strong>alertes SMS</strong> pour des évènements météo entrainant des
        perturbations ou encore des SMS en cas de
        <strong>mouvement de grève</strong>, de
        <strong>réunion parents professeurs</strong>,
        <strong>rappel de paiement</strong>,
        <strong>remise des builtin de notes</strong>,
        <strong>calendrier d’examen</strong>, <strong>rattrapages</strong>,
        ouverture d’une formation, acceptation dans un nouveau cursus …
      </p>
      <p>
        Les applications ne manquent pas et nombreux sont les établissements
        scolaires à utiliser une de nos solutions <strong>SMS Scolaire</strong>.
      </p>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png" />
          <p class="card__details">
            « Chers Etudiants de la FAC droit, la période des examens commencera
            le lundi 8 décembre et terminera le samedi 12 décembre. <br />Bonnes
            révisions ! »
          </p>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png" />
          <p class="card__details">
            « Votre enfant Marième Sow ne s’est pas présenté en cours ce jour à
            8h00. Merci de prendre contact rapidement avec l’établissement
            scolaire au 01234567890″ »
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png" />
          <p class="card__details">
            « Chers parents,<br />
            nous vous rappelons que la réunion parent/profs aura lieu demain
            soir à partir de 18h. »
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
