import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

Vue.use(Vuetify);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
