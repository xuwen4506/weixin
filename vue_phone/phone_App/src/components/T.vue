<template>
 <div>
    <search></search>
    <sp></sp>
    <topnav></topnav>
  </div>
</template>
<script>
import Search from "./Search"
import SP from "./SP"
import Topnav from "./common/Topnav"
export default {
    data(){
        return {}
    },
    // 引入组件
    components:{
        "search":Search,
        "sp":SP,
        "topnav":Topnav
    }
}
</script>
<style scoped>
    
</style>
