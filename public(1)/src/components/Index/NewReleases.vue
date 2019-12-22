<template>
<div>
  <div class="city">
    <div class="title">最新上线</div>
    <div class="bar clearfix">
      <div class="barLeft">
        <span>{{i}}</span>/<span>{{lists.length}}</span>
      </div>
      <div class="one">
        <span>
          精品入住，抢先体验
        </span>
      </div>
    </div>
    <my-img :lists="lists" @change="change"></my-img>
  </div>
  <div class="city">
    <div class="title">枕水而居</div>
    <div class="bar clearfix">
      <div class="barLeft">
        <span>1</span>/<span>6</span>
      </div>
      <div class="one">
        <span>
          净水流深，沧笙踏歌
        </span>
      </div>
    </div>
    <my-img :lists="lists"></my-img>
  </div>
  <div class="city">
    <div class="title">文艺到底</div>
    <div class="bar clearfix">
      <div class="barLeft">
        <span>1</span>/<span>6</span>
      </div>
      <div class="one">
        <span>
          枕上诗书闲出好，门前风景雨来佳
        </span>
      </div>
    </div>
    <my-img :lists="lists"></my-img>
  </div>
  <div class="city">
    <div class="title">揽星云如梦</div>
    <div class="bar clearfix">
      <div class="barLeft">
        <span>1</span>/<span>6</span>
      </div>
      <div class="one">
        <span>
          似此星辰非昨夜，为谁风霜立中宵
        </span>
      </div>
    </div>
    <my-img :lists="lists"></my-img>
  </div>
  <div class="city">
    <div class="title">山野有大美</div>
    <div class="bar clearfix">
      <div class="barLeft">
        <span>1</span>/<span>6</span>
      </div>
      <div class="one">
        <span>
          松月生夜凉，风泉满清听
        </span>
      </div>
    </div>
    <my-img :lists="lists"></my-img>
  </div>
  <div class="city">
    <div class="title">在古镇醒来</div>
    <div class="bar clearfix">
      <div class="barLeft">
        <span>1</span>/<span>6</span>
      </div>
      <div class="one">
        <span>
          唯有别时今不忘，暮烟秋雨过枫桥
        </span>
      </div>
    </div>
    <my-img :lists="lists"> </my-img>
  </div>
</div>
  
</template>
<script>
import MyImg from "./MyImg.vue"
export default {
  components:{MyImg},
  data(){
    return {
      i:"1",
      lists:[
        {src:"/img/1.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
        {src:"/img/25.jpg",title:"喜林苑",price:3388,site:"杭州",stylish:"轻奢"},
        {src:"/img/12.jpg",title:"自在清境",price:4199,site:"北京",stylish:"特然"},
        {src:"/img/20.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
       
      ],
    }
  },
  methods:{
    change(i){
      this.i=i+1
    }
  }
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