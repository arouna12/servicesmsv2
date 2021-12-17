<template>
    
<section class="container side_nav">
      <div class="link">
        <router-link to="/parent" class=""
          ><img class="link_img" src="/../images/teach-80x80.png" alt="" />
        </router-link>
      </div>

      <div class="link">
        <router-link to="/association" class=""
          ><img class="link_img" src="/../images/group-80x80.png" alt="" />
        </router-link>
      </div>

      <div class="link">
        <router-link to="/logistique" class=""
          ><img class="link_img" src="/../images/icone_transport-logistique.png" alt="" />
        </router-link>
      </div>

      <div class="link">
        <router-link to="/commerce" class=""
          ><img class="link_img" src="/../images/boutique.png" alt="" />
        </router-link>
      </div>

       <div class="link">
        <router-link to="/marketing" class=""
          ><img class="link_img" src="/../images/marketing.png" alt="" />
        </router-link>
      </div>


       <div class="link">
        <router-link to="/cafe" class=""
          ><img class="link_img" src="/../images/cafe.png" alt="" />
        </router-link>
      </div>

       <div class="link">
        <router-link to="/collective" class=""
          ><img class="link_img" src="/../images/local.png" alt="" />
        </router-link>
      </div>

      <div class="link">
        <router-link to="/automobile" class=""
          ><img class="link_img" src="/../images/car.png" alt="" />
        </router-link>
      </div>
       <div class="link">
        <router-link to="/profession" class=""
          ><img class="link_img" src="/../images/sante.png" alt="" />
        </router-link>
      </div>
      <div class="link">
        <router-link to="/Tourism" class=""
          ><img class="link_img" src="/../images/tourist.png" alt="" />
        </router-link>
      </div>

      <div class="link">
        <router-link to="/agency" class=""
          ><img class="link_img" src="/../images/recruit.png" alt="" />
        </router-link>
      </div>

      <div class="link">
        <router-link to="/parti" class=""
          ><img class="link_img" src="/../images/vote.png" alt="" />
        </router-link>
      </div>

      <div class="link">
        <router-link to="/environmental" class=""
          ><img class="link_img" src="/../images/environment.png" alt="" />
        </router-link>
      </div>

        <div class="link">
        <router-link to="/porter" class=""
          ><img class="link_img" src="/../images/porter.png" alt="" />
        </router-link>
      </div>

    </section>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.link_img {
  width: 40px;
  transition: transform .2s;
  &:hover{
      transform: translateY(0) scale(1.5);

    transition: ease-out .5s;
   
  }
}
.side_nav{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-shadow: 0 20px 40px -14px rgb(0 0 0 / 25%);
  padding:1rem;

}

@media (min-width: 64rem) {
 
  
}

</style>