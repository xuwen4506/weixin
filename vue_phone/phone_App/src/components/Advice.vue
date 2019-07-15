<template>
    <div>
        <!-- <search></search> -->
        <div>
    <mt-header title="个人建议" class="head">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button>关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
 </div> 
<img src="../assets/ad.png" alt="">
<div class="field">
    <mt-field placeholder="您的姓名" v-model="uname" class="myinp"></mt-field>
    <mt-field placeholder="您的联系方式" v-model="tel" class="myinp"></mt-field>
    <textarea cols="30" rows="50" class="myinp" id="c" placeholder="您的问题"></textarea>
  <mt-button type="primary" size="normal" class="BTN" @click="tijiao">提交按钮</mt-button>
    <!-- <mt-field v-model="uq" class="myinp" type="textarea" rows="10" ></mt-field> -->
</div>

    </div>
</template>
<script>
import { Button } from 'mint-ui';
import { Field } from 'mint-ui';
import Search from "./Search";
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import { setInterval } from 'timers';
export default {
    data(){
        return {
            uname:"",
            tel:"",
            uq:""
        }
        
    },
    methods:{

        tijiao(){
             let instance = Toast('提交成功');
     setTimeout(() => {
      Indicator.close();
      Toast('提示信息'); 
       instance.close();
   }, 2000);
 Indicator.open();
        }
    }
    // components:{
    //         "search":Search
    //     }
}
</script>
<style scoped>
.BTN{
    width: 297px;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
}
#c{
    height: 50px;
    font-size: 15px;
    padding: 5px;
    width: 290px!important;
    /* line-height: 50px; */
}
.field{
    /* height: 100px; */
    margin-top: 20px;
  
}
.myinp{
    margin-top: 10px;
    border:1px solid black;
}
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
   div img{
       width: 100%;
       height: 120px;
       background-size: 100%;
   } 
   .myinp{
       border-radius: 10px;
   }
</style>
