// =========================================================
// * PhoenixWare Front-End - v1.0
// =========================================================
//
// * Product Page: https://github.com/Systeem3/phoenix-ware-frontend
// * Copyright 2020 Systeem (https://github.com/Systeem3)
//
// * Coded by Systeem
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './locales'

import './plugins/vue-world-map'
//import { sync } from 'vuex-router-sync'
//sync(store, router)
// main.js
import VueSweetalert2 from 'vue-sweetalert2'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
}

Vue.use(VueSweetalert2, options)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
