import Vue from "vue";
import App from "./App.vue";
import Aos from "aos";
import store from "./store/index"
import "materialize-css/dist/css/materialize.css";
import "aos/dist/aos.css";

new Vue({
  mounted() {
    Aos.init({
      duration: 1500
    });
  },
  store,
  el: "#app",
  render: h => h(App)
});
