<template>
  <div class="story">
    
    <!-- 面板 -->
   <mt-tab-container v-model="active">
    <mt-tab-container-item id="tab1">
      </mt-tab-container-item> 
    <mt-tab-container-item id="tab2">
      </mt-tab-container-item> 
    <mt-tab-container-item id="tab3"> 
      <div class="story">
        <h3>故事</h3>
        <div class="title">
          <h4>默认</h4>
          <h4>综合排序</h4>
        </div>
      <img src="../assets/tu.png" alt="" class="img1">

        <!-- 第一张图片 -->
        <img src="../assets/11.jpg" alt="" class="img2">
        <div class="one">
          <p>我们只为你推荐那些能“看得见风景的美宿” — —
          专访“逸民宿APP”创始人某某先生</P>
          <p>张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展担忧，你怎么看</p>
          <hr>
        </div>
        <!-- 第二张图片 -->
        <img src="../assets/11.jpg" alt="" class="img2">
        <div class="one">
          <p>我们只为你推荐那些能“看得见风景的美宿” — —
          专访“逸民宿APP”创始人某某先生</P>
          <p>张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展担忧，你怎么看</p>
          <hr>
        </div>
        <!-- 第三张图片 -->
        <img src="../assets/11.jpg" alt="" class="img2">
        <div class="one">
          <p>我们只为你推荐那些能“看得见风景的美宿” — —
          专访“逸民宿APP”创始人某某先生</P>
          <p>张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展担忧，你怎么看</p>
          <hr>
        </div>

      </div>
     </mt-tab-container-item>
    <mt-tab-container-item id="tab4"></mt-tab-container-item>
  </mt-tab-container> 

    <!-- 底部导航条父元素 -->
     <mt-tabbar v-model="active" fixed> 
      <!-- 子元素 -->
        <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/01.png" alt=""> 精选
      </mt-tab-item>

      <mt-tab-item id="tab2">
        <img slot="icon" src="../assets/02.png" alt=""> 发现
      </mt-tab-item> 

      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/03.png" alt=""> 故事
      </mt-tab-item>

      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/03.png" alt=""> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// import LoGin from "../components/Login";
// import ManAge from "../components/Manage";
export default {
  data(){
    return {
      active:"tab1"
    }
  },
//  components:{
//     LoGin,
//     ManAge,
//   },
}
</script>

<style scoped>
.story{
  background: #fff;
}
/*********故事面板*********/
.story h3{
  text-align: center;
  margin-bottom:20px;
}
.story .title{
  height:60px;
  display:flex;
  justify-content: space-around;
  background-color:#f0f0f0
}
.story .title>h4{
  line-height:50px;
}
.story .img1{
  position: absolute;
  width:20px;height:15px;
  margin:0;
  right:42px;top:72px;
}
/**********  第一张图片 ***********/
.story img{
  width:100%;
  margin-bottom:5px;
}
/* .story .one{
  display: flex;
} */
.story .one>p:nth-child(1){
  width:100%;
  padding: 5px 20px 10px 20px;
  font:16px "微软雅黑";
  color:black;
}
.story .one>p:nth-child(2){
  width:100%;
  padding-left: 20px;
  padding-right:20px; 
}

/***** 登录面板******/

</style>