<template>
    <div>
    <div class="img">
        <div>
           <img src="../assets/p.png" alt=""> 
        </div>
        <div>
          <span>16461898</span>  
        </div>
        
    </div>
    </div> 
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .img{
       background-image: url(../assets/bg.png);
       background-size: 100%;
       /* height: 100px; */
       display: flex;
   } 
   .img div:first-child img{
       width: 40px;
       height: 40px;
       margin: 30px 30px;
   }
   .img div:last-child{
        margin: 42px -10px;
   }
</style>
