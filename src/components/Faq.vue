<template>
  <div>
    <Navigation />
    <section class="top__container section__container ">
      <h1 class="center__text faq__header">
        FAQ FOIRE AUX QUESTIONS SERVICES-SMS
      </h1>

      <div class="two__grid spacer-1">
                <VueFaqAccordion :items="myItems" activeColor="#0092ff" />

        <VueFaqAccordion :items="fouthItems" activeColor="#0092ff" />

        
      </div>
      <div class="two__grid spacer-1">
        <VueFaqAccordion :items="secondItems" activeColor="#0092ff" />
        <VueFaqAccordion :items="thirdItems" activeColor="#0092ff" />
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import VueFaqAccordion from "vue-faq-accordion";
import Footer from './Footer';
export default {
  data() {
    return {
      myItems: [
        {
          title: "QU’EST-CE QUE SERVICES-SMS ?",
          value:
            "SERVICES-SMS, votre plateforme SMS 100% Sénégalaise ! est une société spécialisée dans l’envoi de SMS en masse pour les professionnels et particuliers. Service-sms propose un des outils les plus complets d’envoi de SMS en masse sur internet, avec des tarifs ultra compétitif et dégressif en fonction de vos besoins. Grâce à l’espace client sécurisé disponible en mode SAAS, aux différentes API (HTTPS, FTP), vous disposez de tous les outils nécessaires pour réaliser vos opérations de marketing SMS, vos envois en masse ou automatiser.",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "COMMENT S’INSCRIRE SUR SERVICES-SMS",
          value:
            "En cliquant sur les liens et boutons « Essai gratuit » ou « Inscription », vous aurez accès à un formulaire simplifié vous permettant de vous inscrire gratuitement et sans engagement à servicesms.sn. Une fois votre inscription validée, vous recevrez un email de confirmation pour activer votre compte et bénéficier de 5 SMS gratuits.",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "MON COMPTE SERA-T-IL VALIDE AUTOMATIQUEMENT ?",
          value:
            "De nombreuses tentatives de fraude nous obligent à soumettre vos informations d’inscription à des outils anti-fraude. Selon votre score, l’activation de votre compte pourra être automatique, ou nécessiter une action manuelle de vérification de notre équipe. N’hésitez pas à nous contacter si après un certain temps, votre compte n’est toujours pas validé. ",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "FAUT-IL S'ENGAGER POUR UTILISER SERVICES-SMS ?",
          value:
            "Non, vous êtes totalement libre d’essayer SERVICES-SMS en créant un compte sans engagement, sans abonnement et sans aucun frais. Votre compte peut même être intégralement détruit sur demande au support par email.",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "COMMENT TESTER LE SERVICE SERVICES-SMS",
          value:
            "Un module de test de notre service est disponible sur notre page d’accueil. En entrant votre numéro de téléphone, vous recevrez un SMS de test et pourrez analyser la rapidité de notre service. Si vous souhaitez tester notre espace client, il suffit de vous inscrire, 5 SMS vous sont offerts pour que vous puissiez tester l’intégralité des fonctionnalités proposées..",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "COMMENT CONTACTER L'EQUIPE SERVICES-SMS",
          value:
            "En cas de remarque, de suggestions ou de problème, l’équipe SERVICES-SMS se tient à votre disposition pour vous accompagner. Vous pouvez nous joindre à tout moment depuis la rubrique contact du site, part tchat, où via la rubrique assistance de l’espace client. Vous pouvez également nous contacter par téléphone au +33 1 2 3 4 5 6.",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title:
            "SERVICES-SMS NECESSITE-T-IL UNE INSTALLATION SUR MON ORDINATEUR ?",
          value:
            "Tous nos solutions SERVICES-SMS s’utilisent directement sur un navigateur internet, en mode SAAS, sans installation préalable de logiciel. Service-sms est compatible avec l’ensemble des navigateurs internet et l’ensemble des systèmes d’exploitation.",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "SERVICES-SMS PEUT-IL ETRE UTILISE SUR SMARTPHONE/TABLETTE ?",
          value:
            "Oui, le site servicesms.sn est développé en Responsive Design. Cela signifie que le site et l’espace client s’afficheront correctement sur tout type d’écran, quel qu’en soit sa taille.",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title:
            "EST-IL NECESSAIRE D'AVOIR DES COMPETENCES INFORMATIQUES POUR UTILISER SERVICES-SMS ?",
          value:
            "L’interface proposée par servicesms.sn est extrêmement simple et ne nécessite pas de compétences particulières. Sans aucun engagement, vous pouvez créer un compte et tester gratuitement notre service afin d’en vérifier la simplicité. 5 SMS vous seront offerts. ",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "UN PARTICULIER PEUT-IL UTILISER NOS SOLUTIONS SERVICES-SMS ?",
          value:
            "Oui. nos solutions servicesms.sn sont réservées aux professionnels et aux particuliers, institutionnels et associations…",
          category: "A PROPOS DE SERVICES-SMS",
        },
        {
          title: "POURQUOI ENVOYER DES SMS ?",
          value:
            "Avec un taux de lecture de plus de 90%, le SMS est le moyen le plus rapide et le plus efficace pour communiquer avec vos correspondants.Et quels que soient les volumes à envoyer, servicesms.sn vous propose le meilleur prix et une gamme de fonctionnalités pour réaliser vos campagnes SMS.Utilisations les plus courantes: publicité, soldes, marketing, services financiers, programme de fidélité, services d’information, alertes SMS.Selon une étude e-marketing.fr, 87% de ceux qui ont mis en place une campagne SMS ont jugé le ROI (Retour sur Investissement) excellent, très bon ou bon.",
          category: "ENVOI DE SMS",
        },
        {
          title: "COMMENT ENVOYER DES SMS AVEC SERVICES-SMS",
          value:
            "Pour envoyer des SMS sur servicesms.sn , rien de plus simple. Créez un compte puis identifiez-vous. Vous pouvez directement envoyer quelques SMS de teste gratuite grâce aux 5 SMS offerts. Ensuite, créez vos listes de contacts, puis créditez votre compte d’un pack de SMS ou réalisez directement votre campagne SMS et payez directement en fin de commande. Les statistiques seront disponibles en temps réel dès que votre envoi aura démarré.",
          category: "ENVOI DE SMS",
        },
        {
          title: "QUEL EMETTEUR APPARAITRA LORS D'UN ENVOI DE SMS ?",
          value:
            "Qu'est-ce qu'un nom d'émetteur ? Le nom d'émetteur c'est ce que le destinataire du SMS verra comme expéditeur du message. Le destinataire du SMS recevra des SMS qui affichent le nom de votre société ou amicale au lieu d'un numéro de mobile ou nom (exemple : service-sms) ou d'un numéro court.",
          category: "ENVOI DE SMS",
        },
        {
          title: "QUEL EST LE DELAI DE RECEPTION D'UN SMS ?",
          value: "Au Sénégal, la réception est instantanée. ",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "PEUT-ON ENVOYER DES SMS A PLUSIEURS DESTINATAIRES EN MEME TEMPS ?",
          value:
            "L’interface d’envoi de SMS SERVICES-SMS permet en effet d’envoyer des SMS à l’unité ou en masse. Vous pouvez lors du même envoi sélectionner une liste de contact pré-chargée (voir gestion des contacts), et ajouter manuellement des numéros de téléphone mobile additionnels.",
          category: "ENVOI DE SMS",
        },
        {
          title: "COMMENT PROGRAMMER ET ENVOYER DES MESSAGES DIFFERES ?",
          value:
            "Lors de chaque envoi, vous avez la possibilité de choisir si vous souhaitez envoyer les SMS immédiatement ou en différé. Dans ce cas, vous pourrez choisir la date et l’heure d’envoi, à la minute près. Des solutions d’envoi par tranches horaires, d’envois récurrents, anniversaires sont également disponibles.",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "EST-CE SERVICES-SMS PERMET D'ENVOYER DES SMS A TOUS LES OPERATEURS SENEGALAIS ?",
          value:
            "Oui, SERVICES-SMS couvre l’intégralité des opérateurs du pays.",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "PEUT-ON ENVOYER DES SMS AUX NUMEROS FIXES ?",
          value:
            "Lors d’un ajout de liste de contacts, vous pouvez ajouter des numéros de fixes ou les filtrer. Dans tous les cas, ils ne seront pas pris en compte lors des envois, qui ne concernent que les numéros de mobile.",
          category: "ENVOI DE SMS",
        },
        {
          title: "QUE FAIRE SI MON SMS EST REÇU AVEC DES CARACTERES CASSES ?",
          value:
            "En général, les caractères non-compatibles SMS sont filtrés par nos mécanismes de vérification. Si malgré tout, vous recevez des SMS avec des caractères bizarres, cela peut provenir d’un copier/coller depuis un document, une page web ou le corps d’un email. Dans ce cas, veuillez recopier le message à la main et réessayer, c’est la règle en général le problème. Si cela persistait, veuillez contacter le support.",
          category: "ENVOI DE SMS",
        },
        {
          title: "COMMENT EFFECTUER UN ENVOI DE SMS CIBLE ?",
          value:
            "Grâce à la gestion d’une liste intelligente sur votre compte. Vous pouvez segmenter votre liste de contacts et choisir uniquement ceux qui vous intéressent.",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "UN ENVOI DE SMS VERS UN MAUVAIS NUMERO DE TELEPHONE MOBILE EST-IL FACTURE ?",
          value:
            "A partir du moment où le SMS est soumis à l’opérateur mobile, il est facturé, et donc également décrédité de votre compte.",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "LES CLIENTS ET PROSPECTS PEUVENT-ILS REPONDRE AUX SMS ENVOYES ?",
          value:
            "Oui, pour tous les envois au Sénégal, les réponses sont automatiquement consultables dans votre boîte de réception. ",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "QUELS SONT LES MOYENS DE PAIEMENTS DISPONIBLES POUR PAYER MES CAMPAGNES ?",
          value:
            "SERVICES-SMS vous propose plusieurs moyens de paiement pour régler votre pack de SMS ou votre commande. Optez pour le paiement par (WARI, VITFÈ, ORANGE MONEY, MASTERCARD, POSTE CASH, VISA, YUP, WAL), chèque (validation à réception du chèque), virement bancaire, ou prélèvement automatique, et paiement en fin de mois.",
          category: "ENVOI DE SMS",
        },
        {
          title: "EST-IL POSSIBLE D'INTERROMPRE UN ENVOI DE SMS ?",
          value:
            "Non. Une fois démarré, un envoi de SMS ne peut plus être interrompu.",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "VAIS-JE ETRE DECREDITE DES NUMEROS DE MA LISTE NOIRE LORS DE MES PROCHAINS ENVOIS",
          value:
            "Non. Lorsque vous effectuez un envoi, les numéros en liste noire sont automatiquement supprimés de vos listes avant envoi.",
          category: "ENVOI DE SMS",
        },
        {
          title:
            "EST-IL POSSIBLE D'ENVOYER UN MESSAGE TEST AVANT DE VALIDER UNE CAMPAGNE ?",
          value:
            "Oui, un bouton sur l’espace de composition vous permet d’envoyer un SMS de test au numéro de votre choix avant de valider votre campagne. Il faut que votre compte dispose d’un solde SMS positif pour pouvoir utiliser cette fonctionnalité.",
          category: "ENVOI DE SMS",
        },
      ],
      secondItems: [
        {
          title: "QUELLE EST LA LONGUEUR MAXIMALE D'UN SMS ?",
          value:
            "La longueur maximale d’un SMS est de 160 caractères. servicesms.sn propose d’envoyer des SMS longs, dépassant les 160 caractères. Dans ce cas, le compteur de caractères et de SMS de l’interface vous indiquera en temps réel le nombre de SMS correspondant à votre message. Sur service-sms, les SMS longs sont concaténés pour être reçu d’un seul tenant par le destinataire (dans ce cas la longueur de chaque SMS est de 153 caractères). Certains caractères spéciaux peuvent compter double.",
          category: " SMS ET MODELES",
        },
        {
          title:
            "QUELS SONT LES CARACTERES AUTORISES DANS UN SMS ? ET CEUX INTERDITS ?",
          value:
            "Voici la liste des caractères interdits, tous les autres étant donc autorisés : µâêûîôÂÊÛÎÔç¨ëï°",
          category: " SMS ET MODELES",
        },
        {
          title: "PUIS-JE DEFINIR DES MODELES DE MESSAGES A L’AVANCE ?",
          value:
            "Oui, vous disposez sur votre espace client d’un espace de gestion de modèles de messages. Vous pouvez créer, modifier et supprimer des modèles de messages SMS qui seront accessibles directement sur votre espace de composition de SMS. Votre interface de composition vous proposera également toujours d’avoir accès au dernier message envoyé.",
          category: " SMS ET MODELES",
        },
        {
          title: "PUIS-JE ACCEDER AU DERNIER MESSAGE ENVOYE POUR LE RENVOYER ?",
          value:
            "Oui, lors de la composition de SMS, vous pouvez sélectionner un modèle ou le dernier message envoyé afin de le re-transmettre.",
          category: " SMS ET MODELES",
        },
        {
          title: "PEUT-ON VISUALISER LE CONTENU D'UN SMS APRES SON ENVOI ?",
          value:
            "Oui, vous avez accès dans votre espace client au détail de toutes les campagnes envoyées et des messages correspondants.",
          category: " SMS ET MODELES",
        },
        {
          title: "COMMENT PERSONNALISER MES MESSAGES SMS ?",
          value:
            "Vous pouvez utiliser notre option de publipostage pour personnaliser un envoi. Chaque colonne de vos listes sont des colonnes de publipostage potentielles. Lors de la création de votre message, sélectionner des champs de fusion du type #Prenom# afin que celui-ci soit automatiquement remplacé par la valeur du champ de votre liste. Une prévisualisation sur les 5 premiers contacts s’affichera automatiquement pour valider visuellement que votre message est correct.",
          category: " SMS ET MODELES",
        },
        {
          title:
            "EST-IL POSSIBLE DE PERSONNALISER L'EMETTEUR DE SMS PAR LE NOM DE MON ENTREPRISE ?",
          value:
            "Oui, cela est possible sans surcoût. En revanche, pour des raisons d’ordre légal, la personnalisation de l’émetteur rend obligatoire l’ajout de la mention « STOP au 33123 » en fin de message, ce qui retire 15 caractères à celui-ci. La gestion des expéditeurs personnalisés est possible directement sur la page d’envoi, ou dans la section dédiée disponible dans le menu de votre espace client.",
          category: "GESTION DES EXPEDITEURS",
        },
        {
          title:
            "Y-A-T'IL DES CONTRAINTES A RESPECTER LORS D'UNE MODIFICATION DE L'EMETTEUR DU SMS ?",
          value:
            "Un expéditeur personnalisé doit en effet respecter certaines règles. Il doit comprendre entre 3 et 11 caractères, commencer par une lettre et ne contenir que des lettres et des chiffres.",
          category: "GESTION DES EXPEDITEURS",
        },
        {
          title:
            "J'AI PERDU LE MOT DE PASSE DE MON COMPTE SERVICES-SMS, COMMENT LE RECUPERER ?",
          value:
            "Vous disposez sur SERVICES-SMS d’un lien « mot de passe oublié », vous permettant de recevoir par email un nouveau mot de passe.",
          category: "GESTION DE VOTRE COMPTE ",
        },
        {
          title: "COMMENT MODIFIER MES INFORMATIONS PERSONNELLES ?",
          value:
            "Pour modifier vos informations personnelles, connectez-vous à votre espace client, et sélectionnez « Modifier profil » dans le menu déroulant en haut à droite.",
          category: "GESTION DE VOTRE COMPTE ",
        },
      ],
      thirdItems: [
        {
          title: "PUIS-JE AVOIR ACCES A L'HISTORIQUE DE MES ENVOIS ?",
          value:
            "Oui, dans votre espace client, toutes vos campagnes de SMS sont consultables, vous pouvez également visualiser vos statistiques d’envoi et télécharger les numéros invalides de vos listes. Vous avez la possibilité de télécharger un rapport PDF et le détail de réception de chaque destinataire est également disponible en temps réel.",
          category: "GESTION ET SUIVI",
        },
        {
          title:
            "PENDANT COMBIEN DE TEMPS L'HISTORIQUE DE MES CAMPAGNES EST-IL CONSERVE ?",
          value:
            "SERVICES-SMS conserve l’intégralité de l’historique de vos campagnes SMS, toutes accessibles depuis votre espace client, quelque soit la date des campagnes, à partir du moment où votre compte est en activité sur la dernière année glissante. Ce réglage peut être modifié dans vos préférences.",
          category: "GESTION ET SUIVI",
        },
        {
          title: "PUIS-JE REGLER UNE CAMPAIGN PLUS TARD ?",
          value:
            "Oui, vous pouvez préparer une campagne et ne pas la régler. Elle apparaîtra alors dans la section « Campagnes en attente »",
          category: "GESTION ET SUIVI",
        },
        {
          title: "PUIS-JE ANNULER UNE CAMPAGNE SMS PROGRAMMEE ?",
          value:
            "Oui, via l’API ou sur votre espace client, vous avez la possibilité d’annuler une campagne programmée jusqu’à 15 minutes avant son déclenchement.",
          category: "GESTION ET SUIVI",
        },
        {
          title: "MES SMS N'ONT TOUJOURS PAS ETE DELIVRES. QUE DOIS-JE FAIRE ?",
          value:
            "Les envois sont généralement instantanés. Cependant, dans de rare cas, un délai d’attente peut être observé. Si celui-ci dépasse 15-30 minutes, veuillez contacter le support, les temps d’acheminement peuvent être plus ou moins longs. Concernant les accusés de réception, les opérateurs ont jusqu’à 72 heures pour les fournir.",
          category: "GESTION ET SUIVI",
        },
        {
          title: "QUELLE EST LA DIFFERENCE ENTRE UN SMS ENVOYE ET UN SMS REÇU ?",
          value:
            "Un SMS envoyé est un message qui a bien été transmis à l’opérateur, mais dont nous n’avons pas encore reçu l’accusé de réception. Nous ne pouvons donc pas assurer que le destinataire l’a bien reçu, et il peut être en cours de transit sur le réseau. Un SMS reçu indique que votre correspondant a bien reçu son message sur son téléphone mobile.",
          category: "GESTION ET SUIVI",
        },
        {
          title:
            "J'AI UN FICHIER CLIENT CONTENANT MES NUMEROS DE MOBILE. DOIS-JE RESSAISIR TOUS MES CONTACTS ?",
          value:
            "Non. Une interface moderne et rapide vous permet de mettre en ligne vos contacts depuis des fichiers textes, des fichiers .csv, .xls, .xlsx et de déterminer vos critères de segmentation et de publipostage. Il n’est pas nécessaire de le nettoyer au préalable, l’interface supprimera automatiquement les mauvais numéros, les numéros de fixe ou les doublons.",
          category: "GESTION DES CONTACTS",
        },
        {
          title: "COMBIEN DE CONTACTS PEUT CONTENIR UNE LISTE ?",
          value:
            "Le nombre de contacts est presque illimité. Des listes de plus de 500 000 contacts sont gérées sans problème. Nous conseillons de ne pas dépasser ce seuil pour des raisons de qualité d’usage de l’interface.",
          category: "GESTION DES CONTACTS",
        },
        {
          title:
            "LES DESTINATAIRES DE MES ENVOIS SMS ONT-ILS LA POSSIBILITE DE SE DESABONNER AUTOMATIQUEMENT ?",
          value:
            "Oui, conformément aux dispositions légales, tous vos correspondants peuvent répondre STOP aux SMS pour se désabonner automatiquement. La prise en compte du STOP est immédiate.",
          category: "GESTION DES CONTACTS",
        },
        {
          title:
            "EST-IL POSSIBLE DE GERER UNE LISTE DE DESTINATAIRES BLOQUES ?",
          value:
            "Oui, une liste noire est mise à disposition sur votre espace client. Elle est automatiquement peuplée par les réponses STOP de vos correspondants, par les accusés NPAI des opérateurs et par vos ajouts manuels.",
          category: "GESTION DES CONTACTS",
        },
        {
          title:
            "Y-A-T'IL UNE LIMITATION DU NOMBRE DE CONTACTS SUR MON ESPACE CLIENT ?",
          value:
            "Non, il n’y a aucune limite du nombre de contacts gérés sur votre espace client.",
          category: "GESTION DES CONTACTS",
        },
        {
          title: "COMMENT NETTOYER MA LISTE DE CONTACTS ?",
          value:
            "Lorsque vous ajouter une liste sur servicesms.sn, elle est automatiquement nettoyée. Les doublons sont supprimés et les numéros de téléphones formatés.",
          category: "GESTION DES CONTACTS",
        },
        {
          title: "COMMENT SUPPRIMER UN CONTACT D'UNE LISTE ?",
          value:
            "Comme dans un tableur, l’interface de gestion de liste de votre espace client vous permet très facilement de rechercher le numéro de téléphone d’un correspondant et de le supprimer grâce aux boutons d’actions à droite de chaque ligne.",
          category: "GESTION DES CONTACTS",
        },
      ],
      fouthItems: [
        {
          title: "A QUOI CORRESPOND MON SOLDE SMS ?",
          value:
            "Le solde de votre compte correspondant à une somme en FCFA, disponible pour payer des SMS, des messages vocaux.",
          category: "SOLDE SMS",
        },
        {
          title: "COMMENT CONNAITRE LE SOLDE DE MON COMPTE ?",
          value:
            "Votre solde SMS est toujours affiché sur votre espace client, en haut à droite de votre interface. Via l’API, des méthodes sont également disponibles pour vous donner accès à cette information.",
          category: "SOLDE SMS",
        },
        {
          title: "QUELLE EST LA DUREE DE VALIDITE DE MON SOLDE SMS ?",
          value:
            "Chez servicesms.sn, aucune date limite de consommation n’est appliquée. Quand vous achetez des crédits de SMS, ils sont donc valables de façon illimitée.",
          category: "SOLDE SMS",
        },
        {
          title: "QUELS SONT LES MOYENS DE PAIEMENT ACCEPTES ?",
          value:
            "servicesms.sn accepte les paiements par carte bancaire, virement, chèque, payer avec WARI, VITFÈ, ORANGE MONEY, MASTERCARD, POSTE CASH, VISA, YUP, WIZAL....La créditation de votre compte est immédiate dans le cas d’un paiement par carte. Pour les paiements par chèque, virement, votre compte est crédité automatiquement à réception du paiement, accompagné du bon de commande associé. Un paiement en fin de mois par prélèvement automatique est également possible.",
          category: "SOLDE SMS",
        },
        {
          title:
            "COMMENT PUIS-JE RECUPERER MES FACTURES SUR MON ESPACE CLIENT ?",
          value:
            "Vos factures sont toutes disponibles sur votre espace client, dans la section « factures ». Vous pouvez les visualiser en ligne, les imprimer, les envoyer par email ou les télécharger en PDF. Dans ce cas, le téléchargement du logiciel Adobe Reader est nécessaire.",
          category: "SOLDE SMS",
        },
        {
          title: "Y-A-T'IL UN RISQUE EN PAYANT PAR CES MOYENS ?",
          value:
            "Le paiement sur servicesms.sn est sécurisé et propose donc tous les niveaux de garantie bancaires habituels. Dans tous les cas, nous n’avons pas accès à vos coordonnées bancaires ou autres et ne recevons qu’un accord de transaction nous permettant de vous créditer ou d’envoyer les SMS.",
          category: "SOLDE SMS",
        },
        {
          title:
            "EST-CE QUE SERVICES-SMS PROPOSE DE LOUER DES FICHIERS CLIENTS CIBLES DITS OPT-IN ?",
          value:
            "Oui, nous vous proposons la location de base de données client dites Opt-In à partir de 85F HT le contact, location et routage du SMS inclus.",
          category: "LOCATION BDD",
        },
        {
          title:
            "VOS BASES DE DONNEES OPT-IN SONT-ELLES DISPONIBLES A L'ACHAT ?",
          value:
            "Non, nous ne fournissons que des bases de données en location.",
          category: "LOCATION BDD",
        },
        {
          title:
            "OU TROUVER LES DOCUMENTATIONS D'INTEGRATION DES API  ?",
          value:
            "Toutes documentations et informations sont disponibles sur servicesms.sn dans les sections d’API.",
          category: "LOCATION BDD",
        },
        {
          title: "FAUT-IL UNE AUTORISATION SPECIALE POUR UTILISER LES API ?",
          value:
            "Non, à partir du moment où vous disposez d’un compte valide sur servicesms.sn, vous êtes en mesure d’utiliser nos API et Web Services sans surcoût.",
          category: "LOCATION BDD",
        },
        {
          title:
            "QUE DIT LA LOI SENEGALAISE CONCERNANT L'ENVOI DE SMS DE PROSPECTION COMMERCIALE ?",
          value:
            "La prospection directe par SMS est régie par plusieurs règles et textes de loi La Commission de protection des données personnelles du Sénégal (CDP)Vu la Constitution ; Vu la loi n° 2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel ;",
          category: "ABUS DE SERVICE",
        },
        {
          title: "FAITS ET PROCEDURE  :",
          value:
            "A l’instar des grandes démocraties, notre pays a institué un régime de protection des données à caractère personnel par la loi n° 2008-12 du 25 janvier 2008 afin de se prémunir contre les risques liés à l’utilisation frauduleuse ou abusive des données nominatives des sénégalais.A cet effet, la Commission de protection des données personnelles (CDP) a été mise en place pour veiller à l’application de la loi.",
          category: "ABUS DE SERVICE",
        },
        {
          title: "EN RESUME  :",
          value:
            "En résumé, la prospection directe par SMS est interdite si les coordonnées de la personne physique contactée n’a pas exprimé son consentement préalable (article 4- 11 de la loi de 2008). Dans tous les cas, l’envoi de SMS doit être accompagné d’une possibilité de désabonnement. Pour cela, sur servicesms.sn, il est toujours possible de répondre STOP pour se désabonner.L’annonceur doit également être clairement identifié.",
          category: "ABUS DE SERVICE",
        },
        {
          title: "QUELLE EST LA PLAGE HORAIRE AUTORISEE POUR L'ENVOI DE SMS ?",
          value:
            "L’envoi de SMS commerciaux est formellement interdit pendant les heures comprises entre 20h00 et 08h00 les jours calendaires, le dimanche toute la journée et les jours fériés.En cas de non-respect des dispositions légales, les sanctions pénales peuvent être lourdes.Soit par la CDP ou par les juridictions compétentes à l’égard de tout responsable de traitement n’ayant pas respecté ses obligations.",
          category: "ABUS DE SERVICE",
        },
        {
          title: "PUIS-JE ENVOYER DES SMS A DES NUMEROS CHOISIS AU HASARD ?",
          value:
            "Non, vous ne pouvez envoyer des SMS qu’à des contacts l’ayant expressément accepté.",
          category: "ABUS DE SERVICE",
        },
        {
          title:
            "LA CONFIDENTIALITE DE MES LISTES DE CONTACTS EST-ELLE GARANTIE ?",
          value:
            "servicesms.sn s’engage à ne jamais utiliser les données issues de vos listes de contacts, telle que défini dans notre charte de confidentialité. Un document d’engagement de confidentialité peut être fourni sur demande.",

          category: "ABUS DE SERVICE",
        },
        {
          title: "QUEL EST L'ENGAGEMENT ANTI-SPAM SERVICES-SMS ?",
          value:
            "servicesms.sn s’engage à ce que le numéro fournit lors de votre inscription ne soit jamais transmis à aucun tiers.",
          category: "ABUS DE SERVICE",
        },
        {
          title: "COMMENT SIGNALER UN ABUS DE SERVICE ?",
          value:
            "Si vous avez détecter un abus de service, merci de nous contacter via le formulaire de contact.",
          category: "ABUS DE SERVICE",
        },
      ],
    };
  },
  components: {
    Navigation,
    VueFaqAccordion,
    Footer
  },
};
</script>

<style lang="scss" >
.faq__nav{
    padding: 1rem ;
}
.two__grid{
  
    margin: 1rem 0 2rem 0;
}
@media (min-width: 64rem) {
  .faq__header {
    padding: 2rem;
  }
}
@media (min-width: 72rem) {
  .two__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
