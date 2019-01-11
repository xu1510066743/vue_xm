<template>
    <div class="hello">
        <header style="background:#fff;">
            <router-link to='/fuwu' tag='div' class="header-l">
                <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
            </router-link>
            
        </header>
        <section>
            <div class="conb1">
                <img src="static/img/2.jpg" style="width:100vw;height:100%;">
            </div>
            <div class="conb2">
                <p>优惠活动</p>
                <p>首次办卡充200送50</p>
                <p>点击了解></p>
            </div>           
            <p style="left: 14px;color: rgba(38, 38, 38, 1);font-size: 14px;font-family: Microsoft Yahei;margin-left:21px;margin-top:19px;border: 1px solid rgba(255, 255, 255, 0);">保洁服务</p>
            <div class="conb3w">
                <div class="conb3">
                    
                        <div class="conb3-l">
                            <p>日常保洁﹥</p>
                            <p>日常保洁服务</p>
                        </div>
                        <div class="conb3-r">
                            <img src="" alt="">
                        </div>
                    
                </div>
                <div class="conb3">
                  
                        <div class="conb3-l">
                            <p>日常保洁﹥</p>
                            <p>日常保洁服务</p>
                        </div>
                        <div class="conb3-r">
                            <img src="" alt="">
                        </div>
                   
                </div>
                <div class="conb3">
                
                        <div class="conb3-l">
                            <p>日常保洁﹥</p>
                            <p>日常保洁服务</p>
                        </div>
                        <div class="conb3-r">
                            <img src="" alt="">
                        </div>
                  
                </div>          
            </div>
            <div class="conb4w">
                <p>家电清洗</p>
                <p>家电清洗</p>
                <p>家电清洗</p>
                <p>家电清洗</p>
                <p>家电清洗</p>
                <p>家电清洗</p>
                <p>家电清洗</p>
            </div>
            <div class="conb5">
               <img src="" alt="">
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'Baojie',
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
.conb1{width: 100vw;height: 102px;background-color: rgba(153, 150, 150, 1);}
.conb2{width: 100vw;height: 30px;display: flex;justify-content: space-between;margin-top: 11px}
.conb2 p:nth-child(1){margin-left: 20px;width: 74px;height: 30px;border-radius: 2px;background-color: rgba(200, 200, 200, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 0);line-height: 30px;
}
.conb2 p:nth-child(2){width: 200px;
margin-left: 15px;
height: 30px;
line-height: 30px;
color: rgba(128, 128, 128, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);}
.conb2 p:nth-child(3){
width: 80px;
height: 30px;
line-height: 30px;
color: rgba(168, 168, 168, 1);
font-size: 12px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.conb3w{width: 100vw;min-height: 100px;margin-top: 7px;overflow: hidden;}
.conb3{display: flex;justify-content: space-between;width: 158px;height: 64px;border: 1px solid #ccc;float:left;margin-left: 20px;margin-bottom: 12px;}
.conb3-r{width: 69px;height: 64px;}
.conb3-r img{width: 69px;height: 64px;display: block;background: #ccc}
.conb3-l{padding-left: 5px;padding-top: 15px}
.conb3-l p:nth-child(1){
color: rgba(136, 136, 136, 1);
font-size: 12px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.conb3-l p:nth-child(2){
color: rgba(136, 136, 136, 1);
font-size: 10px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.conb4w{width: 100vw;height: 114px;display: flex;flex-wrap: wrap;padding-left: 20px;margin-top: 20px;}
.conb4w p{width: 60px;height: 47px;background: #ccc;margin-right: 30px;line-height: 50px;
background-color: rgba(206, 206, 206, 1);
text-align: center;
border: 1px solid rgba(187, 187, 187, 1);font-size: 10px;}
.conb5{width: 100vw;height: 120px;margin-top: 20px}
.conb5 img{width: 100vw;height: 120px;background: #ccc;display: block;}
</style>









