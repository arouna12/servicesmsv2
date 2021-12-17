<template>
  <div id="app">
   
    <router-view/>
    
  </div>
</template>
  <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f4210031e7ade5df443266f/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "8weli5h6er");
</script>
<!--End of Tawk.to Script-->
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
#app {
        font-family: 'Nunito', sans-serif;
     -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.7;
  
 
}
#nav {
  a {
    font-weight: bold;
    color: #226bb4;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
