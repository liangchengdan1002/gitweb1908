<template>
  <div class="city">
    <div class="title">热门城市</div>
    <div class="bar">
      <ul class="barLeft">
        <li :class="show==i?'active':''" v-for="(item ,i) of citys" :key="i" :data-i="i" @click="Show(i)">
          <router-link to="" class="fonta">{{item}}</router-link>
        </li>
      </ul>
      <div>
        <span>{{i}}</span>/<span>{{lists[show].length}}</span>
      </div>
    </div>
    <my-img :lists="lists[show]" @change="change"></my-img>
  </div>
</template>
<script>
import MyImg from "./MyImg.vue"
export default {
  data(){
    return {
      i:"1",
      show:"0",
      citys:["北京","莫干山","厦门","青岛","大理"],
      lists:[
        [
          {src:"/img/1.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
          {src:"/img/25.jpg",title:"喜林苑",price:3388,site:"杭州",stylish:"轻奢"},
          {src:"/img/12.jpg",title:"自在清境",price:4199,site:"北京",stylish:"特然"},
          {src:"/img/20.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
        ],
        [
          {src:"/img/003.png",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
          {src:"/img/6.jpg",title:"喜林苑",price:3388,site:"杭州",stylish:"轻奢"},
          {src:"/img/10.jpg",title:"自在清境",price:4199,site:"北京",stylish:"特然"},
          {src:"/img/17.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
        ],
        [
          {src:"/img/12.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
          {src:"/img/13.jpg",title:"喜林苑",price:3388,site:"杭州",stylish:"轻奢"},
          {src:"/img/23.jpg",title:"自在清境",price:4199,site:"北京",stylish:"特然"},
          {src:"/img/21.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
        ],
        [
          {src:"/img/29.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
          {src:"/img/30.jpg",title:"喜林苑",price:3388,site:"杭州",stylish:"轻奢"},
          {src:"/img/12.jpg",title:"自在清境",price:4199,site:"北京",stylish:"特然"},
          {src:"/img/20.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
        ],
        [
          {src:"/img/18.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
          {src:"/img/19.jpg",title:"喜林苑",price:3388,site:"杭州",stylish:"轻奢"},
          {src:"/img/12.jpg",title:"自在清境",price:4199,site:"北京",stylish:"特然"},
          {src:"/img/20.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
        ]
      ],
    }
  },
  methods:{
    Show(e){
      this.show=e;
      console.log(this.show)
    },
    change(i){
      this.i=i+1
    }
  },
  
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
  display: flex;
  justify-content: space-between;
  
    .barLeft{
      width: 80%;
      display: flex;
      justify-content: space-around;
      list-style-type:none;
      .fonta{
        text-decoration: none;
        color:#000;
      }
      
    }
  }
  .active{
    color:#82c280;
    padding-bottom: 5px;
    border-bottom: 2px solid #6ec565;
    .fonta{
      color:#82c280 !important;
    }
  }
}
</style>