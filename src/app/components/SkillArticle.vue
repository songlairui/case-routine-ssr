<template lang="pug">
div
  mu-flexbox
    mu-flexbox-item
      mu-sub-header SkillArticle
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
  mu-content-block 掘金上看到一些文章，不错，我正好需要。 排列组合算法，个人追踪，service worker
</template>
<script>
export default {
  name: 'work-list-in-allpage',
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

