<template>
  <div>
    <div>
      <mt-header title="购物车" class="head">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
          <mt-button>关闭</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="leftbtn">
      <div>
        <div class="qx">
          <input type="checkbox" class="inp" v-model="checkAll" @click="selectAll">全选
        </div>
        <mt-button type="primary" size="small" class="btn" @click="del()">删除</mt-button>
      </div>
    </div>
    <div>
    </div>
    <!-- 中建商品  -->
    <div class="product" v-for="(item,index) of list " :key="index">
      <input
        type="checkbox"
        class="dx"
        v-model="checkItem"
        @change="selectOne(index)"
        :value="item.id"
      >
      <img :src="require(`../assets/${item.img}`)" alt>
      <div class="product_mid">
        <p>{{item.title}}</p>
        <p class="getColr">价格￥{{item.price}}.00</p>
      </div>
      <div class="js">
        <button v-bind:disabled="item.addcount===1" @click="item.addcount-=1">-</button>
        <span>{{item.addcount}}</span>
        <button @click="item.addcount+=1">+</button>
      </div>
    </div>
    <div class="btn_class">
      <div class="One">
        <span>
          <span class="one_1">合计:</span>
          {{sum.total}}.00
        </span>
      </div>
      <div class="two">
        <a :data-total="sum.total" @click="btn">提交订单</a>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { Button } from "mint-ui";
export default {
  data() {
    return {
      list: "",
      checkAll: false,
      // 因为绑定value值所以商品id会保存到checkItem
      checkItem: [],
      total: 0
    };
  },

  methods: {
    // 用户提交商品总价
    btn(e) {
      var total = e.target.dataset.total;
      var checkItem = this.checkItem;
      console.log(total);
      this.$router.push({
        // path:"/Order",
        name: "Order",
        params: {
          total: total,
          checkItem: checkItem
        }
      });
      this.$router.push("/Order");
    },
    Load() {
      var uid = localStorage.getItem("uid");
      // console.log(uid);
      var url = "selectCart";
      var obj = { uid };
      this.axios.get(url, { params: obj }).then(result => {
        // console.log(result.data.data);
        var list = result.data.data;

        console.log(list);
        this.list = list;
      });
    },
    //  点击单选框的个数等于循环的条数时，全选，
    // 单个条数必须绑定value值否则触发整个循环条数
    selectOne(index) {
      // console.log(index);
      // var str=""
      // str+=this.checkItem+","
      console.log("这是选中商品的id：" + this.checkItem);
      // console.log(this.item.id)
      if (this.checkItem.length == this.list.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },
    //  点击全选框，下面都选，只要有一个不选，全选就不选。
    selectAll() {
      this.checkItem = [];
      if (!this.checkAll) {
        // console.log(this.checkAll)
        for (var i = 0; i < this.list.length; i++) {
          this.checkItem.push(this.list[i].id);
          // sum()
        }
      } else {
        this.checkItem = [];
        this.checkAll = false;
      }
    },
    // 删除
    del() {
      for (var i = 0; i < this.list.length; i++) {
        var id = this.list[i].id;
        // console.log(id);
        // console.log(this.checkItem.indexOf(id));
        // var a=this.checkItem.indexOf(id)
        // console.log(a)
        // 若果当前没选就提示选中商品，如果选中就提示确定删除
        if (this.checkItem.length == 0) {
          Dialog.confirm({
            message: "请选择商品"
          })
            .then(() => {})
            .catch(() => {});
        } else if (this.checkItem.indexOf(id) > -1) {
          Dialog.confirm({
            message: "确定删除该商品？"
          })
            .then(() => {
              var pid = this.checkItem;
              console.log(pid);
              var url = "del";
              var obj = { pid };
              this.axios.get(url, { params: obj }).then(result => {
                console.log(result.data);
                // 删除成功后记得调用this函数，重新刷新页面
                // Load()函数是获取用户购物车的信息。
                this.Load();
              });
            })
            .catch(() => {});
        }
      }
    }
  },

  // 商品价格计算函数
  computed: {
    sum() {
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        // console.log(this.list)
        var price = parseInt(this.list[i].price);
        var count = parseInt(this.list[i].addcount);
        // 找到商品的id
        var id = this.list[i].id;
        // console.log(id)
        // 判断商品id和checkIem是否一致大于-1代表一致
        // console.log(this.checkItem)
        if (this.checkItem.indexOf(id) > -1) {
          total = parseInt(total) + parseInt(price) * parseInt(count);
          // console.log(total);
        }
        
      }
      return { total: parseInt(total) };
      // this.total=total;return {totalNum:this.selected.length,totalPrice:totalPri}{{getTotal.totalPrice}}
      console.log("这是商品的总价" + this.total);
    }
  },

  //  注意created不能写在methods内
  created() {
    this.Load();
  }
};
</script>
<style scoped>
.btn_class {
  width: 100%;
  height: 40px;
  /* border:1px solid red; */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
}
.One {
  width: 40%;
  height: 50px;
  /* border:1px solid black; */
}
.two {
  width: 40%;
  height: 50px;
  /* border:1px solid red; */
  margin-left: 30px;
}
.one_1 {
  line-height: 40px;
  color: black;
  font-size: 20px;
}
.One span :last-child {
  line-height: 40px;
  color: tomato;
  font-size: 20px;
}
.two a {
  display: block;
  width: 100%;
  height: 50px;
  /* border:1px solid red; */
  background-color: #ff7223;
  color: white;
  line-height: 40px;
}
.qx {
  margin-top: 10px;
  margin-left: 6px;
}
.product {
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.getColr {
  color: #ff7223;
}
.product img {
  width: 60px;
  height: 60px;
  margin-top: -15px;
  /* border:1px solid black; */
}
.fullcheck {
  /* margin-left: -100px!important; */
}
.head {
  width: 100%;
  height: 37px;
  background-color: black;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  /* position: fixed; */
}
.leftbtn {
  width: 100%;
  height: 40px;
  /* border:1px solid red; */
}
.leftbtn div:first-child > span {
  display: block;
  height: 30px;
  margin-left: 250px;
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
  /* float:right; */
}
.g {
  border-bottom: 1px solid gray;
}
.leftbtn div:first-child() > div {
  /* border-bottom: 1px solid gray; */
}
.leftbtn div:first-child() {
  width: 30%;
  height: 100px;
  /* border: 1px solid black; */
}
.leftbtn div:last-child {
  width: 100%;
  height: 40px;
  /* border-bottom: 1px solid gray; */
  display: flex;
  /* justify-content: space-around; */
}
.inp {
  margin-left: 10px;
}
.btn {
  margin-left: 250px !important;
}
.s111 {
  font-size: 20px;
  /* margin-left: -20px; */
  color: #ff7223;
}
</style>
