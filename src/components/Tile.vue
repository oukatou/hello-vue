<template>
    <div class='item' @mouseenter = "show = !show" @mouseleave = "show = !show" >
        <img :src=avatar>
        <em>{{title}}</em>
        <transition
          :css="false"
          @before-enter = "beforeEnter"
          @enter = "enter"
          @leave = "leave"
        ><div v-if="show" class="hover-over-mask"></div>
        </transition>
    </div>
</template>
<script>
var Velocity = window.Velocity;
export default {
    data(){
        return{
            id: '',
            show: false
        }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
        },
        enter: function(el,done){
            Velocity(
                el,
                {opacity: 1},
                {duration: 300,
                delay: 300,
                complete: done})
              
        },
        leave: function(el,done){
            Velocity(
                el,
                {opacity: 0},
                {duration: 300,
                complete: done}
            )
        }
    },
    props: [
        'avatar',
        'title'],
}
</script>
<style lang="stylus" scoped>
em
  text-align center
  display block
  overflow hidden
  text-overflow ellipsis 
  white-space nowrap
  width 120px
  &:hover
    overflow visible
    text-overflow inherit
img
  text-align center
  border-radius: 50%
  width 120px
  height 157px
.item
    margin 7px
    position relative
    cursor pointer
    &:hover
        transform scale(1.065);
        transition transform 0.3s linear;
.hover-over-mask
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 28px;
    background: rgba(255,255,255,0.3);
</style>
