import Vue from 'vue'
import VueNumber from "vue-number-animation";
import App from './App.vue'

Vue.use(VueNumber);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
