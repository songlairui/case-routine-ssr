import Vue from 'vue'
import MuseUI from 'muse-ui'

import { createRouter } from './router'

import App from './App.vue'

export function createApp() {
  
  Vue.use(MuseUI)

  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(App)
  })

  return { app, router }
}
