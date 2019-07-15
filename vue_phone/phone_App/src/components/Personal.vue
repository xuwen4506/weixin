<template>
<div class="big">
       <p>电商订单</p>
      <van-tabbar v-model="active" class="fix">
  <van-tabbar-item size="30px" icon="send-gift-o">待付款</van-tabbar-item>
  <van-tabbar-item icon="peer-pay">待发货</van-tabbar-item>
  <van-tabbar-item icon="cart-circle-o">待收货</van-tabbar-item>
  <van-tabbar-item icon="comment-o">待评价</van-tabbar-item>
</van-tabbar> 
<p>我的工具</p>
   <van-tabbar v-model="active1" class="fix">
  <van-tabbar-item icon="send-gift-o" @click="getaddr">收货地址</van-tabbar-item>
  <van-tabbar-item icon="peer-pay" @click="jump2">购物车</van-tabbar-item>
  <van-tabbar-item icon="cart-circle-o">系统通知</van-tabbar-item>
</van-tabbar> 
  <p>会员中心</p>
   <van-tabbar v-model="active2" class="fix">
  <van-tabbar-item icon="send-gift-o">会员卡</van-tabbar-item>
  <van-tabbar-item icon="peer-pay">优惠券</van-tabbar-item>
  <van-tabbar-item icon="cart-circle-o">积分</van-tabbar-item>
  <van-tabbar-item icon="comment-o">储值金</van-tabbar-item>
  </van-tabbar> 
 

</div>
  
</template>
<script>
// import Search from "./Search"
// import Back from "./Back"
export default {
    data(){
        return {active:"0",
        active1:"0",
        active2:"0"
        }
    },
    methods:{
jump2(){
    var uid=localStorage.getItem("uid")
    if(!uid){
         this.$router.push("/Login");
    }else{
       this.$router.push("/PerCart"); 
    }
    
},
getaddr(){
    var uid=localStorage.getItem("uid")
    if(!uid){
         this.$router.push("/Login");
    }else{
        this.$router.push("/Address");
    }
   
},
    },
   
}
</script>
<style scoped>
 .big{
     height: 533px;
 } 
  .van-tabbar-item__icon{
      font-size: 50px!important;
    }
 .van-tabbar-item{
     font-size: 13px!important;
 }
.fix{
    position: relative !important;
    margin-top: 10px;
}
 p{
     text-align: left;
     padding: 35px 10px;
 }
</style>