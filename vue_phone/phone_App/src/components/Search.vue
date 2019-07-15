<template>
     <!-- 头部 -->
<div>
  <div>
    <mt-header title="个人中心" class="head">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button>关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
 </div> 
   
   

</div>
</template>
<script>
// import { Search } from 'mint-ui';

import { Header } from 'mint-ui';
// 引入商品组件
import product from "./Product.vue"

export default {
    data(){
        return {
           
        }
    },
    methods:{},
    // 放引入的组件
    components:{
    }
}
</script>
<style scoped>
   /* 搜索框 */
   .head{
    width: 100%;
    height: 37px;
    background-color: black;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    /* position: fixed; */
}
.mint-search{
  width: 100%;
  height: 50px!important;
  /* position: fixed; */
margin-top: 38px;

}
 
</style>