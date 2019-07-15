import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
// 引入组件
 import Banner from "./components/common/Banner.vue"
//  引入头部
import Head from "./components/common/Head.vue"
// 引如登陆组件
import Login from "./components/Login.vue"
// 引入商品组件
import Product from "./components/Product.vue"
// 引入搜索框组件
import Search from "./components/Search.vue"
// 引入导航面板
import Topnav from "./components/common/Topnav.vue"
 import Personal from "./components/Personal.vue"
 import Back from "./components/Back.vue"
 import SP from "./components/SP.vue"
 import Per from "./components/Per.vue"
 import T from "./components/T.vue"
 import Advice from "./components/Advice.vue"
 import Jump1 from "./components/Jump1.vue"
 import Details1 from "./components/Details1.vue"
 import Cart from "./components/Cart.vue"
 import CartDet from "./components/CartDet.vue"
 import PerCart from "./components/PerCart.vue"
 import Order from "./components/Order.vue"
 import Address from "./components/Address.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Home',component:Home},
     {path:'/Banner',component:Banner},
     {path:'/Head',component:Head},
     {path:'/Login',component:Login},
     {path:'/Product',component:Product},
     {path:'/Search',component:Search},
     {path:'/Topnav',component:Topnav},
     {path:'/Personal',component:Personal},
     {path:'/Back',component:Back},
     {path:'/SP',component:SP},
     {path:'/Per',component:Per},
     {path:'/T',component:T},
     {path:'/Advice',component:Advice},
     {path:'/Jump1',component:Jump1},
     {path:'/Details1/:id',component:Details1,props:true},
     {path:'/Cart',component:Cart},
     {path:'/CartDet',component:CartDet},
     {path:'/PerCart',component:PerCart},
     {path:'/Order',name:"Order",component:Order},
     {path:'/Address',component:Address},


    //  搜搜矿敲斜杠直接进入此首页
     {path:'/',redirect:"/Home"},
    //  https://www.cnblogs.com/shuaifing/p/7911942.html
    // { path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
