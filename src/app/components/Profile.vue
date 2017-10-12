<template lang="pug">
div
  mu-sub-header( @click.native='$router.go(-1)') &lt;&nbsp;返回
  mu-divider
  mu-sub-header 个人资料
  mu-paper.profile
    pre line
    mu-raised-button-inverse(@click='logout') 登出
</template>
<script>
import AV from 'leancloud-storage'

export default {
  name: 'profile',
  methods: {
    logout() {
      AV.User.logOut()
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .profile
    border thin solid red
</style>
