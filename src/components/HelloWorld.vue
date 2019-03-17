<template>
  <div class="hello">
    <el-carousel :interval="4000" type="card">
      <div v-for='(file,index) in files' :key='index'>
        <el-carousel-item  v-for='cast in file.casts' :key="cast.avatars.small">
          <img :src=cast.avatars.small>
          <em>{{cast.name}}</em>
        </el-carousel-item>
      </div>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components:{
  },
  data(){
    return {
      files: []
    }
  },
  created() {
    let self=this;
    this.qa.top250({
          params: {count:10},
          success(data){
            self.files = data.subjects
          }
        }
    )
  },
  methods:{
  }
}
</script>
<style scoped>
  .el-carousel--card{
    margin: 0 auto;
    height:450px
  }
  .el-carousel__item{
    height: 420px
}
  em{
    display:block;
    text-align: center;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
}
  .el-carousel{
    width:550px;
  }

  .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

  .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
  img{
    width:100%;
}
</style>
