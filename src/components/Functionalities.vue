<template>
  <div class="sticky">
    <Navigation />

    <div class="section__container fix__position header__title">
      <div class="center__text fun__title" >
      <h1 class=" ">
        Fonctionnalités
        <br />Inclues dans nos solutions SMS
      </h1>
      
             <router-link to="/signup" class="btn">TESTEZ GRATUITEMENT</router-link>

      </div>
      <img  class="img__responsive function__img" src="/../images/image-fonctionalite.png" alt="">
    </div>
    

    <div class="section__container center__text">
      <h2 class="title">Une plateforme d'envoi de SMS aux fonctionnalités uniques</h2>
      <p class="sub__heading--text ">
        Optimisez l'envoi de SMS PRO en masse avec les fonctionnalités de la
        plateforme SERVICES-SMS
      </p>
    </div>

    <div class="section__container function__container">
      <h2 class="card__header">Gérer les contacts</h2>

      <div class="cards eighty__container">
        <div class="card">
          <img class="card__image" src="/../images/Ges-cont89x96.png" alt />
          <div class="card__details center__text">
            <router-link to="/gestion" class="card__title ">GESTION DES CONTACTS</router-link>
            <p>
              Importez vos fichiers de contacts détaillés afin de personnaliser chaque message, avec le nom du destinataire par exemple.
               La plateforme vérifie vos numéros et supprime automatiquement les doublons <br />avant l'envoi.
            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/compos-96x89.png" alt />

          <div class="card__details center__text">
         
            <router-link to="/composition" class="card__title composition">COMPOSITIONS SMS</router-link>
            <p>
              Créez facilement vos campagnes <br />SMS depuis votre tableau de bord. Personnalisez-les avec des fonctions de fusion et publipostage. 
              Envoyez également vos campagnes à l'international (plus de 1000 opérateurs à travers plus<br /> de 200 pays).
           
            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/plani-89x96.png" alt="" />
          <div class="card__details center__text">
          
            <router-link to="/planification" class="card__title ">PLANIFICATION</router-link>
            <p>
              Envoyez immédiatement ou en différé vos SMS. Sans limite de temps, vous anticipez vos envois en toute sérénité.
              Programmez également une fois pour toute vos envois SMS anniversaire.

            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="seventy__container">
      <h2 class="card__header">Statistiques</h2>
      
      <div class="two__cards">
        <div class="card ">
          <img class="card__image" src="/../images/statistiaque.png" alt />
          <div class="card__details center__text">
          
            <router-link to="/statistique" class="card__title">STATISTIQUES</router-link>
            <p>
              Retrouvez dans l'historique les rapports d’émission et les notifications opérateurs de remises. Ces notifications vous 
              informent également de tous les mobiles qui ne sont plus attribués, vous permettant de mettre à jour les bases utilisées. 
              Consultez également les taux de clic et l'identification précise des contacts ayant cliqués sur les liens SMS 2.0 et SMS Lien.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/reponse-sms.png" alt />
          <div class="card__details center__text">
           
            <router-link to="/reponse" class="card__title">REPONSES SMS</router-link>
            <p>
              L’option Réponse SMS permet aux destinataires de vos campagnes de répondre directement au SMS reçu via le numéro court utilisé 
              en en-tête. Vous pouvez ainsi interagir avec vos clients par SMS en toute liberté et de façon entièrement automatique. 
              L’option Réponse SMS est sans surcoût pour vous (coût d’envoi d’un SMS Pro).
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="container">
      <h2 class="card__header">Fonctionnalités avancées </h2>

      <div class="grid-4">
        <div class="card">
          <img class="card__image" src="/../images/tableau-bord.png" alt />
          <div class="card__details center__text">
            <h3 class="card__title">TABLEAU DE BORD CLAIRE</h3>
            <p>
              Notre tableau de bord clair pour toutes les configurations et analyses, 
              vous <br />aide à analyser les indicateurs clés <br />de performance d'une campagne sélectionnée, 
              et d'établir des tendances de réponses à la campagne sur un certain nombre de jours après l'envoi.
            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/creditplusieur.png" alt />
          <div class="card__details center__text">
            <h3 class="card__title">
              NOS PACKS SMS
            </h3>
            <p>
              Que vous souhaitiez envoyer vos SMS Pro partout au Sénégal ou à l’international, nous avons tout
               ce qu’il vous faut, nos types de packs SMS suffit et vous permet de bénéficier de toutes nos offres.
            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/paiement.png" alt />
          <div class="card__details center__text">
            <h3 class="card__title">
              MULTIPLES MODE DE PAIEMENT
            </h3>
            <p>
              Wari, free money, orange money, e-money, wave, yup, MasterCard, poste cash, visa), chèque, virement bancaire,
               nous acceptons tous les types de paiement. Vous pouvez aussi passer <br />en paiement fin de mois.
            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/facture.png" alt />
          <div class="card__details center__text">
            <h3 class="card__title">
              FACTURES EN LIGNE
            </h3>
            <p>
              Dès qu’un paiement est réalisé, votre facture est disponible. Toutes les factures sont d’ailleurs consultables et
               exportables depuis l’espace client. Vous avez la possibilité de les télécharger, les imprimer ou les recevoir par
                email au format PDF.

            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/responsiv-design.png" alt />
          <div class="card__details center__text">
            <h3 class="card__title">
              PLAFORME  RESPONSIVE DESIGN
            </h3>
            <p>
              Un espace client sécurisé sur tous les types de support, n’hésitez pas à naviguez sur notre plateforme. Aussi bien tablette,
               ordinateur de bureau ou smartphone, notre plateforme s’adapte à tous vos appareils grâce à un design prévu dès sa conception pour
                s’adapter à toutes les tailles.
            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/support.png" alt />
          <div class="card__details center__text">
            <h3 class="card__title">
              ASSISTANCE 24/7/365
            </h3>
            <p>
              Notre service client est disponible 24h/24 et 7j/7, tous les jours de l'année, apportant expertise et assistance aux entreprises et aux
               particuliers, banques, opérateurs mobiles, commerçants, développeurs et autres clients.
            </p>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/stop.png" alt />
          <div class="card__details center__text">
            <h3 class="card__title">
              MENTION *STOP SMS*
            </h3>
            <p>
              Le STOP SMS est obligatoire pour tout SMS commercial. La démarche simple pour le destinataire qui a la possibilité de 
              ne plus recevoir de SMS. 
            </p>
          </div>
        </div>

        <div class="card">
          <img
            class="card__image"
            src="/../images/gestion-contatc-avancees.png"
            alt
          />
          <div class="card__details center__text">
            <h3 class="card__title">
              GESTION AVANCÉE  CONTACTS
            </h3>
            <p>
              Avec notre plateforme vous pouvez importer plusieurs milliers de numéros de téléphone depuis votre espace client, sans
               manipulation préalable. Notre système accepte un maximum de formats de fichier (Excel, Access, Txt, etc…) 
               et se charge de supprimer les doublons et de nettoyer vos fichiers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="revolution spacer-1">
      <div class="section__container sms__revolution">
        <img
          class="img container revolution__img"
          src="/../images/LOGO-en-fond-vert.png"
          alt="revolution"
        />
        <div class="container revolution__description">
          <h2 class="revolution__title center__text">
            La révolution SMS à votre portée
          </h2>
          <div class="center__button">
                <router-link to="/signup" class="btn">TESTEZ GRATUITEMENT</router-link>

          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";

export default {
  data() {
    return {};
  },
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.card {
  background: aliceblue;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
}
.sub__heading--text {
  font-size: 1.2rem;
}
.function__img{
  height: auto;
  margin:0 auto;
  display: block;
  margin-top: 2rem;

}
.sticky{
  position: sticky;
}

.card__header {
  background: $color-tertiary;
  color: $color-white;
  padding: 0.5rem;
 
 
}
.header__title{
  background: $color-white;
  color:$color-tertiary
}
.card__details {
  padding: 1rem;
}

.card__title {
  border-bottom: 2px solid $color-tertiary;
  text-decoration: none;
  font-weight: bold;
  color: $color-tertiary;
  display: block;
}
@media (min-width: 64rem) {
  .header__title {
    padding-top: 2rem;
     padding-left: 2rem;
     box-sizing: border-box;
     display: grid;
     grid-template-columns: 2fr 1fr;
   
  }
  .function__img{
   margin-top: 0;

  }

.fun__title{
  text-align: left;
}
 .composition{
   margin-top: .5rem;
 }
  
  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 4rem;
  }
  .card__header {
    font-size: 2.5rem;
  }

  .revolution {
    background: $color-tertiary;
  }
}
</style>
