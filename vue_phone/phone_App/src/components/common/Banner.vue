<template>
<div>
  <div>
     <!-- 轮播效果 -->
   <mt-swipe class="lunbo">
   <mt-swipe-item><img src="../../img/lb1.png" alt=""></mt-swipe-item>
   <mt-swipe-item><img src="../../img/lb2.png" alt=""></mt-swipe-item>
   </mt-swipe> 
  </div>
 <!-- banner1效果 -->
  <div class="banner1">
    <div class="left">
        <div>
          <p>同城专人配送</p>  
        </div>
        <div>
           <p>2小时</p> 
        </div>
        <div>
           <a href="javascript:;"><img src="../../img/b1.png" alt=""> </a> 
        </div>
       
    </div>
    <div class="right">
        <div class="top" @click="jump">
            <div>
                <p>每周优惠</p>
                <p>特惠限时抢购</p>
            </div>
            <div>
                <a href="javascript:;"><img src="../../img/b2.png" alt=""></a>
            </div>
        </div>
        <div class="down">
                <div>
                    <p>优惠券选取</p>
                    <P>领取最新优惠</P>
                </div>
                <div>
                    <a href="javascript:;"><img src="../../img/b3.png" alt=""></a>
                </div>
        </div>
    </div>
  </div>

  <div class="banner2" >
    <div>
        <router-link to="/details1/7"><img src="../../img/b11.png" alt=""></router-link>
    </div>
    <div>
     <p>玫瑰</p>
     <p>有关爱情</p>
     <P>if u love someone</P>
    </div>
  </div>
  <!-- 第三排效果 -->
  <div class="banner3" >
      <div>
          <p>绣球</p>
          <p>希望</p>
          <p>to see the world</p>
      </div>
      <div>
          <router-link to="/details1/8">
          <img src="../../img/b12.png" alt="">
          </router-link>
      </div>

  </div>
<!-- banner4 -->
<div class="banner4">
    <div>
        <router-link to="/details1/9">
        <img src="../../img/b13.png" alt=""
    > </router-link>
    </div>
    <div>
        <p>芍药</p>
        <p>殿春</p>
        <p>Be distressed at parting</p>
    </div>
</div>
<!-- banner5 -->
<div class="banner5">
    <div>
        <p>郁金香</p>
        <p>殿春</p>
        <p>Be distressed at parting</p>
    </div>
    <div>
        <img src="../../img/b14.png" alt="">
    </div>
</div>

</div>
</template>
<script>
// 引入轮播图插件
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data(){
        return {
              tid:"",
        }
    },
    methods:{
      
        jump(){
            　this.$router.push({path:"Jump1",query:{jid:1}})
          
        },
    },

}
</script>
<style scoped>
.lunbo{
    width: 100%;
    height: 160px;
     /* border:1px solid red;  */
 }
 .lunbo img{
     width: 100%;
     height: 160px;
 }
.banner1{
    width:100%;
    height: 140px;
    display: flex;
    justify-content: space-between;
    /* border:1px solid red; */
}
.left{
    width: 50%;
    height: 140px;
    /* border:1px solid red; */
    /* display: flex; */
    flex-direction: column; 
    
} 
.left div:first-child{
    color:red;
    font-size: 14px;
    height: 20px;
    width: 100px;
    margin-top: 15px;
   
}
.left div:nth-child(2){
    font-size: 13px;
    color:#999;
    /* display: block; */
    height: 20px;
    width: 100px;
   

 }
.left div:nth-child(3) img{
    width: 100px;
    height: 100px;
    margin-left: 50px;
    margin-top: -18px;
}
.right{
    width: 50%;
    height: 140px;
    /* display: flex; */
     /* border:1px solid black; */
     flex-direction: column;
}
.right .top{
    width: 100%;
    height: 70px;
    /* border:1px solid red; */
   display: flex;
}

.right .top div:first-child{
    width:60%;
    height: 30px;
     margin-top: 10px;
}
.right .top div:first-child p:first-child{
    height: 15px;
    font-size: 13px;
    color: #13B3E7;
    margin-top: 10px;
} 
.right .top div:first-child p:last-child{
    font-size: 12px;
    color:#999;
     height: 15px;
      margin-top: 10px;
}
.right .top div:last-child{
   width: 40%;
   height: 60px;
   margin-top: 10px;
}
.right .top div:last-child img{
   width: 50px;
   height: 50px;
   /* border:1px solid blue; */
}
/* down */
.down{
    width: 100%;
    height: 70px;
    /* border:1px solid red; */
    display: flex;
    margin-top: 7px;
}
.down div:first-child{
    width: 60%;
    height: 60px;
    /* border:1px solid blueviolet; */
}
.down div:first-child p:first-child{
    font-size: 13px;
    color:#FF7100;
     margin-top: 10px;
}
.down div:first-child p:last-child{
    font-size: 12px;
    color: #999;
     margin-top: 10px;
}
.down div:last-child{
    width:40%;
    height:60px;
    /* border:1px solid black; */
}
.down div:last-child img{
      width: 50px;
   height: 50px;
}
/* 第二排 */
.banner2,.banner4{
    display: flex;
    margin-top: 5px;
}
.banner2 div:first-child,.banner4 div:first-child{
    width: 60%;
    height: 140px;
    /* border:1px solid red; */
}
.banner2 div:first-child img,.banner4 div:first-child img{
    width: 100%;
    height: 120px;
}
.banner2 div:last-child,.banner4 div:last-child{
     width: 40%;
    height: 140px;
    /* border:1px solid blue; */
}
.banner2 div:last-child p:first-child,.banner4 div:last-child p:first-child{
    color: black;
    font-size: 13px;
    margin-top: 25px;
}
.banner2 div:last-child p:nth-child(2),.banner4 div:last-child p:nth-child(2){
    color: #666;
    font-size: 12px;
    margin-top: 18px;
}
.banner2 div:last-child p:nth-child(3),.banner4 div:last-child p:nth-child(3){
 color: #666;
    font-size: 12px;
  margin-top: 8px;
}
/* 第三排 */
.banner3,.banner5{
    display: flex;
    /* width: 100%;
    height: 150px;
    border:1px solid black; */
}
.banner3 div:first-child,.banner5 div:first-child{
     width: 40%;
     height: 150px;
     /* border:1px solid blue; */
     /* flex-direction: column; */
 }
 .banner3 div:first-child p:first-child,.banner5 div:first-child p:first-child{
     color: black;
    font-size: 13px;
    margin-top: 25px;
    /* width: 40px; */
    /* border-bottom: 1px solid red; */
 }
 .banner3 div:first-child p:nth-child(2),.banner5 div:first-child p:nth-child(2){
      color: #666;
    font-size: 12px;
    margin-top: 18px;
 }
 .banner3 div:first-child p:nth-child(3),.banner5 div:first-child p:nth-child(3){
     color: #666;
    font-size: 12px;
    margin-top: 8px;
 }
  .banner3 div:last-child,.banner5 div:last-child{
        width: 60%;
     height: 150px;
     /* border:1px solid teal; */
  }
   .banner3 div:last-child img,.banner5 div:last-child img{
       width: 100%;
       height: 120px;
   }
/* banner4 */
</style>



