// Vue
import Vue from "vue";
import App from "./App";

import VueVehiclePlate from "./vue-vehicle-plate";
Vue.use(VueVehiclePlate);

var oMeta = document.createElement("meta");
oMeta.content =
  "width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0";
oMeta.name = "viewport";
document.getElementsByTagName("head")[0].appendChild(oMeta);

new Vue({
  render: h => h(App)
}).$mount("#app");
