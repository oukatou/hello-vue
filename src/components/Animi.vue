<template>
    <div style='margin:0 auto; width:200px'>
        <button class='btn btn-default' @click='add'>add</button>
        <button class='btn btn-default' @click='reduce'>reduce</button>
        {{count}}
        <div class='btn btn-primary' @click="showa" style="cursor: pointer">click</div>
        <transition name='col'>
            <div class='show' v-show='show'></div>
        </transition>
        <transition
            name="custom-classes-transition"
            enter-active-class="animated lightSpeedIn"
            leave-active-class="animated flip"
            >
            <div v-if="show" >
              <p style="font-size: 40px">hello</p>
              <div class="blink"><span></span><span></span><span></span></div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'animi',
    data(){
        return {
            show:true
        }},
    components: {
    },
    methods:{
        showa(){
            this.show = !this.show
        },
        add(){
          this.$store.dispatch('add')
        },
        reduce(){
          this.$store.dispatch('reduce')
    }
    },
    computed:{
        count(){return this.$store.state.count}
    },
}
</script>
<style>
@keyframes mymove {
    0% {
        background: green;
        transform: translate(0,0);
        transform: scale(1)
    }
    20%{
        transform: translate(0,100px)
    }
    40%{
        transform: translate(0,50px);
        transform: scale(0.8)
    }
    60%{
        transform: translate(0,100px);
        transform: scale(0.5)
    }
    80%{
        transform: translate(0,80px)
    }
    100% {
        background: rgb(144, 190, 19);
        transform: translate(0,100px);
        transform: scale(0)
    }
}
.blink{
    width:200px;
    height: 200px;

}
.blink span{
    font-size:20px;
    border-radius: 50%;
    width:30px;
    height: 30px;
    display: inline-block;
    animation: mymove 2s ease-out infinite;
    background: rgb(144, 190, 19);
    top:100px;
    animation-fill-mode: forwards;
}
.blink span:nth-child(2){
    left:30px;
    animation-delay:-200ms;
}
.blink span:nth-child(3){
    left:60px;
    animation-delay:-400ms;
}
.show{
    width: 50px;
    height:50px;
    background:url(../assets/logo.png);
    background-size: cover
}

.col-enter-active{
    animation: bounce-in 1s
}
.col-leave-active{
    animation: bounce-in 1s reverse
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
}
    50% {
    transform: scale(1.5);
}
    100% {
    transform: scale(1);
}
}

</style>
