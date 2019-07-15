<template>
    <div>
         <search></search>
         <back></back>
         <personal></personal>
         <!-- <bottombar></bottombar> -->
    </div>
</template>
<script>
import Search from "./Search"
// import SP from "./SP"
import Back from "./Back"
import Personal from "./Personal"
// import BottomBar from "./common/BottomBar"
export default {
    data(){
        return {}
    },
    components:{
        "back":Back,
        // "sp":SP,
        "search":Search,
        "Personal":Personal,
        // "bottombar":BottomBar
    }
}
</script>
<style scoped>
   
</style>


