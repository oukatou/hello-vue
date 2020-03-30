export default {
    debounce(fn,delay){
        let timer=null;
        return function(){
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(fn,delay)
        }
    },
    throttle(fn,delay){
        let valid=true;
        return function(){
            if(valid){
                valid=false;
                setTimeout(()=>{valid=true;fn()},delay)
            }
        }
    }
}