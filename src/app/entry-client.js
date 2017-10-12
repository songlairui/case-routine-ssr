import { createApp } from './app'

const { app, router } = createApp()

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons/iconfont/material-icons.css'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 carbon 主题

router.onReady(() => {
  app.$mount('#app')
})
