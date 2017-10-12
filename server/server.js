const path = require('path')

const { createBundleRenderer } = require('vue-server-renderer')
var serverBundle = require(path.resolve(
  __dirname,
  '..',
  'dist/vue-ssr-server-bundle.json'
))
const template = require('fs').readFileSync(
  path.resolve(__dirname, '..', 'index.template.html'),
  'utf-8'
)
const clientManifest = require(path.resolve(
  __dirname,
  '..',
  'dist/vue-ssr-client-manifest.json'
))
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

const express = require('express')
const app = express()

// const createApp = require('./dist/server/server.js').default

// console.info(createApp)
const resolve = file => path.resolve(__dirname, file)
// 使用express的static方法
const serve = (path, cache) =>
  express.static(resolve(path), {
    maxAge: cache ? 1000 * 60 * 60 * 24 * 30 : 0
  })

app.use('/dist', serve(path.resolve(__dirname, '..', 'dist'), true))

app.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    // console.info(err, html)
    if (err) {
      if (err.code === 404) {
        res.status(404).end('未找到页面')
      } else {
        res.status(500).end('内部服务器错误')
      }
    } else {
      res.end(html)
    }
  })
})

app.listen(8003, () => {
  console.info(`listening: ${app}`)
})
