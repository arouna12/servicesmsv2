<template>
  <div>
    <Navigation />
    <div class="top__container section__container">
      <section class="head">
        <div class="">
          <h1 class="header__title center__text">
            Tarifs SMS professionnels au Sénégal et à l’International<br />
            Acheter vos SMS au Meilleur Tarif du Web
          </h1>
          <p class="sub__paragraph "></p>
          <vue-typed-js
            :strings="[
              `  Des paliers dégressifs en fonction de votre volume d'envoi !`,
            ]"
            :loopCount="3"
            :typeSpeed="300"
            :cursorChar="'_'"
          >
            <p class="typing sub__paragraph"></p>
          </vue-typed-js>

          <p class="sub__paragraph">
            Aucun frais d'inscription, ni d'abonnement... vous ne 
            payez que <br />les crédits SMS que vous pouvez consommer à votre rythme !
          </p>

          <vue-typed-js
            :strings="[' (durée de vie des crédits : illimitée)']"
            :startDelay="7000"
            :loopCount="3"
            :typeSpeed="260"
            :cursorChar="'_'"
          >
            <p class="typing sub__paragraph"></p>
          </vue-typed-js>
          <vue-typed-js
            :strings="['Des packs adaptés à vos besoins']"
            :startDelay="7000"
            :loopCount="3"
            :typeSpeed="270"
            :cursorChar="'_'"
          >
            <p class="typing sub__paragraph"></p>
          </vue-typed-js>
        </div>
      </section>

      <section class="tarrif">
        <h2 class="tarif__price sub__paragraph center__text">Indiquer la quantité de SMS dont vous avez besoin pour connaître votre prix d'achat . . .</h2>
        <div class="terif__info">
          <h1 class="center__text tarif__header">
            NOS FORMULES D'ENVOIS DE SMS
          </h1>
          <p class="center__text tarif__description">
            Découvrez la formule de SMS adaptée à vos besoins, quelle que soit
            la fréquence et la récurrence de vos envois.
          </p>

          <table class="table first__table sixty__container">
            <thead>
              <tr>
                <th class="transparent"></th>
                <th class="transparent"></th>
                <th>
                  <span class="text">1 à 4.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">5.000 à 9.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">10.000 à 24.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">25.000 à 49.999 </span> <br /><span
                    class="sms"
                    >SMS</span
                  >
                </th>
                <th>
                  <span class="text">50.000 à 99.999</span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">100.000 à 250.000</span> <br />
                  <span class="sms">SMS</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="white"></td>
                <td class="lead">
                  <span>Tarif</span> <br />
                  <span>HT/SMS</span>
                </td>
                <td class="tri_oran">28,24 F</td>
                <td class="tri_oran">27,58 F</td>
                <td class="tri_oran">26,93 F</td>
                <td class="tri_oran">26,27 F</td>
                <td class="tri_oran">25,58 F</td>
                <td class="tri_oran">24,30 F</td>
              </tr>
              <tr>
                <td style="background:transparent"></td>
                <td></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
              </tr>
            </tbody>
          </table>

          <table class="table second__table">
            <thead>
              <tr>
                <th>
                  <span class="text">1 à 4.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">5.000 à 9.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">10.000 à 24.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tri_oran"><span class="price">28,24 F</span></td>
                <td class="tri_oran"><span class="price">27,58 F</span></td>
                <td class="tri_oran"><span class="price">26,93 F</span></td>
              </tr>
              <tr>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
              </tr>
            </tbody>
          </table>

          <div class="calculate__price center__text sixty__container">
            <div>
              <h3>Indiquez le nombre de SMS souhaités</h3>

              <input class="input" v-model="price" @keypress="onlyNumber" />
            </div>

            <div>
              <img class="svg__image" src="/../images/down-arrow.png" alt="" />
              <img
                class="next__arrow"
                src="/../images/next.svg"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <h3>Notre Tarif (HT)</h3>
              <div class="tarif__result">
                <span>{{ calculatePrice }} F ({{intervalPrice}} F /SMS)</span>
              </div>
            </div>
          </div>
              <router-link to="/signup" class="tarif__btn">JE COMMANDE</router-link>

        </div>
        <div class="allprices">
          <img class="img allprices__img" src="/../images/download.png" alt="" srcset="">
          <a class="allprices__link" href="pricingmobileticketing.xlsx" download=""> Télécharger la liste des prix</a>
        </div>

        <div class="tarif__details">
          <h3 class="spacer-2">Besoin d’envoyer + de sms ?</h3>
          <ul>
            <li>
              Prix dégressif selon le nombre de SMS achetés au-delà de 250 000
              SMS/an, nous contacter
            </li>
            <li>Devis et factures établis sur demande</li>
            <li>Quantités supérieures ou besoins spécifiques</li>
          </ul>
        </div>
      </section>

      <section class="benifits seventy__container">
        <h3 class="tarif__price center__text">
          En plus de cela... Bénéficiez d'un service optimal<br /> et d'un
          accompagnement de qualité...
        </h3>

        <div class="cards">
          <div class="card">
            <img class="card__image" src="/../images/icone-inscript.png" alt />
            <div class="card__details center__text">
              <h3 class="card__title">
                Ouverture de compte et Tests Gratuits
              </h3>
              <p>
                L'inscription et l'accès à la plateforme est Gratuit et Sans Engagement.
                5 crédits SMS Pro vous sont offerts à l'ouverture du compte.

              </p>
            </div>
          </div>

          <div class="card">
            <img class="card__image" src="/../images/icone-12mois.png" alt />
            <div class="card__details center__text">
              <h3 class="card__title">
                Durée de vie illimitée des crédits !
              </h3>
              <p>
                 La validité des packs sera fixée à un an à partir de la date d’achat,
                  la facture faisant foi.
              </p>
            </div>
          </div>

          <div class="card">
            <img
              class="card__image"
              src="/../images/icone-suptechnique.png"
              alt
            />
            <div class="card__details center__text">
              <h3 class="card__title">
                Un support technique à votre écoute
              </h3>
              <p>
                Nous répondons à toutes vos questions.
              </p>
            </div>
          </div>
        </div>

        <p class="sixty__container spacer-2 center__text">
          <strong>Formules de paiements sont disponibles. Optez pour la tranquillité avec <br />le paiement
           en fin de mois</strong>. Je paie mensuellement ce que je consomme « Je m’inscris au servicesms.sn. 
           J’utilise ensuite le nombre de SMS dont j’ai besoin et je reçois ma facture en fin de mois, 
           uniquement pour les sms consommés. Plus besoin de passer de commande ni de me préoccuper de mon 
           crédits de sms, c’est moi qui gère mes envois !»
        </p>

        <div class="sixty__container center__text">
          <h3>NOS MOYENS DE PAIEMENT</h3>
          <h3>Une plateforme et des règlements certifiés et sécurisés !</h3>
          <p>
            <span class="first__word"> SERVICES-SMS </span> vous propose
            plusieurs moyens de paiement pour régler votre pack de SMS ou votre
            commande. Optez pour le paiement par (WARI, VITFÈ, ORANGE MONEY,
            MASTERCARD, POSTE CASH, VISA), <strong>chèque</strong> (validation à réception du
            chèque), <strong>virement bancaire</strong> , ou <strong>prélèvement automatique</strong>.
          </p>
        </div>
        <div class="partners">
          <img
            class="img__responsive partner__image"
            src="/../images/orange_money.png"
            alt="wari"
          />
          <img
            class="img__responsive partner__image"
            src="/../images/wari_100.png"
            alt="mastercard"
          />
          <img
            class="img__responsive partner__image"
            src="/../images/freemoney.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/mastercard.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/visa.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/E money.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/wizal.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/proximo.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/wave.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/yup.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/pste cash.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/moov.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/mtn money.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/cheque_paie.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/virement.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/fin_mois.png"
            alt=""
          />
        </div>
        <div class="service__list center__text">
          <h3 class="spacer-2">TOUS NOS PACKS SMS COMPRENNENT</h3>
          <div class="grid">
         <img class="img service_img" src="/../images/plateforme-responsive.png"  alt="">
          <ul class="grid__listing">

            <li>
              <img
                class="check__icon"
                src="/../images/icons/gest_contact.png"
                alt=""
              />Gestion des contacts
            </li>
            <li>
              <img class="check__icon" src="/../images/icons/gest_stop.png" alt="gest" />
              Gestion des stops
            </li>
            <li>
              <img class="check__icon" src="/../images/icons/gest_reponse.png" alt="response" />
              Gestion des réponses
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/icons/temps_reel.png"
                alt="reel"
              />Accusés en temps réel
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/icons/publi_postage.png"
                alt="postage"
              />Publipostage
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/icons/programm_send.png"
                alt="program"
              />Programmation, anniversaires
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/icons/statistic_deta.png"
                alt="statastic"
              />Statistiques détaillées
            </li>
          </ul>
          </div>
        </div>
      </section>
    </div>
    <section class="premium">
      <h3 class="center__text premium__head">CE QU'OFFRE LA QUALITÉ PREMIUM</h3>
      <ul class="different_tarrif">
        <h4>Messages</h4>
       <li>Personnalisation de l’expéditeur <CheckIcon class="custom-class"/>  </li>
       <li>Message long (+ de 160 caractères) <CheckIcon class="custom-class"/></li>
       <li>Nombre de caractère autorisés <span class="numbers">1224</span></li>
       <li>Publipostage <CheckIcon class="custom-class"/></li>
       <li>Modèle de SMS <CheckIcon class="custom-class"/></li>
       <h4>Livraison</h4>
       <li>Envois programmés <CheckIcon class="custom-class"/></li>
       <li>Livraison instantanée <CheckIcon class="custom-class"/></li>
        <li>Délai réception garanti <CheckIcon class="custom-class"/></li>
        <li>Envoi à l’international (<router-link to="/map" class="link">couverture</router-link>)<CheckIcon class="custom-class"/></li>
        <li>Remise garantie <CheckIcon class="custom-class"/></li>
        <li>Accusés de réception opérateur <CheckIcon class="custom-class"/>	</li>
        <li>Accusés détaillés par numéros <CheckIcon class="custom-class"/></li>
        <li>Horaires d’envois <span class="numbers">24h/24</span></li>
        <h4>Options</h4>
        <li>Alertes crédits conso <CheckIcon class="custom-class"/></li>
        <li>Accès via l’API <CheckIcon class="custom-class"/></li>
        <li>Gestion des STOP <CheckIcon class="custom-class"/> </li>
        <li>Export liste noire <CheckIcon class="custom-class"/> </li>
        <li>SMS réponses <CheckIcon class="custom-class"/></li>
        <li>Espace client sécurisé SSL (https) <CheckIcon class="custom-class"/></li>
        <li>Validité du pack <span class="custom-class"/>À vie ****</li>
        <li>Gestion de sous-comptes <CheckIcon class="custom-class"/>  </li>
        <h4>Gestion de contacts</h4>
        <li>Suppression automatique des doublons <CheckIcon class="custom-class"/> 	</li>
        <li>Segmentation intelligente <CheckIcon class="custom-class"/>	</li>
        <li>Liste noire automatique <CheckIcon class="custom-class"/></li>


      </ul>

    </section>

   <Revolution/>

    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Revolution from './Revolution';
import Footer from "./Footer";
import Vue from "vue";
import VueTypeJs from "vue-typed-js";
import { CheckIcon } from "@vue-hero-icons/outline"
Vue.use(VueTypeJs);
export default {
  name: "Tarif",
  data() {
    return {
      price: 1,
      click: true,
      intervalPrice: 28.24
    };
  },
  computed: {
    calculatePrice() {
      //  return (this.price *28.24).toFixed(2);
      if (this.price <= 4999) {
         this.intervalPrice = 28.24;
        return (this.price * 28.24).toFixed(2);
      } else if (this.price == 5000 || this.price <= 9999) {
         this.intervalPrice = 27.58;
        return (this.price * 27.58).toFixed(2);
      } else if (this.price == 10000 || this.price <= 24999) {
            this.intervalPrice = 26.93;
        return (this.price * 26.93).toFixed(2);
      } else if (this.price == 25000 || this.price <= 49999) {
           this.intervalPrice = 26.27;
        return (this.price * 26.27).toFixed(2);
      } else if (this.price == 50.0 || this.price <= 99999) {
            this.intervalPrice =25.58;
        return (this.price * 25.58).toFixed(2);
      } else if (this.price == 100000 || this.price <= 250000) {
         this.intervalPrice = 24.30;
        return (this.price * 24.3).toFixed(2);
      }
    },
  },
  methods: {
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
  components: {
    Navigation,
    Footer,
    Revolution,
    CheckIcon
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.terif__info {
  background-image: url("/../images/arriere-plan-eclairci.jpg");
  background-repeat: no-repeat;

  background-attachment: fixed;
  background-size: cover;

  background-position: bottom;
}
.first__table {
  display: none;
}
.second__table {
  width: 100%;
}

.link{
  text-decoration: none;
  color:#0074d9;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.service__list {
  li {
    list-style-type: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    
  }
}
.check__icon {
  display: inline-block;
  margin-bottom: .4rem;

 
}

.premium__head{
  padding-top:2rem;
}
.custom-class{
  color:$color-tertiary;
  display: inline-block;
  margin-left: auto;
  margin-right: .5rem;
  
}
.different_tarrif{
  li{
    list-style-type: none;
  padding-top: .5rem;
    display: flex;
  }
}
.numbers{
  padding-left: 2rem;
  font-weight: bold;
  margin-left: auto;
  margin-right: .5rem;
}
.price {
  display: block;
  padding-top: 1rem;
}
th {
  text-align: center;
  border-width: 1px;
  background: #0074d9;
  border-style: none;
  padding-top: 0.5rem;
  color: white;
  font-size: 0.7rem;
}

tr {
  font-size: 0.9rem;
}

.partner__image{
  transform: translateY(20px) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform .2s;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
      transform: translateY(0) scale(1.2);

    transition: ease-out .5s;
  }
}

.transparent {
  width: 1%;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
}

img {
  max-width: 100%;
  height: auto;
}

td {
  vertical-align: middle;

  font-weight: bold;
  border-style: none;

  padding: 1rem;
  text-align: center;
  border-width: 1px;
}
.svg__image {
  width: 50px;
  padding-top: 1rem;
}

.premium{
  background: hsl(222,41%,95%);
}
.tarif__btn {
  border: none;
  padding: 1.3rem;
  display: block;
  margin: 0 auto;
  position: relative;
  top: 15px;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  background: $color-tertiary;
  color: $color-white;
  font-weight: bold;
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    background: #5a5cda;
    cursor: pointer;
  }
}
.tri_oran {
  background: url(/../images/new-triangle-orange.gif) center -2px no-repeat !important;
  background-size: cover !important;
  padding-top: 1.5rem;
}

.tri-blanc-fin {
  background: url(/../images/triangle-blanc.png) center -2px no-repeat !important;
  background-size: contain !important;
}

.next__arrow {
  display: none;
}
.tarif__subtext {
  text-align: center;
  font-size: 12px;
  color: #606060;
}

.lead {
  background: white;
}

.sms {
  font-weight: normal;
  display: block;
  padding-top: 0.5rem;
}

.white {
  background: white;
}

.tarif__description {
  padding: 1rem;
}

.input {
  border: none;
  height: 40px;
  border-radius: 4px;
  width: 90%;
}
.input:focus {
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
}

.tarif__result {
  background: #0074d9;
  color: white;
  padding: 1.5rem;
  font-weight: bold;
}
.allprices__img{
  height: 1.5rem;
}
.allprices{
  display: flex;
  margin-top: 1.5rem;
  

  &__link{
    display: inline-block;
    text-decoration: none;
    color:$color-black;
    font-weight: bold;
    padding-left: .5rem;
  }
}

@media (min-width: 40rem) {

  .next__arrow {
    display: block;
    width: 50px;
    margin: 4rem auto;
  }
  .svg__image {
    display: none;
  }
  .second__table {
    display: none;
  }
  .first__table {
    display: block;
  }
}

.center__text {
  text-align: center;
}

.head {
  background: $color-grey;
  
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
 
}

.partner__image {
  display: block;
  margin: 1rem auto;
  border-radius: 0.25rem;
  
}

.sub__paragraph {
  font-size: 1.2rem;
  
  padding:0 1rem;
}

::placeholder {
  text-align: center;
}
.tarif__price {
  background: $color-tertiary;
  color: $color-white;
  padding: 0.5rem;
  font-size: 2rem;
}

.first__word {
  font-weight: bolder;
  background: $color-tertiary;
  color: $color-white;
}
.card {
  background: $color-grey;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
@media (min-width: 64rem) {
  .center__head {
    width: 50%;
    margin: 0 auto;
  }
    .header__title{
    margin-top: -7.2rem;
  }
  .tarif__header {
    padding-top: 2rem;
  }
  .partners {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
  .grid__listing {
    width: 60%;
    margin: 0 auto;

  }
  .service_img{
    
    margin-top: 2rem;
  }
  .service__list{
    li{
      margin-top: 2rem;
    }
  }
  .tarif__details {
    width: 50%;
    margin: 0 auto;
  }

  .tarif__btn {
       width: 11rem;
    padding: 1rem;
    top: 25px;
    text-align: center;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .calculate__price {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
.different_tarrif{
  width: 50%;
  margin: 0 auto;
}
.grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
}
}
</style>
