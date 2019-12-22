<template>
  <div class="main">
    <div class="title">发现</div>
    <div class="cantiner">
      <!-- 名宿标签 -->
      <div class="tag">
        <p >名宿标签</p>
        <div class="min">
          <div class="tit">
            <img src="/img/ty.png" alt="">
            <span>田园风</span>
          </div>
          <div class="tit">
            <img src="/img/wy1.png" alt="">
            <span>文艺范</span>
          </div>
          <div class="tit">
            <img src="/img/qs.png" alt="">
            <span>亲奢派</span>
          </div>
          <div class="tit">
            <img src="/img/wn.png" alt="">
            <span>温暖系</span>
          </div>
        </div>
      </div>
      <!-- 名宿分类 -->
      <div class="ct">
        <p>民宿分类</p>
        <div class="main">
          <img src="/img/jn.png" alt="">
        </div>
        <div class="main">
          <img src="/img/du.png" alt="">
        </div>
        <div class="main">
          <img src="/img/xn.png" alt="">
        </div>
        <div class="main">
          <img src="/img/bf.png" alt="">
        </div>
        <div class="main">
          <img src="/img/dn.png" alt="">
        </div>
        <div class="main">
          <img src="/img/hz.png" alt="">
        </div>
        <div class="main">
          <img src="/img/xb.png" alt="">
        </div>
        <div class="bottom"></div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .main{
    width: 100%;
    background-color: #fff;
  text-align: center;

    
    .title{
      padding:20px 0 10px;
      border-bottom: 1px solid #ccc;
      // font-weight: 600;
    }
    .cantiner{
      margin: 5px;
      // background: #ccc;
      .tag{
        p{
          text-align: left;
          color:#7acf71;
          padding: 5px 0;
        }
        .min{
          display: flex;
          justify-content: space-around;
          .tit{
            color:#fff;
            position: relative;
            margin: 5px 5px;
            img{
              width: 100%;
            border-radius: 5px;
            }
            span{
              position: absolute;
              top:50%;
              left:50%;
              transform: translate(-50%, -50%);
              font-size: 0.8em;
            }
          }
        }
        
      }
      .ct{
        margin: 5px;
        p{
          text-align: left;
          color:#7acf71;
          padding: 5px 0;
        }
        .main{
          height: 148px;
          img{
            width:100%
          }
        }
      }
    }
  }
  .bottom{
       margin-bottom:60px;
  }
</style>