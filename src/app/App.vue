<template lang='pug'>
  div#app
    mu-appbar.topbar
      mu-icon-button(icon='menu' slot='left' @click='toggle')
      mu-sub-header.menu-header( slot='left') MENU
      mu-flexbox( slot="default" justify='center')
        mu-text-field.appbar-search-field( icon="search"  hintText="请输入搜索内容" )
      mu-flat-button( color="white" label="OPERATE" slot='right' @click="toggleR" )
    mu-flexbox.main( justify='center')
      transition(name="page" mode='out-in')
        router-view.content
    //- 左右两侧drawer
    mu-drawer(:open="open" :docked="docked" @close="toggle(false)")
      mu-appbar(title="Menu" @click.native="toggle")
      mu-list(@itemClick="docked ? '' : toggle()")
        mu-list-item( title="ALL" :to="{name:'Main'}")
          mu-icon(slot="left" value="home")
        mu-divider( :shallowInset='true')
        mu-list-item( title="身份")
          mu-icon( slot="left" value="person" )
        mu-list-item( title="联系")
          mu-icon(slot="left" value="people")
        mu-divider( :shallowInset='true')
        mu-list-item( title="技能" :toggleNested='true')
          mu-icon( slot="left" value="trending_flats")
          mu-list-item( slot="nested" title="CODING" :toggleNested='true')
            mu-list-item( slot="nested" title="LAYOUTING")
            mu-list-item( slot="nested" title="FUNCTIONAL DESIGN")
            mu-list-item( slot="nested" title="ACTION MAP INDEX")
          mu-list-item( slot="nested" title="EXPRESSING" :toggleNested='true' :open='false')
            mu-list-item( slot="nested" title="TALKING")
            mu-list-item( slot="nested" title="SPEAKING")
            mu-list-item( slot="nested" title="TEACHING")
            mu-list-item( slot="nested" title="WRITING")
          mu-list-item( slot="nested" title="TRAINNING")
        mu-list-item( v-if="docked" @click.native="open = false" title="Close" )
    mu-drawer(right :open="openR" :docked="dockedR" @close="toggleR(true)")
      mu-appbar( title="OPERATE" @click.native="toggleR()" )
      mu-list(@itemClick="dockedR ? '' : toggleR()")
        mu-list-item( title="TODO")
          mu-icon( slot="left" value="playlist_add" )
        mu-list-item( title="NOTICE")
          mu-icon( slot="left" value='note')
        mu-list-item( title="RECORD")
          mu-icon( slot="left" value="art_track")
        mu-list-item( v-if="dockedR" @click.native="open = false" title="Close" )
    mu-back-top
    mu-popup(position='top' :overlay="false" :open="!!popupmsg") {{ popupmsg }}
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      open: false,
      openR: false,
      docked: true,
      dockedR: false,
      popupmsg: ''
    }
  },
  methods: {
    toggle(flag) {
      this.open = !this.open
      // this.docked = !flag
    },
    toggleR(flag) {
      this.openR = !this.openR
      // this.dockedR = !flag
    }
  }
}
</script>

<style>
html {
  background: rgb(241, 241, 241)
}

body {
  background: transparent
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.appbar-search-field {
  color: #FFF;
  margin-bottom: 0;
  min-width: 70%
}

.menu-header {
  color: white;
}

.appbar-search-field.focus-state {
  color: #FFF;
}

.appbar-search-field .mu-text-field-hint {
  color: fade(#FFF, 54%);
}

.appbar-search-field .mu-text-field-input {
  color: #FFF;
}

.appbar-search-field .mu-text-field-focus-line {
  background-color: #FFF;
}

.main {
  margin-top: 64px;
}

.content {
  width: 55%;
  max-width: 700px;
  min-width: 550px;
  padding: .5em 3px;
}

.page-enter-active {
  transition: opacity .2s ease;
}

.page-leave-active {
  transition: opacity .1s ease;
}

.page-enter,
.page-leave-to
/* .component-fade-leave-active for below version 2.1.8 */

{
  opacity: 0;
}
</style>
