<template>

  <div class="sticky">

    <Navigation />

  

    <section class="sms__pro section__container spacer-2">
      <div class="service__title">
        <h1 class="home__title title">Nos solutions SMS</h1>

        <p class="sms__description title">Toutes nos solutions sur-mesure</p>
        
        <router-link to="/signup" class="btn">TESTEZ GRATUITEMENT</router-link>
      </div>
      <div class="phone spacer-2">
        <img
          class="img"
          src="/../images/service-sms.png"
          alt="services"
        />
      </div>
    </section>

    <section class="services section__container">
      <h1 class="services__title center__text spacer-2">
        Une Gamme de Solutions
        <br />adaptés aux besoins de chacun
      </h1>

      <div class="services__cards">
        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icon-sms-pro.png" alt="smspro" />
          <div class="card__details">
            
            <router-link to="/smspro" class="card__title">SMS PRO</router-link>
            <p class="card__description center__text">
              Idéal pour vos campagnes de communication avec personnalisation du nom d’émetteur, 
              l'accusé de réception... Dès 28,24F/HT le SMS, qu'attendez-vous ? 
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-vocal-sms.png" alt="smsvocal" />
          <div class="card__details">
         
            <router-link to="/smsvocal"  class="card__title sms__vocal">SMS VOCAL</router-link>
            <p class="card__description center__text">
              Facilitez la vie de vos clients en leur envoyant des messages vocaux sur une ligne fixe
               ou mobile de rappels ou confirmations de rendez-vous.
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-sms-20.png" alt="sms" />
          <div class="card__details">
         
            <router-link to="/enrich" class="card__title">SMS 2.0</router-link>
            <p class="card__description center__text">
              Vous souhaitez pouvoir engager avec vos clients  afin de récupérer un coupon en ligne, 
              valider un quizz, visiter une page produit test ? Le SMS 2.0 enrichi est fait pour vous.
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/loca-bdd-sms.png" alt="bdd" />
          <div class="card__details">
           
            <router-link to="/location" class="card__title">LOCATION BDD </router-link>
            <p class="card__description center__text">
              Nous vous accompagnons dans la location de fichiers ciblés et géolocalisés afin 
              d’optimiser vos campagne marketing.
          
            </p>
            
            
          
          </div>
        </div>


        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/emailing-icon-.png" alt="smsmailing" />
          <div class="card__details">
          
            <router-link to="/mailing" class="card__title">SMS MAILING</router-link>
            <p class="card__description center__text">
              En choisissant ce levier de communication pour vos campagnes marketing, vous bénéficiez 
              d’un impact rapide pour toucher votre cible au travers de messages courts. 
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/sondage-par-sms.png" alt="sms" />
          <div class="card__details">
       
            <router-link to="/sondage" class="card__title">SONDAGES SMS</router-link>
            <p class="card__description center__text">
              Fidélisez votre clientèle en la mettant au centre de vos enquêtes de satisfaction : 
              créez des SMS interactifs et recevez leurs réponses pour obtenir des avis précieux, et améliorez votre offre.
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/vote-par-sms.png" alt="vote" />
          <div class="card__details">
           
            <router-link to="/votre" class="card__title">VOTE SMS</router-link>
            <p class="card__description center__text">
              Votez via SMS lors des assemblées générales, des congrès ou des réunions, concours, élections, 
              salons. Organisez des événements inoubliables grâce à notre plateforme de vote par SMS en ligne.
              
            </p>
          </div>
        </div>

     
        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/mobile-Tiketing.png" alt="ticketing" />
          <div class="card__details">
      
            <router-link to="/mobileticketing" class="card__title">MOBILE TICKETING</router-link>
            <p class="card__description center__text">
              Obtenez Votre « TAB-SMS » ou ticket d’accès à bord par SMS depuis chez vous. Désormais 
              possible depuis la maison d'acheter vos « TAB-SMS » de Bus partout au Sénégal.
              
              
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
            La révolution SMS
            à votre portée
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
import Vue from 'vue'
import Navigation from "./Navigation";
import Footer from "./Footer";






export default {
  data() {
    return {
      isLoading:false,
      fullPage:true,
      hover: false
    };
  },
  components: {
    Navigation,
    Footer,
   
   
  },
  methods:{
    
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.solution {
  font-weight: bold;
}

.revolution {
  background: $color-tertiary;
}

.sticky{
  position: sticky;
}
.services__cards{
  background-color: white;
    border-radius: 0.25rem;
    // box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    padding: 2rem;
}
.services__card{
  background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
     transition: transform .3s;

  &:hover{
    transform: scale(1.1); 
  }
}
.center__button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__image {
  display: block;
  margin: 0 auto;
}
.card__title {
  text-align: center;
  font-weight: bold;
  display: block;
  text-decoration: none;
  color: $color-black;
}


.card__description {
  height: 170px;
  overflow: hidden;
}

.card__details{
  padding: 1rem;
}
.img{
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
.service__title{
  text-align: center;
}
.sms__pro{
  box-shadow: 0 20px 40px -14px rgb(0 0 0 / 25%);
}
@media (min-width: 64rem) {
  .sms__pro {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: #fafafa;
    position: relative;
    margin-top: 10rem;
    z-index: -1;
  }
  .sms__description {
    font-weight: bold;
    font-size: 1.5rem;
  }
 .center__button{
   display: block;
 }
  .home__title {
    font-size: 3rem;
    color: $color-tertiary;
  }

  .services__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  .card__title {
    text-align: center;
    border-bottom: 2px solid $color-tertiary;
  }

  .card__image {
   
    padding: 1rem;
  
  }
  

 
  
  .service__title {
    text-align: left;
    padding: 2rem;
  }
 
}
</style>