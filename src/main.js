import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vueMoment from "vue-moment";
Vue.use(vueMoment);

import signup from "./assets/css/signup.css";

Vue.use(signup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
