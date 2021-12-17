<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title center__text">MOBIL TICKETING</h1>
      <h2 class="title center__text">
        Ticket d’accès à bord du Bus par SMS
      </h2>

      <p>
        Au Sénégal, voyager par Bus est un casse-tête, les usagers sont toujours 
        confrontés à de longues attentes devant les guichets de transport ou même à 
        une situation de gêne entre prendre son titre de voyage ou se faire une place 
        dans le bus. Non seulement, on perd son temps, mais aussi la sécurité reste une 
        question fragile, car on peut se faire tout le temps voler par une inattention 
        de notre part.  
      </p>

      <p>
        Finis les <strong>tracasseries quotidiennes</strong> pour les voyageurs désirant emprunter le 
        réseau de transport au Sénégal. Le SMS est une solution mobile, très pratique et 
        rapide, consistant tout simplement à prendre un « <strong>TAB-SMS </strong>» ou un ticket d’accès à 
        bord par SMS. Cela dit qu’il n’est plus nécessaire de passer à l’automate et plus 
        besoin de payer par des billets physiques. 
      </p>
      <p>
        Servicesms.sn a mis en place  « Mobile Ticketing » qui est un processus par lequel
         les clients commandent, paient, et obtiennent leurs tickets à l'aide de leurs téléphones mobiles. 
      </p>
      <p>
        Ce dernier évolue dans la <strong>transformation numérique</strong> du Transport au Sénégal. L’une de ces solutions 
        est la <strong>numérisation des tickets</strong> de Bus, Brt, Train, des <strong>évènements</strong> et <strong>spectacles</strong> (concerts, matchs,
         cinémas, lutte, etc.) et des guichets de ticket de bus du transport interurbain, transnational offrant 
         la possibilité aux voyageurs d’acheter leurs « TAB-SMS » ou tickets d’accès à bord par SMS dans une échelle 
         de temps réduit. 
      </p>
      <p>
        Notre but est <strong>d’informatiser</strong> les services du transport routier et maritime du Sénégal, en offrant aux compagnies
         de transport, des <strong>outils numériques</strong>, <strong>intelligents</strong> de gestion de trafic pour la clientèle afin d’améliorer la mobilité
          des voyageurs. 
      </p>
      <p>
        Révolutionner le transport au Sénégal par le <strong>numérique</strong> est une ambition de servicesms.sn.
      </p>
      <h3 class="underline">Avantage</h3>
      <div class="cards spacer-1">
        <div class="card">
          <img
            class="card__image"
            src="/../images/ticketing/tab-mobile.png"
            alt=""
            srcset=""
          />
          <div class="card__details center__text">
            <h3>Mobile</h3>
            <p>
              Prenez votre ticket depuis votre téléphone où vous voulez, quand
              vous voulez.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card__image"
            src="/../images/ticketing/tab-pratique.png"
            alt=""
          />
          <div class="card__details center__text">
            <h3>Pratique</h3>
            <p>
              Plus besoin de chercher votre monnaie, le prix du TAB-SMS est
              reporté sur la partie prix du formulaire, vous verrez
              automatiquement l’affichage de votre TAB-SMS.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card__image"
            src="/../images/ticketing/tab-rapide.png"
            alt=""
          />
          <div class="card__details center__text">
            <h3>Rapide</h3>
            <p>
              Evitez l'attente aux automates, il vous suffit de quelques
              secondes pour recevoir votre <br />TAB-SMS.
            </p>
          </div>
        </div>
      </div>

      <h3 class="underline">Comment l'obtenir</h3>
      <p>
        Plus besoin de monnaie : vous pouvez maintenant acheter votre « TAB-SMS »
         partout au Sénégal à votre téléphone ! vous recevrez un ticket sous forme 
         de SMS et serez débité directement sur votre compte orange money 
      </p>
      <p>
        Le numéro de ligne du bus est obligatoire car c’est lui qui vous permet
         de savoir tous les points de passage afin de choisir votre lieu de départ ou d’arrivé.
      </p>
        Une fois la demande d’achat du « TAB-SMS » envoyé, le titre de transport est reçu directement 
        par SMS sur le téléphone portable. Le « TAB-SMS » ne permet pas la correspondance avec un autre 
        bus ou un train, ni avec aucun autre mode.

       Ce service est uniquement disponible sur les réseaux de transport Bus Dakar Dim Dikk.
       
      <p>
        
      </p>
      <h3>NB :</h3>
      
        Le TAB-SMS est lié au téléphone qui l'a commandé, il ne peut être
        transféré. Il est possible d'acheter un TAB-SMS pour un ou des
        accompagnants, à condition que toutes les personnes voyagent ensemble.
      
         <br />Les TAB-SMS sont valables 1 heure à compter de l’envoi du SMS
      <h3 class="underline">En savoir plus</h3>
      <div class="cgvfile">
        <a href="CGVU-TAB-SMS.pdf" target="_blank" class="cgvtext"
          >Conditions générales de vente et d’utilisation (CGVU) du ticket <br>
          d’accès à bord par SMS<br>
          pdf- 192kb
          </a
        >
      </div>
    </section>
    <h2 class="center__text spacer-2">
      Nous facilitons l'achat de vos billets Bus<br />
      Economisez plus, voyagez plus !
    </h2>

    <div class="section__container">
      <div class="center__text">
        <img src="/../images/icone-bus.png" alt="" />

        <h2 slot="title">Mode d’utilisation du service</h2>
      </div>

      <form-wizard
        title=""
        subtitle=""
        color="#0092ff"
      
      >
  <tab-content title="Afin de procéder l’achat du TAB-SMS, veuillez compléter les champs ci-dessous" :before-change="beforeTabSwitch">
    <span class="astrix errmessage">    {{message}}</span>
  <form @submit.prevent="checkForm" method="post" >
            <div>
              <label for="compange">COMPAGNIE <span class="astrix">*</span> </label>
              <select name="" id="compange" >
              
                <option value="">DDD</option>
               
              
              </select>
            </div>
            <div>
              <label for="">LIGNE <span class="astrix">*</span> </label>
           
              <input v-model.trim="busnumber"  placeholder="numero de bus" type="text" @keypress="validateNumber" name="busnumber" id="" required="required" />
            </div>
            <div>
              <label for="compange"> DÉPART(adresse,arrêt,lieu..)-obligatoire <span class="astrix">*</span> </label>
              <select  id="compange"  v-model="firstinput">
                
            
                  <option value=""  disabled selected>ex: Ouakam</option>

                 <option v-for="item in matchdestinations"  :key="item.id" :value="item"  >
                
                  {{item.start}}
                </option> 
                
              </select>

            
          
              
                  <button class="switch__btn" @click.prevent="switchtext">Inverser</button>

              <label for="compange">ARRIVÉE(addresse,arrêt,lieu..)-obligatoire <span class="astrix">*</span> </label>
              <select name="" id="compange" v-model="secondinput">
                <option value=""  disabled selected>ex: Grand Mbao</option>
                <option v-for="item in matchdestinations" :key="item.id"  :value="item">
                   {{item.end}}

                </option>
              
              </select>

              <label for="">Date d’achat</label>
              <input v-model="date" type="date" name="" id="" />
            </div>
            <div>
              <label for="">Nombre de Ticket <span class="astrix">*</span> </label>
              <input  type="text" @keypress="validateNumber" v-model="numberoftickets" />
            </div>

            
          </form>
          
  </tab-content>
  <tab-content title="Identification"  :before-change="()=>beforeSecondTabSwitch(2)">
       <span class="astrix">{{message}}</span>
        <form  @click.prevent>
            <div>
              <label for="">Nom <span class="astrix">*</span> </label>
              <input v-model="name" type="text"  placeholder="Votre nom"  />
              
            </div>
            <div>
              <label for="">Prénom <span class="astrix">*</span> </label>
              <input v-model="surname" type="text"  placeholder="Votre prénom"  />
            </div>
            <div>
              <label for="">E-mail</label>
              <input v-model="email" type="email" name="" placeholder="Votre E-mail" id="" />
            </div>
          </form>
   </tab-content>
   <tab-content title="Suivant"  :before-change="()=>beforeThirdTabSwitch(3)">
            <span class="astrix">{{message}}</span>

    <form @click.prevent>
            <div>
              <label for="">Montant à payer</label>
              <input type="text" name="" placeholder="CFA" v-model="calculatePrice" id="" disabled/>
            </div>
            <div>
              <label for="">Mode de paiement</label>
              <select name="" id="">
                <option value="">Orange Money</option>
              </select>
            </div>
            <div>
              <label for="">Num tél Compte orange money <span class="astrix">*</span></label>
              <input v-model="telephone"  @keypress="validateNumber" type="text" name="" placeholder="numéro téléphone" id="" />
            </div>
            <div>
              <label for="">Code mmid <span class="astrix">*</span></label>
              <input v-model="code" type="text" name="" id="" />
            </div>
          </form>
   </tab-content>
</form-wizard>
      
    </div>
      
    <h2 class="center__text">NOUS VOUS FACILITONS LA TÂCHE</h2>
    <div class="cards sixty__container">
      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/bus-ter.png"
          alt=""
        />
        <div class="card__details center__text">
          <h3>Obtenez Votre ticket depuis chez-vous par SMS</h3>
          <p>
            Désormais possible depuis la maison d'obtenir votre TAB-SMS,
        
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/Ticket-instantane.png"
          alt=""
        />
        <div class="card__details center__text">
          <h3>Payer avec votre Compte Mobile Money</h3>
          <p>
            Finir les <strong>problèmes</strong> de <strong>monnaie</strong>.
            Payer avec votre Compte Mobile : <strong>Orange Money</strong> ou <strong>wave</strong> et
            obtenir votre TAB-SMS. Le moyen le plus simple et le
            moins stressant.
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/Gag-temp.png"
          alt=""
        />
        <div class="card__details center__text">
          <h3>Gagner du temps</h3>
          <p>
            Gagner plus de temps, acheter votre TAB-SMS à l'avance et juste en
            quelques secondes !
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/Ticket-delivre-insta.png"
          alt=""
        />
        <div class="card__details center__text">
          <h3>Ticket délivré instantanément</h3>
          <p>Votre TAB-SMS recevez le instantanément .</p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/icone-garantie.png"
          alt=""
        />
        <div class="card__details center__text">
          <h3>Paiement 100% Garantie</h3>
          <p>
            Tout achat de billet acheté sur notre plateforme garantie votre
            voyage avec la compagnie choisie.
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/sur-securite.png"
          alt=""
        />
        <div class="card__details center__text">
          <h3>Sûr et sécurisé</h3>
          <p>
            Tous les paiements sont sécurisés via votre portefeuille
            électronique mobile.
          </p>
        </div>
      </div>
    </div>
    <h2 class="section__container center__text spacer-2">
      Bientôt disponible sur Google Play Store (Android ou Ios)
    </h2>

    <h3 class="center__text section__container">
      Mobile Ticketing, c’est vraiment une autre façon de voyager. <br />
      Facile et Pratique ce produit vous amènera où vous voudrez en quelques
      clics. <br />
      N’attendez pas pour le mettre dans vos favoris. <br />
      La Ponctualité. Nous y travaillons chaque minute.
    </h3>
    <section class="sixty__container">
      <h1 class="title center__text">Nos partenaires</h1>
      <div class="partners">
        <img
          class="img__responsive partner__image"
          src="/../images/ticketing/ddd-200x200.png"
          alt="ddk"
        />
        <img
          class="img__responsive partner__image"
          src="/../images/ticketing/wave.png"
          alt="afu"
        />
        <img
          class="img__responsive partner__image"
          src="/../images/ticketing/orange-logo-200x200.png"
          alt="orange"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import VeeValidate from 'vee-validate';

import VScrollLock from 'v-scroll-lock';
Vue.use(VeeValidate)
Vue.use(VScrollLock)




export default {
  data(){
  return{
    
   busnumber:null,
   date:null,
   message:'',
   name:null,
   surname:null,
   telephone:null,
   code:null,
   email:null,
  
  firstinput:'',
    secondinput:'',
    numberoftickets:0,
    currentprice:0,
    places:[
        {linge:2,id:1,start:'Darou', end:'TGW',price:100},
        {linge:2,id:2,start:'Darou', end:'Tally B Magg',price:175},
        {linge:2,id:3,start:'Darou', end:'Usine eaux',price:175},
          {linge:2,id:4, start:'TGW', end:'Darou',price:175},
           {linge:3,id:5, start:'test', end:'test4',price:175},
          

           {linge:2,id:6,start:'TGW',end:'Tally B Magg',price:100},
           {linge:2,id:7,start:'Tally B Magg',end:'Usine eaux',price:175},
            {linge:3,id:8, start:'Tally', end:'Magg',price:500},
            {linge:2,id:9,start:'Usine eaux', end:'Darou',price:200},
             {linge:2,id:10,start:'Darou', end:'Arret NiayeLLobat',price:175},
  
      ]
  }
  },
 
  components: {
    Navigation,
    Footer,
    FormWizard,
    TabContent,
  },
  methods:{
   beforeTabSwitch(){

      window.scrollTo(0, 2400);
   if (this.busnumber == null || this.date == null || this.currentprice ==0 
         ){
        this.message="please fill all fields"
     return false;
   }

   return true
   },
   beforeSecondTabSwitch(){
     console.log(this.name,this.surname)
   if( this.name == null || this.surname == null){
     this.message="please fill all fields"
     return false;
   }
   
     return true
    
  
   },
   beforeThirdTabSwitch(){
     if(this.telephone == null || this.code == null){
            this.message="please fill all fields"
       return false;
     }
     return true;
 
   },
   switchtext(){
  console.log("second input",this.secondinput.end)
     
     const temp = this.firstinput.start;
     this.firstinput.start = this.secondinput.end;
     this.secondinput.end = temp

   },
   validateNumber: (event) => {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },

    checkForm(){
   
   this.$validator.validateAll().then(res=>{
     
   }

   )
    
    
  

    },
  
  
  },
  computed:{
    calculatePrice(){
      this.currentprice = this.firstinput.price;
     return this.numberoftickets * this.currentprice;
      
    },
    matchdestinations(){
      return this.places.filter(p=>{
       return   p.linge == this.busnumber
      })
    }

  }

  
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.partner__image {
  display: block;
  margin: 2rem auto;
}
label {
  display: block;
  font-weight: bold;
  margin-top: 1rem;
}
.astrix{
  color:red;
}
.underline {
  border-bottom: 3px solid $color-tertiary;
}
input,
select {
  width: 100%;
  display: block;

  box-sizing: border-box;
  border: none;
  color: #555;
  height: 50px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  margin-top: 1rem;
}
.switch__btn{
  margin-top: 1rem;
  padding: .5rem;
  color: #fff;
    background: hsl(206, 100%, 50%);
    border: none;
    border-radius: 4px;
    cursor: pointer;
}


.cgvtext {
  text-decoration: none;
  color: $color-black;
 
}
.cgvfile {
 
   padding: .5rem;
   
   border-radius: 4px;
     transition: transform .3s;
  &:hover {
     background: $color-tertiary;
     
        transform: scale(1.1); 
        
     .cgvtext{
       color: $color-white;
     }
  }
}
@media (min-width: 64rem) {
  .partners {
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  form {
    width: 50%;
    margin: 0 auto;
  }
  .underline {
    width: 400px;
  }
  .cgvfile{
   width:70%;
  }
}
</style>
