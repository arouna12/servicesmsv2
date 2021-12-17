<template>
  <div>
    <Navigation />
    <section class="top__container section__containe">
      <form  class="form" >
        <h2 class="center__text">INSCRIPTION RAPIDE</h2>
        <p class="center__text"
          >Seulement quelques secondes pour vous inscrire : <br>
           un mot de passe vous
          sera envoyé par e-mail.</p>

          <div>
          <input type="email" name=""  placeholder="Votre email">
          </div>


          <div class="password">
       
        <VuePassword
           placeholder="Votre password"
            v-model="password1"
            id="password1"
            :strength="strength"
            type="password"
        />
    </div>
          <div>
             <vue-tel-input  class="text"> </vue-tel-input>

             <p class="terms">
               Ce numéro ne sera utilisé par servicesms.sn qu'à des fins d'identification <br> et ne sera jamais utilisé ou revendu à des tiers.
             </p>

              

              <div class="g-recaptcha" data-sitekey="your_site_key"></div>

          </div>
                  <div class="center__button">
                  <button class="form__btn g-recaptcha"
                  
                  
                  
                  
                   >Valider</button>
                   </div>
                   <p class="terms">
                     En cliquant sur le bouton Valider ci dessous, vous confirmez avoir <br>
                     lu et accepté les <router-link to="/cgu" class="link">conditions générales d'utilisation</router-link> ainsi que la  <router-link to="/politique" class="link">politique de confidentialité</router-link>
                   </p>

                           <p class="center__text title"> <router-link to="/login" class="link">← Connexion </router-link > mot de passe oublié     </p>

      </form>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue';
import Navigation from "./Navigation";
import Footer from "./Footer";
import VueRecaptcha from 'vue-recaptcha';



import VueTelInput from 'vue-tel-input';
import VuePassword from 'vue-password';
Vue.use(VueTelInput)
export default {
  components: {
    Navigation,
    Footer,
    'vue-recaptcha': VueRecaptcha,
    VuePassword,

 
  },
  data(){
    
    return {
      
    password1:"",
    strength:0,
        }
  },
      
 
  methods:{
    
   
   submit: function() {
      
    },
    
  }
};
</script>

<style lang="scss" scoped>
@import  "../assets/base.scss";
label {
  display: block;
  font-weight: bold;
  margin-top: 1rem;
}
input[type="email"]{
    box-sizing: border-box;
    width: 100%;
}
.form{
  width: 90%;
}
.link{
  text-decoration:none;
  color:$color-tertiary;
  font-weight: bold;
}
.form__group {
    width: 95%;
    margin: 0 auto;
}
.terms{
  font-size: .8rem;
  text-align:center;
}

.input-icons span {
            position: absolute;
            margin-left: 10px;
        }
          
        .input-icons {
            width: 100%;
            margin-bottom: 10px;
        }
          
        .icon {
            padding: 30px 0 10px 0 ;
            min-width: 100px;
            text-align: center;
            
        }
    .form{
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
  
  
}

@import "../assets/base.scss";

input[type="email"]{
border: 1px solid #cbd5e0;
    border-radius: .125rem;
    display: block;
    padding: .5rem .75rem;
  
}

.text{
   border: 1px solid #cbd5e0;
    border-radius: .125rem;
    margin-top: 1rem;
    margin: 1rem auto;
}
.password{
  margin-top: 1rem;
}
::placeholder{
    padding-left: 1rem;
}

.center__button{
   display: flex;
   align-items: center;
   justify-content: center;
}
.form__btn {
  width: 50%;
  margin-bottom: 1rem;
  padding: 1rem;
  background: $color-tertiary;
  border: none;
  box-sizing: border-box;
  color: $color-white;
  font-weight: bold;
 
  cursor: pointer;
  &:hover {
    background: rgb(32, 32, 133);
  }
}
 input:focus{
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
 }
@media (min-width: 64rem) {
  .form{
   width: 50%;
   margin: 4rem auto;
     padding: 4rem;
  }
  .input[type="email"]{
    width:97%;
  }
}
</style>
