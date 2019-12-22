<template>
  <div>
    <div class="story">
        <h3>民宿故事精选</h3>
        <!-- 第一张图片 -->
        <img src="/img/11.jpg" alt="" class="img2">
        <div class="one">
          <span>我们只为你推荐那些能“看得见风景的美宿” — —
          专访“逸民宿APP”创始人某某先生</span><br>
          <span>张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展担忧，你怎么看</span>
          
        </div>
        <hr><br>
        <img src="/img/11.jpg" alt="" class="img2">
        <div class="one">
          <span>我们只为你推荐那些能“看得见风景的美宿” — —
          专访“逸民宿APP”创始人某某先生</span><br>
          <span>张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展担忧，你怎么看</span>
          
        </div>
        <hr><br>
        <img src="/img/11.jpg" alt="" class="img2">
        <div class="one">
          <span>我们只为你推荐那些能“看得见风景的美宿” — —
          专访“逸民宿APP”创始人某某先生</span><br>
          <span>张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展担忧，你怎么看</span>
          
        </div>
        
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
/*********故事面板*********/
.story{
  background: #fff;

  // margin: 10px 10px 10px;
  padding-top:10px;
  h3{
  margin-bottom:20px;
 }
}

/**********  第一张图片 ***********/
.story img{
  width:100%;
  margin-bottom:5px;
}
 .story .one{
  padding: 5px 10px;
  margin-bottom:5px; 
} 
.story .one>span:nth-child(1){
  width:100%;
  padding: 5px 20px 10px 20px;
 font-size: 1.1rem;
  color:#262626;
}
.story .one>span:nth-child(3){
  width:100%;
  color:#9b9b9b;
  text-align: left;
  margin-bottom: 20px;
}

</style>