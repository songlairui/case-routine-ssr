<template>
  <main>
    <h1>About</h1>
    <p>{{ msg }} </p>
    <blockquote> ---Test with async--- </blockquote>
  </main>
</template>
<style scoped>
h1 {
  color: green;
}
</style>
<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'test msg'
    }
  },
  created() {
    this.changeMsg()
  },
  methods: {
    async changeMsg() {
      console.info('try to change')
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.msg = 'changed msg via async function'
      console.info('changed')
    }
  }
}
</script>

