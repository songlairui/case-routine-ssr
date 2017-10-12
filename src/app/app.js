import Vue from 'vue'
import MuseUI from 'muse-ui'

import { createRouter } from './router'

import App from './App.vue'

import VeeValidate from 'vee-validate'

export function createApp() {
  Vue.use(VeeValidate)
  Vue.use(MuseUI)

  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(App)
  })

  return { app, router }
}
