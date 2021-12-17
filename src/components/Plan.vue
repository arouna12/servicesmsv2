<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title center__text" >Plan du site</h1>
      <h2>Accueil  </h2>
      <h2>Découvrir</h2>
       <li><router-link class="nav__links" to="/">Nos solutions SMS</router-link></li>
       <li><router-link class="nav__links" to="/functionalities">Fonctionnalités</router-link></li>
       <li><router-link class="nav__links" to="/tarif">Nos Tarifs</router-link></li>
       <li><router-link class="nav__links" to="/metires" >Métiers</router-link> </li>
       <li><router-link class="nav__links" to="/api">API</router-link></li>
     

     <h2>Produits </h2>
     <li><router-link to="/smspro" class="sub__nav--links"  >SMS Pro</router-link></li>
     <li><router-link to="/enrich" class="sub__nav--links" >SMS Enrichi</router-link></li>
     <li><router-link to="/location" class="sub__nav--links" >Location BDD SMS</router-link></li>
     <li><router-link to="/mailing" class="sub__nav--links" >SMS MAILING</router-link></li>
     <li><router-link to="/sondage" class="sub__nav--links">Sondages par SMS</router-link></li>
     <li><router-link to="/votre" class="sub__nav--links">Vote par SMS</router-link></li>
     <li><router-link to="/mobileticketing" class="sub__nav--links">Mobile Ticketing</router-link></li>
     <router-link to="" class="sub__nav--links"  @mouseleave.native="hover=false"></router-link>
     
<h2>Notre société</h2>
<li><router-link to="/sommes" class="sub__nav--links"  >Qui sommes-nous ?</router-link></li>
<li><router-link to="/Marche" class="sub__nav--links"  >Comment ça marche</router-link></li>
<li><router-link to="/Reference" class="sub__nav--links"  >Nos Références</router-link></li>
<li><router-link to="/Recruitment" class="sub__nav--links"  >Nous recrutons !</router-link></li>
<li><router-link to="/faq" class="sub__nav--links"  >FAQ</router-link></li>

<h2>Légal</h2>
<li><router-link to="/legal" class="sub__nav--links"  >Mentions légales</router-link></li>
<li><router-link to="/cgu" class="sub__nav--links"  >CGU</router-link></li>
<li><router-link to="/cgv" class="sub__nav--links"  >CGU</router-link></li>
<li><router-link to="/Politique" class="sub__nav--links"  >Politique de confidentialité</router-link></li>
<li><router-link to="/Cookie" class="sub__nav--links"  >Nos cookies</router-link></li>

<h2>Contact</h2>
<li><router-link to="/Contact" class="sub__nav--links"  >Contactez-nous</router-link></li>
<li><router-link to="/Blog" class="sub__nav--links"  >Blog</router-link></li>
<li><router-link to="/Plan" class="sub__nav--links"  >Plan du site</router-link></li>
<li><router-link to="" class="sub__nav--links"  >LinkedIn</router-link></li>
<li><router-link to="" class="sub__nav--links"  >Facebook</router-link></li>
<li><router-link to="" class="sub__nav--links"  >Twitter</router-link></li>

<h2>Connexion</h2>
  <li><router-link to="/login" class="sub__nav--links"  >Se connecter</router-link></li>
  <li><router-link to="/signup" class="sub__nav--links"  >S'inscrire</router-link></li>
    </section>
      <Footer/>

  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
  
};
</script>
<style lang="scss" scoped>
@import "../assets/base.scss";

.sub__nav--links ,.nav__links{
  text-decoration: none;
  color: $color-tertiary;
  
}
li{
  list-style-type: none;
}
</style>
