<template>
  <div>
    <div>
      <mt-header fixed title="即速应用" class="login"></mt-header>
    </div>

    <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" class="operateDIV"></mt-field> -->
    <div class="operateDiv">
      <mt-field placeholder="请输入电话号码" v-model="utel" class="myinp"></mt-field>
      <div class="myinpp">
        <mt-field placeholder="请输入密码" v-model="upass" class="left"></mt-field>
        <!-- <img src="../../img/yzm.png" alt="" @click="createCode()" id="code"> -->
      </div>
      <div class="myinppp">
        <mt-field placeholder="请输入验证码" v-model="sui" class="three"></mt-field>
        <span class="s1" @click="getsui()">{{num}}</span>
      </div>
      <div class="log">
        <input type="text" name value="登录" @click="login()">
      </div>
    </div>
  </div>
</template>
<script>
// 引入头部样式
import { Header } from "mint-ui";
import { Field } from "mint-ui";
import { Toast } from "vant";
export default {
  data() {
    return {
      utel: "",
      upass: "",
      sui: "",
      //   sjs:"",
      num: "1234",
      n: 4,
      i: 0,
      arr: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  methods: {
    //   生成随机数
    getsui() {
      // alert("aa")

      // var idvalue ='';
      // int n = 4;//这个值可以改变的，对应的生成多少个字母，根据自己需求所改
      var i = this.i;
      var num = parseInt(this.num);
      var arr = this.arr;
      var n = this.n;

      for (i = 0; i < n; i++) {
        num += Math.floor(Math.random() * 10);
      }
      this.num=parseInt(num);
    //   alert(num);
      //  return this.num;
    },

    //   登录注册正则
    login() {
      var t = this.utel;
      var p = this.upass;
      var s = this.sui;
      //   定义正则
      var treg = /^[1]+[3,8]+\d{9}$/;
      var preg = /^\d{4}$/;
      var sreg = /^\d{4}$/;
      if (!treg.test(t)) {
        this.$toast("请输入手机号");
        return;
      }
      if (!preg.test(p)) {
        this.$toast("密码格式不正确");
        return;
      }
      //5:判断密码格式不正确  提示出错
      if (!preg.test(p)) {
        this.$toast("请输入密码");
        return;
      }
        if (!sreg.test(s)) {
          this.$toast("验证码不能为空");
          return;
        }
      //   将信息发送ajax
      var qs = require("qs");
      var utel = this.utel;
      var upass = this.upass;
      var obj = { utel: utel, upass: upass };
      obj = qs.stringify(obj);
      console.log(obj);
      var url = "login";
      this.axios.post(url, obj).then(result => {
        var uid = result.data[0];

        // console.log(uid.id);
        localStorage.setItem("uid", `${uid.id}`);
        // if (result.data.code == 1) {
          //跳转指定组件
          this.$router.push("/Home");
        // } else {
        //   Toast("用户已注册");
        // }
      });
    }
  }
};
</script>
<style>
.login {
  width: 100%;
  height: 30px;
  background-color: #08a2e8;
}
.operateDiv {
  width: 100%;
  height: 300px;
  /* border:1px solid red; */
  /* margin: 0 auto; */
  margin-top: 50px;
}
.myinp {
  border: 1px solid gainsboro;
  width: 80%;
  height: 30px;
  margin-top: 30px;
  outline: 0;
  margin: 0 auto;
  font-size: 10px;
}
.myinpp {
  width: 80%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  margin-top: 10px;
  /* font-size: 10px; */
}
.myinpp .left {
  border: 1px solid gainsboro;
  width: 100%;
}

.myinppp {
  width: 80%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  margin-top: 10px;
}
.myinppp .three {
  border: 1px solid gainsboro;
  width: 70%;
  font-size: 13px;
}
.myinppp .s1 {
  display: block;
  width: 30%;
  height: 40px;
  /* background-color: #ffb129; */
  margin-top: 18px;
  line-height: 40px;
  /* color: white; */
  border: 1px solid black;
}
/* 输入框边距 */
.myinput {
  margin-top: 30px;
  margin: 0 auto;
}
/* 获取短信验证码字体颜色 */
.three {
  margin-top: 15px;
}
.log {
  width: 85%;
  height: 38px;
}
.log input {
  width: 90%;
  height: 38px;
  margin-top: 60px;
  background-color: #08a2e8;
  margin-left: 40px;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
  color: white;
}
</style>


