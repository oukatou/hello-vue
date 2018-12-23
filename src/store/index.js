import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        add(state){state.count++},
        reduce(state){state.count--}
    },
    actions:{
        add(context){context.commit('add')},
        reduce(context){setTimeout(function(){
            context.commit('reduce')
        },100)}
    },
    getters:{
        getstate(state){return state.count>0 ? state.count : 0}
    }
})