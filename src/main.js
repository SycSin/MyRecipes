import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false
document.title = "MyRecipes"

Vue.use(Vuetify);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
