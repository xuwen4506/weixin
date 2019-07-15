<template>
  <div class="home">
   <!-- <div style="margin-top:48px;">
   </div> -->
   <!--03：切换面板-->
          <mt-tab-container v-model="selected" class="page-tabbar-container">
            <mt-tab-container-item id="banner">
            <banner></banner>  
            </mt-tab-container-item>
           <mt-tab-container-item id="t">
            <t></t>
            </mt-tab-container-item>
            <mt-tab-container-item id="per">
            <per></per>
            </mt-tab-container-item>
          </mt-tab-container>
          <!--04：底部导航栏-->
          <div>
            
          </div>
          <mt-tabbar v-model="selected" fixed>
              <mt-tab-item id="banner">
                  <img src="../assets/shou.png">
                <p>首页</p>
              </mt-tab-item>
                <mt-tab-item id="t">
                  <img src="../assets/fen.png">
                  <p>分类</p>
    
              </mt-tab-item>
                <mt-tab-item id="per">
                  <img src="../assets/am.png">
                  <p>我的</p>
              </mt-tab-item>
          </mt-tabbar>
  </div>
</template>

<script>
import Banner from "../components/common/Banner"
import T from "./T"
import Per from "./Per"
export default {
  data(){
    return {
       selected:"banner"
    }
  },
  // name: 'home',
  components: {
   "banner":Banner,
   "t":T,
   "per":Per


  }
}
</script>
<style lang="">
  
</style>
