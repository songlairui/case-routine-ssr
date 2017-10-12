import Vue from 'vue'
import Router from 'vue-router'

import Blank from '@/components/Blank.vue'
const Home = () => import('@/components/Home.vue')
const About = () => import('@/components/About.vue')
const Hello = () => import('@/components/Hello.vue')
const All = () => import('@/components/All.vue')
const Profile = () => import('@/components/Profile.vue')

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
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/all',
    name: 'Main',
    component: All
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  })
}
