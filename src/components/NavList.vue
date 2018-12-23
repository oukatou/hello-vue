<template>
    <div class="nav">
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/profile'>Profile</router-link></li>
            <li><router-link to='/baidu'>Baidu</router-link></li>
            <li><router-link to='/hello'>Carousel</router-link></li>
            <li><router-link to='/trans'>Translate</router-link></li>
            <li><router-link to='/split'>Split</router-link></li>
            <li><router-link to='/chart'>Chart</router-link></li>
            <li><router-link to='/animi'>Animi</router-link></li>
            <li><router-link to='/share'>Share</router-link></li>
        </ul>
    </div>
</template>
<script >
export default {
    name:'navlist',
    mounted(){
    }
}
</script>
<style lang='stylus' scoped>
    .nav
      height 50px
      background-color gray
      ul
        line-height 50px
        list-style none
        li
          margin 0 20px
          float left
          a
            text-decoration: none
</style>
