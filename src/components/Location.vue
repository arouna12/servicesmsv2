<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title center__text">Location de fichiers de prospects</h1>
      <h3 class="title center__text"> Louer un fichier qualifié et réaliser une campagne de prospection
        multicanal (SMS, Email...)
      </h3>

      <p>
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
         
          <h1 class="center__text message">{{message}}</h1>
       
      </vue-modaltor>
       <h3 class="title center__text"> La réussite d'une campagne de Marketing Direct est généralement en
          partie liée à la qualité  <br />du Fichier de Prospection utilisé ainsi qu'à
          la pertinence du ciblage.
        
      </h3>
      <p>La plus grande base de données SMS opt-in au Sénégal.</p>
      <p>
        Louez des fichiers clients ciblés pour <strong>agrandir votre réseau de
        prospects et augmenter vos sources de revenus potentiels</strong>. Choix de
        critères pour meilleur ciblage, et ROI optimisé.
      </p>
      <p>
        Sélectionnez vos futurs clients grâce à la location de base de données.
      </p>
      <p>
        C’est la solution idéale pour les petites entreprises qui démarrent leur
        activité et qui ont besoin de se créer un portefeuille client ou un
        réseau.
      </p>
      <p>
        Nous collaborons avec un partenaire spécialisé dans la location de base
        de données, l'ensemble des informations sont récupérées notamment avec
        des cartes de fidélité, tels que les assureurs, mutuelles et sites de
        grande distribution d’où sa taille, des enquêtes, des salons,
        abonnements aux magazines spécialisés...
      </p>
      <p>
         <h4 class="center__text">
           <strong>Louez un fichier SMS Opt’In pour conquérir de nouveaux clients</strong>.
        <br />De nombreux critères de ciblage sont disponibles, mais vous pouvez
        également nous demander des critères plus spécifiques : 
      </h4>

       <div class="model__card seventy__container">
        <div class="card center__text">
          <img class="card__image" src="/../images//planification/geolocalisation.png" alt="">
          <router-link to="" class="card__description">Géolocalisation</router-link>
          <p>
            Région, Département, Ville, codes postaux...
          </p>

        </div>
        <div class="card center__text">
          <img class="card__image" src="/../images//planification/AGE1.png" alt="">
          <router-link to="" class="card__description">Age</router-link>
          <p>
             Jeunes, Adultes, Séniors

          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/profession2.png" alt="">
          <router-link to="" class="card__description">Profession</router-link>
          <p>
            Artisan, commerçant, étudiants, Ouvrier...

          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/logement.png" alt="">
          <router-link to="" class="card__description">Logement</router-link>
          <p>
            Studio, appartement, Maison, Propriétaire / Locataire...

          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/smarphone.png" alt="">
          <router-link to="" class="card__description">Smartphone</router-link>
          <p>
            Apple, Adroide, windows phone,...

          </p>

        </div>

        
        <div class="card center__text">
          <img class="card__image" src="/../images//planification/famille.png" alt="">
          <router-link to="" class="card__description">Famille</router-link>
          <p>
            Nombre d'enfants, age des enfants,...

          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/sexe.png" alt="">
          <router-link to="" class="card__description">Sexe</router-link>
          <p>
            Homme, Femmes
          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/interet.png" alt="">
          <router-link to="" class="card__description">Centre d'intêrets</router-link>
          <p>
            Sport, Musique, Santé,...

          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/voiture.png" alt="">
          <router-link to="" class="card__description">Voitures</router-link>
          <p>
            Types, Marques,Modéles...

          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/csp++.png" alt="">
          <router-link to="" class="card__description">CSP++</router-link>
          <p>
            Cadres Supérieurs, Professions libérales,...

          </p>

        </div>

        <div class="card center__text">
          <img class="card__image" src="/../images//planification/revenue.png" alt="">
          <router-link to="" class="card__description">Revenus</router-link>
          <p>
            Niveaux de revenus
          </p>

        </div>

         <div class="card center__text">
          <img class="card__image" src="/../images//planification/animaux.png" alt="">
          <router-link to="" class="card__description">Animaux</router-link>
          <p>
            Nombre d'animaux domestiques, ...
          </p>
        </div>
      </div>
       

      <p>
         <h4 class="center__text">
           Nos spécialistes vous aideront à constituer votre fichier et vous
        accompagneront dans votre campagne de prospection.
      </h4>
      <h2 class="title center__text">Nos Tarifs</h2>
      <p>
         <h4 class="title center__text">Nos tarifs sont dégressifs pour vos aider au mieux avec vos prochaines
        campagnes :
      </h4>
      <h2>Exemple :</h2>
      <li>La location d’une base de prospection de 5 000 à 10 000 contacts coûte 98F HT / contact.</li>
      <li>La location d’une base de prospection de 10 000 à 25 000 contacts coûte 91F HT / contact.</li>
      <li>La location d’une base de prospection de Plus de 25 000 contacts coûte 85F HT / contact.</li>
      <p>Ensuite nous gérons la campagne de SMS pour vous.</p>
      <h2 class="center__text">Remplissez simplement le formulaire ci-dessous.</h2>
      <form class="form sixty__container" @submit.prevent="sendEmail">
      <div>
        <span class="astrike">*</span>
      <input v-model="email" type="email" name="email" id="" placeholder="votre email" required>
      </div>
      <div>
          <span class="astrike">*</span>
      <input v-model="number" @keypress="onlyNumber" type="text" name="number" id="" placeholder="numero" required>
      </div>
      <div>
          <span class="astrike">*</span>
      <textarea  v-model="info" name="message"  id="" cols="30" rows="10" placeholder="Votre question" required></textarea>
       <button v-bind:disabled="!isDisabled" class="form__btn"  @click="open = true">ENVOYER</button>
    
      </div>
      
      </form>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue';
import Navigation from "./Navigation";
import Footer from "./Footer";
import emailjs from 'emailjs-com';
import Revolution from "./Revolution.vue";
import VueModalTor from "vue-modaltor";
import VueAudio from 'vue-audio';
Vue.use(VueModalTor);
export default {
    data(){
     return{
         open:false,
         email:"",
         number:"",
         info:"",
         message:'Success',
         errMessage:"Fail try again",
        

     }
    },
  components: {
    Navigation,
    Footer,
  },
  methods:{
       sendEmail:(e)=>{
              
              emailjs.sendForm('service_bok9mag','template_2kk4j6v',e.target,'user_19zfhDvlt5iPo3XXiWrvc',this)
              .then((result)=>{
                  
                     return this.message;
              },(error)=>{
                  return errMessage;
                 console.log(error)
               
              })
          },
           onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
     hideModal() {
      this.open = false;
    },
  },
  computed:{
    isDisabled(){
      return this.email.length > 0 && this.number.length > 0 && this.message.length > 0;
    }
  }

};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.message{
    color:$color-primary;
}
.astrike{
  display: inline-block;
  margin-left: 5rem;
  padding-top: .5rem;
}
.errMessage,.astrike{
    color:red;
}
input[type="text"],input[type="email"],textarea{
    width: 80%;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    border: none;
   color: #555;
background-color: #fff;
background-image: none;
border: 1px solid #ccc;
border-radius: 4px;
-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
margin-top: 1rem;
}
input[type="text"],input[type="email"]{
    height: 50px;
}
::placeholder{
  padding: 1rem;
  font-weight: bold;
}
.form__btn{
    display: block;
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    background:$color-secondary;
    border: none;
    color: $color-white;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background: palevioletred;
    }
}
.card {
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
  transition: transform .3s;

  &:hover{
    transform: scale(1.1); 
  }
}
.card__description{
     border-bottom: 4px solid $color-tertiary;
     border-width: 10px;
     text-align: center;
     font-weight: bolder;
     display:inline-block;
     text-decoration: none;
     color: #000;
}
@media (min-width: 64rem) {
  .metres__head {
    top: 2rem;
  }
  .model__card{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      
  }

  .last__card{
      margin-bottom: 2rem;

  }
}

</style>
