import Axios from 'axios'
export default function(arr=[]){
    class _iqa{
        sendMsg(url="",name,{type='get', params={}, success=function(){}}={}){
            let paramsurl=_iqa.paramsToUrl(params)
            let state = {
                get:function(){
                    Axios.get(url+paramsurl).then(res=> success(res.data))
                                  .catch(error=>console.log(error)) 
                }
            };
            state[type]();
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
            _iqaob.sendMsg(_url,_name,ob)
        }
    }
    return _iqaob;
}