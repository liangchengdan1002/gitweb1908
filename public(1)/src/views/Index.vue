<template>
  <div class="index">
    <!-- 面板 -->
   <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        <jing-xun></jing-xun>
      </mt-tab-container-item> 
        
      <mt-tab-container-item id="tab2">
        <fa-xian></fa-xian>
      </mt-tab-container-item> 
      <mt-tab-container-item id="tab3"> 
        <gu-si></gu-si>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <logins></logins>
      </mt-tab-container-item>
    </mt-tab-container> 

    <!-- 底部导航条父元素 -->
     <mt-tabbar v-model="active" fixed> 
      <!-- 子元素 -->
        <mt-tab-item id="tab1">
        <img slot="icon" src="/img/hanglixiang_1.png" alt=""> 精选
      </mt-tab-item>

      <mt-tab-item id="tab2">
        <img slot="icon" src="/img/ic_find_selected.png" alt=""> 发现
      </mt-tab-item> 

      <mt-tab-item id="tab3">
        <img slot="icon" src="/img/110.png" alt=""> 故事
      </mt-tab-item>

      <mt-tab-item id="tab4">
        <img slot="icon" src="/img/ic_settings.png" alt=""> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import JingXun from "./JingXun"
import FaXian from "./FaXian"
import GuSi from "./gusi"
import Logins from "./Logins"

export default {
  data(){
    return {
      active:"tab1"
    }
  },
 components:{
   JingXun,
   FaXian,
   GuSi,
   "logins":Logins
  },
    // created(){
		// 	this.axios.get("/index")
		// 	.then(result=>{
		// 		console.log(result.data)
		// 	})
		// },

}
</script>

<style scoped>
.index{
  text-align: center;
}
</style>