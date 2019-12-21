<template>
<div class="container">
     <!-- 头部 -->
    <mt-header class="header" title="民宿详情" fixed>
        <div slot="left" @click="yuna">
            <mt-button icon="back"></mt-button>
        </div>
        <mt-button icon="" slot="right"></mt-button>
    </mt-header>
    <!-- 第一个轮播图 -->
    <div class="firstCarousel">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item><img src="../../assets/Fl1.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/Fl2.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/Fl3.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/Fl4.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/Fl5.jpg" /></mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="information">
        <span>柚家公寓</span>
        <div>
            <mt-button class="btn1">深圳</mt-button>
            <mt-button class="btn2">轻奢派</mt-button>
        </div>
    </div>
    
    <!-- 详情介绍 -->
    <div class="detail">
        <div v-bind:class="{ expansion : active }">
            <h4>沙尾地铁口INS风超大套房深圳湾红树林旁</h4>
            <p>民宿位于深圳市福田区，民宿采用网红ins风，全新家私家电，拍照圣地，请专业设计师设计，全采光<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1：全新装修，网红INS风格，由专业设计师亲笔指导，北欧简约风+波西米亚风格<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2：家私齐全：床、衣柜，冰箱、洗衣机、沙发，热水器，空调，独立阳台，厨房及洗手间等齐全。100M网络免费试用；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3：户型：全部精装修，大单间拎包入住。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4：服务：全楼各个地方覆盖监控安全可靠。管家24小时在线 <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5：地理位置：【地铁】距离沙尾站B出口约500m【公交】附近有金地1路，仁爱医院，蓝湾半岛，沙嘴公交站【停车位】楼下道路宽敞有停车位<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6：周边配套齐全，有各种餐厅及小吃便利店等。附近有红树林公园，深圳第一的红树林汽车15分钟左右。</p>
        </div>
        <mt-button @click="all" id="btn" >全文</mt-button>
    </div>
    
    <!-- 房型房价介绍 -->
    <div class="housePrice">
        <h3>房型房价</h3>
        <!-- 房型轮播图1 -->
        <div class="carousel">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="../../assets/Fc1.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fc2.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fc3.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fc4.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fc5.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fc6.jpg" /></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="content">
            <p>正方形大床房</p>
            <p>一室·一卫·25㎡·宜住两人</p>
            <div class="info">
                <div class="price">
                    <span>价格:</span>
                    <span class="money">￥218</span>
                    <span>/平常</span>
                </div>
                <div class="price2">
                    <span class="money">￥268</span>
                    <span>/节日</span>
                    <span class="money1">￥238</span>
                    <span>/周末</span>
                </div>
                <mt-button>立即预定</mt-button> 
            </div>
             
        </div>
        <!-- 房型轮播图2 -->
        <div class="carousel">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="../../assets/Fs1.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fs2.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fs3.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fs4.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fs5.jpg" /></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/Fs6.jpg" /></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="content">
            <p>长方形大床房</p>
            <p>一室·一卫·25㎡·宜住两人</p>
            <div class="info">
                <div class="price">
                    <span>价格:</span>
                    <span class="money">￥218</span>
                    <span>/平常</span>
                </div>
                <div class="price2">
                    <span class="money">￥268</span>
                    <span>/节日</span>
                    <span class="money1">￥238</span>
                    <span>/周末</span>
                </div>
                <mt-button>立即预定</mt-button> 
            </div>  
        </div>
    </div>

    <!-- 民宿故事 -->
    <div class="story">
        <h3>民宿故事</h3>
        <!-- 房型轮播图1 -->
        <div class="image">
            <img src="../../assets/story1.jpg" />
        </div>
        <div class="word">
            <span>柚家公寓：时间没有空白格，但生活有暂停键</span>
        </div>
    </div>

    <!-- 两个细胞样式 -->
    <div>
        <mt-cell title="入住须知" to="//github.com" is-link></mt-cell>
        <mt-cell title="退订须知" to="//github.com" is-link></mt-cell>
    </div>
    
    <!-- 周边相似房源 -->
    <div class="similar">
        <h3>周边相似房源</h3>
        <div class="lastCarousel">
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item>
                    <img src="../../assets/Fc1.jpg" />
                    <p class="price">￥368起</p>
                    <div class="content">
                        <span>一棵花树正好开</span>
                        <div>
                            <mt-button class="btn1">深圳</mt-button>
                            <mt-button class="btn2">田园风</mt-button>
                        </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/Fc2.jpg" />
                    <p class="price">￥3988起</p>
                    <div class="content">
                        <span>华侨城至尊大泳池别墅A</span>
                         <div>
                            <mt-button class="btn1">深圳</mt-button>
                            <mt-button class="btn2">轻奢派</mt-button>
                        </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/Fc3.jpg" />
                    <p class="price">￥5880起</p>
                    <div class="content">
                        <span>华侨城至尊大泳池别墅B</span>
                        <div>
                            <mt-button class="btn1">深圳</mt-button>
                            <mt-button class="btn2">田园风</mt-button>
                        </div>
                    </div>
                </mt-swipe-item>>
            </mt-swipe>
        </div>
    </div>

    <div class="bottom">
        我是有底线的
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            active:true
        }
    },
    methods:{
        yuna(){
            this.$router.push("/")
        },
        all(){
            this.active=!this.active;
            if(this.active==true){
                document.getElementById("btn").innerHTML="全文"
            }else{
                document.getElementById("btn").innerHTML="收起"
            }
        }
    }
}
</script>
<style  scope>
    *{margin:0;padding:0;}
    .mint-button::after{background-color:#fff;}
    body{background: rgb(245, 245, 245);}
    .container{
        display: flex;
        flex-direction: column; 
    }
    /* 头部 */
    .container .header{
        background:#fff;
        color:#000;
        font-size:20px;
    }
    /* 第一个轮播图 */
    .container .firstCarousel{height:236px;}
    .container .firstCarousel img{width:100%;}
    /* 第一个轮播图文字内容 */
    .container .information{
        display:flex;
        justify-content: space-between;
        align-items: center;  /*垂直居中 */
        padding:0 20px;
        height:45px;
        background: #fff;
    }
    .container .information div .btn1{
        background:rgba(255,255,255,0);
        color:#2aeb15;
        border:1px solid #2aeb15;
        height:25px;
        width:55px;
        font-size:14px;
        border-radius: 0;
    }
    .container .information div .btn2{
        background:rgba(255,255,255,0);
        color:#009688;
        border:1px solid #009688;
        height:25px;
        width:70px;
        font-size:14px;
        border-radius: 0;
    }
    /* 民宿详情介绍 */
    .container .detail{
        background: #fff;
        margin-top:10px;
        font-size:15px;
    }
    .container .detail h4{
        text-align: center;
        margin-top:20px;
        margin-bottom: 15px;
    }
    .container .detail p{
        text-indent: 35px;
        padding:0 15px;  
    }
    .container .expansion{
        white-space:pre-line; 
        overflow: hidden;
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
    }
    .container .detail button{
        background:rgba(255,255,255,0);
        border:0;
        box-shadow: 0 0 0px;
        font-size:15px;
        color:#00ced1bd;
        width:30px;height:30px;
        padding:0;
        margin-left:15px;
    }
    /* 房型房价 */
    .container .housePrice{
        background: #fff;
        margin-top:10px;
        padding:0 20px;
    }
    .container .housePrice h3{
        padding-top:15px;
        padding-bottom:20px;
    }
    /* 轮播图1 */
    .container .housePrice .carousel{height:216px;}
    .container .housePrice .carousel img{width:100%}  
    /* 轮播图1详情 */
    .container .housePrice .content{
        display:flex;
        flex-direction: column; 
        width:330px;
        box-shadow:2px 2px 10px #909090;
        margin-left:2px ;
        margin-bottom:20px;
        border-radius: 0 0 5px 5px;
    }
    .container .housePrice .content p:first-child {
        font-size: 15px;
        padding:5px 10px; 
    }
    .container .housePrice .content p:nth-child(2) {
        font-size: 10px;
        padding-left:10px; 
        padding-bottom: 5px;
        color:#5a6565;
    }
    .container .housePrice .content .info{
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color:#5a6565;
        margin-left:10px;
        position: relative;
    }
    .container .housePrice .content .info .price .money{
        color:#FF5722;
        margin-left: 10px;
    }
    .container .housePrice .content .info .price2 .money{
        color:#FF5722;
        margin-left: 46px;
    }
    .container .housePrice .content .info .price2 .money1{
        color:#FF5722;
        margin-left: 5px;
    }
     .container .housePrice .content .info button{
         position: absolute;
         left:230px; 
         bottom:10px;
         background: #FF5722;
         color:#fff;
         font-size: 14px;
     }
    
    /* 民宿故事 */
    .container .story{
        margin:10px 0;
        background: #fff;
        padding:0 20px;
    }
    .container .story h3{
        padding-top:15px;
        padding-bottom:20px;
    }
    .container .story .image{height:216px;}
    .container .story .image img{width:100%;height:100%;}
    .container .story .word{
        padding:5px 0;
        width:330px;
        box-shadow:0px 2px 10px #909090;
        margin-left:2px ;
        margin-bottom:20px;
        border-radius: 0 0 5px 5px;
    }
    .container .story .word span{
        font-size: 15px;
        padding:0 10px; 
    }
    /* 周边相似房源 */
    .container .similar{
        margin:10px 0;
        background: #fff;
        padding:0 20px;
        box-shadow:2px 2px 10px #909090;
    }
    .container .similar h3{
        padding-top:15px;
        padding-bottom:20px;
    }
    .container .similar .lastCarousel{height:290px;}
    .container .similar .lastCarousel img{width:100%;height:216px;}
    .container .similar .lastCarousel swipe-item{display: flex;}  
    .container .similar .btn1{
        background:rgba(255,255,255,0);
        color:#2aeb15;
        border:1px solid #2aeb15;
        height:25px;
        width:55px;
        font-size:14px;
        border-radius: 0;
    }
    .container .similar .btn2{
        background:rgba(255,255,255,0);
        color:#009688;
        border:1px solid #009688;
        height:25px;
        width:70px;
        font-size:14px;
        border-radius: 0;
    }
    .container .similar .lastCarousel .price{
        margin:5px 0;
        color:#FF5722;
    }
    .container .similar .lastCarousel .content{
        display: flex;
        justify-content: space-between;
    }
    /* 底线 */
    .container .bottom{
        font-size: 14px;
        text-align:center;
        margin-bottom: 10px;
        color:#5a6565;
    }
</style>