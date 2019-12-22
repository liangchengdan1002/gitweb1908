import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import TouchCls from './touch-cls.js'
import "./hdsj"
 
// 引入路由axios模块
// 配置基础路径
axios.defaults.baseURL="http://localhost:5050";
// 添加到vue原型对象中去
Vue.prototype.axios=axios;

// 引入element-ui
import { DatePicker} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(DatePicker);

// 引入mint-ui组件库
import MintUI from 'mint-ui'
// 2.单独引入样式
import 'mint-ui/lib/style.css'
// 3.注册
Vue.use(MintUI)





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
