<template>
  <div class="fix__navigation">
    <header class="header">
      <div>
        <a href="/"
          ><img
            class="logo__image"
            src="/../images/logo-services-sms.png"
            alt="logo"
          />
        </a>
      </div>

     <vue-typed-js
            :strings="['This site is still under development']"
            :startDelay="70"
            :loopCount="3"
            :typeSpeed="260"
            :cursorChar="'_'"
          >
            <p class="typing sub__paragraph"></p>
          </vue-typed-js>

      <div class="header__links">
        <router-link class="header__link" to="/login">
          <img class="link__icon" src="/../images/lock.png" alt="" /> Espace
          client</router-link
        >
        <router-link class="header__link" to="/signup">
          <img class="link__icon" src="/../images/writing.png" alt="" />
          Inscription</router-link
        >
      </div>
      <div class="menu">
        <span class="menu__button" v-on:click="item2Visible = !item2Visible"
          >&#9776;</span
        >
      </div>
    </header>
    <nav class="section__container nav" v-show="item2Visible">
      <div class="sub__nav">
        <router-link
          class="nav__links"
          to=""
          @mouseover.native="hover = true"
          @mouseleave.native="hover = false"
          @click.native="togglenav"
          >SOLUTIONS
          <img class="drop_downicon" src="/../images/menu.png" alt="" />

          <div class="toggle__nav" v-if="hover">
            <div class="desktop__navigation">
              <router-link to="/smspro" class="sub__nav--links">
                <img src="/../images/icon-sms-pro.png" class="nav__img" /> SMS
                PRO</router-link
              >
              <router-link to="/smsvocal" class="sub__nav--links">
                <img class="nav__img" src="/../images/icone-vocal-sms.png" />
                SMS VOCAL</router-link
              >
              <router-link to="/enrich" class="sub__nav--links">
                <img
                  class="nav__img"
                  src="/../images/icone-sms-20.png"
                  alt="sms"
                />
                SMS 2.0</router-link
              >
              <router-link to="/location" class="sub__nav--links">
                <img
                  class="nav__img"
                  src="/../images/loca-bdd-sms.png"
                  alt="bdd"
                />
                LOCATION BDD </router-link
              >
              <router-link to="/mailing" class="sub__nav--links">
                <img
                  class="nav__img"
                  src="/../images/emailing-icon-.png"
                  alt="smsmailing"
                />
                SMS MAILING</router-link
              >
              <router-link to="/sondage" class="sub__nav--links"
                >           <img class="nav__img" src="/../images/sondage-par-sms.png" alt="sms" />
 SONDAGES SMS</router-link
              >
              <router-link to="/votre" class="sub__nav--links"
                >           <img class="nav__img" src="/../images/vote-par-sms.png" alt="vote" />
 VOTE SMS</router-link
              >
              <router-link to="/mobileticketing" class="sub__nav--links"
                >           <img class="nav__img" src="/../images/mobile-Tiketing.png" alt="ticketing" />
MOBILE TICKETING</router-link
              >
              <router-link
                to=""
                class="sub__nav--links"
                @mouseleave.native="hover = false"
              ></router-link>
            </div>
          </div>
        </router-link>

        <router-link class="nav__links" to="/functionalities"
          >FONCTIONNALITES</router-link
        >
        <router-link class="nav__links" to="/tarif">NOS TARIFS</router-link>
        <router-link class="nav__links" to="/metires">METIERS</router-link>

        <router-link class="nav__links" to="/api">API</router-link>
        <router-link class="nav__links" to="/blog">BLOG</router-link>
      </div>

      <router-link to="" class="link__btn"
        ><p class="desc">
          Entrez votre numéro et recevez <br />
          immédiatement un message de test
        </p>
        <div class="flex__two">
          <img src="/../images/left-arrow.png" class="btn__icon" alt="" />
          <input placeholder="Testez notre service" type="text" @keypress="validateNumber" id="number" />
          <img src="/../images/icone.png" class="send__btn" alt="" />
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
import VueTypeJs from "vue-typed-js";
export default {
  data() {
    return {
      hover: false,
      sub: false,
      nav: "vis",

      seenp: false,
      item1Visible: false,
      item2Visible: true,
    };
  },
  methods: {
    // bad code fix it later
    togglenav() {
      if (this.hover == false) {
        this.hover = true;
      } else {
        this.hover = false;
      }
    },
    // really crappy code fix it later
    // togglenavp(){
    //    if(this.seenp == false){
    //        this.seenp = true;
    //    }
    //    else{
    //        this.seenp = false;
    //    }
    // },
    open() {
      let item = document.querySelector(".nav");
      if (item.style.display == "none") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    },
    changenavbarcolor() {
      window.onscroll = () => {
        const navi = document.querySelector(".sub__nav");
        const n = document.querySelector(".nav");

        if (this.scrollY <= 10) {
          navi.style.background = "red";
        } else {
          navi.style.background = "#FFFFFF";
          n.style.background = "#FFFFFF";
        }
      };
    },

    validateNumber: (event) => {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
  },

  created: function () {
    //window.alert("Hello mounted is working ");
    this.changenavbarcolor();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.vis {
  display: none;
}
.logo__image {
  width: 200px;
}
.sub__paragraph{
  display: none;
}
.link__btn {
  display: block;
}
.header {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.nav__img{
    display: none;
}
.send__btn {
  margin-top: 10px;
  height: 39px;
}
input[type="text"] {
  height: 35px;
  border-radius: 2px;

  border: none;
  border-color: rgba(255, 255, 255, 0.3);
  outline: none;
}
input:focus {
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
}

.link__btn {
  box-shadow: 0 22px 33px 0 rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to bottom, #ff54c4, #fe2a91);
  text-decoration: none;
  color: #ffffff;
}
.menu {
  margin-left: auto;

  &__button {
    color: $color-tertiary;
    display: block;
    width: 3rem;
    font-size: 2rem;
    cursor: pointer;
  }
}

.contact,
.header__links {
  display: none;
}

.nav {
  margin: 0 auto;

  &__links {
    display: block;
    text-decoration: none;
    text-align: left;
    border-bottom: 0.5px solid #dbdbdb;
    padding: 0.5rem;
    font-size: 0.8rem;
    color: $color-black;
  }
}

.sub__nav--links {
  display: block;
  text-decoration: none;
  font-size: 0.7rem;
  padding: 0.5rem;
  color: $color-black;
}
.sub__message {
  display: contents;
  font-size: 0.8rem;
}
.flex__two {
  display: flex;
  align-items: center;
  justify-content: center;
}
.desc {
  text-align: center;
}

@media (min-width: 64rem) {
  .btn__icon {
    margin-top: 1rem;
  }
  .sub__paragraph{
    display: block;
  }
  input[type="text"] {
    width: 15rem;
    margin-top: 1rem;
  }
  .nav__links {
    margin-left: 1.5rem;
    font-weight: bold;
  }
  .drop_downicon {
    margin-bottom: -0.1rem;
  }
  .contact__icon {
    margin-left: 1rem;
  }
  .contact__detail {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
  .logo__image {
    margin-top: 1rem;
  }
  .menu {
    display: none;
  }
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header {
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    background: #ffffff;
  }
  .header__links {
    display: block;
    font-weight: bold;
  }
  .header__link {
    text-decoration: none;
    margin-right: 1rem;
    color: $color-secondary;
  }

  .link__btn {
    margin-left: auto;
    flex-basis: 30%;
    height: 60px;
  }
  .desc {
    margin: -18px;
  }
  .nav {
    display: flex;

    align-items: center;
    justify-content: center;
  }
  .nav__links {
    display: inline-block;
    border: none;
  }
  .link__btn {
    padding: 1.02rem;
  }
  .nav__links {
    &:hover {
      color: $color-secondary;
    }
  }

  .fix__navigation {
    position: fixed;
    width: 100%;
    top: -8px;
    z-index: 1;
  }

  .toggle__nav {
    position: fixed;
    background: $color-white;
    padding: 1rem;
    width:100%;
    height: 100%;
    
  }
  .sub__nav {
    flex-basis: 70%;
    box-shadow: 0 9px 20px 2px rgba(0, 0, 0, 0.24);
    padding: 1.7rem;
    
  }

.sub__nav--links{
      font-size: 1.5rem;
}
  .proqui {
    left: 420px;
    padding: 1.5rem;
  }

  .nav__img {
      display:inline-block;
    width: 70px;
  }

  .desktop__navigation {
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      width: 100%;
  }



}
</style>