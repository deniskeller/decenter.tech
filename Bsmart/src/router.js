import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import registerNext from "./views/registerNext.vue";
import register from "./views/register.vue";
import forgot from "./views/forgot.vue";
import main from "./views/main.vue";
import myContracts from "./views/myContracts.vue";
import contract from "./views/contract.vue";
import portfolio from "./views/portfolio.vue";
import mainProducts from "./views/mainProducts.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: main
    },
    {
      path: "/login", 
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/registerNext", 
      name: "registerNext",
      component: registerNext
    },
    {
      path: "/forgot", 
      name: "forgot",
      component: forgot
    },
    {
      path: "/myContracts", 
      name: "myContracts",
      component: myContracts
    },
    {
      path: "/contract", 
      name: "contract",
      component: contract
    },
    {
      path: "/portfolio", 
      name: "portfolio",
      component: portfolio
    },
    {
      path: "/mainProducts", 
      name: "mainProducts",
      component: mainProducts
    }
  ]
});
