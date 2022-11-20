import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import vueToTopButton from "vue-to-top-button"
import DaySpan from 'dayspan-vuetify-2'
import service from './http-common'

Vue.config.productionTip = false
document.title = "MyRecipes"

Vue.use(Vuetify);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');


Vue.use(vueToTopButton, {

  // Change type to 0 to disable animation
  type: 1,
  color: "#2178ff",
  offset: 0.3,
})

