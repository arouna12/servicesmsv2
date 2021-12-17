<template>
  <div>
    <Navigation />
    <div class="section__container map">
    <svg-map :map="World" 
    :location-class="getLocationClass"
    :style="changecolor"
    @mouseover="pointLocation"
				@mouseout="unpointLocation"
				@mousemove="moveOnLocation"
     />
    </div>

 
      <div class="displayname">
            	{{ pointedLocation }}
      </div>
      <div class="section__container">
        <ul  class="list_countries">
            <li v-for="(x,index) in allcountries" :key="index" class="list"> {{x.flag}}{{x.name}}

                ({{x.dial_code}})
            </li>
        </ul>

 
      </div>
      <Footer/>
  </div>

</template>

<script>
import Vue from "vue";
import Navigation from "./Navigation";
import { getLocationName } from '../assets/';
import Footer from "./Footer";


import { SvgMap } from "vue-svg-map";
import World from "@svg-maps/world";
import country from '../assets/country_dial_info';





export default {
  components: {
		SvgMap,
        Navigation,
        Footer
         
	},
	data() {
		return {
		
            World,

            pointedLocation:null,
            tooltipStyle:null,
            changecolor:null,
            allcountries:country
		};
	},

    created(){

     this.changecolor={
         fill:'#0092ff',
        cusor:'pointer'
     
      }
    },
     
    methods:{
        pointLocation(event) {
			this.pointedLocation = getLocationName(event.target)
		},
		unpointLocation(event) {
			this.pointedLocation = null
			this.tooltipStyle = { display: 'none' }
		},
		moveOnLocation(event) {
			this.tooltipStyle = {
				display: 'block',
                cusor:'pointer',
				top: `${event.clientY + 10}px`,
				left: `${event.clientX - 100}px`,
			}
		},
		getLocationClass(location, index) {
			// Generate heat map
			return `svg-map__location svg-map__location--heat${index % 4}`
		},
    }
};
</script>


</style>


<style lang="scss" scoped>
@import "../assets/base.scss";
@import '../assets/map';




        .list{ 
            list-style-type: none;
            margin-top: 1rem;
            font-size: 1.2rem;
            
        }

@media (min-width:46rem){
    .list_countries{
        display:grid;
        grid-template-columns: 1fr 1fr;

    }

}
@media(min-width:64rem){
    .displayname{
        
        position: absolute;
        top: 500px;
        left:30px;

}
.map{
    margin-top: 10rem;
    width: 70%;
  
}
.list_countries{
    grid-template-columns: 1fr 1fr 1fr;

}
}
</style>
