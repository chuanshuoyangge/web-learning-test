import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home.vue'
// import About from '../views/about.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: function(){
      return import('../views/home')
    }
  },
  {
    path:'/cart',
    name:'cart',
    component:function(){
      return import('../views/cart.vue')
    }
  },
  {
    path:'/profile',
    name:'profile',
    component:function(){
      return import('../views/profile.vue')
    }
  },
  {
    path:'/category',
    name:'categoru',
    component:function(){
      return import('../views/category.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
