<template lang="pug">
div
  mu-flexbox
    mu-flexbox-item
      mu-sub-header CONSMING
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='新增' icon='add')
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='刷新' icon='refresh' @click='refresh')
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='设置' icon='settings')
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='更多' icon='more_horiz')
  mu-paper.works(:zDepth=2)
    mu-list
      mu-list-item(v-for='work in works' @click='debug(work._id)' :key="work['_id']" :title="work['name']" :describeText='work.description')
        mu-badge.percent(:content=" work.complete_degree + '%'" primary slot="right")
        mu-icon-button(slot='left' icon='home' )
  mu-content-block 正在使用的服务，视频会员，vps，shadowsocks，easy-mock
</template>
<script>
export default {
  name: 'consuming-things',
  props: ['works'],
  data() {
    return {

    }
  },
  methods: {
    debug(...x) {
      console.info('test_el_works.vue ', x)
    },
    refresh() {
      this.$emit('refresh')
    }
  }
}
</script>

