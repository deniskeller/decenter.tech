<template>
  <div class="main">
    
    <headerBlock/>
    <whatBsmart/>
    <advantages/>
    <getting/>
    <team/>
    <questions/>
    <footerBlock/>
    
  </div>
</template>

<script>
import headerBlock from "../components/headerBlock.vue";
import advantages from "../components/advantages.vue";
import footerBlock from "../components/footerBlock.vue";
import getting from "../components/getting.vue";
import questions from "../components/questions.vue";
import team from "../components/team.vue";
import whatBsmart from "../components/whatBsmart.vue";
export default {
  name: "main",
  components: { 
    headerBlock,
    advantages,
    footerBlock,
    getting,
    questions,
    team,
    whatBsmart
    }
  
};
</script>
<style>

</style>