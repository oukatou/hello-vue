<template>
    <div class="root">
        <ul>
            <li v-for='(file,index) in files' :key='index'>
                <div>
                    <div v-for='(cast,index) in file.casts' :key='index'>
                        <Tile :avatar=cast.avatars.small :title=cast.name></Tile>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Tile from './Tile.vue'
export default{
    name:'file',
    components:{
        Tile
    },
    data(){
        return {
            files: []
        }
    },
    created() {
        this.$axios('api/v2/movie/top250',{
                params: {count:10}
            }
        ).then(res=> this.files = res.data.subjects)
         .catch(error=>console.log(error));
    },
    methods: {
    },
}
</script>
<style lang='stylus'>
.root
    text-align left
    font-size 20px
    li
      list-style none
      display inline-block
      div
        float left
          
</style>