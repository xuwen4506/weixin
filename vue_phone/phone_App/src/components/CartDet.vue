<template>
    <div style="position:fixed;width:100%; height:100%;top:0%;">
   <div>
    <mt-header title="商品详情" class="head">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button>关闭</mt-button>
  </router-link>

  <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
 
 
 
 </div> 


<div v-if="visable==true">


  <div class="deta">
   <div></div>
   <div class="left" style="background-color:#fff">
       <div><img src="../assets/f7.jpg" alt=""></div>
       <div>
           <p>佳期如梦----永生花盒</p>
           <p class="p1">￥336.00</p>
       </div>
       <div><button @click="toggle()">×</button></div>
   </div>
  </div>
 <div style="background-color:#fff">
      <div class="bottom">
      <div class="p11">
 <span>数量</span> 
      </div>
      <div class="p2">
          <span>库存：200</span>
      </div>
      <div class="count">
          <button>-</button>
          <span>1</span>
          <button>+</button>
      </div> 
  </div>
  <div class="jia">
   <a href="#" @click="getcart()">加入购物车</a>
  </div>
</div>
</div>
 </div>


</template>
<script>
import { Toast } from 'vant';
import { Header } from 'mint-ui';
export default {
    data(){
        return { 
            visable:this.aa,
           
            }
    },
    props:['aa'],
    watch:{
        visable(val){
            console.log(val)
  this.$emit("add",val)
        },
         aa(a){
            console.log(a)
         }
    },

    methods:{
       getcart(){
           Toast('加入购物车成功');
       },
       toggle(){
           this.visable=false;
       }
    }
}
</script>
<style scoped>
.head{
    width: 100%;
    height: 37px;
    background-color: black;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    /* position: fixed; */
}
.deta div:first-child{
    width: 100%;
    height: 300px;
    /* border:1px solid red; */
    background-color: rgba(0, 0, 0,0.8);
}
.deta div:last-child{
     width: 100%;
    height: 200px;
    /* border:1px solid black; */
}
.left{
    display: flex;
    height: 100px!important;
}
.left div:first-child{
    width: 24%;
    height: 85px;
    /* border:1px solid green; */
    margin-top: -20px;
    border-radius: 8%;
    margin-left: 20px;
}
.left div:nth-child(2){
    width: 50%;
     height: 70px;
     margin-top: 10px;
    /* border:1px solid black; */
}
.p1{
    color:#ff6710;
    margin-left: -60px;
}
.left div:nth-child(3){
    width: 10%;
    height: 50px;
    /* border:1px solid red; */
    margin-left: 40px;
}
.left img{
    width: 90px;
    height: 86px;
    background-image: 100%;
}
.bottom{
   width: 100%;
    height: 30px;
    /* border:1px solid red; */
    display: flex;
    flex-direction: row;
}
.p11{
    width: 20%;
    height: 20px;
    /* border:1px solid red; */
    /* margin-left: 30px; */
}

.bottom .p2{
    display: block;
    width: 30%;
    height: 20px;
    /* border:1px solid black; */
    margin-left: 70px;
}
.count{
    width: 30%;
    height: 20px;
    /* border:1px solid black; */
    margin-left: 30px;
}
.jia{
    width: 100%;
    height: 40px;
    border:1px solid red;
    display: block;
    margin-top: 112px;
        background-color: #f5a623;
           
    border-color: #f5a623;
    border-radius: 5%;
    text-align: center;
    line-height: 40px;
}
.jia a{
 color: #fff;
 /* margin-top: 20; */
}
</style>
