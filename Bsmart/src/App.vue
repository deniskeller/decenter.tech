<template>
  
  <div id="app">
    <router-view></router-view>
    
  </div>
  
</template>
<script>

export default {
  name: "App",
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  },
};
</script>
<style>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  #app {
    font-family: Lato, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }
  *{
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box !important;
  }
  body {
    background: #0f151b;
    
    /*background: #fff;*/
  }
  .container{
    max-width: 1248px !important;
    width: 100% !important;
    margin: 0 auto;
  }
 @media (max-width: 1280px) {
   .container{
     padding-left: 20px;
     padding-right: 20px;
   }
 }
</style>