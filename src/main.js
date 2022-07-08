import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  mounted() {
    // var __responsive__ = function () {
    //   var deviceWidth = document.documentElement.clientWidth;
    //   if (deviceWidth > 750) deviceWidth = 750;
    //
    //   document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    // };
    // __responsive__();
  },

}).$mount('#app')

