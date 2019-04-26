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
  .bg-content {
    background: #0f151b;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  .bg-content .content-page {
    width: 100%;
    height: 100%;
    background: #001548;
    margin-bottom: 80px;
    padding: 33px 73px 43px;
  }
 @media (max-width: 1280px) {
   .container{
     padding-left: 20px;
     padding-right: 20px;
   }
 }
</style>