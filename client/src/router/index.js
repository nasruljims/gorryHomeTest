import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/Login.vue'
import DetailsEvent from '../views/DetailsEvent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/event/create',
    name: 'CreateEvent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateEvent.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue')
  },
  {
    path: '/location/create',
    name: 'LocationCreate',
    component: () => import('../views/CreateLocation.vue')
  },
  {
    path: '/event/get_info',
    name: 'DetailsEvent',
    component: DetailsEvent
  },
  {
    path: '/event/ticket/create',
    name: 'CreateTicket',
    component: () => import('../views/CreateTicket.vue')
  },
  {
    path: '/transaction',
    name: 'TransactionPage',
    component: () => import('../views/TransactionPage')
  },
  {
    path: '/transaction/get_info',
    name: 'TransactionDetails',
    component: () => import('../views/TransactionDetails')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
