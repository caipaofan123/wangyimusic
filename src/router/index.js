import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/layout/home',
    },
    {
        path: '/layout',
        component: Layout,
        children:[
            {
                path: 'home',
                meta:{
                    title:'首页'
                },
                component: Home,
            },
            {
                path: 'search',
                meta:{
                    title:'搜索'
                },
                component: Search,
            }
        ]
    },
    {
        path: '/play',
        component: Play,
    }
]
const router = new VueRouter({
    routes: routes,
})
export default router