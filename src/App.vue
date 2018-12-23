<template>
  <div id="app">
      <NavList></NavList>
      <router-view/>
  </div>
</template>

<script>
import NavList from './components/NavList'
export default {
  name: 'App',
  data(){
    return {
  }},
  components: {
    NavList
  },
  methods:{
}
}
</script>

<style lang='stylus'>
html,body
    height:100%

a 
  color: #fff
#app
  height:100%

</style>
