<template>
  <div>
    <Navigation />

    <section class="section__container top__container blog__details">
      <h1 class="title center__text">Mailing par SMS</h1>
      <h2 class="title center__text">SMS Mailing | Envoyer un emailing par texto ciblé et personnalisé</h2>
      <p>
        Le <strong>Mailing par SMS</strong> connu également sous le nom de <strong>SMS marketing</strong>, est
        devenu aujourd'hui un moyen extrêmement simple et terriblement efficace
        de communiquer et entretenir un lien de proximité avec votre clientèle.
      </p>
      <h2>L’objectif du SMS mailing</h2>
      <p>
        Le SMS Mailing vous permet d’envoyer des mini-messages (SMS, Textos) à
        un ensemble de destinataires, directement sur leur téléphone portable.
        Ce système est une solution souple, simple, conviviale, rapide et
        économique pour diffuser une information au plus grand nombre (fermeture
        exceptionnelle d’un établissement ou d’un service, signaler la
        nécessité, d’une présence à une réunion, signaler une anomalie ou un
        évènement anormal, annoncer une opération promotionnelle).
      </p>
      <h2>
        Envoyer un mailing par SMS pour prospecter ou fidéliser les clients
      </h2>
      <p>
        Envoyer un mailing par texto à une liste de clients pour les informer
        sur de nouveaux articles. Le SMS permet d’augmenter vos communications
        marketing avec un messages court et pertinent.
      </p>
      <p>
        Par ailleurs, le SMS Mailing peut aussi être vocalisé pour envoi sur des
        téléphones fixes. De plus, automatiquement les mêmes SMS peuvent être
        aussi adressés automatiquement par e-mail pour ceux disposant d’une
        messagerie, augmentant ainsi par écrit, la validation du message
        adressé.
      </p>
      <p>
        Le SMS Mailing de servicesms.sn, c’est aussi la possibilité de paramétrer
        les messages, par exemple en créant des messages types, en
        personnalisant chaque message avec le nom du destinataire, en planifiant
        l’envoi des messages, en organisant des campagnes d’envoi, en gérant
        l’historique et les statistiques d’envoi.
      </p>
      <p>
        Le SMS Mailing c’est un envoi multiple de SMS à un fichier client. Grâce
        à ce système d’envoi de SMS vous toucherez un grand nombre de personnes
        de manière rapide, conviviale, économique et directe. De plus, elles
        pourront répondre directement et par le même biais à votre message.
      </p>
      <h2>
        Le mailing SMS, le plus court chemin pour envoyer des SMS depuis son PC .
      </h2>
      <p>
        Le mailing SMS représente de réels avantages pour les professionnels et
        entreprises afin de faire parvenir de manière efficace et instantanée, à
        leur base de numéros (fichier de clients ou prospects), promotions,
        messages d’alerte ou d’information. Les bénéfices du SMS marketing par
        rapport aux emails traditionnel ou à un courrier envoyé sont par
        ailleurs nombreux (hormis le fait qu’il est moins cher !) :
        délivrabilité maximale grâce à l’absence de spam, message plus efficace
        et plus mémorisé, lecture de votre message texte par son destinataire
        presque assurée, etc.
      </p>
      <p>
        Retrouvez quelques cas d’applications de campagne marketing direct et
        mailing SMS que vous pourrez intégrer de manière simple dans votre
        communication :
      </p>
      <p>
        <li><strong>la réalisation de messages publicitaires et promotionnels</strong> :
        vous pouvez utiliser le canal SMS pour communiquer en masse auprès 
        de votre cible tout en gardant un côté très personnel ; ainsi l’envoi SMS 
        vous permet de communiquer rapidement, facilement et efficacement vos promotions,
        ventes privées, journée événements, etc. L’efficacité du mailing SMS pour augmenter
        le trafic en point de vente et fidéliser vos clients est largement approuvée.
      </li>
      <p>
      <li><strong>l’envoi de messages d’informations commerciales à ses clients</strong> :
        réalisez l’envoi multiple de SMS professionnel pour diffuser des
        messages de bienvenue, d’anniversaire, d’enquêtes de satisfaction, etc.
        Vous animerez ainsi automatiquement votre relation client via l’envoi de
        SMS par Internet !
      </li>
        <p>
        <li><strong>les messages SMS liés au parcours client</strong> : restez en contact avec votre
        base de contacts et clients à chaque étape du leur achat et envoyez-leur
        des confirmations de commande ou de réservation, des avis de livraison
        ou de mise à disposition du produit en point de retrait, etc.
      </li>
   


      <p>
        <li><strong>l’envoi d’alerte et de rappel de rendez-vous </strong>: fonctionnalité
        maintenant bien adoptée par les secteurs scolaires, médicaux et le
        secteur des services, l’envoi d’alertes ou de rappels de rendez-vous par
        SMS à la date souhaitée via notre plateforme de routage permet
        d’informer en urgence et en temps réel et a fait largement ses preuves !
      </li>
      <p>
     <router-link class="footer_navlinks" to="/contact">
       N’attendez plus et contactez-nous</router-link> pour plus d’informations sur le SMS Mailing de SERVICES-SMS,
        une solution simple et efficace pour communiquer.
      </p>
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
.footer_navlinks{
  text-decoration: none;
  color: $color-tertiary;
}
</style>
