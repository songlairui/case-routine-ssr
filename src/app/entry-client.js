import { createApp } from './app'

const { app, router } = createApp()

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons/iconfont/material-icons.css'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 carbon 主题

import AV from 'leancloud-storage'

const appId = 'YLjYRcnrFf8PyKSXAaaflf9L-gzGzoHsz'
const appKey = 'VX5DqVUXWdwNjv6TUW8y9qte'

AV.init({
  appId,
  appKey
  // 启用美国节点
  // region: 'us',
})

router.onReady(() => {
  app.$mount('#app')
})
