<template>
  <div>
    <Navigation />
    <section class="section__container top__container ">
      <div class="address__detail">
      
      <div class="grid__contact">
        <img class="contact__icon" src="/../images/address.png" alt="" />
        
        <div >
          <h3>ADRESSE</h3>
          <p>
            Ouakam Cité El Hadji Omar Tall, <br>
             Dakar
          </p>
        </div>
        </div>
        <div class="grid__contact">

          <img class="contact__icon" src="/../images/contact.png" alt="" />

          <div class="">
            <h2>Contact</h2>
            <p>
              +221 77 710 23 53 <br />
              Fax :  +33 (0) 0 12 34 56 78 <br>
              Email: contact@servicesms.sn
            </p>
          </div>
        </div>
      </div>
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
      <div >
        <iframe class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15435.363147791748!2d-17.501448163290735!3d14.721591838946527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec16d52737c340b%3A0x3f7058593d413bed!2sOuakam%2C%20Dakar%2C%20Senegal!5e0!3m2!1sen!2skr!4v1597739584118!5m2!1sen!2skr"
          
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>

      </div>
      <h2 class="center__text">Contactez-nous</h2>
        <form class="form" @submit.prevent="sendEmail">
         <div>
          <label for="name">Nom <span class="astrix">*</span></label>
      <input type="text" name="name" id="name"   required>
      </div>
      <div>
        <label for="email">Votre email <span class="astrix">*</span></label>
      <input v-model="email" type="email" name="email" id="email"  required>
      </div>
      <div>
        <label for="name">Numero <span class="astrix">*</span></label>
      <input @keypress="onlyNumber" type="text" name="number" id="numbers"  required>
      </div>
      <div>
       <select name="__question" id="question">
       <option value="Question Technique">Question Technique</option>
       <option value="Informations commerciales">Informations commerciales</option>
       <option value="Proposition de partenariat">Proposition de partenariat</option>
       </select>
      </div>
      <div>
      <label for="name">Question <span class="astrix">*</span></label>

      <textarea required name="message"  id="message" cols="30" rows="10"  ></textarea>
       <button  type="submit" :disabled = "!email" class="form__btn"  @click="open = true">ENVOYER</button>
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
import VueModalTor from "vue-modaltor";
Vue.use(VueModalTor);
export default {
    data(){
     return{
         message:"",
         open:false,
         email:""
     }
    },
  components: {
    Navigation,
    Footer,
  },
  computed:{
   
  },
  methods:{
       sendEmail:(e)=>{
              
              emailjs.sendForm('service_bok9mag','template_2kk4j6v',e.target,'user_19zfhDvlt5iPo3XXiWrvc',this)
              .then((result)=>{
                      this.message = "success!"
              },(error)=>{
                 
                 console.log(error)
               
              })
          },
           onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
     hideModal() {
      this.open = false;
    },
    
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.map{
    width: 100%;
    height: 600px;
}

.grid__contact{
    display: grid;
    grid-template-columns: 1fr 4fr;
    background: $color-tertiary;
    color: $color-white;
    margin-top: .5rem;

}
label{
  display: inline-block;
  margin-left: 2rem;
  padding-top: .5rem;
}
.astrix{
  color:red;
 
}
.contact__icon{
    
    padding: 2rem;

}


input[type="text"],input[type="email"],textarea, select{
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
::placeholder{
   padding-left: 1rem;
}
input[type="text"],input[type="email"],select{
    height: 50px;
}
.form__btn {
  
  width: 50%;
  display: block;
  margin: 2rem  auto;
  padding: 1rem;
  background: $color-tertiary;
  border: none;
  box-sizing: border-box;
  color: $color-white;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background: rgb(32, 32, 133);
  }
}
 input:focus, textarea:focus{
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
 }
@media(min-width:64rem){
    .address__detail{
        position: absolute;
        width: 30%;
        right: 10rem;
        
    }
    @media(min-width:64rem){
  .form{
    width:50%;
    margin: 0 auto;
  }

  label{
  
  margin-left: 5rem;
}
}

}
</style>
