<template>
    <div>
 <div>
    <mt-header title="每周优惠" class="head">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button>关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
 </div> 
 <!-- 主体 -->
 <img src="../assets/t1.png" alt="">
 <div class="Mddle" v-for="(item,index) of list " :key="index">
     <div class="Ml">
         <router-link :to="`/details1/${item.id}`">
         <img :src="require(`../assets/${item.img}`)" alt="">
         </router-link>
         </div>
     <div class="Mr">
         <p>{{item.title}}</p>
         <div class="bo">
             <p>￥{{item.price}}.00</p>
         <span>销量：{{item.count}}</span></div>
         
     </div>
 </div>
 <!-- {{$route.params.tid}}  -->
    </div>
</template>
<script>

import { Header } from 'mint-ui';
export default {
    data(){
        return {
         list :[]
        }
    },
    created(){
        this.getdata();
    },
    methods:{
        getdata(){
            //  console.log("用户ID：" + this.$route.query.tid);//获取1
             var jid=this.$route.query.jid;
             console.log(jid);
              var obj = {jid:jid};
             var url="pro";
             this.axios.get(url,{params:obj}).then(result=>{
                //  console.log(hhh)
                 console.log(result.data.data);
                this.list = result.data.data;
             })

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
div img{
    width: 100%;
    height: 150px;
}
.Mddle{
    width: 100%;
    height: 75px;
    /* border:1px solid red; */
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}
.Ml{
    width: 20%;
    height: 62px;
    /* border:1px solid black; */
    margin-top:10px;
}
.Ml img{
    width: 60px;
    height: 60px;
    margin-left: -6px;
}
.Mr{
    width: 78%;
    height: 65px;
    /* border:1px solid green; */
    padding: 0;
    margin-left: 10px;
}
.Mr span{
    margin-left: 20px;
}
.Mr>p{
    margin-top: 8px;
}
.bo{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.bo p{
    color:#f60;;
}
.bo span{
    color: #a8a8a8;;
}
</style>