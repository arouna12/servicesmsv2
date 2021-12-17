<template>
  <div>
    <Navigation />
    <section class="top__container section__container">
      <h1 class="marche__header center__text">
        Comment ça marche <br />
        SMS Mode d&#39;emploi <br />
        Comment lancer une campagne SMS ?<br />
        Suivez le guide, et réalisez vos campagnes SMS en seulement 4 étapes
        
      </h1>
      <div class="grid__normal seventy__container ">
        <div class="marche__text">
          <h2>Étape 1 : Créez votre compte</h2>
          <p>
            Remplir le formulaire d’inscription en renseignant votre email
            
            et numéro de téléphone.
          </p>
          <p>Le compte est créé : c’est sans engagement.</p>

          <p class="last__paragraph">
            Clause de confidentialité : Soyez sans crainte, SERVICES-SMS <br />
            s’engage à ne jamais utiliser vos informations personnelles à 
            des fins marketings, ni à les transmettre à des tiers.
          </p>
          
        </div>
        <img
          class="marche__image img__responsive"
          src="/../images/marche/mail_num_1.png"
          alt=""
        />
      </div>

      <div class="grid__normal seventy__container">
        <img
          class="marche__image img__responsive"
          src="/../images/marche/contact_imp_2.png"
          alt=""
        />
        <div class="marche__text">
          <h2>Étape 2 : Importez votre liste de contacts SMS</h2>
          <p>
            Intégrez très rapidement vos listes de contacts, gérez facilement
            
            vos listes noires, vos champs de publipostage <br />et vos filtres de
            segmentation.
          </p>

          <p class="last__paragraph">
            Bénéficiez également de fonctions de recherche avancées et de 
            fonctionnalités puissantes d’import / d’export. <br>Les doublons et
            
            numéros erronés sont supprimés automatiquement.
          </p>
        </div>
      </div>

      <div class="grid__normal seventy__container ">
        <div class="marche__text">
          <h2>Étape 3 : Envoyez votre campagne SMS</h2>
          <p>
            Composez votre message sur une interface simple et intuitive. <br />
            Paramétrez les options de personnalisation de l’émetteur, choisissez
            
            un envoi immédiat ou programmez votre campagne pour un envoi 
            ultérieur, et utilisez des modèles réutilisables et personnalisez
            
            vos envois avec des champs de publipostage<br />
            <p class="last__paragraph">
             (« Bonjour Mr #NOM# »,
            nous vous invitons à notre journée d’intégration qui aura lieu
            
            samedi 30 janvier 2021. »). Testez et envoyez
          </p>
        </div>
        <img
          class="marche__image img__responsive"
          src="/../images/marche/camp_lancer_3.png"
          alt=""
        />
      </div>

      <div class="grid__normal seventy__container">
        <img
          class="marche__image img__responsive"
          src="/../images/marche/accusé_recept_4.png"
          alt=""
        />
        <div class="marche__text">
          <h2>Étape 4 : Accédez à vos statistiques de campagnes</h2>
          <p>
            Obtenez des rapports statistiques précis de vos campagnes et des
            volumes de SMS envoyés en direct, avec des fonctions de filtrage 
            avancées. 
            <p class="last__paragraph">
            Vous trouverez sur votre espace client le détail par 
            numéro de la délivrabilité de vos SMS.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {
    Navigation,
    Footer
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.marche__header {
  color: $color-tertiary;
  background: $color-grey;
}
.marche__text {
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  padding: 2rem;
}

.last__paragraph {
  border-left: 3px solid $color-tertiary;
  padding-left: 1rem;
}
@media (min-width: 64rem) {
  .marche__header {
    padding: 2rem;
  }
  .grid__normal {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
}
</style>
