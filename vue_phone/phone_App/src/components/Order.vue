<template>
  <div>
    <div>
      <mt-header title="商品购买" class="head">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
          <mt-button>关闭</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <!-- 购买商品 -->
    <div>
      <div class="body_top">
        <div class="body_top_1" v-for="(item,index) of list " :key="index">
          <img :src="require(`../assets/${item.img}`)" alt>
          <div class="body_top_des">
            <p>{{item.title}}</p>
            <p>￥{{item.price}}.00</p>
          </div>
        </div>
      </div>

      <!-- <div class="body_top_1">
        <img :src="require(`../assets/${item.img}`)" alt>
        <div class="body_top_des">
          <p>绣球</p>
          <p>￥100.00</p>
      </div>-->
      <!-- </div>  -->
      <!-- 留言 -->
      <div class="liuyan">
        <textarea rows="8" cols="40">
         用户留言：
          </textarea>
      </div>
      <!-- 添加地址 -->
      <div class="address">
        <span @click="address">添加地址:</span>
        <span>></span>
      </div>
      <!-- 添加地址 -->
      <div class="address">
        <span>商品金额:</span>
        <span>￥{{total}}.00</span>
      </div>
      <!-- 运费 -->
      <div class="address">
        <span>运费:</span>
        <span>￥0.00</span>
      </div>
      <!-- 支付方式 -->
      <div class="pay">
        <div class="pay_1">
          <span>
            <img src="../assets/pw.jpg" alt>
          </span>
          <div class="pay_22">
            <van-radio-group v-model="radio">
              <van-radio name="1" checked-color="#07c160" class="cl"></van-radio>
            </van-radio-group>
          </div>
        </div>

        <div class="pay_2">
          <span>
            <img src="../assets/pz.jpg" alt>
          </span>
          <div class="pay_222">
            <van-radio-group v-model="radio">
              <van-radio name="0" checked-color="#07c160" class="cl"></van-radio>
            </van-radio-group>
          </div>
        </div>
        <van-submit-bar button-text="去付款">
          <span class="s111">合计：{{total}}.00</span>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>
<script>
import { RadioGroup, Radio } from "vant";
import { Dialog } from "vant";
import { Toast } from "vant";
// Vue.use(RadioGroup);
// Vue.use(Radio);
export default {
  data() {
    return {
      radio: "1",
      list: "",
      total: "",
      checkItem: ""
    };
  },

  methods: {
    address() {
      this.$router.push("/Address");
    },
    // 拿到总价
    btn() {
      // 获取用户id
      var uid = localStorage.getItem("uid");
      // console.log(uid);
      // 接收实时总价
      var total = this.$route.params.total;
      // 将总价赋值给已经保存的变量中
      this.total = total;
      // 接收已选中商品的id 此时是数组，所以要变成字符串
      var checkItem = this.$route.params.checkItem;
      this.checkItem = checkItem;
      // console.log(this.checkItem )
      // 将传来的数组变成字符串
      var str = "";
      str += this.checkItem + ",";
      console.log(str);
      // 发送axios
      var url = "order";
      // 每次请求axios时能够按照单个商品id请求
      str = str.substring(0, str.length - 1);
      var obj = { ids: str };
      this.axios.get(url, { params: obj }).then(result => {
        // console.log(result.data.data);
        var list = result.data.data;
        // console.log(list);
        this.list = list;
      });
      // alert("00")
      this.$toast("结算成功");
    }
  },
  created() {
    this.btn();
  }
};
</script>
<style scoped>
.head {
  width: 100%;
  height: 37px;
  background-color: black;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  /* position: fixed; */
}
.body_top {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}
.body_top_1 {
  border: 1px solid gainsboro;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
}
.body_top_1 img {
  width: 15%;
  height: 60px;
  margin-left: 10px;
}
.body_top_des {
  margin-left: 30px;
  margin-top: 15px;
  font-size: 18px;
}
.body_top_des p:last-child {
  color: #ff7100;
}
.liuyan {
  width: 87%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between !important;
}
.liuyan textarea {
  background-color: #e9e7e8;
}
.address {
  width: 87%;
  height: 30px;
  display: flex;
  /* border: 1px solid red; */
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 10px;
  line-height: 30px;
}
.pay {
  width: 87%;
  height: 70px;
  /* border: 1px solid red; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
/* .pay div span>img:first-child{
    
    background-color: black;
} */
.pay_1 {
  width: 30px;
  height: 24px;
  display: flex;
  justify-content: space-between;
}
.pay_1 img {
  width: 130px;
  height: 50px;
}
.pay_2 {
  width: 50px;
  height: 24px;
  margin-top: 10px;
  display: flex;
  /* justify-content: space-between; */
}
.pay_2 img {
  width: 60px;
  height: 24px;
}
.pay_22 {
  margin-left: 160px;
}
.pay_222 {
  margin-left: 230px;
}
.cl {
  /* background-color: #c7c4c4; */
}
/* .s111{
  background-color: yellow;
} */
</style>
