<template>
    <div class="marker">
            <nav>
                <div class="warp">
                <em class="iconfont icon-fangdajing" style="width:30px;"></em>
                <input type="text" value="你想要买什么"/>
                <em class="iconfont icon-close-circle" style="width:30px;"></em>
                </div>
            </nav>
            <div class="lunbo">
               <mt-swipe :auto="2000" style="height:200px;text-align:center;">
                    <mt-swipe-item style="background:orange"><img src="static/254985.jpg" height=200 width=100%/></mt-swipe-item>
                    <mt-swipe-item style="background:pink">2</mt-swipe-item>
                    <mt-swipe-item style="background:skyblue">3</mt-swipe-item>
                    <mt-swipe-item style="background:pink">4</mt-swipe-item>
                </mt-swipe>
            </div>
            <!-- 主文结构 -->
            <div class="main-top">
               
                <figure v-for='item in list'>
                    <img :src=item.textimage  />
                     <router-link :to='"/detail/"+item.userid'>
                    <figcaption>{{item.username}}</figcaption>
                    </router-link>
                </figure>
                



                <!-- <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>收纳整理</figcaption>
                </figure>
                </router-link>



                <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>卫浴个护</figcaption>
                </figure>
                </router-link>



                <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>餐厨用品</figcaption>
                </figure>
                </router-link>


                <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>生活数码</figcaption>
                </figure>
                </router-link>

                <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>居家装饰</figcaption>
                </figure>
                </router-link>

                <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>设计师</figcaption>
                </figure>
                </router-link>

                <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>家具</figcaption>
                </figure>
                </router-link>


                <router-link to='/detail' tag='span'>
                <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>户外出行</figcaption>
                </figure>
                </router-link>


                <router-link to='/detail' tag='span'>
                 <figure>
                    <img src="static/254985.jpg" height=30 width=30 />
                    <figcaption>饮食</figcaption>
                </figure>
                </router-link> -->

            </div>
            <!-- 中间的部分 -->
            <div class="main-center">
                    <div class="zi-ti">
                    
                        时事热卖
                      
                    </div>
                    <div class="zi-tu">
                        <figure>
                            <img src="static/254985.jpg" height=87 width=93 />
                            <figcaption>
                            <p>黛丽芙 基础款优质羽绒丝绵保...</p>
                            <span>￥129.00</span>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="static/254985.jpg" height=87 width=93 />
                            <figcaption>
                            <p>[自营]好眠贡缎四件套...</p>
                            <span>￥129.00</span>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="static/254985.jpg" height=87 width=93 />
                            <figcaption>
                            <p>懒角落 翻盖朔料衣服储物...</p>
                            <span>￥129.00</span>
                            </figcaption>
                        </figure>
                    </div>
                    <!-- 第二部分 -->
                    <div class="zi-ti2">
                        <h3 >
                        时事热卖
                        </h3>
                        <p>每周四10点准时上新</p>
                    </div>
                    <div class="zi-tu">
                        <figure>
                            <img src="static/254985.jpg" height=87 width=93 />
                            <figcaption>
                            <p>黛丽芙 基础款优质羽绒丝绵保...</p>
                            <span>￥129.00</span>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="static/254985.jpg" height=87 width=93 />
                            <figcaption>
                            <p>[自营]好眠贡缎四件套...</p>
                            <span>￥129.00</span>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="static/254985.jpg" height=87 width=93 />
                            <figcaption>
                            <p>懒角落 翻盖朔料衣服储物...</p>
                            <span>￥129.00</span>
                            </figcaption>
                        </figure>
                    </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios';
import Mock  from 'mockjs';


var Random=Mock.Random;
 Random.extend({
    xijie: function(date) {
        var constellations = ['家纺用品', '收纳整理', '卫浴个护', '餐厨用品', '生活数码', '居家装饰', '设计师', '家具', '户外出行', '饮食',]
        return this.pick(constellations)
    }
    })
 Random.extend({
    price: function(date) {
        var constellations = ['￥149.00', '￥128.00', '￥229.00', '￥75.00',]
        return this.pick(constellations)
    }
    })
Mock.mock('http://www.baidu.com',{
        'shangchen-g|10':[
            {
            "userid|+1":0,
            "username":"@xijie",
            "textimage":"@image('30x30')",
            "price":"@price",
            }
        ]
    })


export default {
    name:'Home',
    data(){
        return{
            tit:'商城',
            list:[]
        };
    },
    mounted(){
        this.$emit('toparent',this.tit);
        var _this=this;
        axios({
            method:'get',
            url:'http://www.baidu.com',
            dataType:"json",
        }).then(function(data){
            //console.log(data.data.shangcheng);
            _this.list=data.data.shangcheng


        })

    },
    methods:{
        fanhui(){
            this.$router.go(-1)
        }
    }
}
</script>










<style scopde=''>
.mark{  height: 100vh;
  display: flex;
  flex-direction: column;}
.router-link-active{
  color:skyblue;
}
  p,h3,figure,figcaption{margin: 0;padding: 0;}
  section nav{display: flex;justify-content: center;align-items: center;
height: 55px;
  }
  nav .warp{
      width: 319px;
      height: 29px;
      position: relative;
      text-align: center;
      line-height: 29px;
  }
 .warp em{position: absolute;} 
 .warp .icon-close-circle{position: absolute;right:0;top: 0;}




.warp input{width:319px;
height: 29px;
line-height: 15px;
border-radius: 5px 5px 5px 5px;
background-color: rgba(242, 242, 242, 1);
color: rgba(16, 16, 16, 1);
font-size: 10px;
text-align: center;
font-family: Arial;
outline-style: none;
border: none;}
section .main-top{
    height: 106px;background: pink;display: flex;align-items: center;justify-content: space-around;
flex-wrap:wrap }
.main-top figure{
    height: 40px;
    width: 60px;
    margin:2px 10px; 
    display: flex;flex-direction: column;align-items: center;

}
.main-top figure figcaption{width: 40px;
height: 14px;
color: rgba(16, 16, 16, 1);
font-size: 10px;
font-family: PingFangSC-regular;
text-align: center;
}
section .main-center{height: 210px;}
.main-center .zi-ti{height: 70px;text-align: center;line-height: 70px;} 
.zi-ti h3{font-size: 14px;
font-family: PingFangSC-regular;font-weight: normal}
.main-center .zi-tu{height: 140px;display: flex;background: palegoldenrod;display: flex;justify-content:space-around;}
/* 7 8 19 */
.zi-tu img{display:block;border: none}
.zi-tu figure{height: 140px;}
.zi-tu figure figcaption{width: 67px;padding:7px 19px 0 8px;}
figcaption p{width: 67px;font-size:8px; }
.zi-tu span{font-size:10px; }
.zi-ti2{height:90px;text-align:center;margin-top:40px}
.zi-ti2 p{
color: rgba(200, 196, 196, 1);
font-size: 12px;
font-family: PingFangSC-regular;
}
.zi-ti2 h3{font-size: 14px;
font-family: PingFangSC-regular;font-weight: normal}
header{
      height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
  
footer{display: flex;justify-content: space-around;align-items: center;height:44px;background:#F7F7F7; opacity: 0.8;}
footer figure{display: flex;flex-direction: column;align-items: center;}

</style>


