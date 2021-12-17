<template>
   <section class="revolution ">
      <div class="section__container sms__revolution">
        <img
          class="img container revolution__img"
          src="/../images/LOGO-en-fond-vert.png"
          alt="revolution"
        />
        <div class="container revolution__description">
          <h2 class="revolution__title center__text">
            La révolution SMS à votre portée
          </h2>
          <div class="center__button">
              <router-link to="/signup" class="revolution__btn btn">TESTEZ GRATUITEMENT</router-link>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

 .revolution{
     background:$color-tertiary ;
 }
</style>