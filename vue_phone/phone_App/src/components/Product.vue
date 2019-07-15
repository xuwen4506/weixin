<template>
<div>
  <div class="container">
    <!--商品详细信息 start-->
    <div class="goods-item" v-for="(item,index) of list" :key="index">
      <img :src="require(`../assets/${item.img}`)"/>
      <h4>{{item.title}}</h4>
      <div class="info">
       <span class="now">￥{{item.price}}:00</span>
       <span class="count">销量：{{item.count}}</span>
      </div>
    </div>
    <!--商品详细信息 end-->
   
  </div>
 <!-- <mt-button size="large" type="primary"  class="load">加载更多</mt-button> -->
</div> 
</template>
<script>
export default {
  data(){
    return {
      //  list:[],  //保存服务器数据
      //  pno:0,    //页码
      //  pageSize:4,//页大小
      //  value:""
    }
  },
  props:{
    list:""
  },

  methods: {
    //加载更多
    //加载第1 2 3 ..数据
    // loadMore(){
    //   //1:获取当前页码加1
    //   this.pno++;
    //   //2:创建url 请求地址
    //   var url = "product";
    //   //3:创建参数对象
    //   var obj = {pno:this.pno,pageSize:this.pageSize};
    //   //4:发送ajax 
    //   this.axios.get(url,{params:obj}).then(result=>{
    //     console.log(result.data.data);
    //     // 将axios返回的数据放入list中，因为界面只能访问list的数据
    //     this.list = result.data.data;
    //     // 加载页数
    //     var rows = this.list.concat(result.data.data);
    //     this.list = rows;
    //   })
    //   //5:接收服务器返回数据
    //   //6:保存list
    // }
  },

}
</script>
<style>
 /*最外层父元素*/
 .container{
   display: flex;/*弹性布局*/
   flex-wrap: wrap;/*子元素换行*/
   justify-content: space-between;
   padding:4px;
 }
 .container .goods-item{
  width:49%;  /*元素宽度*/
  border:1px solid #ccc;
  box-sizing: border-box;
  margin:2px 0;
  padding:2px;
  display: flex;/*设置弹性布局*/
  flex-direction: column; /*方向按列*/
  min-height: 240px;
  border-radius: 5px;
 }
 /*商品图片*/
 .container .goods-item img{
   width:100%;
   height: 150px;
   
 }
 /* 字体大小 */
 h4{
   font-size: 13px;
   color:#666;
   margin-top: 20px;
 }
 .info{
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
    /* margin-left: -76px; */
 }
 .info .now{
   color: #FF6600;
   font-size: 13px;
   margin-left: 8px;
 }
 .info .count{
   color: #A8A8A8;
   font-size: 12px;
   margin-right: 10px;
 }
 .load{
   width: 100%;
   height: 200px;
   /* z-index: 100; */
 }
</style>


