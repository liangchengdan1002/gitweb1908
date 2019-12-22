<template>
  <div class="main">
    <div>
      <div class="left">
        <span>全国</span>
      </div>
      <div class="right">
        <div>
          <span>价格：</span>
        </div>
        <div>
          <a class="btnleft" @click="add(-1)" >-
          </a>
          <span class="span">{{price[i]}}</span>
          <a class="btnright col" @click="add(1)" >+
          </a>
          
        </div>
      </div>
    </div>
    <div class="d2">
      <div class="d2left" @click="pv">
        <date-picker @change="change"></date-picker>
      </div>
      <div class="d2right">
        共<span>{{time}}</span>晚
      </div>
      <mt-popup
        :visible.sync="popupVisible"
        position="bottom">
        <div class="siv">
          <h1>ahosdjfoa</h1>
        </div>
      </mt-popup>
    </div>
    <div>
      <div class="btn">
        <span>搜索精品民宿</span> 
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from "./DatePicker"
export default {
  data(){
    return {
      mybtn:true,
      i:0,
      price:["不限","0~500","500~1000","1000~2000"],
      popupVisible:false,
      time:1
    }
  },
  methods:{
    pv(){
      // console.log(this.popupVisible);
      this.popupVisible=true;
      // console.log(this.popupVisible);
    },
    change(time){//修改住宿时间
      this.time=time
    },
    // 修改价格
    add(i){
      console.log(this.price.length)
      // if(this.i<this.price.length-1){
      //   this.i+;
      // }else if(this.i>0){
      //   this.i--;
      // }
      this.i+=i;
      if(this.i<0){this.i=0};
      if(this.i>this.price.length-1){this.i=this.price.length-1}
      console.log(this.i)
    }
  },
  components:
  {
    DatePicker,
  }
}
</script>
<style lang="scss" scoped>

.main{
  width:95%;
  height:187px;
  background: #fff;
  margin:15px auto;
  border: 1px solid #fff;
  border-radius: 20px;
  padding:5px 20px;
  box-sizing: border-box;
}
.col::focus{
  background-color:#5222c2;
}
.main>div:first-child{
  display: flex;
  border-bottom: 1px solid #ededed; 
  padding:20px auto;
  .left{
    width: 30%;
    height:30px;
    line-height: 30px;
    margin: 10px auto;
    background:url("/img/dingwei.png") no-repeat left center;
  
  }
  .right{
    display: flex;
    height:30px;
    line-height: 30px;
    width:70%;
    margin: 10px auto;
    padding-left:10px ;
    border-left: 2px solid #ededed;
    div:first-child{
      width:30%
    }
    div:nth-child(2){
      width:70%;
      display: flex;
      justify-content: space-between;
      background: #eef3f4;
      border-radius: 15px;
      .btnleft{
        width:25px;
        height: 25px;
        
        margin: 4px;
        line-height: 80%;
        line-height: 25px;
        border-radius: 50%;
        background:#fff;
        border: 0;
        }
      .btnright{
        width:25px;
        height: 25px;
        margin: 4px;
        line-height: 80%;
        line-height: 25px;
        border-radius: 50%;
        background:#fff;
        border: 0;
        }
        .span{font-size: 0.5em;
        color:#b6bbbc;}

    }
  }
}
.main>.d2{
  display: flex;
  justify-content: space-between;
  height:50px;
  line-height: 50px;
  border-bottom: 1px solid #ededed;
  margin:0 10px 0 10px;
  .d2left{
    width:80%;
    // padding-left:30px; 
    // background: url("/img/rili.png") no-repeat left 
  }
  .d2right{
    width:20%;
    color:#888888;
  }
}
.main>div:nth-child(3){
  margin: 10px auto;
  text-align: center;
  .btn{
    line-height: 40px;
    border-radius: 20px;
    width: 80%;
    height: 40px;
    margin:0 auto;
    background: #82c37c;
    
    }
}

</style>