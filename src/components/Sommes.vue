<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details blogs">
      <h1 class="about__title ">Qui sommes-nous ?</h1>
      <p>Servicesms.sn, votre plateforme SMS 100% Sénégalaise !</p>
      <p>
        SERVICES-SMS, est l’un des leaders sénégalais incontesté en
        matière de communication mobile. Spécialisée dans l’<strong>envoi</strong> de <strong>SMS</strong> en
        <strong>masse</strong> pour les <strong>professionnels</strong> et <strong>particuliers</strong>, leader des solutions de
        mobile messaging, accompagne les <strong>amicales</strong>, les <strong>associations</strong>, et les <strong>entreprises</strong> dans leur <strong>quête</strong> de
        <strong>performance</strong>, grâce à des solutions de <strong>communications puissantes</strong>,
        <strong>innovants</strong> et cherche à toujours vous offrir le meilleur de la
        technologie pour vos <strong>campagnes SMS</strong> et vos opérations de <strong>marketing</strong>
        mobile.
      </p>

      <p>
        Nous proposons une offre transversale qui permet à nos clients de
        bénéficier des meilleurs outils de marketing mobiles existants
        (plateforme professionnelle d’envoi de SMS en masse, <strong>SMS enrichi</strong>,
        <strong>messages vocaux</strong>, <strong>mailing SMS</strong>, <strong>location de bases de données</strong> qualifies,
        <strong>vote par SMS</strong>,<strong> sondage par SMS</strong>…)
        
       
        <h2 class="about__title center">Notre mission</h2>
        
        <p>
        Notre mission est de vous aider à développer et à accélérer votre croissance via des outils digitaux accessibles et adaptables.
         C’est la force motrice derrière tout ce que nous faisons.

      <vue-modaltor :visible="open" @hide="hideModal">
        <template slot="close-icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="20"
            height="20"
            xml:space="preserve"
          >
            <path
              class="st0"
              fill="#0074D9"
              d="M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"
            />
          </svg>
        </template>
        <p class="center__text">
          Nous encourageons les <strong>amicales</strong>, les <strong>associations</strong>, et les <strong>entreprises</strong>, car<br /> elles sont la source de nos 
          idées et de notre innovation et sont essentielles<br /> à notre croissance soutenue.
        </p>
        <p class="center__text">
          Gagner la confiance chaque jour est notre proposition de valeur <br />fondamentale envers nos clients et les uns envers
           les autres. <br />Nous devons être dignes de confiance, car l'opportunité de servir nos clients<br /> est plus grande que n'importe 
           lequel d'entre nous.
        </p>
      </vue-modaltor>
      <div class="engagement">
        <h2 class="about__title center">Nos engagements</h2>
        <div class="grid__engagement">
          <div>
            <h3>Une plateforme performante:</h3>
            <ul>
              <li>Disponible 24h/24</li>
              <li>Facile d’utilisation</li>
              <li>Une variété de services proposés</li>
            </ul>
          </div>

          <div>
            <h3>Une équipe incroyable :</h3>
            <ul>
              <li>Account Manager dédié</li>
              <li>Support durant votre campagne</li>
              <li>Conseils Personnalisés</li>
            </ul>
          </div>
          <div>
            <h3>Une solution sûre :</h3>
            <ul>
              <li>Plateforme (SaaS) sécurisée</li>
              <li>Respect de la législation  <strong>PDCP</strong></li>
              <li>Protection des données</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div class="team">
        <h2 class="about__title center__text">Nos équipes</h2>
        <h3 class="center__text">Rencontrez l&#39;équipe SERVICES-SMS</h3>
        <p class="center__text">
          Nous sommes une équipe composée de membres hautement compétents. Nous
          
          sommes des individus passionnés et déterminés avec un grand esprit
          d&#39;équipe.<br />Ce que nous construisons a une valeur énorme pour 
          toutes les tailles d'entreprises et tous les secteurs. Notre équipe produit est
           ouverte d'esprit, créative et audacieuse. Nous sommes une équipe de créateurs et
            d'acteurs, travaillant en étroite collaboration avec chaque département pour ouvrir
             la voie à notre entreprise.
        </p>

        <div class="profiles">
          <div class="profile__president">
            <img
              src="/../images/profile/sylla-sg.png"
              alt=""
              class="profile__image"
            />
            <p to="" class="profile__name" @mouseover="open = true">
              SYLLA Harouna
            </p>
            <p class="profile__title">Fondateur & CEO – SERVICES-SMS</p>
            <p class="profile__title">sylla.harouna@servicesms.sn</p>
                  <a target="__blank" href="https://www.linkedin.com/in/harouna-sylla-administrateur-reseau-informatique-/">
                  <img src="/../images/profile/linkedin.png" alt="" srcset=""
                />
                </a>
             
          </div>
          <div class="other__profile">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe commerciale
            </h2>
            <div class="two__grid">
              <div class="profile">
                <img
                  src="/../images/profile/Resp-com-digital.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >SOW   Mamadou Oumar</router-link
                >
                <p class="profile__title">Directeur Commercial</p>
                <p class="profile__title">sow.mamadou@servicesms.sn</p>
                 <a target="__blank" href="https://www.linkedin.com/in/mamadou-oumar-sow-05995290">
                  <img src="/../images/profile/linkedin.png" alt="" srcset=""
                  
                />
                </a>
              </div>

              <div class="profile">
                <img
                  src="/../images/profile/raby.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name">DIENE Rabiatou</router-link>
                <p class="profile__title">Responsable commerciale</p>
                <p class="profile__title">diene.rabiatou@servicesms.sn</p>
                  <a target="__blank" href="https://www.linkedin.com/in/rabiah-diène-4070031a0">
                <img src="/../images/profile/linkedin.png" alt="" srcset=""
                />
                </a>
               
              </div>
            </div>
          </div>

          <div class="other__profile">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe Marketing - Communication
            </h2>
            <div class="two__grid">
              <div class="profile">
                <img
                  src="/../images/profile/Haji_Resp_com.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >DIALLO Hadji Abou </router-link
                >
                <p class="profile__title">Responsable Communication Digital</p>
                <p class="profile__title">dillo.hadji@servicesms.sn</p>
                   <a target="__blank" href="https://www.linkedin.com/in/hadji-diallo-83116415b/">
                  <img src="/../images/profile/linkedin.png" alt="" srcset="" />
                  </a>
              </div>

              <div class="profile">
                <img
                  src="/../images/profile/Assiste-marketing.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >ANNE khadidiatou</router-link
                >
                <p class="profile__title">Responsable Marketing</p>
                <p class="profile__title">anne.khadidiatou@servicesms.sn</p>
              <a target="__blank" href=" https://www.linkedin.com/in/khadidiatou-anne-a1232b164">
                <img src="/../images/profile/linkedin.png" alt="" srcset=""/>
                </a>
           
              </div>
            </div>
          </div>
          <div class="other__profile">
          
          <div class="profile__president spacer-2">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe Service Clients - Partenariats
            </h2>

          </div>

      <div class="two__grid">
         <div class="profile">

            <img
              src="/../images/profile/service-client.png"
              alt=""
              class="profile__image"
            />
            <router-link to="" class="profile__name"> KANE  Aïssatou</router-link>
            <p class="profile__title">Responsable Delivery et Support</p>
            <p class="profile__title">kane.aissatou@servicesms.sn</p>
            <a target="__blank" href="https://www.linkedin.com/in/aissatou-kane-284064225
">
            <img src="/../images/profile/linkedin.png" alt="" srcset=""
                />
            </a>
         </div>
           <div class="profile">
                <img
                  src="/../images/profile/respon-part.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >TALL Amadou</router-link
                >
                <p class="profile__title">Responsable Partenariats</p>
                <p class="profile__title">tall.amadou@servicesms.sn</p>
                <a target="__blank" href="https://www.linkedin.com/in/amadou-tall-09b625228/">
                <img src="/../images/profile/linkedin.png" alt="" srcset=""
                />
                </a>
              </div>
              </div>
            </div>  
          <div class="other__profile">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe Technique
            </h2>
            <div class="two__grid">
              <div class="profile">
                <img
                  src="/../images/profile/ba-h-2.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >BA  Hamady Dit <br />
                  El Hadj Banoumou </router-link
                >
                <p class="profile__title">Co-fondateur Directeur Technique</p>
                  <p class="profile__title">ba.hamady@servicesms.sn</p>
                <a target="__blank" href="https://www.linkedin.com/in/hamady-ba-2b4152168/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0TpYN7wORzW1O4WSLEYrVQ%3D%3D">
                  <img src="/../images/profile/linkedin.png" alt="" srcset=""
                />
                </a>
              </div>

              <div class="profile">
                <img
                  src="/../images/profile/drame-baboucar.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >DRAMMEH Baboucarr </router-link
                >
                <p class="profile__title">Développeur d’applications web</p>
                <p class="profile__title">b.drammeh@servicesms.sn</p>
                <a href="https://www.linkedin.com/in/baboucarrd43/
"  target="__blank">
                  <img src="/../images/profile/linkedin.png" alt="" srcset=""
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navigation from "./Navigation";
import Footer from "./Footer";
import VueModalTor from "vue-modaltor";
Vue.use(VueModalTor);
export default {
  data() {
    return {
      open: false,
    };
  },
  components: {
    Navigation,
    Footer,
  },
  methods: {
    hideModal() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.about__title {
  color: $color-tertiary;
}
.profile__president,
.other__profile {
  text-align: center;
}
.profile__image {
  display: block;
  margin: 0 auto;
  transition: transform .2s;

  &:hover{
    transform: scale(1.1); 
  }
}
.catogery__header {
  border-bottom: 2px solid $color-tertiary;
  margin-top: 2rem;
}

.profile__name {
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: $color-tertiary;
  font-size: 1.2rem;
  cursor: pointer;
}

.profile__title {
  font-weight: bolder;
  color: #7a7a7a;
}

@media (min-width: 64rem) {
  .grid__engagement {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .catogery__header {
    width: 40%;
    margin: 0 auto;
  }
  .two__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid: 2rem;
    margin-top: 3rem;
  }
}
</style>
