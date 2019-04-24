import Vue from "vue";
import router from "./router";
import App from "./App";


import VueScrollactive from "vue-scrollactive";
Vue.use(VueScrollactive);

import 'bulma/css/bulma.css'

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
