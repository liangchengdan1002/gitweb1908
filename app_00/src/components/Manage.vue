<template>
  <div>
    <div class="title">
      <div class="head">
        <img :src="imgs" alt="">
        <ul class="u1">
          <li><router-link to="" class="rouL">{{logIn}}</router-link></li>
          <li>{{fuhao1}}</li>
          <li><router-link to="" class="rouL">{{register}}</router-link></li>
          <li>{{fuhao2}}</li>
        </ul>
        <ul class="u2">
          <li>{{collect}}</li>
          <li>{{browse}}</li>
          <li>{{gold}}</li>
        </ul>
        <ul class="u3">
          <li><router-link to="" class="rouL">我的收藏</router-link></li>
          <li><router-link to="" class="rouL">最近浏览</router-link></li>
          <li><router-link to="" class="rouL">我的金币</router-link></li>
        </ul>
      </div>
    </div>

    <div>
       <div class="order" @click="denglu">
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
        <div v-for="(item,i) of list" :key="i" @click="denglu">
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
      <div class="notlogin" :class="{weideng}">
        <img src="/img/title.jpg" alt="">
        <p class="xx"  @click="Notlogin">×</p>
        <p>梦宿</p>
        <div class="not-head">
        <mt-field class="mt1" placeholder="手机号" v-model="phone"></mt-field>
        <mt-field class="mt1" placeholder="密码" v-model="upwd"></mt-field>
        <router-link to="" class="forget">忘记密码？</router-link>
        <button @click="Login">登 陆</button>
        <p>先去逛逛 ></p>
        <!-- <hr> -->
        </div>
          <p class="p1">其他方式登陆</p>
        <!-- *******底部登陆方式******* -->
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
          <div class="bottom">
            <p>未注册？</p>
          <router-link to="">立即注册</router-link>
          </div>
          <p :class="isTop?'Noerr':'err'">{{isPhone}}</p>
          <p :class="isBtm?'errm':'Noerrm'">{{isPass}}</p>   
          </div>
          </div>
      <div style="height:70px;"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgs:"/img/denglu_1.png",
      fuhao1:"/",fuhao2:"＞",
      collect:"—",browse:"—",gold:"—",
      logIn:"登 录",register:"注 册",
      isTop:"",isBtm:"",
      state:true,
      weideng:true,
      phone:"",upwd:"",
      // **********登录错误提示
      isPhone:"" , //手机
      isPass:"" , //密码
      list:[
        {img:"img/xiuxiumingpian.png",title:"入住人管理"},
        {img:"img/hanglixiang_1.png",title:"我要入住"},
        {img:"img/yonghu_1.png",title:"用户服务"},
      ],
      }
  },
  methods: {
    // ***********登录验证
    Login(){
      // console.log(1);
       var reg = /^\d{11}$/;
       var res = /^[a-zA-Z0-9]{6,18}/;
       var p = this.phone;
       var u = this.upwd;
       if(!reg.test(this.phone)){
         this.isTop = false;
         this.isPhone="您输入的手机格式不正确";
       }else{
         this.isTop = true;
         this.isPhone="输入正确"
       }

       if(!res.test(this.upwd)){
         this.isBtm = true;
         this.isPass = "您输入的密码不正确";
       }else{
         this.isBtm = false;
         this.isPass = "密码正确";
       }
      //  请求的url
      var url = "login";
      var obj = {phone:p,upwd:u}; 
      this.axios.get(url,{params:obj})
      .then( res=>{
        console.log(5);
        console.log(res);
        if( res.data.code == -1){
          this.$messagebox("消息","该用户不存在");
          this.phone=""; this.upwd="";
          this.isPhone="";this.isPass="";
          this.isTop="";this.isBtm="";
        }else{
          this.$messagebox("消息","登录成功");
          // this.$router.push("/");
          this.Notlogin();
          this.phone=""; this.upwd="";
          this.isPhone="";this.isPass="";
          this.isTop="";this.isBtm="";
          this.imgs= "/img/touxiang2.jpg";
          this.logIn ="欢迎用户："+ res.config.params.phone;
          this.register="";this.fuhao1="";this.fuhao2="";
          this.collect=0,this.browse=0,this.gold=0;
          // this.list = "";
        }
      })
    },
    // *************未登陆状态
    denglu(){
      this.weideng = false;
    },
    Notlogin(){
      this.weideng = true;
    },
    groupon(){
      this.state=false;
    },
    close(){
      this.state=true;
    }
  },
  // watch: {
  //   phone(){
  //      this.Login();
  //   }
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
  margin-left: 10px;
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
/* .manage{
  background-color: #ddd;
} */
.errm{
  position: absolute;
  left:26px;top:221px;
  color:#f00;
}
.Noerrm{
  position: absolute;
  left:26px;top:221px;
  color:#82c37c;
  /* display: none; */
}
.Noerr{
  position: absolute;
  left:26px;top:151px;
  color:#82c37c;
  }
.err{
  position: absolute;
  left:26px;top:151px;
  color:#f00;
}
.bottom{
  display: flex;
  justify-content: center;
  margin-top:5px;
}
.weideng{
display: none;
}
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
.not-head>p{
  color:#999;text-align: right;font-size: 13px;margin-right: 18px;margin-bottom:16px;
}
.not-head>.mt1:nth-child(2){
  background-image:url("/img/mima.jpg"); margin-bottom: 30px;
}
.not-head .mt1{
  box-sizing: border-box;
  height: 40px;width: 100%;
  margin-bottom:20px;border:1px solid #ccc; outline:0;
}
.notlogin>p{
  margin-bottom: 10px;
}
.notlogin{
  width:90%;height:440px;
  margin-left: 20px;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  z-index: 666;
  border:1px solid #ccc;box-shadow: inset 0px 0px 113px 12px #303a3273;
  top:131px;
  /* display: none; */
}
.notlogin>img:first-child{
  width:50px;height: 50px;margin-top:20px;
}
.notlogin .mt1{
  background-image: url("/img/phone.jpg");
  background-repeat: no-repeat;
  background-position: 19px 12px;
  margin-left:20px;
  padding-left: 50px;
  width: 90%;
}
.not-btm{
  margin-top: 30px;
}
.not-btm ul{
  display: flex;
  width: 50%;height:36px;
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
  margin-bottom:15px;
  border:0;outline:0;border-radius: 8px;
}
/* 忘记密码 */
.not-head{
  position: relative;
  border-bottom:1px solid #ccc; 
}
.not-head .forget{
  position: absolute;
  width:60px;
  top:121px;right: 16px;
  font-size:12px;
  color:#999;
}
.p1{
  z-index: 5;
  position: absolute;
  left: 129px;bottom: 18%;
  color:#999;
  background:#fff; 
}
.notlogin .xx{
  position: absolute;
  right: 12px; top:0px;font-size: 40px;color:#555;
}
</style>