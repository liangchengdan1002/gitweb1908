import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from "mint-ui"


// 单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
// 注册mint-ui
Vue.use(MintUI)

// 引入底部导航栏图片，在iocnfont中修改图片的大小px
import "./dibudaohan/iconfont.css"

// 配置axios
axios.defaults.baseURL = "http://127.0.0.1:5050";
Vue.prototype.axios = axios;
// Vue.component("login",Login);
// Vue.component("man-age",ManAge);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
