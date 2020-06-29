import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vue2TouchEvents from 'vue2-touch-events'
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
