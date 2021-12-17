<template>
  <div>
    <Navigation />
    <div class="grid__section">
    <section class="section__container top__container blog__details">
      <h1 class="title center__text">
        Envoi SMS PRO pour les associations et les organisations
        professionnelles
      </h1>
                <img class="card__image" src="/../images/group-80x80.png" alt="" />

      <h2>Milieu associatif</h2>
      <p>
        Servicesms.sn propose des solutions SMS PRO permettent aux associations
        de <strong>communiquer avec leurs adhérents</strong> de manière simple et concrète. Vous
        organisez une collecte de fonds ? Une journée d’information ? Un
        événement type dîner dansant ? Mettez en place une politique de gestion
        de données de vos adhérents, puis regroupez-les pour les inciter à en
        parler autour d’eux.
      </p>
      <p>
        Parler autour de soi d’une cause à laquelle on croit aide à recruter des
        adhérents dans le milieu associatif, c’est une clé importante pour la
        longévité et le développement d’une association. Pour optimiser les
        actions que vous souhaitez mener à ce sujet, vous pouvez également
        <strong>mettre en place une stratégie de parrainage</strong> par SMS. Envoyez des
        campagnes de SMS incluant des liens vers vos sites ou vos pages
        d’inscription, un bon moyen de recruter efficacement.
      </p>
      <h2>Organisations professionnelles</h2>
      <p>
        La communication via SMS PRO est un véritable allié stratégique pour
        <strong>animer un réseau d’adhérents</strong>, leur fournir des informations clés de leur
        secteur ou encore des rencontres pour fédérer de nouveaux adhérents !
        Quoi de mieux qu’une communication de proximité, une <strong>communication
        innovante</strong> pour recruter ?
      </p>
      <p>
        Organisez un quick business meeting dans votre région pour que les
        professionnels de tout secteur se rencontrent et fasse de votre
        organisation un lieu d’échange et de collaboration.
      </p>
      <p>
        Communiquez en situation de crise sur une décision règlementaire, un
        rassemblement, mobilisez vos forces de terrain avec rapidité, proximité
        et interactivité avec notre plateforme <strong>service-sms</strong>.
      </p>
      <p>
        Organisez des conférences, des réunions sur des problématiques précises
        que rencontrent vos adhérents sur leur secteur d’activité. Mettez en
        place un calendrier et programmez vos diffusions de SMS en masse à
        l’avance. Un bon moyen de <strong>maîtriser sa communication SMS</strong> et de garantir
        le dynamisme des permanents qui travaillent au sein de l’organisation.
      </p>
      <p>
        Enfin, en complément de vos diffusions programmées, bâtissez un fichier
        de contacts précis qui vous permettra d’optimiser l’utilisation d’une
        gamme de fonctionnalités sans égal, de <strong>SMS personnalisés</strong>. Vos adhérents
        recevront un SMS indiquant leur <strong>prénom</strong> ou leur <strong>titre</strong> <strong> « Madame »</strong>,
        <strong>« Monsieur »</strong>, ou encore <strong>« Cher Mr Pam »</strong> qui mettra en avant la proximité
        de lien et de considération que vous leur témoignez.
      </p>
      <p>
        <strong
          >Exemples de campagnes SMS pour les associations et les organisations
          professionnelles</strong
        >
      </p>
      <div class="cards">
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
          <p class="card__details">
            «Rappel : Cher adhérent, notre assemblée générale est prévue <br />le
            18/4/2021.<br /> Inscrivez-vous sur : https://asc.com »
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
         « Participez à notre dîner dansant du mois prochain au bénéfice de notre asso humanitaire. <br /> Infos https://asc.com »

         </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/icone_phone.png">
         <p class="card__details">
         « Cher adhérent,<br />
           Participez à notre Tombola et tentez de gagner un écran plat d’une valeur de 500 000f et bien d’autres prix ! www.tombola.sn »
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
