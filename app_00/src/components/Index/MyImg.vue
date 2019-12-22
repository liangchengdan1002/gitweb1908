<template>
  <div>
    <ul class="cantainer" style="width:900px; " :style="myStyle" v-swipeleft="left" v-swiperight="right">

        <li class="cantainer-item" v-for="(item,i) of list" :key="i" @click="tiao">
          <div>
            <img :src="item.src" alt="" >
          </div>
          <p class="p">
            <span class="price">¥{{item.price}}</span>起
          </p>
          <div class="des">
            <div>
              <span class="span">{{item.title}}</span>
            </div>
            <div class="sty">
              <div class="site">{{item.site}}</div>
              <div class="stylish">{{item.stylish}}</div>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {src:"/img/1.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
        {src:"/img/25.jpg",title:"喜林苑",price:3388,site:"杭州",stylish:"轻奢"},
        {src:"/img/12.jpg",title:"自在清境",price:4199,site:"北京",stylish:"特然"},
        {src:"/img/20.jpg",title:"西溪湾",price:2399,site:"房山",stylish:"田园风"},
       
      ],
      myStyle:{
        "margin-left":"0px",
        width:"0px"
      },
      myleft:0,
      innerWidth:""
    }
  },
  // 通过修改ul里的margin-left：-来移动图片的位置
  methods:{
    tiao(){
      this.$router.push("/detail")
    },
    left(){
      console.log(-(parseInt(this.myStyle.width)-this.innerWidth-320))
      console.log(this.myleft)
      if(this.myleft>-(parseInt(this.myStyle.width)-this.innerWidth)){
      var a=this.myleft-=320
      this.myStyle["margin-left"]=a+"px"
      }else{
      this.$toast("当前是最后一张了");
      }          
    },
    right(){
      if(this.myleft<0){
        var a=this.myleft+=320
        this.myStyle["margin-left"]=a+"px"
      }else{
        this.$toast("当前是第一张了");
      }
    } 
  },
  computed:{
      myWidth(){
      this.myStyle.width=this.list.length*320+"px"
    }
  },
  created(){
    this.myWidth,
    this.innerWidth=window.innerWidth
  },
}
</script>
<style lang="scss" scoped>
  .cantainer{
    padding: 5px;
    white-space: nowrap;
    overflow: visible;
    margin-top: 10px ;
    margin-left:0;
    transition: margin-left .5s linear;
    .cantainer-item{
      display: inline-block;
      width: 300px;
      margin-right: 10px;
      border-radius: 5px;
      box-shadow: 0 0 5px 2px #ccc;
      padding: 5px;
      
      img{
        width: 300px;
        height:200px;
      }
      .p{
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;
        color:#585858;
        .price{
          color: #e36e19;
       }
      }
      .des{
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
        .span{
          color: #4e4e4e;
          font-weight: 600;
        }
        .sty{
          display: flex;
        justify-content: space-between;
        .site{
          border: 1px solid #6bc34e;
          color:#a7cfa0;
          margin: 0 3px;
          padding: 3px;
        }
        .stylish{
          margin: 0 3px;
          padding: 3px;
          border: 1px solid #2ee1bd;
          color:#62bea2;
        }
        }
      }
    }
  }
</style>