<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      v-model="addInfo"
    />
    <van-popup @confirm="onAddconfirm" v-model="show" position="bottom" :style="{ height: '30%' }"/>
  </div>
</template>
<script>
import AddressInfo from "../assets/area";
import { Popup } from 'vant';
import { AddressEdit } from "vant";
  import { Toast } from 'vant';
export default {
  data() {
    return {
      areaList: AddressInfo,
      showAddpopup: false,
      searchResult: [],
      show: false,
      addInfo:" "
    };
  },
  methods: {
    onSave() {

      url="address"
      Toast("添加成功");
      var uid=localStorage.getItem("uid");
      
    },
    onDelete() {
      Toast("确定删除改地址？");
      this.showAddpopup=false;
    },
    onChangeDetail(val) {
      this.showAddpopup = true;
    },
    onAddconfirm(val){ 
      this.showAddpopup=false;
      this.addInfo=val[0].name+"    "+val[1].name;
    },
   

  }
};
</script>
<style lang="">
</style>
