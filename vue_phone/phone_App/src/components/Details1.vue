<template>
  <div>
    <div></div>
    <img :src="require(`../assets/${list.img}`)" alt>
    <div>
      <!-- 佳期如梦----永生花盒：进口永生玫瑰3枝,永生康乃馨3枝 -->
      {{list.title}}
    </div>
    <div class="price1">
      <span>￥ {{list.price}}.00</span>
    </div>
    <div class="kc">
      <span>库存：{{list.count}}</span>
      <span>运费：{{list.money}}</span>
    </div>
    <div class="m">————详情————</div>
    <div class="d1">
      <span>产品详情</span>
    </div>
    <div class="images">
      <img :src="require(`../assets/${item.img}`)" alt v-for="(item,index) of List" :key="index">
    </div>
    <div></div>
    <!-- 弹出框 -->
    <div style="position:fixed;width:100%; height:100%;top:0%;">
      <div>
        <mt-header title="商品详情" class="head">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
            <mt-button>关闭</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </div>

      <div v-if="visable==true">
        <div class="deta">
          <div></div>
          <div class="left" style="background-color:#fff">
            <div>
              <img :src="require(`../assets/${list.img}`)" alt>
            </div>
            <div>
              <p>{{list.title}}</p>
              <p class="p1">￥{{list.price}}.00</p>
            </div>
            <div>
              <button @click="toggle()">×</button>
            </div>
          </div>
        </div>
        <div style="background-color:#fff">
          <div class="bottom">
            <div class="p11">
              <span>数量</span>
            </div>
            <div class="p2">
              <span>库存：{{list.count}}</span>
            </div>
            <div class="count">
              <button v-bind:disabled="a===1" @click="a-=1">-</button>
              <span>{{a}}</span>
              <button @click="a+=1">+</button>
            </div>
          </div>
          <div class="jia">
            <a href="#" @click="getcart()">加入购物车</a>
          </div>
        </div>
      </div>
    </div>

    <!-- gwc -->
    <div class="gwc">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon()"/>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton()"/>
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton()"/>
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Toast } from "vant";
// import { constants } from "crypto";
// 引入个人购物车也
// import PerCart from "./PerCart"
export default {
  data() {
    return {
      list: [],
      List: [],
      visable: false,
      a: 1,
      Data: ""
    };
  },
  props:['id'],
  methods: {
    // 获取所有信息一旦点击加入购物车插入数据库
    getcart() {
      // 获取用户uid
      //localStorage.setItem("uid", `${uid.id}`);
      var uid = localStorage.getItem("uid");
      console.log(uid);
      // 获取商品id
     // var pid = this.$route.query.id;
      var pid=this.id
      // console.log(pid);
      // 获取商品数量
      var a = this.a;
      // console.log(a);
      // 获取商品价格
      var price = this.list.price;
      // console.log(price);
      // 获取商品名称
      var title=this.list.title;
      var img=this.list.img;

      // 判断用户是否登录
      if (!uid) {
        this.$router.push("/Login");
      } else {
        //  打包发送
        var obj = { uid, pid, a, price,title,img };
         console.log(obj);
        Toast("添加到购物车");
        var url = "cart";
        this.axios.get(url, { params: obj }).then(result => {
          // console.log(result);
        });
      }
      // 加入购物车后将弹框消失
      this.visable = false;
    },
    toggle() {
      this.visable = false;
    },

    // 查询个人购物车页
    onClickIcon() {
      this.$router.push("/PerCart");
      Toast("点击图标");
    },
    onClickButton() {
      this.visable = true;
    },

    // ajax获得商品数据
    Detdata() {
      var id = this.id;
      // console.log(id); //拿到值进行ajax
      var obj = { id: id };
      var url = "detail";
      this.axios.get(url, { params: obj }).then(result => {
        //  console.log(obj);
        // this.list = obj.details;
        // console.log(result.data.product);
        this.list = result.data.product;
        // console.log(list)
        this.List = result.data.details;
      });
    }
  },

  created() {
    // 组件一旦创建时候调用
    this.Detdata();
    console.log(this.id)
  }
};
</script>
<style scoped>
/* 弹出框 */
.deta div:first-child {
  width: 100%;
  height: 300px;
  /* border:1px solid red; */
  background-color: rgba(0, 0, 0, 0.8);
}
.deta div:last-child {
  width: 100%;
  height: 200px;
  /* border:1px solid black; */
}
.left {
  display: flex;
  height: 100px !important;
}
.left div:first-child {
  width: 24%;
  height: 85px;
  /* border:1px solid green; */
  margin-top: -20px;
  border-radius: 8%;
  margin-left: 20px;
}
.left div:nth-child(2) {
  width: 50%;
  height: 70px;
  margin-top: 10px;
  /* border:1px solid black; */
}
.p1 {
  color: #ff6710;
  margin-left: -60px;
}
.left div:nth-child(3) {
  width: 10%;
  height: 50px;
  /* border:1px solid red; */
  margin-left: 40px;
}
.left img {
  width: 90px;
  height: 86px;
  background-image: 100%;
}
.bottom {
  width: 100%;
  height: 30px;
  /* border:1px solid red; */
  display: flex;
  flex-direction: row;
}
.p11 {
  width: 20%;
  height: 20px;
  /* border:1px solid red; */
  /* margin-left: 30px; */
}

.bottom .p2 {
  display: block;
  width: 30%;
  height: 20px;
  /* border:1px solid black; */
  margin-left: 70px;
}
.count {
  width: 30%;
  height: 20px;
  /* border:1px solid black; */
  margin-left: 30px;
}
.jia {
  width: 100%;
  height: 40px;
  border: 1px solid red;
  display: block;
  margin-top: 112px;
  background-color: #f5a623;

  border-color: #f5a623;
  border-radius: 5%;
  text-align: center;
  line-height: 40px;
}
.jia a {
  color: #fff;
  /* margin-top: 20; */
}

/* 详情页 */
.head {
  width: 100%;
  height: 37px;
  background-color: black;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.gwc {
  width: 100%;
  position: fixed !important;
  height: 50px;
}
img {
  width: 100%;
  height: 320px;
  border: 1px solid gainsboro;
}
div {
  font-size: 15px;
  color: #333;
}
.price1 {
  width: 30%;
  height: 30px;
  margin-top: 15px;
}
.price1 span {
  color: #ff7100;
  margin-left: -20px;
  font-size: 18px;
}
.kc {
  width: 50%;
  height: 30px;
  font-size: 16px;
}
.kc span:last-child {
  margin-left: 20px;
}
.m {
  margin: 10px auto;
  height: 20px;
  font-size: 16px;
  color: #b2b2b2;
}
.d1 {
  width: 30%;
  height: 30px;
  margin-left: -10px;
}
.d1 span {
  color: #333;
  font-size: 16px;
}
.images img {
  width: 100%;
  background-size: 100%;
}
.images img:nth-child(2) {
  height: 277px;
}
.images img:nth-child(3) {
  height: 180px;
}
</style>
