<template>
  <div>
    <h2 class='text-muted'></h2>
  </div>
</template>

<script>
export default {
  name: 'dispalyText',
  data(){
    return {
      imgsrc:'../../static/timg.jpeg',
    }},
  props:[
    'text'
  ],
  watch:{
      text(val){
        var h = document.getElementsByTagName('h2')[0]
        h.innerHTML='';
        if(val=='loading'){
          var img=document.createElement('img')
          img.src=this.imgsrc
          img.className='rotation'
          h.appendChild(img)
        }else{
          h.innerHTML=val
        }
      }
  }
}
</script>
<style>
.rotation{
  width:43px;
  height:29px;
  border-radius:50%;
  animation: rotation 3s linear infinite;
}
@keyframes rotation{
  from{transform: rotate(0deg)}
  to{transform: rotate(360deg)}
}
</style>
