import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home"
// import About from "../components/about"
Vue.use(VueRouter);
const routes=[
    {
        path:'/home:userid',
        component:Home
    },
    {
        path:'/about',
        component:()=>import('../components/about')
    }
];
const router = new VueRouter({
    routes,mode:'history'
})

export default router