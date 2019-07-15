<template>
    <div>
         <!--03：切换面板-->
<mt-navbar v-model="selected" class="ziti">
  <mt-tab-item id="1" class="ziti">全部</mt-tab-item>
  <mt-tab-item id="2" class="ziti" >七夕鲜花</mt-tab-item>
  <mt-tab-item id="3" class="ziti">问候长辈</mt-tab-item>
   <mt-tab-item id="4" class="ziti">永生花</mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
   <product :list=list></product>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   <product :list=list></product>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <product :list=list></product>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
    <product :list=list></product>
  </mt-tab-container-item>
</mt-tab-container>
<!-- <mt-button size="large" type="primary" @click="loadMore" class="load">加载更多</mt-button> -->
    </div>
</template>
<script>
import Product from "../Product"
export default {
    data(){
        return {
          list:[],
            selected:"1",
            // pno:0,
            // pageSize:4
            // a:4
        }
    },
     methods: {
    //加载更多
    //加载第1 2 3 ..数据
    // 函数要处理data中的数据必须加this
    loadMore(selected){
      //1:获取当前页码加1
      console.log(selected)
      // this.pno++;
      //2:创建url 请求地址?product,因为axios中定义服务器基础端口号pno:this.pno,pageSize:this.pageSize,
      var url = "product";
      //3:创建参数对象
      var obj = {selected:this.selected};
      //4:发送ajax 
      this.axios.get(url,{params:obj}).then(result=>{
        // console.log(result.data.data);
        // 将axios返回的数据放入list中，因为界面只能访问list的数据
        this.list = result.data.data;
       // 加载页数
        // console.log(result)
        // var rows = this.list.concat(result.data.data);
        // this.list = rows;
      })
      //5:接收服务器返回数据
      //6:保存list
    }
  },
  // 页面刷新，就穿1的参数
    created() {
     //组件创建成功
     this.loadMore(1);
  },
  // 监听selcted的值变化
  watch: {
    selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        // val当前点击的值，oldval之前点击的值
      //  console.log(val);
      //  console.log(oldVal);
        this.loadMore(val) 
    }
},
    components:{
      "product":Product
    }
}
</script>
<style scoped>
  .ziti{
    font-size: 15px!important;
  }  
</style>
