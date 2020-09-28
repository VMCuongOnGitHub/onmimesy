// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import store from './store/store'
import vuetify from '@/plugins/vuetify'

require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')
/* eslint-disable */


Vue.config.productionTip = false


new Vue({
  el: '#app',
  store : store,
  router: routes,
  vuetify,
  render: h => h(App)
})

routes.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'main-dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})



