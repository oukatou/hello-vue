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
        let self=this
        this.qa.top250({
            params:{count:50},
            success(data){
                self.files=data.subjects;
            }
        })
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