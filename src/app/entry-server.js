import { createApp } from './app'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons/iconfont/material-icons.css'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 carbon 主题

export default context => {
  // 使用promise，异步过程
  return new Promise((resolve, reject) => {
    // 这儿返回app时，同时返回router， 能够操作app中的router，因为指向了router的堆空间
    const { app, router } = createApp()
    router.push(context.url)
    console.info(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // console.info(router)
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      resolve(app)
    }, reject)
  })
}
