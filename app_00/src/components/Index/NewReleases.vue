<template>
  <div class="city">
    <div class="title">热门城市</div>
    <div class="bar clearfix">
      <div class="barLeft">
        <span>1</span>/<span>6</span>
      </div>
      <div class="one">
        <span>
          精品入住，抢先体验
        </span>
      </div>
    </div>
    <my-img></my-img>
    
  </div>
</template>
<script>
import MyImg from "./MyImg.vue"
export default {
  components:{MyImg}
}
</script>
<style lang="scss" scoped>
.city{
  background: #fff;
  // height: 200px;
  padding:10px ;
  overflow: hidden;
  .title{
    font-size: 1.1em;
    margin-bottom: 10px; 
  }
  .bar{
    .one{ color:#7acf71;}
    .barLeft{
     float:right;

    }
  }
}
.clearfix::after{
 display: block;
 content: "";
 clear: both;
}
</style>