import Vue from 'vue'
import VueNumber from "vue-number-animation";
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueScrollTo from 'vue-scrollto'
 
Vue.use(VueScrollTo)

Vue.use(VueParticles);
Vue.use(VueNumber);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
