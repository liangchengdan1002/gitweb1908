<template>
  <div>
    <div>
       <div class="order">
        <div>
          <img src="../assets/dingdan.png" alt="">
        </div>
        <div>
          <img src="../assets/fukuan.png" alt="">
        </div>
        <div>
          <img src="../assets/dairuzhu.png" alt="">
        </div>
        <div>
          <img src="../assets/pingjia.png" alt="">  
        </div>
      </div> 
      <!-- <table></table> -->
      <div class="order-text">
        <p>我的订单</p>
        <p>待付款</p>
        <p>待入住</p>
        <p>待评价</p>
      </div>

      <!-- ******* 底部管理 ******* -->
      <div class="serve">
        <div v-for="(item,i) of list" :key="i">
        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
        <p class="p-right">＞</p>
        </div>

        <div @click="groupon">
        <img src="img/dianhua_1.png" alt="">
        <p>团购咨询</p>
        <p class="p-right">＞</p>
        
        </div>
        <div @click="groupon"> 
        <img src="img/huabanfuben.png" alt="">
        <p>合作咨询</p>
        <p class="p-right">＞</p>
        </div>
        <div>
        <img src="img/hanglixiang_1.png" alt="">
        <p>设置</p>
        <p class="p-right">＞</p>
        </div>
      </div>

    </div>
     <!-- ******团购咨询****** -->
      <div class="consult" :class="{state}">
          <img src="/img/huabanfuben.png" alt="">
          <p>点击添加客服微信 ：<span>team0000</span></p>
          <p>全国统一客服电话 ：<span>400000000000</span></p>
          <p>客服在线时间 09:00-22:00</p>
          <p @click="close">×</p>
      </div> 
      <!-- *******未登陆状态****** -->
      <div class="notlogin">
        <img src="/img/title.jpg" alt="">
        <p>梦宿</p>
        <div class="not-head">
        <input type="text" placeholder="手机号">
        <input type="text" placeholder="密码">
        <router-link to="" class="forget">忘记密码？</router-link>
        <button>登 陆</button>
        </div>
        <!-- *******底部登陆方式******* -->
          <p class="p1">其他方式登陆</p>
        <div class="not-btm"> 
            <ul>
              <li>
                <img src="/img/qq.png" alt="">
              </li>
              <li>
                <img src="/img/weixin.png" alt="">
              </li>
              <li> 
                <img src="/img/xinlang.png" alt="">
              </li>
            </ul>
          <div>
            <p>未注册？</p>
          <router-link to="">立即注册</router-link>
          </div>
        </div>
      </div>
      <div style="height:70px;"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      state:true,
      list:[
        {img:"img/xiuxiumingpian.png",title:"入住人管理"},
        {img:"img/hanglixiang_1.png",title:"我要入住"},
        {img:"img/yonghu_1.png",title:"用户服务"},
      ],
      }
  },
  methods: {
    // *************未登陆状态
    Notlogin(){

    },
    groupon(){
      this.state=false;
    },
    close(){
      this.state=true;
    }
  },
}

</script>

<style scoped>
/* .manage{
  background-color: #ddd;
} */
.order{
  width:300px;
  display: flex;
  background: #fff;
  position: absolute;
  top:210px;left:40px; 
  justify-content: space-between;
  padding:5px 10px 18px;
  border-radius: 10px;
}
.order div{
  display: flex;
  padding: 12px 12px 12px 14px;
}
.order div>img{
  width:45px;height:40px;
}
.order-text{
  display: flex;
  position: relative;
  z-index: 1;
  /* justify-content: space-between; */
  margin-top:20px;
  margin-left: 55px;
  /* width: 250px; */
}
.order-text p{ color:#000;}
.order-text>p+p{
  margin-left: 27px;
}

/* *******  底部管理样式  ******* */
.serve div{
  display: flex;
  width:100%;
  height:50px;
  background:#fff;
  position: relative;
}
.serve div:first-child{
  margin-top:30px; 
  margin-bottom:18px;
}
.serve div+div{
  border-bottom:1px solid #999;
}
.serve div>img{
  width:30px;height: 30px;
  margin:9px 20px;
}
.serve div>p{
  line-height: 50px;
  font-size:16px;
  color:#000;
}
.serve div .p-right{
 position: absolute;
 right:35px;
 font-size:25px;
 color:#aaa;
}
.serve div:last-child{
  margin-top:15px;
  border:0;
}

/* *****弹框***** */
.consult{
  z-index: 2;
  width:250px;
  height: 150px;
  position:absolute;
  top:375px;right: 61px; 
  background:#aaa;
  text-align: center;
  border-radius: 10px;
  
}
.consult p{color:#000;}
.consult p span{color:#fff}
.consult img{
  width: 50px;height:50px;
  margin-bottom: 10px;
}
.state{
  display: none;
}
.consult p:last-child{
  position: absolute;
  top:5px;right: 10px;
  font-size:35px;
  color:#fff; 
}
/***********  未登录状态  ********* */
.notlogin{
  width:90%;height:350px;
  margin-left: 20px;
  text-align: center;
  background: #fff;
   display: none;
}
.notlogin>img:first-child{
  width:50px;height: 50px;
}
.notlogin input{
  background-image: url("/img/phone.jpg");
  background-repeat: no-repeat;
  background-position: 17px 5px;
  padding-left: 50px;
  width: 90%;
}
.not-btm ul{
  display: flex;
  width: 50%;
  /* height:50px; */
  justify-content: space-between;
  margin-left: 80px;
}
.not-btm ul li{
  height: 50px;
  line-height: 50px;
}
.not-btm img{
  width:30px;height:30px;
  /* background-color:#f00; */
  /* border:1px solid #ccc; */
  border-radius: 50%;
  margin-bottom: 20px;
}
.not-btm div:last-child{
  display: flex;
  justify-content: center;
  font-size: 14px;
}
.not-head button{
  background-image:linear-gradient(to left,#c3e48d,#00eaff);
  width: 80%;height:40px;
  color:darkblue;
  font-size: 16px;
  margin-bottom:20px;
}
/* 忘记密码 */
.not-head{
  position: relative;
}
.not-head .forget{
  position: absolute;
  width:60px;
  top:70px;right: 23px;
  font-size:12px;
  color:#999;
}
.notlogin .p1{
  border-top:1px solid #ccc;
  margin-bottom: 13px;
}
</style>