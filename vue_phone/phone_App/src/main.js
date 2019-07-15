import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import axios from "./axios.js"
 import QS from 'qs';
// 所有组件都可以发送ajax请求
// Vue.prototype.axios=axios;
import MintUI from "mint-ui"
import'mint-ui/lib/style.css';
// Vue.use(axios);
// 引入vant组件,使用个人中心
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
// 引入图标
import { Icon } from 'vant';
Vue.use(Icon);
// 引入购物车
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
// 使用购物车实例
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
  import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(MintUI);
import { Sku } from 'vant';

Vue.use(Sku);
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
Vue.config.productionTip = false


import { RadioGroup, Radio } from 'vant';
import { AddressEdit } from 'vant';
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(AddressEdit);
import { Popup } from 'vant';

Vue.use(Popup);
import { Search } from 'vant';



Vue.use(Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
