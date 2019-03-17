<template>
    <div id="trans" class='row text-center'>
      <div class='col-sm-6 col-sm-offset-3'>
      <h1 class=''>Online Translate</h1>
        <form class='form-inline well' @submit.prevent="formSubmit">
          <input class='form-control' oninput='setCustomValidity("")' oninvalid="setCustomValidity('不能为空')" placeholder='please input' required type="text" v-model='translateText'/>
          <select class='form-control' v-model='language'>
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="ru">Russian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>
          <button class='btn btn-info'>translate</button>
        </form>
        <Display :text='translatedText'></Display>
      </div>
    </div>
</template>

<script>
import Display from './DisplayText.vue'
export default {
    name: 'trans',
    data(){
        return {
          language:'ko',
          translateText:'',
          translatedText:''
        }},
    components: {
      Display
    },
    methods:{
        formSubmit(e){
          this.translatedText='loading'
          this.qa.v(this).translate({
              params:{
                key: 'trnsl.1.1.20180418T075147Z.a3956cb732de90e5.23be3b0c84e4e9f04760fe4a1b76b68ddb432c05',
                text: this.translateText,
                lang: this.language
              },
              success(data){
                this.translatedText=data.text[0]
              },
              isblock: false
            }
          )
        }
    }
}
</script>
<style>
input:required:invalid{
    color: rosybrown
}
</style>
