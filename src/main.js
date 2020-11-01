import Vue from "vue";
import Demo from "./demo.vue";
// import uab from "../dist/uab-ui.umd.min.js";
// import "../dist/uab-ui.css"

// Vue.use(uab)

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");
