import Axios from 'axios'
export default function(arr=[]){
    class _iqa{
        constructor(){
            this._vueob = {};
            this.status = 0;
        }
        sendMsg(url="",{type='get', params={}, isblock=true, success=function(){}}={}){
            let paramsurl=_iqa.paramsToUrl(params);
            let self=this;
            let state = {
                get:function(){
                    Axios.get(url+paramsurl).then(res=> {self.status = 0; success.call(self._vueob,res.data)})
                                            .catch(error=>console.log(error)) 
                }
            };
            if(isblock){
                if(this.status == 0){
                    this.status = 1
                    state[type]();
                }
            }else{
                state[type]()
            }
        }
        v(vueob){
            this._vueob=vueob;
            return this;
        }
        static getName(url){
            let _arr = url.split('/');
            let _name = _arr[_arr.length-1];
            return _name;
        }
        static paramsToUrl(params){
            let url=[];
            for(let n in params){
                url.push(n+"="+params[n])
            }
            return '?'+url.join('&')
        }
    }
    let _iqaob=new _iqa()
    for(let _url of arr){
        let _name = _iqa.getName(_url)
        _iqaob[_name]=function(ob){
            _iqaob.sendMsg(_url,ob)
        }
    }
    return _iqaob;
}