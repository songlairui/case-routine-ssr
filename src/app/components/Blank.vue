<template lang="pug">
  main
    h1 BLANK 
    blockquote {{ msg }}
</template>
<script>
export default {
  name: 'blank Page',
  data() {
    return {
      msg: 'Blank Page \n with pug and stylus'
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  color yellowgreen 
</style>

