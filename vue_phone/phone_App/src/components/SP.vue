<template>
    <div>
     <!-- 搜索框 :绑定事件@click=""-->
    <!-- <input type="text" @click="search" v-model="value" class="inp" @blur="search">  -->
     <!-- <button @blur="search">mmm
     </button> --> 
   <!-- <form action="/" >
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
    class="sear"
  />
</form> -->
<mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索" class="inp">
</mt-search>
    </div>
</template>
<script>
import { Search } from 'mint-ui';
// import { Search } from 'vant';
export default {
  data(){
    return {
      value:"",
      selected:"product"
    }
  },
  methods:{
  },

}
</script>
<style scoped>
  /* 搜索框 */
 
.mint-search{
  width: 100%;
  height: 50px!important;


}
.inp{
  width: 100%;
  height: 38px;
}
 
</style>