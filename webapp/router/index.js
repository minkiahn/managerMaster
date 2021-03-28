import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '~/webapp/WEB-INF/views/Home'
import MatchResult from '~/webapp/WEB-INF/views/MatchResult'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/matchResult',
    component: MatchResult
  }
]

export default new VueRouter({
  routes
})
