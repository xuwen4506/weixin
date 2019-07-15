<template>
   <div>
    <mt-header title="登陆" class="head">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button @click="handleClose">关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
   </div> 
</template>
<script>
// 引入头部样式
import { Header } from 'mint-ui'
export default {

}
</script>

<style scoped>
.head{
    width: 100%;
    height: 37px;
    background-color: black;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
</style>

