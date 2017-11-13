import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//引入页面
import Home from './Home.vue'
import Category from './Category.vue'
import Me from './Me.vue'
import Cart from './ShoppingCart.vue'

//使用路由实例插件
Vue.use(VueRouter)
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  linkActiveClass:"active",
  routes:[
    {
      name:'Main',
      path:'/',
      component:Main,
      children:[
    //将页面组件与path指定的路由关联
        {name:'Home',path:'/home',component:Home},
        {name:'Category',path:'/category',component:Category},
        {name:'Me',path:'/me',component:Me},
        {name:'Cart',path:'/cart',component:Cart}
      ]
   }
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
