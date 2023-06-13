import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/sass/style.scss";
import VueSweetalert2 from "vue-sweetalert2";
import Vuetify from "vuetify/lib";
import "sweetalert2/dist/sweetalert2.min.css";
import Vuex from "vuex";

const stor = new Vuex.Store({
  state: {
    authenticated: false,
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    },
  },
});

Vue.use(Vuetify);
const opts = {};
export default new Vuetify(opts);
Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

// Vue.use(Vuex);

// new Vue({
//   render: (h) => h(App),
//   store: stor,
// }).$mount("#app");
