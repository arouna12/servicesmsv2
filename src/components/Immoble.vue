<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
                <img class="card__image" src="/../images/immoble.png" alt="" />

      <h1 class="title center__text">Envoi SMS Pro immobilier</h1>
      <h2>
        L’utilisation du SMS professionnel dans le secteur de l’immobilier
      </h2>
      <p>
        Le secteur de l’immobilier est un secteur où <strong>réactivité</strong> et <strong>communication</strong>
        sont de mise. Les agences immobilières sont nombreuses et cherchent à se
        démarquer les unes des autres par l’utilisation de canaux de
        communication originaux et efficaces. L’arrivée des nouvelles
        technologies de communication dans ce secteur a été plus que salutaire
        car cela a permis une <strong>digitalisation de l’immobilier</strong>, une meilleure
        compréhension du marché et une adaptabilité face aux nouvelles attentes
        des acquéreurs, vendeurs et locataires. Le <strong>SMS professionnel</strong> est l’un
        des moyens de <strong>communication</strong> qui permet aux <strong>agences immobilières</strong>, quelle
        que soit leur spécialité (transaction de biens ou gestion locative), de
        <strong>communiquer rapidement et efficacement</strong>. Avec un rapport efficacité/prix
        indétrônable, le <strong>SMS Pro</strong> est l’un des seuls outils capables d’allier
        parfaitement prix bas, rapidité, mémorisation et pertinence.
      </p>
      <h3>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans l’immobilier. En voici quelques exemples :
      </h3>
      <p>
        <li>Campagnes promotionnelles <br /></li>
        <li>Rappel de rendez-vous (visites) <br /></li>
        <li>Rappel d’installations/paiements <br /></li>
        <li>Rappel aux locataires de payer le loyer <br /></li>
        <li>Nouvelles propriétés en vente <br /></li>
        <li>Nouveau projet immobilier <br /></li>
        <li>Envoi de newsletter grâce à nos SMS enrichis (lien)</li>
      <p>
      <h3>Quelques exemples de SMS :</h3>
      <div class="cards">
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Monsieur Diop, <br>la villa que vous avez louée l’été dernier est
        disponible dès le mois de juin cette année ! Merci de nous contacter
        pour une nouvelle location. »
      </p>
      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
        <p class="card__details">
        « Madame, <br>nous vous informons que votre appartement sera visité par de potentiels acheteurs à demain à 1Oh »
      </p>
      </div>
      <div class="card">
        <img class="card__image" src="/../images/icone_phone.png">
      <p class="card__details">
      « Monsieur, <br>le loyer du mois de juin n’a toujours pas été réglé. Merci de nous faire parvenir
      un chèque au plus vite. »
      </p>
      </div>
      </div>
    
     
    
    </section>
    <SideNav/>
    </div>
    <Footer/>
  </div>


</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
import SideNav from "./SideNav";
export default {
  components: {
    Navigation,
    Footer,
    SideNav
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
</style>
