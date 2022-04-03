import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import vueToTopButton from "vue-to-top-button"

Vue.config.productionTip = false
document.title = "MyRecipes"

Vue.use(vueToTopButton, {

  // Change type to 0 to disable animation
  type: 1,
  color: "#2178ff",
  //bg: "#ffffff",
  offset: 2
})

Vue.use(Vuetify);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
