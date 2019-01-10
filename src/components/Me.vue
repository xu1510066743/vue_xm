<template>
    <div class="qing">
        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>个人空间</span>
            <em class="iconfont icon-i-xiaoxi" style="width:30px;"></em>
        </header>
        <section>
        <div class="bai">
            <div class="q-ve"> 
                <div class="q-ve1">
                    <img src="static/a.jpg" />
                </div>
                <span>柚家客3d67</span>
            </div>
            <div class="que">
                <figure>
                    <div class="que1"></div>
                    <figcaption>收藏</figcaption>
                </figure>
                <figure>
                    <div class="que1"></div>
                    <figcaption>收藏</figcaption>
                </figure>
                <figure>
                    <div class="que1"></div>
                    <figcaption>收藏</figcaption>
                </figure>
                <figure>
                    <div class="que1"></div>
                    <figcaption>收藏</figcaption>
                </figure>
                <figure>
                    <div class="que1"></div>
                    <figcaption>收藏</figcaption>
                </figure>
               
            </div>
            <div class="xin">
                    <div class="lunbo">
                        <mt-swipe :auto="2000" style="height:200px;text-align:center;">
                            <mt-swipe-item style="background:orange"><img src="static/254985.jpg" height=500/></mt-swipe-item>
                            <mt-swipe-item style="background:pink">2</mt-swipe-item>
                            <mt-swipe-item style="background:skyblue">3</mt-swipe-item>
                            <mt-swipe-item style="background:pink">4</mt-swipe-item>
                        </mt-swipe>
                    </div>
            </div>
            <div class="xin1">
                    <h3>
                        我的家 |
                    </h3>
                    <span>
                        柚家专享服务
                    </span>
            </div>


            <div class="xin2">
               <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
                              <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
                              <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
                              <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
            </div>

        </div>


            <div class="xia">
             <div class="xin1">
                    <h3>
                       Meeta活动 |
                    </h3>
                    <span>
                        柚家的生活社区
                    </span>
             </div>
             <div class="xin4">
                 <img src="static/254985.jpg" height=101 width=141 />
                 <img src="static/254985.jpg" height=101 width=141/>


                 
             </div>
             <div class="xin5">
                <h4>进入柚家社区</h4>
            </div>
            <ul class="xia1">

                <router-link to='/suggest' tag='span'>
                <li>
                    <span>投诉建议</span>
                    <span></span>
                    <span></span>
                    <b class=" iconfont icon-iconfontyoujiantou"></b>
                </li>
                </router-link>

                <router-link to='/adivce' tag='span'>
                  <li>
                    <span>客服咨询</span>
                    <span></span>
                    <span></span>
                    <b class=" iconfont icon-iconfontyoujiantou"></b>
                </li>
                </router-link>

                <router-link to='/set' tag='span'>
                  <li>
                    <span>个人设置</span>
                    <span></span>
                    <span></span>
                    <b class=" iconfont icon-iconfontyoujiantou"></b>
                </li>
                </router-link>

                <router-link to='/tuichu' tag='span'>
                  <li>
                    <span class="tui">退出登录</span>
                    <span></span>
                    <span></span>
                    <b>&nbsp;</b>
                </li>
                </router-link>
            </ul>
            </div>


        </section>
        
    </div>
</template>
<script>
export default {
    name:'Me',
    data(){
        return{

        }
    },
    methods:{
    fanhui(){
    this.$router.go(-1)
    },
   
    },
    mounted(){

    }
}
</script>
<style scopde=''>
*{margin: 0;padding: 0;}
.qing{height: 100vh;display: flex;flex-direction:column;background: #EEEEEE;}
header{height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
setion{flex: 1;overflow:auto;}
img{display: block;border: none;}    
.bai{background: #fff;}
.q-ve{height:55px;background: coral;display: flex;justify-content: flex-start;align-items: center;}
.q-ve .q-ve1{width:55px ;height:55px ;border-radius:50%;margin: 0 20px;}
.q-ve1 img{width:55px ;height:55px ;border-radius:50%;}
.que{display: flex;justify-content:space-around;align-items: center;margin: 14px 0;}
.que figure{display: flex;flex-direction:column;align-items: center; background: #fff;}
.que1{width: 49px;height: 41px;background: chartreuse;background:yellow;}


.xin{width: 80%;height:70px;overflow: auto;background: crimson;margin:10px 30px; background: #fff;}
.xin1{height: 30px;background:#fff;display: flex;align-items: center;margin-top:10px;}
.xin1 h3{width:100px;
height: 30px;
 
text-align: center;
padding-left: 20px;
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
}
.xin1 span{
color: rgba(136, 136, 136, 1);
font-size: 10px;
font-family: Microsoft Yahei;
}
.xin2{
    height: 83px;background:khaki;direction: flex;justify-content: center;align-items: center;display: flex;justify-content: space-around;align-items: center;
background: #fff;}
.xin2 figure{width:60px;height: 47px;background: lightblue;display: flex;flex-direction: column;align-items: center;justify-content: center;}
.xin2 figcaption{
color: rgba(136, 136, 136, 1);
font-size: 8px;
text-align: left;
font-family: Microsoft Yahei;
}

.xia{background: #fff;}
.xin4{height: 128px;display: flex;justify-content: space-around;align-items: center;}
.xin5{height:44px;display: flex;justify-content: center;align-items: center; }
.xin5 h4{width: 109px;height:30px;border:1px solid  #bbb;text-align: center;line-height: 30px;font-size:14px; }

.xia1{height: 140px;}
.xia1 li{height: 30px;display: flex;justify-content: space-around;align-items: center;}
.xia1 .tui{color: #FF8F8F;font-size: 14px;}
</style>


