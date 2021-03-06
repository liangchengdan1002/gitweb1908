import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from "mint-ui"

// 2.单独引入样式
import 'mint-ui/lib/style.css'
// 3.注册
Vue.use(MintUI)

// 引入element-ui
import { DatePicker} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(DatePicker);


import TouchCls from './touch-cls.js'
import "./hdsj"

// 配置axios
axios.defaults.baseURL = "http://127.0.0.1:4000";

// session
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;   

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
