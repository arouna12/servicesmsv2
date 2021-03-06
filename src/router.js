import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Homepage from './components/Homepage';
import Functionalities from './components/Functionalities';
import Tarif from './components/Tarif';
import Metires from './components/Metires';
import Api from  './components/Api';
import Blog from './components/Blog';
import  Details from './components/Details';
import Sommes from './components/Sommes';
import Marche from './components/Marche';
import Recruitment from './components/Recruitment';
import ProcessForm from './components/ProcessForm';
import Reference from './components/Reference';
import Faq from "./components/Faq";
import MentionLegal from './components/MentionLegal';
import CGU from './components/CGU';
import Politique from './components/Politique';
import Cookie from './components/Cookie';
import CGV from './components/CGV';
import SMSVOCAL from './components/SMSVOCAL';
import SMSPRO from './components/SMSPRO';
import Location from './components/Location';
import Mailing from './components/Mailing';
import Votre from './components/Votre';
import RAP from './components/RAP';
import Enrich from './components/Enrich';
import Contact from './components/Contact';
import Plan from './components/Plan';
import Sondage from './components/Sondage';
import MobileTicketing from './components/MobileTicketing';
import Reponse from './components/Reponse';
import Composition from './components/Composition';
import Statistique from './components/Statistique';
import Planification from './components/Planification';
import Gestion  from './components/Gestion';
import Collective from './components/Collective';
import Commerce from './components/Commerce';
import Logistique from './components/Logistique';
import Cafe from './components/Cafe';
import Association from './components/Association';
import Marketing from './components/Marketing';
import Profession from './components/Profession';
import Automobile from './components/Automobile';
import Environmental from './components/Environmental';
import Parti from './components/Parti';
import Tourism from './components/Tourism';
import Agency from './components/Agency';
import Parent from './components/Parent';
import Immoble from './components/Immoble';
import Porter from './components/Porter';
import Login from './components/Login';
import Signup from './components/Signup';
import Map from './components/Map';
import DisplayApplications from './components/DisplayApplications'
import { from } from 'core-js/fn/array';


Vue.use(Router)

export default new Router({
  
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
    path:'/functionalities',
    name:'functionalities',
    component:Functionalities
    },
    {
    path:'/display',
    name:'display',
    component: DisplayApplications
    },
    {
     path:'/faq',
     name:'faq',
     component:Faq
    },
    {
    path:'/map',
    name:'map',
    component:Map
    },
    {
    path:'/rap',
    name:'rap',
    component:RAP
    },
    {
    path:'/sondage',
    name:'sondage',
    component:Sondage
    },
    {
     path:'/composition',
     name:'composition',
     component:Composition
    },
    {
     path:'/profession',
     name:'profession',
     component:Profession
    },

    {
     path:'/login',
     name:'login',
     component:Login
    },
    {
    path:'/signup',
    name:'signup',
    component:Signup
    },
    {
   path:'/environmental',
   name:'/environmental',
   component:Environmental
    },
    {
    path:'/porter',
    name:'porter',
    component:Porter
    },
    {
   path:'/parti',
   name:'environmental',
   component:Parti
    },
    {
     path:'/statistique',
     name:'statistique',
     component:Statistique
    },
    {
    path:'/immoble',
    name:'immoble',
    component:Immoble
    },
    {
     path:'/tourism',
     name:'tourism',
     component:Tourism
    },
    {
    path:'/agency',
    name:'agency',
    component:Agency
    },
    {
    path:'/parent',
    name:'parent',
    component:Parent
    },
    {
     path:'/logistique',
     name:'logistique',
     component:Logistique
    },
    {
     path:'/gestion',
     name:'gestion',
     component:Gestion
    },
    {
    path:'/automobile',
    name:'automobile',
    component:Automobile
    },
    {
    path:'/collective',
    name:'collective',
    component:Collective
    },
    {
    path:'/cafe',
    name:'cafe',
    component:Cafe
    },
    {
     path:'/commerce',
     name:'commerce',
     component:Commerce
    },
    {
     path:'/planification',
     name:'planification',
     component:Planification
    },
    {
    path:'/marketing',
    name:'marketing',
    component:Marketing
    },
    {
    path:'/association',
    name:'association',
    component:Association
    },

    {

     path:'/mailing',
     name:'mailing',
     component:Mailing
    },
    {
     path:'/reponse',
     name:'reponse',
     component:Reponse
    },
    {
    path:'/enrich',
    name:'enrich',
    component:Enrich
    },
    {
     path:'/legal',
     name:'legal',
     component:MentionLegal
    },
    {
     path:'/plan',
     name:'plan',
     component:Plan
    },
    {
     path:'/contact',
     name:'contanct',
     component:Contact
    },
    {
    path:'/mobileticketing',
    name:'mobileticketing',
    component:MobileTicketing
    },
    {
    path:'/location',
    name:'location',
    component:Location
    },
    {
     path:'/smspro',
     name:'smspro',
     component:SMSPRO
    },
    {
    path:'/votre',
    name:'votre',
    component:Votre
    },
    {
    path:'/politique',
    name:'politique',
    component:Politique
    },
    {
    path:'/cookie',
    name:'cookie',
    component:Cookie
    },
    {
    path:'/cgv',
    name:'cgv',
    component:CGV
    },
  {
    path:'/smsvocal',
    name:'smsvocal',
    component:SMSVOCAL
    },
    {
    path:'/cgu',
    name:'cgu',
    component:CGU
    },
    {
    path:'/reference',
    name:'reference',
    component:Reference

    },
    {
    path:'/form',
    name:'form',
    component:ProcessForm
    },
    {
     path:'/recruitment',
     name:'/recruitment',
     component:Recruitment
    },
    {
     path:'/marche',
     name:'marche',
     component:Marche
    },
    {
    path:'/metires',
    name:'metires',
    component:Metires
    },
    {
     path:'/blog',
     name:'blog',
     component:Blog
    },
    {
     path:'/tarif',
     name:'tarif',
     component:Tarif
    },
    {
      path:'/sommes',
      name:'sommes',
      component:Sommes
      },
    {
    path:'/api',
    name:'api',
    component:Api
    },
    {
      path:'/:id',
      name:'details',
      component:Details
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
         , offset: { x: 0, y: 10 }
      }
    }
  },
  scrollToTop() {
    window.scrollTo(0, 0);
},  goToPricing() {
    this.$router.push('/mobileticketing');
}


})
