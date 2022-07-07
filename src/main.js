import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
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
