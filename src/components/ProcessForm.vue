<template>
  <div>
    <Navigation />
    <section class="top__container section__container">
      <h1 class="center__text heading">Postuler</h1>
      <h3 class="center__text">
        N'hésitez pas à nous transmettre votre candidature
      </h3>
<flash-message transitionIn="animated swing" class="myCustomClass"></flash-message>
      <div
       
        class="seventy__container form"
       
      >
        <div class="two__grid radio__buttons">
          <div>
            <input
              type="radio"
              name="user_name"
              value="male"
              id="m"
              v-model="picked"
            />
            <label
              for="m"
              class="form__radio man"
              v-bind:class="{ 'i-am-active': first_button_active_state }"
              v-on:click="changeColor"
              >Monsieur</label
            >
          </div>
     
          <div>
            <input
              type="radio"
              name="user_name"
              value="female"
              id="f"
              v-model="picked"
            />
            <label
              for="f"
              class="form__radio woman"
              v-bind:class="{ 'i-am-active': second_button_active_state }"
              v-on:click="changeColor"
              >Madame</label
            >
          </div>
        </div>

        <div class="two__grid">
          <div>
            <input
              type="text"
              v-model="name"
              name="user_firstname"
              placeholder="* Nom"
              required
            />
          </div>
          <div>
            <input
              type="text"
              v-model="surname"
              name="user_secondname"
              id=""
              placeholder="* Prenom"
              required
            />
          </div>
        </div>
        <h2 class="center__text">Votre addresse</h2>
        <!-- <input type="hidden" name="_token" :value="csrf"> -->
        <div class="address__input">
          <input
            v-model="address"
            name="user_address"
            type="text"
            placeholder="* Numero, rue"
            required
          />
        </div>
        <div class="two__grid">
          <div>
            <input
              v-model="postalcode"
              name="postalcode"
              type="text"
              id=""
              placeholder="* Votre code postal"
              required
            />
          </div>
          <div>
            <input
              v-model="ville"
              type="text"
              name="ville"
              id=""
              placeholder="* Votre Ville"
              required
            />
          </div>
        </div>
        <h2 class="center__text">Vos coordonnées</h2>
        <div class="two__grid">
          <div>
            <input
              v-model="telephone"
              type="text"
              name="user_telephone"
              id=""
              placeholder="* Votre telephone"
              required
              @keypress="onlyNumber"
            />
          </div>
          <div>
            <input
            class="asterisk"
              v-model="email"
              type="email"
              name="user_address"
              id=""
              placeholder="* Votre adress email"
            />
          </div>
        </div>
   
        <h2 class="center__text">Votre message</h2>
       
        <div class="file">
           
          <label for="file" class="custom-file-input"></label>
          <input
            type="file"
            name="filename"
            id="file"
            ref="file"
            class="hide__file"
            @change="onFileChange"
          />
          <br>
         <progress max="100" :value.prop="uploadPercentage"></progress>
         <!-- <span> {{uploadPercentage }} %</span> -->

        
        </div>
        <div class="textarea">
          <textarea
            v-model="message"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="* Saissez votre message"
          ></textarea>
        </div>
        <h2 class="center__text">Poste souhaité</h2>
         
        <div class="address__input">
        
          <input
            v-model="interest"
            name="interese"
            type="text"
            placeholder="* qui vous intéresse"
            class="required"
          />
        </div>
        <div class="btn__wrapper">
          <input type="submit" @click="submitFile()" value="Envoyer" class="btn submit__btn" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>

import Navigation from "./Navigation";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import axios from "axios";
import Vue from "vue";
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage);

require('vue-flash-message/dist/vue-flash-message.min.css');
export default {
  data() {
    return {
      uploadPercentage:0,
      picked: '',
      first_button_active_state: false,
      second_button_active_state: false,
      name: '',
      surname: '',
      address: '',
      postalcode: '',
      ville: '',
      telephone: '',
      email: '',
      message: '',
      interest: '',
      file: '',
      scTimer: 0,
      scY: 0,
     

    };
  },

 


  methods: {
    selectGender() {
      console.log("I picked" + this.picked);
    },
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    onFileChange(){
      console.log(this.$refs.file.files[0])
      console.log(this.name,this.surname,this.picked)

     this.file = this.$refs.file.files[0]

    },
    submitFile() {
       window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
     let formData = new FormData();

     formData.append('file',this.file)
     formData.append('firstname',this.name)
     formData.append('lastname',this.surname)
     formData.append('address',this.address)
     formData.append('postalcode',this.postalcode)
     formData.append('ville',this.ville)
     formData.append('telephone',this.telephone)
     formData.append('email',this.email)
     formData.append('message',this.message)
     formData.append('position',this.interest)

     axios.post('https://servicesmscontact.herokuapp.com/api/uploading-file-api',
     formData,
     {
       headers:{
       'Content-Type':'multipart/form-data'
       },
        onUploadProgress:(progressEvent)=>{
         this.uploadPercentage = parseInt(Math.round(progressEvent.loaded/progressEvent.total)* 100);
         console.log(this.uploadPercentage)
      }
    
     }
    
     ).then(()=>{
        console.log('sucess')
        this.flash('Application sent', 'success',{
          timeout:10000
        });
           this.name= '',
      this.surname= '',
      this.address= '',
      this.postalcode= '',
      this.ville= '',
      this.telephone= '',
      this.email= '',
      this.message= '',
      this.interest= '',
      this.file= ''
     
     
     })
     .catch((e)=>{
       console.log("Error", e.response.data)
       this.flash(' failed to submit application, please try again ', 'error',{
         timeout:10000
       });
        this.name= '',
      this.surname= '',
      this.address= '',
      this.postalcode= '',
      this.ville= '',
      this.telephone= '',
      this.email= '',
      this.message= '',
      this.interest= '',
      this.file= ''
     })
    },
   handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      
    changeColor() {
      if (this.first_button_active_state == false) {
        this.first_button_active_state = true;
        this.second_button_active_state = false;

        // this.button_active_state = !this.button_active_state
      } else if (this.second_button_active_state == false) {
        this.second_button_active_state = true;
        this.first_button_active_state = false;
      }
    },
  
  
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
  components: {
    Navigation,
    Footer,
 
  },
};
</script>

</script>



<style lang="scss" scoped>
@import "../assets/base.scss";

.form {
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
}

.i-am-active {
  color: $color-white;
  background: $color-tertiary !important;
}
.hide__file {
  display: none;
}

input:focus {
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
}
input[type="radio"] {
  display: none;
}
input[type="file"] {
  color: transparent;
}
input:required,
input:invalid {
  border-color: red;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.form__radio {
  background-color: #eee;
  font-size: 1.2rem;
  margin-top: 2rem;
  width: 90%;
  margin: 1rem auto;
  display: block;
  font-weight: 400;
  padding: 7px 5px;
  border-radius: 5px;

  text-align: center;
}
.file {
  width: 90%;
  margin: 0 auto;
}
textarea {
  width: 90%;
  display: block;
  margin: 0 auto;
  border: 2px solid;
  border-color: #bbb;
}

.custom-file-input::before {
  content: "Déposez votre CV ";

  display: block;
  margin: 1rem auto;
  background: $color-tertiary;
  text-align: center;
  border-radius: 3px;
  padding: 1rem;
  outline: none;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  font-weight: 700;
  color: $color-white;
}

input::placeholder, textarea::placeholder {
  padding-left: 1rem;
  font-weight: bold;
}


input[type="text"],
input[type="email"] {
  width: 90%;
  display: block;
  margin: 0 auto;
  border: none;

  border: 2px solid;
  border-color: #bbb;
  height: 60px;
  font-size: 1.2rem;
  color: #222;
  border-radius: 10px;
  margin-top: 1rem;

  box-sizing: border-box;

  box-shadow: none;
}
.submit__btn {
  background: $color-tertiary;
  width: 10rem;
  margin: 2rem auto;
  border-radius: 5px;
  font-weight: bolder;
}

input:focus,
textarea:focus {
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
}
.btn__wrapper {
  width: 10rem;
  margin: 0 auto;
}
@media (min-width: 64rem) {
  .form__radio {
    width: 10rem;
  }
  .two__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 70%;
    margin: 0 auto;
  }
  .radio__buttons {
    width: 50%;
    margin: 0 auto;
  }
  .address__input {
    width: 74%;
    margin: 0 auto;
  }
  .file {
    width: 20rem;
    margin: 0 auto;
  }
  .textarea {
    width: 74%;
    margin: 0 auto;
  }
}
</style>