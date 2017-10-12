import Vue from 'vue'
import Router from 'vue-router'

import Blank from '@/components/Blank.vue'
// import Home from './Home.vue'
const Home = () => import('@/components/Home.vue')
const About = () => import('@/components/About.vue')
// import About from './About.vue'
// const About = require.ensure([], function(require) {
//   require('./About.vue')
// })

Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: Home,
    name: 'home'
    // component:
  },
  {
    path: '/',
    component: Blank
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  }
]

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  })
}
