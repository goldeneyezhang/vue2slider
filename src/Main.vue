<template>
  <div id="main">
   <div class="tabs">
     <ul>
       <li>
         <!--使用router-link指向定义的path-->
         <router-link :to="{name:'Home'}">
            <div><img src="./assets/images/home.svg"></div>
            <div>首页</div>
         </router-link>
        </li>
         <li>
         <!--使用router-link指向定义的path-->
         <router-link :to="{name:'Category'}">
            <div><img src="./assets/images/category.svg"></div>
            <div>分类</div>
         </router-link>
        </li>
         <li>
         <!--使用router-link指向定义的path-->
         <router-link :to="{name:'Cart'}">
            <div><img src="./assets/images/cart.svg"></div>
            <div>购物车</div>
         </router-link>
        </li>
         <li>
         <!--使用router-link指向定义的path-->
         <router-link :to="{name:'Me'}">
            <div><img src="./assets/images/me.svg"></div>
            <div>我</div>
         </router-link>
        </li>
     </ul>
  </div>
  <div class="content">
      <!--用router-view渲染视图-->
      <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>