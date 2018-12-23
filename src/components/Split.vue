<template>
    <div class='con'>
        <div class='split left'>
            <h1>The Designer</h1>
            <a href="">read more</a>
        </div>
        <div class='split right'>
            <h1>The Programming</h1>
            <a href="">read more</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'split',
    data(){
        return {
        }},
    components: {
    },
    methods:{
    },
    mounted(){
        const left = document.querySelector('.left');
        const right = document.querySelector('.right');
        const con = document.querySelector('.con');
        left.addEventListener('mouseenter', function () {
            con.classList.add('hover-left')
        })
        left.addEventListener('mouseleave', function () {
            con.classList.remove('hover-left')
        })
        right.addEventListener('mouseenter', function () {
            con.classList.add('hover-right')
        })
        right.addEventListener('mouseleave', function () {
            con.classList.remove('hover-right')
        })
    }
}


</script>
<style scoped>
@import "../assets/css/split.css";
</style>
