<template>
  <div>
     <div class="title">
      <div class="head">
        <img :src="imgs" alt="">
        <ul class="u1">
          <li><router-link to="" class="rouL">登 录 /</router-link></li>
          <li><router-link to="" class="rouL">注 册</router-link></li>
          <li>＞</li>
        </ul>
        <ul class="u2">
          <li>一</li>
          <li>一</li>
          <li>一</li>
        </ul>
        <ul class="u3">
          <li><router-link to="" class="rouL">我的收藏</router-link></li>
          <li><router-link to="" class="rouL">最近浏览</router-link></li>
          <li><router-link to="" class="rouL">我的金币</router-link></li>
        </ul>
      </div>
    </div>

  </div> 
</template>

<script>
export default {
  // data() {
  //   return {
  //     // imgs:"/img/denglu_1.png",
  //   }
  // },
  // methods: {
    
  // },
}
</script>

<style scoped>
.title{
  display: flex;
  position:relative;
  width: 100%;height:250px;
  /* background-image:linear-gradient(to right,#40b138bf,#7dd40a); */
  background-image:url("../assets/bj2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.title .head>img{
  width:45px;height:45px;
  margin-top: 45px;margin-left:-146px;
   border:2px solid #fff;
   border-radius:50%; 
  background:#ccc;
}
.title ul li .rouL{
  color:#fff;
  text-decoration: none;
  /* cursor: pointer; */
}
.title .u1{
  display: flex;
  position: absolute;
  top:60px;left:115px;
  font-size:16px;
  color:#fff;
}
.title ul>li+li{
  margin-left: 5px;
}
.title .u2{
  display: flex;
  width: 200px;
  justify-content: space-between;
  text-align: center;
  margin:30px 0px 10px 80px;
  color:#fff;
}
.title .u3{
  display: flex;
  /* width: 200px; */
  justify-content: space-between;
  font-size: 15px;
  margin-left:60px;
}
.title .u3>li+li{
  margin-left:30px;
}
/****** 订单栏*********/
</style>