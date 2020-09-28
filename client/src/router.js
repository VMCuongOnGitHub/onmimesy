import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/MainDashboard/Home'
import Login from '@/components/Authentication/Login'
import Logout from '@/components/Authentication/Logout'
import Register from '@/components/Authentication/Register'
import MainDashboard from '@/components/MainDashboard/MainDashboard'

import Chat from '@/components/Chat/Chat'

Vue.use(Router)

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/main-dashboard',
      name: 'main-dashboard',
      component: MainDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat/:chat_id',
      component: Chat,
      props: true,
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: 'history'
})

export default routes
