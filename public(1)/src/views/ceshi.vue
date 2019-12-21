<template>
  <div>
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
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.notlogin{
  width:90%;height:350px;
  margin-left: 20px;
  text-align: center;
  background: #fff;
   /* display: none; */
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