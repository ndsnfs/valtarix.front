import Vue from 'vue'
import AuthMiddleware from './AuthMiddleware'
import router from './router'

import './sass/main.sass'

new Vue({
  el: '#app',
  router,
  render: h => h(AuthMiddleware)
})