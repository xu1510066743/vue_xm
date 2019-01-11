<template>
<div class="hello">
    <header  style="background:#fff;">
        <router-link to='/zufang' tag='div' class="header-l">
            <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
            <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
        </router-link>
        <div class="header-r">
            <span class="iconfont icon-location" style="font-size: 20px;margin-right:10px;color:red;"></span>
            <span class="iconfont icon-xiaoxi1" style="font-size: 20px;"></span>
        </div>
    </header>
    <section>
        <div class="cong1" style="">
            <p >公寓</p>
            <span>{{tit}}</span>
        </div>
        <div class="cong2">
            <input type="text" name="" id="">
            <span class="iconfont icon-sousuo" style="position: absolute;left: 9px;top: 8px;font-size:11px;"></span>
            <span class="iconfont icon-cuowu" style="position: absolute;left: 210px;top: 8px;font-size:11px;"></span>
        </div>
         <router-view></router-view>
        <div class="cong3">
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>寓活动</figcaption>
                </figure>
            </router-link>
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>寓福利</figcaption>
                </figure>
            </router-link>
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>寓人物</figcaption>
                </figure>
            </router-link>
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>寓生活</figcaption>
                </figure>
            </router-link>
        </div>
        <p style="font-size:14px;font-family: PingFangSC-regular;color: rgba(16, 16, 16, 1);margin-top:22px;margin-left:5px;">郑州精选</p>
        <div class="cong4">
            <div class="cong4-l">
                <img src="" alt="">
                <div>
                    <p>北京Meeta公寓</p>
                    <p>北京市丰台区总部</p>
                    <p>￥1899/月起</p>
                </div>
            </div>
            <div class="cong4-r">
                <img src="" alt="">
                <div>
                    <p>北京Meeta公寓</p>
                    <p>北京市丰台区总部</p>
                    <p>￥1899/月起</p>
                </div>
            </div>
        </div>
        <div class="cong5">
            <img src="" alt="">
        </div>
        <p style="font-size:14px;font-family: PingFangSC-regular;color: rgba(16, 16, 16, 1);margin-top:22px;margin-left:5px;">推荐房型</p>
        <div class="cong6">
            <div class="cong6-l">
                <img src="" alt="">
                <div>
                    <p>上地公寓·开间户型</p>
                    <p>独立开间|开放式厨房|25㎡</p>
                    <p>￥4840-5070/月</p>
                    <p>转租中…</p>
                </div>
            </div>
            <div class="cong6-r">
                <img src="" alt="">
                <div>
                    <p>上地公寓·开间户型</p>
                    <p>独立开间|开放式厨房|25㎡</p>
                    <p>￥4840-5070/月</p>
                    <p>转租中…</p>
                </div>
            </div>
        </div>
        <p style="font-size:14px;font-family: PingFangSC-regular;color: rgba(16, 16, 16, 1);margin-top:22px;margin-left:5px;">推荐公寓</p>
        <div class="cong7">
            <div>
                <div>
                    <div class="cong7-l"></div>
                    <div class="cong7-r">
                        <div><p>公区</p></div>
                        <div><p>单生星球两户…</p></div>
                    </div>
                </div>
                <div>
                    <p>上地公寓·开间户型</p>
                    <p>独立开间|开放式厨房|25㎡</p>
                    <p>单身星球，社交之寓</p>
                    <p>品质之地</p>
                    <p>￥4840-5070/月</p>
                </div>
            </div>
        </div>

               <div class="cong7">
            <div>
                <div>
                    <div class="cong7-l"></div>
                    <div class="cong7-r">
                        <div><p>公区</p></div>
                        <div><p>单生星球两户…</p></div>
                    </div>
                </div>
                <div>
                    <p>上地公寓·开间户型</p>
                    <p>独立开间|开放式厨房|25㎡</p>
                    <p>单身星球，社交之寓</p>
                    <p>品质之地</p>
                    <p>￥4840-5070/月</p>
                </div>
            </div>
        </div>
    </section>
</div>
    
</template>
<script>
export default {
    name:'Gongyu',
    data(){
        return{
            tit:"成套精装公寓" 
        }
        
    },
    methods:{
        fanhui(){
            this.$router.go(-1)
             
        }
    }
}
</script>
<style scopde=''>
.hello{display: flex;flex-direction: column;height: 100vh;}
    header{height: 60px;display: flex;justify-content:space-between;align-items: center;
            padding: 0 10px;
    }
    section{flex: 1;overflow: auto;}
    .cong1{width: 100vh;height: 102px;    background: url(/static/img/3.jpg) no-repeat;background-size: 100vw 102px;position: relative;}
    .cong1 p{position: absolute;top: 35px;left: 80px;font-size: 28px;font-family: PingFangSC-regular;color: rgba(255, 255, 255, 1);}
     .cong1 span{position: absolute;top: 58px;left: 146px;color: rgba(255, 255, 255, 1);font-size: 14px;font-family: PingFangSC-regular;}

.cong2{width: 230px;height: 27px;position: relative;top: -13px;left: 22%;}
.cong2 input{width: 220px;height: 27px;border: none;background: #FFF2F2F2;border-radius:5px;padding-left: 10px }
.cong3{display: flex;justify-content: space-around;align-items: center;margin-top: 10px;}
.cong3 figure{display: flex;flex-direction: column;align-items: center;}
.cong3 figure span{display: block;width: 40px;height: 30px;background: #ccc;border-radius: 5px;}
.cong3 figure figcaption{font-size: 16px;font-family: "PingFangSC-regular";font-weight:500;}
.cong4{width: 100vw;height: 174px;display: flex;justify-content: space-between;margin-top: 10px}
.cong4>div{width: 177px;height: 174px;}
.cong4>div>img{width: 177px;height: 98px;display: block;background: #ccc;}
.cong4>div>div{width: 175px;height: 74px;border: 1px solid #ccc;border-top:none; }
.cong4>div>div p:nth-child(1){padding-top:16px;margin-left:9px;font-family: Microsoft Yahei;color: rgba(136, 136, 136, 1);font-size: 12px;}
.cong4>div>div p:nth-child(2){margin-left:9px;font-family: Microsoft Yahei;color: rgba(136, 136, 136, 1);font-size: 10px;}
.cong4>div>div p:nth-child(3){margin-left:9px;margin-top:9px;font-family: Microsoft Yahei;color: rgba(136, 136, 136, 1);font-size: 8px;}
.cong5{width: 100vw;height: 150px;margin-top: 22px}
.cong5 img{display: block;width: 100%;height: 100%;background: #ccc;}

.cong6{width: 100vw;height: 200px;display: flex;justify-content: space-between;margin-top: 10px}
.cong6>div{width: 177px;height: 200px;}
.cong6>div>img{width: 177px;height: 98px;display: block;background: #ccc;}
.cong6>div>div{width: 175px;height: 101px;border: 1px solid #ccc;border-top:none; }
.cong6>div>div p:nth-child(1){padding-top:16px;margin-left:9px;font-family: Microsoft Yahei;color: rgba(136, 136, 136, 1);font-size: 12px;}
.cong6>div>div p:nth-child(2){margin-left:9px;margin-top:5px;font-family: Microsoft Yahei;color: rgba(136, 136, 136, 1);font-size: 10px;}
.cong6>div>div p:nth-child(3){margin-left:9px;margin-top:9px;font-family: Microsoft Yahei;color: rgba(136, 136, 136, 1);font-size: 8px;}
.cong6>div>div p:nth-child(4){
    text-align: center;
    line-height: 10px;
    border-radius:5px; 
    border: 1px solid #ccc;
    width: 43px;height: 10px;margin-left:9px;margin-top:9px;font-family: Microsoft Yahei;color: rgba(136, 136, 136, 1);font-size: 8px;}
.cong7{width: 100vw;height: 200px;display: flex;justify-content: center;margin-top: 15px;}
.cong7>div{width: 308px;height: 198px;border: 1px solid #ccc;}
.cong7>div>div:nth-child(1){width: 276px;height: 98px;display: flex;justify-content: space-between;padding: 0 16px;}
.cong7 .cong7-l{width: 176px;height: 98px;background: #ccc;}
.cong7 .cong7-r{width: 87px;height: 98px;}
.cong7 .cong7-r div:nth-child(1){width: 87px;height: 40px;background: #ccc;}
.cong7 .cong7-r div:nth-child(1) p{line-height: 9px;border: 1px solid rgba(187, 187, 187, 1);font-family: Arial;text-align: center;font-size: 6px;width: 34px;color: rgba(16, 16, 16, 1);height: 10px;background: #ccc;border-radius: 5px;}
.cong7 .cong7-r div:nth-child(2){width: 87px;height: 40px;background: #ccc;margin-top: 17px;}
.cong7 .cong7-r div:nth-child(2) p{line-height: 9px;border: 1px solid rgba(187, 187, 187, 1);font-family: Arial;text-align: center;font-size: 6px;width: 64px;color: rgba(16, 16, 16, 1);height: 10px;background: #ccc;border-radius: 5px;}
.cong7>div>div:nth-child(2){width: 276px;height: 102px;padding: 0 16px;position: relative;}
.cong7>div>div:nth-child(2) p:nth-child(1){margin-top: 15px;margin-left: 10px;font-family: Microsoft Yahei;font-size: 12px;color: rgba(136, 136, 136, 1);}
.cong7>div>div:nth-child(2) p:nth-child(2){margin-top: 5px;margin-left: 10px;font-family: Microsoft Yahei;font-size: 8px;color: rgba(136, 136, 136, 1);}
.cong7>div>div:nth-child(2) p:nth-child(3){margin-top: 5px;margin-left: 10px;font-family: Microsoft Yahei;font-size: 8px;color: rgba(136, 136, 136, 1);}
.cong7>div>div:nth-child(2) p:nth-child(4){margin-top: 5px;width: 43px;border-radius: 5px;border: 1px solid rgba(187, 187, 187, 1);
height: 10px;margin-left: 10px;font-family: Microsoft Yahei;font-size: 6px;color: rgba(136, 136, 136, 1);}
.cong7>div>div:nth-child(2) p:nth-child(5){margin-top: 5px;color: rgba(136, 136, 136, 1);
font-size: 8px;
text-align: left;
font-family: Arial;
border: 1px solid rgba(255, 255, 255, 0);
position: absolute;
top: 10px;
left: 204px;

}
</style>




















