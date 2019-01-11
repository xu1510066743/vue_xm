<template>
    <div class="hello">
        <header style="background:#fff;">
            <router-link to='/shouye' tag='div' class="header-l" @click="fanhui()">
                <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
            </router-link>
            
        </header>
        <section>
            <div class="con31">
                <img src="static/img/2.jpg" style="width:100vw;height:100%;">
            </div>
            <div class="con32">               
                <router-link to='/baojie' tag='div'>
                    <span>保洁</span>
                    <img src="static/img/3.jpg" style="width:100%;height:100%;">
                </router-link>
                <router-link to='/banjia' tag='div'>
                    <span>搬家</span>
                    <img src="static/img/7.jpg" style="width:100%;height:100%;">
                </router-link>
                <router-link to='/weixiu' tag='div'>
                    <span>维修</span>
                    <img src="static/img/1.jpg" style="width:100%;height:100%;">
                </router-link>
            </div>
            <p style="font-size:18px;margin-top:22px;margin-left:25px;margin-bottom:5px;">热门推荐</p>
            
            <div class="con33">
                <div>
                    <p>日常保洁</p>
                    <span>表面清洁，物品归纳</span>
                </div>
                 <div>
                    <p>面包小搬·</p>
                    <span>表面清洁，物品归纳</span>
                </div>
                 <div>
                    <p>卧室宝洁</p>
                    <span>表面清洁，物品归纳</span>
                </div>
                 <div>
                    <p>灯具线路</p>
                    <span>表面清洁，物品归纳</span>
                </div>
            </div>
            <p style="font-size:18px;margin-top:22px;margin-left:25px;margin-bottom:15px;">精选服务</p>
            <div class="con34">
                <div class="con34-l">
                    <span>金牌大搬</span>
                </div>
                <div class="con34-r">
                    <div class="con34-r1">
                        <span>深度保洁</span>
                    </div>
                    <div class="con34-r2">
                        <span>水路管件</span>
                    </div>
                </div>
            </div>
            <div class="con35">
                <p>单次预约</p>
                
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'Fuwu',
    methods:{
 
    }
}
</script>
<style scopde=''>
.hello{display: flex;flex-direction: column;height: 100vh;}
    header{height: 60px;display: flex;justify-content:space-between;align-items: center;
            padding: 0 10px;
    }
    section{flex: 1;overflow: auto;}
.con31{width: 100vw;height: 102px;background-color: rgba(153, 150, 150, 1);}
.con32{width: 100vw;height: 100px;display: flex;justify-content: space-around;margin-top: 30px;}
.con32 div{width: 75px;height: 95px;background: #ccc;position: relative;}
.con32 div span{position:absolute;z-index: 2;margin-top: 5px;margin-left: 15px}
.con33{width:100vw;height: 150px;display: flex;flex-wrap: wrap;justify-content: space-around;align-content: space-around} 
.con33 div:nth-child(1){width:154px;height: 60px;background: url(/static/img/3.jpg) no-repeat;background-size:154px 60px;       }
.con33 div:nth-child(2){width:154px;height: 60px; background: url(/static/img/7.jpg) no-repeat;background-size:154px 60px;       }
.con33 div:nth-child(3){width:154px;height: 60px; background: url(/static/img/4.jpg) no-repeat;background-size:154px 60px;       }
.con33 div:nth-child(4){width:154px;height: 60px; background: url(/static/img/2.jpg) no-repeat;background-size:154px 60px;       }



.con33 div p{font-size: 14px;margin-left: 10px;margin-top: 6px;}
.con33 div span{font-size: 12px;color: #9F9F9F; line-height: 45px}
.con34{width: 100vw;height: 170px;display: flex;justify-content: space-between}
.con34 .con34-l{width: 169px;height: 170px;background: #ccc;margin-left: 18px;background: url(/static/img/2.jpg) no-repeat;background-size:169px 170px;}
.con34 .con34-l span{margin-top: 29px;margin-left: 10px;display: block}
.con34 .con34-r{width: 150px;height: 170px;}
.con34 .con34-r .con34-r1{width: 150px;height: 80px;background: #ccc;margin-left: -18px;background: url(/static/img/3.jpg) no-repeat;background-size:150px 80px;}
.con34 .con34-r .con34-r1 span{padding-top: 26px;margin-left: 9px;display: block}
.con34 .con34-r .con34-r2{width: 150px;height: 80px;background: #ccc;margin-top: 10px;margin-left: -18px;background: url(/static/img/4.jpg) no-repeat;background-size:150px 80px;}
.con34 .con34-r .con34-r2 span{padding-top: 26px;margin-left: 9px;display: block}
.con35{display: flex;justify-content: center;margin-top: 33px}
.con35 p{width: 200px;
height: 33px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
line-height: 33px;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);}
</style>






