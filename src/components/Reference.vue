<template>
    <div>

  <Navigation/>
  <section class="top__container section__container">
    <h1 class="center__text referene__heading title">NOS REFERENCES</h1>
    <div class="reference__images">
     <carousel :autoplay="true" :adjustableHeight="true" :loop="true">

      <slide>
        <img src="/../images/refrences/swiss.png" class="img__resposive referene__image" alt="psej" >
        


  </slide>
  
  <slide>
        <img src="/../images/refrences/logo_bwtech.png" class="img__resposive referene__image" alt="bwtech" >
         

  </slide>
  <slide>
       <img src="/../images/refrences/logo_psej.png" class="img__resposive referene__image" alt="psej" >
  </slide>
  
</carousel>
    </div>
    </section>
    <Footer/>
  </div>
    
</template>

<script>
import Navigation from './Navigation';
import Footer from './Footer';
import { Carousel, Slide } from 'vue-carousel';


    export default {
     components:{
         Navigation,
         Footer,
          Carousel,
         Slide
     }        
    }
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
.referene__image{
    display: block;
    margin: 0 auto;
    max-width: 100%;
}
   @media(min-width: 64rem){
     
       .reference__images{
           margin-top: 4rem;
           padding: 4rem;
       }

       .VueCarousel-slide-adjustableHeight{
        
         flex-basis: 50%;

       }


   }
</style>