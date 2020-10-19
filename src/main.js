import Vue from 'vue'
import VueNumber from "vue-number-animation";
import App from './App.vue'
import VueParticles from 'vue-particles'

Vue.use(VueParticles);
Vue.use(VueNumber);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
