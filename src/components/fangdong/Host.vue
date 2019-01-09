<template>
    <div class="marker">
        <div class="lunbo">
               <mt-swipe :auto="2000" style="height:200px;text-align:center;">
                    <mt-swipe-item style="background:orange"><img src="static/254985.jpg" height=200 width=100%/></mt-swipe-item>
                    <mt-swipe-item style="background:pink">2</mt-swipe-item>
                    <mt-swipe-item style="background:skyblue">3</mt-swipe-item>
                    <mt-swipe-item style="background:pink">4</mt-swipe-item>
                </mt-swipe>
        </div>
        <div class="warp6">
            <button type="button" class="btn btn-danger">电话咨询</button>
            <button type="button" class="btn btn-info">电话委托</button>
        </div>
        <div class="kkk">
        <h1>做省心房东只需四步</h1>
        </div>
        <div class="warp1">
                <figure>
                    <img src="static/254985.jpg" height=30 width=40 />
                    <figcaption>委托咨询</figcaption>
                </figure>
                                <figure>
                    <img src="static/254985.jpg" height=30 width=40 />
                    <figcaption>上门定制方案
     </figcaption>
                </figure>
                                <figure>
                    <img src="static/254985.jpg" height=30 width=40 />
                    <figcaption>在线签约</figcaption>
                </figure>
                                <figure>
                    <img src="static/254985.jpg" height=30 width=40 />
                    <figcaption>稳定收益</figcaption>
                </figure>

        </div>
        <h4>房屋估价</h4>
        <div class="warp2">
            
            <div class="box">
                <p>查看我的房屋租金有多少</p>
                <button type="button" class="btn btn-warning">添加房屋</button>
            </div>
        </div>
        <h4>我们的优势</h4>
        <div class="warp3">
            
            <div class="box1">
                <h5>省心省时</h5>
                <p>代您找租客，定时打款，无需承担空置风险</p>
                <p>专属管家代理租务，每月1-2次保洁，48小时及时维修</p>
            </div>
            <div class="box1">
                <h5>免费装修</h5>
                <p>多种装修风格可选，配置品牌家具家电                 </p>
                <p>无需装修的精装房屋也可委托收益更高</p>
            </div>
            <div class="box1">
                <h5>安全可靠</h5>
                <p>租客实名认证，公司学历信息实名认证且公安备案 </p>
                <p>25万家财保险，30万业主选择</p>
            </div>
        </div>

    </div>

    
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
    name:'Host',
    
}
</script>
<style scoped>
h3,figure,figcaption,p{margin: 0;padding: 0;}
img{border: none;display: block;}
.lunbo{height:200px;}
.warp6{height:56px;padding: 10px;
    display: flex;justify-content: space-around;align-items: center
}

.kkk h1{height: 40px;text-align: center;line-height: 40px;
color: rgba(136, 136, 136, 1);
font-size: 12px;
font-family: Microsoft Yahei;
}
.warp1{height: 90px;display: flex;justify-content: space-around;align-items: center}
.warp1 figure{display: flex;flex-direction:column;align-items: center}


.warp2{padding-left: 28px;}
.warp2 h3{height: 46px;line-height: 46px;
color: rgba(16, 16, 16, 1);

font-size: 14px;
text-align: left;
font-family: PingFangSC-regular;
}
.box{display: flex;flex-direction: column;  align-items: center;justify-content:center;

height: 100px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
.warp3{padding-left: 28px;}
 h4{height:70px;line-height:70px; padding-left: 28px;}
.warp3 .box1{height:120px;border:1px solid #cceecc;padding-left:17px; margin-bottom:31px ;background: paleturquoise}
.box1 h5{
margin-top:30px; 
width: 200px;
height: 30px;
color: rgba(0, 0, 0, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
}
.box1 p{
width: 280px;
background-color: rgba(255, 255, 255, 0);
color: rgba(136, 136, 136, 1);
font-size: 10px;
text-align: left;
font-family: Microsoft Yahei;
}
</style>
