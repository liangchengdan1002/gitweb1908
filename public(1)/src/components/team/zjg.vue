<template>
  <div>
    <div class="header">
  <img src="img/004.png" class="i1" @click="fan">
  <span class="sp" >民宿详情</span>
  <img src="img/007.png" class="i3">
  <img src="img/005.png" class="i2">
  </div>
 <div class="container1"><img src="img/llj.png" ></div> 
 <br>
  <div class="container2">
    <h2>诗酒田园 梦里故乡</h2>
    <p>&nbsp;&nbsp;姥姥家,北京以西60公里,一座隐于房山下的晚清老宅,背靠山体,幽巷里多重式庭院,有听风前院,四季中庭和一株桂花写意的侧院,典型的小巷藏大院风格.人闲桂花落,院静秋山空.王维向往的山居生活,全被装进这座老宅.行山,看云,听风,将唐诗过成日子.</p>
  </div><br>
  <div class="container3">
    <h2>房型房价</h2><br>
    <img src="img/001.png" alt="">
    <p>一号院(姥姥家)</p>
    <div>
      <span>价格:&nbsp;&nbsp;¥3580/平常<button>立即预定</button><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥4480/节日&nbsp;&nbsp;&nbsp;¥4480/周末
      </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
  <div class="container3">
    
    <img src="img/002.png" alt="">
    <p>二号院(姥姥家)</p>
    <div >
      <span>价格:&nbsp;&nbsp;¥3980/平常<button>立即预定</button><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥4980/节日&nbsp;&nbsp;&nbsp;¥4580/周末
      </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
  <div class="container3">
    
    <img src="img/003.png" alt="">
    <p>整院(姥姥家)</p>
    <div>
      <span>价格:&nbsp;&nbsp;¥3980/平常<button>立即预定</button><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥4980/节日&nbsp;&nbsp;&nbsp;¥4580/周末
      </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div><br>
  <div class="container4">
    <h3 class="s1">用户评论</h3>
    <p class="p1">15条评论></p><br><br>
    <p class="p2">用户:131****7991(2019-10-18 16:50:34.0) 
    </p>
    <p class="p3">老板人很好!</p>


  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    fan(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
*{margin: 0; padding:0;box-sizing: border-box;}
    body{
      background:#eee;font-size:15px;text-align: center;width:375px
    }
    div{background-color: #fff;padding:10px;
    width: 375px;
    }
    div img{width:350px}
  .container1{margin:0 auto; }
  .container2 p{text-align: left;}
  .container3 h2{text-align: left;}
  .container3 div {text-align: left; margin: 0 auto;width:355px}
  .container3 div button{float:right;height:30px;background-color: rgb(243, 150, 9);color:#fff;margin-right: 30px;margin-top:10px;font-size:5px}
  .container4 .p2 ,.p3{text-align: left;}
  .s1{float: left;;width:100px}
  .container4 .p1 {float:right}
  .header{position: fixed;width:370px;
   
  }
 .header img{height:30px;width: 30px;}
 .i1{float: left;}
 .i2{float: right;}
 .i3{float: right;}
 .sp{font-size:20px}
</style>