<template>
    <div class="mark">
        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>详情</span>
            <em class="iconfont icon-fasong" style="width:30px;"></em>
        </header>
        <section>
            <div class="lunbo">
               <mt-swipe :auto="2000" style="height:200px;text-align:center;">
                    <mt-swipe-item style="background:orange"><img src="static/254985.jpg" height=200 width=100%/></mt-swipe-item>
                    <mt-swipe-item style="background:pink">2</mt-swipe-item>
                    <mt-swipe-item style="background:skyblue">3</mt-swipe-item>
                    <mt-swipe-item style="background:pink">4</mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="box">
                <h2>黛丽芙 基础款优质羽绒丝绵保温丝绒被秋冬被子</h2>
                <p>￥128</p>
            </div>
            <div class="box1">
                <span>运费：</span>
                <span>免运费</span>
                <span>销量：</span>
                <span>195</span>
            </div>



            <div class="box2">
                <span>有赞担保</span>
                <span>全程护航 ，请放心购买</span>
                
            </div>
            <div class="box3">
                <p>选择颜色：白色</p>
                <p>&gt;</p>
                
            </div>



            <div class="xiang">
            <div class="box4">
                <h3>商品详情</h3>
            </div>
            <div class="box5">
                <img src="static/254985.jpg" width=315 height=120 />
            </div>
            <div class="box6">
                <em class="iconfont  icon-zhankai-copy" style="height:24px;width:24px"></em>
                <em class="iconfont  icon-zhankai-copy" style="height:24px;width:24px"></em>
                <em class="iconfont  icon-zhankai-copy" style="height:24px;width:24px"></em>
            </div>
             <div class="box5">
                <img src="static/254985.jpg" width=315 height=120/>
            </div>
            </div>


        </section>
        <footer>
            <div class="key">
                <figure>
                    <em class="iconfont icon-kefu"></em>
                    <figcaption>客服</figcaption>
                </figure>
                <figure>
                    <em class="iconfont icon-dianpu"></em>
                    <figcaption>店铺</figcaption>
                </figure>
                 <figure>
                    <em class="iconfont icon-gouwuche2"></em>
                    <figcaption>购物车</figcaption>
                </figure>
                <div>

                    <router-link to='gouwuche'>
                    <mt-button type="primary">加入购物车</mt-button>
                    </router-link>
                    <mt-button type="danger">立即购买</mt-button>
                </div>
                
            </div>










        </footer>
        



    </div>
    
</template>


<script>
import $ from 'jquery'
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
        'shangcheng|10':[
            {
            "userid|+1":0,
            "username":"@xijie",
            "textimage":"@image('30x30')",
            "price":"@price",
            }
        ]
    })

// $(function(){
// });





export default {
  name:"Detail",
  data(){
      return{
          datail:''

      }
  },
  methods:{
      fanhui(){
          this.$router.go(-1);
      }
  },
  mounted(){
      var _this=this;
      axios({
        method:'get',
        url:'http://www.baidu.com',
        dataType:"json",
      }).then(function(data){
        console.log(data.data.shangcheng)  
        _this.detail=data.data.shangcheng
      })
  }
}
</script>



<style scoped=''>
.mark{height: 100vh;display: flex;flex-direction: column;background: #EEEEEE 100%}
p,h2{margin: 0;padding: 0;}
header{
      height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
img{display: block;border:none;}
section{flex: 1;overflow: auto;}
section .box{
    height: 60px;
    background-color: rgba(255, 255, 255, 1);
}
.box h2{
width: 323px;
height: 30px;
color: rgba(0, 0, 0, 1);
padding-left: 10px;
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.box p{padding-left: 10px;

width: 96px;
height: 14px;
color: rgba(16, 16, 16, 1);
font-size: 10px;
text-align: left;
font-family: PingFangSC-regular;
}
.box1{height: 40px;
background-color: rgba(255, 255, 255, 1);
margin: 1px 0;
line-height: 40px;
border: 1px solid rgba(255, 255, 255, 0);
}
.box1 span{
color: rgba(136, 136, 136, 1);
font-size: 10px;
font-family: Microsoft Yahei;
}
.box1 span:first-child{ padding-left:10px;}
.box2{height:34px;background: #fff;   line-height: 34px;}
.box2 span:first-child{color:#8BC34A;font-size:10px;padding-left:10px;}
.box2 :last-child{
color: rgba(8, 8, 8, 1);
font-size: 8px;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.box3{margin:5px 0;background: #fff;height:31px;
color: rgba(138, 136, 136, 1);
display: flex;justify-content:space-between;align-items: center;
}
.box3 p{padding-left:10px;font-size: 8px;
font-family: PingFangSC-regular; }
.box3 p:last-child{padding-right:10px;}
.box4 h3{height: 54px;line-height: 54px;color:#888888;margin-left:10px;}
.box5{height: 120px;display: flex;justify-content: center;align-items: center;}
.box6{height: 86px;background: #fff;display: flex;flex-direction: column;justify-content: center;align-items: center}
.xiang{background: #fff}










footer{height: 45px;background:#cecece;}
footer .key{display: flex;justify-content:space-around;align-items: center;}
.key figure{display: flex;flex-direction: column;align-items: center}
footer figcaption{



color: rgba(16, 16, 16, 1);
font-size: 14px;

font-family: PingFangSC-regular;
}
</style>


