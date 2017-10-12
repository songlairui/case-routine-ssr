<template lang="pug">
div
  mu-sub-header 所有
  mu-paper.usr(:zDepth=1)
    mu-list
      mu-list-item(v-if='identity.username' :title='identity.username' @click='debug' :to="{name:'profile'}")
        mu-avatar(slot='left' icon='folder' color='cyan' backgroundColor='sliver')
        span(slot='default') {{ identity.description}}
        mu-icon-button(slot='right' icon='keyboard_arrow_right')
      mu-list-item(v-if='!identity.username' :to={path:'/'} title='登陆')
      mu-divider
      mu-list-item
        mu-icon-button(slot='default' icon='check_circle')
        mu-icon-button(slot='default' icon='folder_shared')
  Works(:works='works' @refresh='refresh')
  SkillArticle
  Consuming
</template>
<style lang="stylus" scoped>

</style>
<script>
import axios from 'axios'
import Works from './Works'
import SkillArticle from './SkillArticle'
import Consuming from './Consuming'

import AV from 'leancloud-storage'

export default {
  name: 'all-list',
  data() {
    return {
      msg: '',
      identity: {
        username: ''
      },
      btn_works: {
        'refresh': false,
        'add': false,
        'settings': false
      },
      trigger: null,
      works: []
    }
  },
  created() {
    this.refresh()
    var currentUser = AV.User.current()
    this.identity.username = currentUser ? currentUser.getUsername() : ''
  },
  methods: {
    debug(...x) {
      console.info('test_thing', x)
    },
    refresh0() {
      axios.get('https://easy-mock.com/mock/59d9d05e9d342f449f308beb/caseStudy/works').then(({ data }) => {
        console.info('【mock result】：', data)
        if (!data.works) return
        this.works = data.works
      })
        .catch(e => console.error(e))
    },
    refresh() {
      var query = new AV.Query('Works')
      query.find().then((results) => {
        // results 返回的就是有图片的 Todo 集合
        this.works = results.map(a => a.toJSON())
      }, (error) => {
        console.error('err', error)
      })
    }
  },
  components: {
    Works, SkillArticle, Consuming
  }

}
</script>
