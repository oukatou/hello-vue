<template>
  <div id='chartmain'>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'chart',
  data(){
    return {
      chart: null
    }
  },
  components: {
  },
  methods:{
    initChart(){
      this.chart=echarts.init(document.getElementById('chartmain'));
      let option= {
        title:{
          text:'ECharts 数据统计'
        },
        tooltip:{},
        legend:{
          data:['用户来源']
        },
        xAxis:{
          data:["Android","IOS","PC","Ohter"]
        },
        yAxis:{

        },
        series:[{
          name:'访问量',
          type:'bar',
          data:[500,200,360,100]
        }]
      }
      this.chart.setOption(option)
    }
  },
  mounted(){
    this.initChart()
  }
}
</script>

<style scoped>
#chartmain{
  margin: 100px auto;
  width:600px;
  height: 400px;
}
</style>
