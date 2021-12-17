<template>
  <div class="footer__background ">
    <footer class="footer section__container">
      <cookie-law theme="dark-lime">
        <div slot="message">
          Read our cookies law
          <router-link to="cookie" class="cookie"> here</router-link>
        </div>
      </cookie-law>
      <div class="footer__nav">
        <h3 class="footer__title footer__line">Produits</h3>

        <router-link class="footer__navlinks" to="/smspro">
          SMS PRO</router-link
        >

        <router-link class="footer__navlinks" to="/smsvocal">
          SMS VOCAL</router-link
        >

        <router-link class="footer__navlinks" to="/location">
          LOCATION BDD
        </router-link>

        <router-link class="footer__navlinks" to="/enrich">
          SMS 2.0</router-link
        >

        <router-link class="footer__navlinks" to="/mailing">
          SMS MAILING</router-link
        >
        <router-link class="footer__navlinks" to="/sondage">
          SONDAGES SMS</router-link
        >

        <router-link class="footer__navlinks" to="/votre">
          VOTE SMS</router-link
        >

        <router-link class="footer__navlinks" to="/mobileticketing">
          MOBILE TICKETING</router-link
        >
      </div>

      <nav class="footer__nav">
        <h3 class=""><span class="footer__line">Notre </span> société</h3>
        <router-link class="footer__navlinks" to="/sommes"
          >Qui sommes nous?</router-link
        >
        <router-link class="footer__navlinks" to="/marche"
          >Comment ça marche</router-link
        >
        <router-link class="footer__navlinks" to="/reference"
          >Nos Références
        </router-link>
        <router-link class="footer__navlinks" to="/recruitment">
          Nous recrutons</router-link
        >
        <router-link class="footer__navlinks" to="/faq"> FAQ</router-link>
      </nav>

      <nav class="footer__nav">
        <h3 class="footer__line">Légal</h3>
        <router-link class="footer__navlinks" to="/legal"
          >Mentions légales</router-link
        >
        <router-link class="footer__navlinks" to="/cgu">CGU</router-link>
        <router-link class="footer__navlinks" to="/cgv">CGV</router-link>
        <router-link class="footer__navlinks" to="/politique"
          >Politique de confidentialité</router-link
        >
        <router-link class="footer__navlinks" to="/cookie">
          Nos cookies</router-link
        >
      </nav>
      <nav class="footer__nav">
        <h3 class="footer__line">Contact</h3>
        <router-link class="footer__navlinks" to="/contact"
          >Contactez-nous</router-link
        >
        <router-link class="footer__navlinks" to="/blog">Blog</router-link>
        <router-link class="footer__navlinks" to="/plan"
          >Plan du site</router-link
        >

        <a target="_blank" href="https://www.linkedin.com/company/servicessms">
          <img src="/../images/linkedin.png" alt="link" /> LinkedIn
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/SERVICESMSsn-100363738650296"
          class="footer__navlinks"
        >
          <img src="/../images/facebook.png" alt="link" /> Facebook
        </a>

        <a href="https://twitter.com/SERVICESMS1">
          <img src="/../images/twitter.png" alt="" srcset="" /> Twitter
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/servicesms.contact/"
          class="footer__navlinks"
        >
          <img src="/../images/instagram.png" alt="" srcset="" /> Instagram
        </a>

        <a
          target="_blank"
          href="https://www.youtube.com/channel/UC3GOKopT10KN2OTZSVk5KJg"
          class="footer__navlinks"
        >
          <img src="/../images/youtube.png" alt="" srcset="" /> Youtube
        </a>
      </nav>
    </footer>

    <div>
      <p class="copyright center__text">
        &copy; {{ year() }}
        Copyright Designed and Powered by SERVICES-SMS- Tous droits réservés.
      </p>
    </div>
  </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";
export default {
  components: {
    CookieLaw,
  },
  methods: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
<style>
@import "../assets/base.scss";

a {
  text-decoration: none;
  color: #333;
}
.footer__background {
  background: #f8f8f8;
}
.footer__navlinks {
  display: block;
  text-decoration: none;
  color: #333;
}

.cookie {
  text-decoration: none;
  color: white;
}

.flex__image {
  display: flex;
}
.footer__line {
  border-bottom: 2px solid #0092ff;
  width: 40px;
}
.image__certificate {
  padding-left: 2rem;
}
.footer__listings {
  list-style-type: none;
}

@media (min-width: 64rem) {
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .footer__title {
    text-align: left;
  }

  .footer__nav {
    margin-left: 8rem;
  }
}
</style>
