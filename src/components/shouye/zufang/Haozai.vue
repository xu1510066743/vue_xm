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
        <div class="con61" style="">
            <p >品质豪宅</p>
            <span>{{tit}}</span>
        </div>
        <div class="con62">
            <input type="text" name="" id="">
            <span class="iconfont icon-sousuo" style="position: absolute;left: 9px;top: 8px;font-size:11px;"></span>
            <span class="iconfont icon-cuowu" style="position: absolute;left: 210px;top: 8px;font-size:11px;"></span>
        </div>
             <div class="con64" >
           <p>历史搜索</p>
           <p>全城 合租/整租...</p>
           <p>全城 空气检测</p>
           <p>全城 VR看房</p>
        </div>
        <div class="con63">
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>咨询</figcaption>
                </figure>
            </router-link>
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>安全</figcaption>
                </figure>
            </router-link>
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>保洁</figcaption>
                </figure>
            </router-link>
            <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>管家</figcaption>
                </figure>
            </router-link>
              <router-link to='' tag='p'>
                <figure>
                    <span></span>
                    <figcaption>真实</figcaption>
                </figure>
            </router-link>
        </div>


        <div class="con65">
            
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
        <div class="con66">
            <div class="con66-l">

            </div>
            <div class="con66-r">
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
             <div class="con66">
            <div class="con66-l">

            </div>
            <div class="con66-r">
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
             <div class="con66">
            <div class="con66-l">

            </div>
            <div class="con66-r">
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
    name:'Haozai',
    data(){
        return{
            tit:"唯一的标准是唯一" 
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
    .con61{width: 100vh;height: 102px;    background: url(/static/img/3.jpg) no-repeat;background-size: 100vw 102px;position: relative;}
    .con61 p{position: absolute;top: 35px;left: 45px;font-size: 28px;font-family: PingFangSC-regular;color: rgba(255, 255, 255, 1);}
     .con61 span{position: absolute;top: 58px;left: 166px;color: rgba(255, 255, 255, 1);font-size: 14px;font-family: PingFangSC-regular;}

.con62{width: 230px;height: 27px;position: relative;top: -13px;left: 22%;}
.con62 input{width: 220px;height: 27px;border: none;background: #FFF2F2F2;border-radius:5px;padding-left: 10px }
.con63{display: flex;justify-content: space-around;align-items: center;margin-top: 30px;}
.con63 figure{display: flex;flex-direction: column;align-items: center;}
.con63 figure span{display: block;width: 40px;height: 30px;background: #ccc;border-radius: 5px;}
.con63 figure figcaption{margin-top: 5px;color: rgba(185, 115, 31, 1);font-size: 14px;font-family: "PingFangSC-regular";font-weight:500;}

.con64{display: flex;justify-content: space-around;align-items: center;margin-top: 10px;}
.con64 p{width: 77px;height: 20px;line-height: 20px;border-radius: 5px;color: rgba(16, 16, 16, 1);
font-size: 10px;text-align: center;font-family: Arial;border: 1px solid rgba(187, 187, 187, 1);}


.con65{display: flex;justify-content: space-around;margin-top: 50px;}
.con65 select{width: 65px;height: 30px;display: flex;justify-content: space-around;border: 1px solid #ccc;border-radius:5px; }
.con66{padding: 0 10px;width: 100vw;height: 70px;display: flex;justify-content: space-between;margin-top: 20px;}
.con66-l{width: 102px;height: 70px;background: #ccc;border-radius: 5px;}
.con66-r{width: 300px;padding: 0 10px;}
.con66-r div:nth-of-type(1){display: flex;justify-content: space-between;position: relative;}
.con66-r div:nth-of-type(1) span:nth-child(1){font-size: 10px;}
.con66-r div:nth-of-type(1) span:nth-child(2){font-size: 12px;color: rgba(255, 152, 0, 1); position: absolute;left: 170px;}
.con66-r div:nth-of-type(2) span{display:inline-block;width: 53px;height: 20px;line-height: 20px;text-align: center;font-family: Arial;font-size: 10px;border-radius: 5px;border: 1px solid rgba(187, 187, 187, 1);}
</style>






















