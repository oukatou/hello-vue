import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import HelloWorld from '../components/HelloWorld'
import Profile from '../components/Profile'
import Baidu from '../components/Baidu'
import Animi from '../components/Animi.vue'
import Trans from '../components/Translate.vue'
import Split from '../components/Split.vue'
import Chart from '../components/Chart.vue'
import Share from '../components/Share.vue'

Vue.use(VueRouter)

export default new VueRouter({
    //hashbang: false,
    mode: 'history',
    routes:[{
            path: '/', component: Index
        },
        {
            path: '/hello', component: HelloWorld
        },
        {
            path: '/profile', component: Profile
        },
        {
            path: '/baidu', component: Baidu
        },
        {
            path: '/animi', component: Animi
        },{
            path: '/trans', component: Trans
        },{
            path: '/split', component: Split
        },{
            path: '/chart', component: Chart
        },{
            path: '/share', component: Share
        }]
});
