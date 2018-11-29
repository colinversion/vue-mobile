// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

import '@/assets/css/common.css'
import 'lib-flexible'
import Cube from 'cube-ui'
import api from '@/api'

Vue.use(Cube)
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
let _instance = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.prototype.$loading = _instance.$createToast({
  txt: 'Loading...',
  mask: true,
  time: 0
})
