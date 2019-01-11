<template>
<div class="hello">
    <header style="background:#fff;">
        <router-link to='/shouye' tag='div' class="header-l">
            <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
            <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
        </router-link>
        <div class="header-r">
            <span class="iconfont icon-location" style="font-size: 20px;margin-right:10px;color:red;"></span>
            <span class="iconfont icon-xiaoxi1" style="font-size: 20px;"></span>
        </div>
    </header>
    <section>
        <div class="con21" style="">
            <p>租房</p>
        </div>
        <div class="con22">
            <input type="text" name="" id="">
            <span class="iconfont icon-sousuo" style="position: absolute;left: 9px;top: 8px;font-size:11px;"></span>
            <span class="iconfont icon-cuowu" style="position: absolute;left: 210px;top: 8px;font-size:11px;"></span>
        </div>
         <router-view></router-view>
        <div class="con23">
            <router-link to='hezu' tag='p'>
                <figure>
                    <span><img src="static/img/5.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></span>
                    <figcaption>合租</figcaption>
                </figure>
            </router-link>
            <router-link to='zhengzu' tag='p'>
                <figure>
                    <span><img src="static/img/6.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></span>
                    <figcaption>整租</figcaption>
                </figure>
            </router-link>
            <router-link to='gongyu' tag='p'>
                <figure>
                    <span><img src="static/img/7.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></span>
                    <figcaption>公寓</figcaption>
                </figure>
            </router-link>
            <router-link to='haozai' tag='p'>
                <figure>
                   <span><img src="static/img/8.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></span>
                    <figcaption>豪宅</figcaption>
                </figure>
            </router-link>
        </div>
        <div class="con24">
            <div>
                <p>720°VR看房</p>
                <span>还原真实房间</span>
            </div>
            <div>
                <p>空气检测合格</p>
                <span>住的更安全</span>
            </div>
            <div>
                <p>业主直租</p>
                <span>品质与环保共享</span>
            </div>
        </div>
        <div class="con25">
            <mt-swipe :show-indicators="false">
                <mt-swipe-item><img src="static/img/2.jpg" style="width:100%;height:100%;"></mt-swipe-item>
                <mt-swipe-item style="background:blue;"><img src="static/img/1.jpg" style="width:100%;height:100%;"></mt-swipe-item>
                <mt-swipe-item><img src="static/img/4.jpg" style="width:100%;height:100%;"></mt-swipe-item>
            </mt-swipe>
        </div>
        <p style="font-size:16px;margin-top:22px;margin-left:5px;">租房</p>
        <div class="con26">
            <div class="con26-l">
                <p>视频看房就现在</p>
                <span>省时省力，身临其境</span>
            </div>
            <div class="con26-r">
                <p>公积金租房政策</p>
                <span>每月省1500不是梦</span>
            </div>
        </div>
        <p style="font-size:16px;margin-top:22px;margin-left:5px;">热门房源</p>
        <div class="con27">
            
            <select name="" id="">
                <option value="">合租</option>
                <option value="">整租</option>
                <option value="">公寓</option>
                <option value="">业主直租</option>
            </select> 
            <select name="" id="">
                <option value="">位置</option>
                <option value="">附近</option>
                <option value="">商圈</option>
                <option value="">地铁</option>
            </select>
            <select name="" id="">
                <option value="">租金</option>
                <option value="">不限</option>
                <option value="">1500以下</option>
            </select>
            <select name="" id="">
                <option value="">筛选</option>
               
            </select>
            <!-- <div>
                <p>hezu</p>
                <span class="iconfont icon-xiangxia"></span>
            </div> -->
        </div>
        <div class="con28">
            <div class="con28-l">
                 <img src="static/img/6.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/>

            </div>
            <div class="con28-r">
                <p style="font-size:14px;">新源时代3居室-南卧</p>
                <div>
                    <span>10.88m/3/15层</span>
                    <span>￥1890/月</span>
                </div>
                <p style="font-size:12px;">距2号线二七火车站直线2000米</p>
                <div>
                    <span>离地铁近</span>
                    <span>临近大学</span>
                    <span>交通便利</span>
                </div>
            </div>
        </div>

    </section>
</div>
    
</template>
<script>
export default {
    name:'Zufang',
    data(){
        return{
            tit:"1111" 
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
    header{height: 60px;background: #ccc;display: flex;justify-content:space-between;align-items: center;
            padding: 0 10px;
    }
    section{flex: 1;overflow: auto;}
    .con21{width: 100vh;height: 102px;    background: url(/static/img/3.jpg) no-repeat;background-size: 100vw 102px;position: relative;}
    .con21 p{position: absolute;top: 35px;left: 80px;font-size: 28px;font-family: PingFangSC-regular;color: rgba(255, 255, 255, 1);}
     .con21 span{position: absolute;top: 58px;left: 146px;color: rgba(255, 255, 255, 1);font-size: 14px;font-family: PingFangSC-regular;}

.con22{width: 230px;height: 27px;position: relative;top: -13px;left: 22%;}
.con22 input{width: 220px;height: 27px;border: none;background: #FFF2F2F2;border-radius:5px;padding-left: 10px }
.con23{display: flex;justify-content: space-around;align-items: center;margin-top: 10px;}
.con23 figure{display: flex;flex-direction: column;align-items: center;}
.con23 figure span{display: block;width: 40px;height: 30px;background: #ccc;border-radius: 5px;}
.con23 figure figcaption{font-size: 16px;font-family: "PingFangSC-regular";font-weight:500;}
.con24{width: 100vw;height:65px ;display: flex;justify-content: space-around;margin-top: 29px}
.con24 div{width: 89px;height:48px ;text-align: center;border: 1px solid #ccc;padding-top:15px }
.con24 div p{font-size: 10px;}
.con24 div span{font-size: 8px;color: #ccc;}
.con25{width: 100vw;height: 154px;background: #ccc;margin-top: 20px}
.con26{display: flex;justify-content: space-between;margin-top: 15px}
.con26 .con26-l{width: 177px;height: 75px;border:1px solid #ccc; text-align: center;padding-top: 22px}
.con26 .con26-l p{font-size: 16px;}
.con26 .con26-l span{font-size: 10px ;}
.con26 .con26-r{width: 177px;height: 75px;border:1px solid #ccc;text-align: center;padding-top: 22px;}
.con26 .con26-r p{font-size: 16px;}
.con26 .con26-r span{font-size: 10px ;}
.con27{display: flex;justify-content: space-around;margin-top: 5px;}
.con27 select{width: 65px;height: 30px;display: flex;justify-content: space-around;border: 1px solid #ccc;border-radius:5px; }
.con28{padding: 0 10px;width: 100vw;height: 70px;display: flex;justify-content: space-between;margin-top: 20px;}
.con28-l{width: 102px;height: 70px;background: #ccc;border-radius: 5px;}
.con28-r{width: 300px;padding: 0 10px;}
.con28-r div:nth-of-type(1){display: flex;justify-content: space-between;position: relative;}
.con28-r div:nth-of-type(1) span:nth-child(1){font-size: 10px;}
.con28-r div:nth-of-type(1) span:nth-child(2){font-size: 12px;color: rgba(255, 152, 0, 1); position: absolute;left: 170px;}
.con28-r div:nth-of-type(2) span{display:inline-block;width: 53px;height: 20px;line-height: 20px;text-align: center;font-family: Arial;font-size: 10px;border-radius: 5px;border: 1px solid rgba(187, 187, 187, 1);}
</style>






