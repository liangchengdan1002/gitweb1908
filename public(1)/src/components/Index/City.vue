<template>
  <div class="city">
    <div class="title">热门城市</div>
    <div class="bar">
      <ul class="barLeft">
        <li class="active">
          <router-link to="" class="fonta">北京</router-link>
        </li>
        <li>
          <router-link  to="" class="fonta">莫干山</router-link>
        </li>
        <li>
          <router-link to="" class="fonta">厦门</router-link>
        </li>
        <li>
          <router-link to="" class="fonta">青岛</router-link>
        </li>
        <li>
          <router-link to="" class="fonta">大理</router-link>
        </li>
      </ul>
      <div>
        <span>1</span>/<span>53</span>
      </div>
    </div>
    <my-img></my-img>
     <!-- <ul class="cantainer">
      <li class="cantainer-item">
        <div>
          <img src="/img/1.jpg" alt="">
        </div>
        <p class="p">
          <span class="price">¥2680</span>起
        </p>
        <div class="des">
          <div>
            <span class="span">姥姥家</span>
          </div>
          <div class="sty">
            <div class="site">房山</div>
            <div class="stylish">田园风</div>
          </div>
        </div>
      </li>
      <li class="cantainer-item">
        <div>
          <img src="/img/1.jpg" alt="">
        </div>
        <p class="p">
          <span class="price">¥2680</span>起
        </p>
        <div class="des">
          <div>
            <span class="span">姥姥家</span>
          </div>
          <div class="sty">
            <div class="site">房山</div>
            <div class="stylish">田园风</div>
          </div>
        </div>
      </li>
      <li class="cantainer-item">
        <div>
          <img src="/img/1.jpg" alt="">
        </div>
        <p class="p">
          <span class="price">¥2680</span>起
        </p>
        <div class="des">
          <div>
            <span class="span">姥姥家</span>
          </div>
          <div class="sty">
            <div class="site">房山</div>
            <div class="stylish">田园风</div>
          </div>
        </div>
      </li>
     </ul> -->
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
      .active{
        color:#82c280;
        padding-bottom: 5px;
        border-bottom: 2px solid #6ec565;
        .fonta{
          color:#82c280;
        }
      }
    }
  }
  // .cantainer{
  //   display: flex;
  //   justify-content: flex-start;
  //   // flex-wrap: wrap;
  //   padding: 5px;
  //   overflow: hidden;
    
  //   // box-shadow:
  //   margin: 10px auto;
  //   .cantainer-item{
  //     flex-grow:0; 
  //     float: left;
  //     width: 500px;
  //     border-radius: 5px;
  //     box-shadow: 0 0 5px 2px #ccc;
  //     padding: 5px;
  //     img{
  //       width: 100%;
  //     }
  //     .p{
  //       display: flex;
  //       justify-content: flex-start;
  //       margin-top: 10px;
  //       color:#585858;
  //       .price{
  //         color: #e36e19;
  //      }
  //     }
  //     .des{
  //       display: flex;
  //       justify-content: space-between;
  //       padding-bottom: 5px;
  //       .span{
  //         color: #4e4e4e;
  //         font-weight: 600;
  //       }
  //       .sty{
  //         display: flex;
  //       justify-content: space-between;
  //       .site{
  //         border: 1px solid #6bc34e;
  //         color:#a7cfa0;
  //         margin: 0 3px;
  //         padding: 3px;
  //       }
  //       .stylish{
  //         margin: 0 3px;
  //         padding: 3px;
  //         border: 1px solid #2ee1bd;
  //         color:#62bea2;
  //       }
  //       }
  //     }
  //   }
  // }
}
</style>