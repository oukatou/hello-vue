<template>
  <div class="about">
    <div>
      <div class="more">
        <a>更多产品</a>
        <div class='bdb'><div>更多产品</div><a v-for="v in smenu" :key="v.name"><span :class=v.cl></span>{{v.name}}</a></div>
      </div>
      <ul class="ds">
        <li><a href="">登录</a></li>
        <li><a href="">设置</a></li>
      </ul>
      <ul class="bdnav">
        <li v-for="v in menu" :key="v.name"><a :href=v.url>{{v.name}}</a></li>
      </ul>
      <div class="clear"></div>
    </div>
    <div class="content">
      <div class='search'>
        <div>
          <img src="//www.baidu.com/img/bd_logo1.png" alt="">
        </div>
        <span><input type="text" v-model="content" @keyup="get($event)" @keydown.down="changeDown()" @keydown.up="changeUp()" name="" id=""></span>
        <button @click='search' class='btn btn-primary'>百度一下</button>
        <div>        
          <ul :class='{border: myData.length}'>
          <li v-for="(item, index) in myData" :key='index' :class="{grey: index==now}">
              {{item}}
          </li>
          </ul>
        </div>  
      </div>   
    </div>
  </div>
</template>
<style lang='stylus' scoped>
.content
  .search
    position absolute
    left 28%
  .border{
      width: 539px;
      list-style:none;
      padding: 0
      border: solid 1px;
      border-color: rgb(238, 238, 238);
      border-top: none;
      text-align left 
      padding 3px 0 0 7px
  }
  .grey{
      background-color: gray
  } 
  text-align: center;
  span{
   border: 1px solid #b6b6b6; 
   width: 539px;
   height: 34px;
   display: inline-block;
   text-align: left;
   input{
     width: 500px;
     border: 0;
     margin: 5px 0 0 9px;
     background: transparent;
     height:22px;
     line-height: 22px;
     outline: none;
    }
  }
  img{
    width: 270px;
    height: 129px;
  }
.bdnav{
  float: right;
  a{
    font-size: 13px;
    font-weight: 700;
    color: black;  
    &:hover{
      color: blue;
    }
  }
}
.ds{
  float: right;
  a{
    font-size: 13px;
    color: black;  
  }
}
.more{
  float: right;
  margin-left: 25px;
  position: relative;
  .bdb{
    opacity: 0;
    position: absolute;
    top:0;
    right: 0;
    background-color: #f9f9f9;
    width: 85px;
    height:450px;
    overflow-y: scroll;
      a{
        color gray
        display block
        text-align center
      }
      div{
        color: #333;
        font-size: 13px;
        width: 60px;
        height: 23px;
        line-height: 23px;
        margin: 0 auto;
      }
      span{
        display: block;
        width: 36px;
        height:36px;
        margin: 10px auto 5px;
        background: url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/logos/bdbri_icons_194ae06.png) no-repeat;
      }
      .nm{
        background-position:  0 0
      }
      .yy{
        background: url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/logos/qqjt_9809ca8.png) no-repeat;
        background-size: cover;
      }
      .tp{
        background-position: -112px 0
      }
      .zd{
        background-position: -36px 0
      }
      .wk{
        background-position: -148px 0
      }
      .fyb{
        background-position: -184px 0
      }
  }
  &:hover{
    .bdb{
      opacity: 1;
    }
  }
  > a{
    background-color: #3388ff;
    color: white;
    font-size: 13px;
    width: 60px;
    height: 23px;
    line-height: 23px;
    display: block;
    text-align: center;
  }
}
.about>div>ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  li{
    float: left;
    padding: 0 10px;
    }
}
.clear{
  clear: both;
}
</style>

<script>
const jsonp = require('jsonp')
export default {
  data(){
   return { 
          menu: [{name:'新闻',url:'xinwen.com'},
           {name:'hao1123',url:'hao123.com'},
           {name:'地图',url:'xinwen.com'},
           {name:'视频',url:'hao123.com'},
           {name:'贴吧',url:'xinwen.com'},
           {name:'学术',url:'hao123.com'}
         ],
          smenu:[
            {name:'糯米',cl: 'nm'},
            {name:'音乐',cl: 'yy'},
            {name:'图片',cl: 'tp'},
            {name:'知道',cl: 'zd'},
            {name:'文库',cl: 'wk'},
            {name:'风云榜',cl: 'fyb'}
          ],
          myData: [],
          content: '',
          now: -1,
        }
  },
  methods:{
        get(ev) {
            window.baidu = {
                sug: (data)=>this.myData = data.s
            };
            if (ev.keyCode == 38 || ev.keyCode == 40) {
                return;
            }
            if(ev.keyCode == 13) {
                window.open('https://www.baidu.com/s?wd=' + this.content);
                this.content = '';
            }
            jsonp('bd/su?wd=' + this.content + '&callback=window.haha',null,(err)=>{
                if(err){console.log(err)}
            })
            this.now=-1
        },
        changeDown() {
            this.now++;
            if(this.now == this.myData.length) {
                this.now = 0;
            }
            this.content = this.myData[this.now];
        },
        changeUp() {
            this.now--;
            if (this.now == -1) {
                this.now = this.myData.length-1;
            }
            this.content = this.myData[this.now];
        },
        search(){
            window.open('https://www.baidu.com/s?wd=' + this.content);
            this.content = '';
        }
    },
  watch: {
      //wd: window.innerHeight
  }
}
</script>
