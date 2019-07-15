<template>
    <div>
        <van-goods-action>
  <van-goods-action-icon
    icon="shop-o"
    text="店铺"
    @click="onClickIcon"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="购物车"
    @click="onClickIcon"
  />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
    @click="onClickButton()"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton()"
  />
</van-goods-action>
<!-- <div class="zzj">
   <cartdet v-show="show"></cartdet> -->
  <!-- </div>  -->
    </div>
</template>
<script>
 import { Toast } from 'vant';
 import CartDet from "./CartDet"
export default {
    // props:{
    //         onClickButton:{type:Function}
    //       },
    data(){
        return {
          vis:false
        }
    },
    methods:{
        onClickIcon() {
      Toast('点击图标');
    },
    onClickButton(val) {
      Toast('<h1>加入购物车成功</h1>');
      // this.$emit("onClickButton",val)
      // this.show=msg;
    },
    },
}
</script>
<style scoped>
    
</style>
