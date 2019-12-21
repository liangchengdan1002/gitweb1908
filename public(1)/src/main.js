import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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

import TouchCls from './touch-cls.js'
import "./hdsj"



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
