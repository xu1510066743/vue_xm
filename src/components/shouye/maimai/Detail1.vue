<template>
    <div class="hello">
        <header class="hea">
           <span @click='fanhui()' class="iconfont icon-zuo"></span>
           <span class="iconfont icon-star"></span>
        </header>
        <section>
            <div class="det11">
                <img :src="detail1.img" alt="">
            </div>
            <div class="det12">
                <span>{{detail1.username}}</span>
                <span>{{detail1.money}}</span>
                <span>公寓</span>
                <span>销售阶段：</span>
                <span>顺销</span><br>
                <span>地     址：</span>
                <span>{{detail1.address}}</span><br>
                <span>开盘时间：</span>
                <span>{{detail1.data}}</span><br>
                <span>交房时间:</span>
                <span>现房</span><br>
                <span>优惠</span>
                <span>优惠活动</span>
            </div>
            <div class="det13">
                <figure>
                    <span>38</span>
                    <figcaption>报备客户</figcaption>
                </figure>
                 <figure>
                    <span>25</span>
                    <figcaption>带看客户</figcaption>
                </figure>
                <figure>
                    <span>5</span>
                    <figcaption>成交客户</figcaption>
                </figure>
                <figure>
                    <span>8</span>
                    <figcaption>合作经纪人</figcaption>
                </figure>
                 <figure>
                    <span>365</span>
                    <figcaption>在售房源</figcaption>
                </figure>
            </div>
        </section>
        <footer>
            <div class="fot-l">
                <figure>
                    <span class="iconfont icon-lianxi"></span>
                    <figcaption>联系驻场</figcaption>
                </figure>
                 <figure>
                    <span class="iconfont icon-shezhizaixianzixun"></span>
                    <figcaption>在线咨询</figcaption>
                </figure>
                 <figure>
                    <span class="iconfont icon-wo"></span>
                    <figcaption>我的客户</figcaption>
                </figure>
            </div>
            <div class="fot-r">
                          报备客户
            </div>
        </footer>
    </div>
</template>
<script>


    import axios from 'axios'
    import Mock from 'mockjs'

    var Random=Mock.Random;
 Random.extend({
    username: function(date) {
        var constellations = ['恭和家园', '绿城西府海棠', '远洋五里春秋', '新源时代3居室', '华艺铭家','民航花园' ]
        return this.pick(constellations)
    },
    money:function(data){
        var constellations = ['均价62000元/平', '均价52000元/平', '均价50000元/平', '均价56000元/平']
        return this.pick(constellations)
    },
     img:function(data){
        var constellations = ['static/img/1.jpg','static/img/2.jpg','static/img/3.jpg','static/img/4.jpg',]
        return this.pick(constellations)
    },
    data:function(data){
        var constellations = ['2018.3.26','2018.5.16','2018.7.08','2018.11.20',]
        return this.pick(constellations)
    },

    })



    Mock.mock('http://www.maimai1.com',{
        'users|1':[
            {
                "userid|+1":0,//id
                // "img":"@image('300x120')",//图片
                "address":"@county(true)",//地址
                'username':'@username',//名字
                'money':'@money',//价格
                'img':'@img("300x120")',//图片
                'data':'@data',
                "shijian1":"@date()",//开盘时间
                "shijian2":"@date()",//交房时间
            }
        ]
    })
export default {
    name:'Detail1',
     methods:{
        fanhui(){
            this.$router.go(-1)
             
        }
    },
    data(){
        return{
            detail1:[]
        }
    },

    mounted(){
        // console.log(this.$route.params.id)
        var _this=this
        axios({
            method:'get',
            url:'http://www.maimai1.com'
        }).then(function(data){
          console.log(data.data.users)
          _this.detail1=data.data.users
        })
    }
}
</script>
<style scopde=''>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section{
  flex: 1;overflow: auto;

}
footer{
  height: 60px;background: #ccc;
    display: flex;justify-content: space-between;
}
.fot-l{width: 62vw;height: 60px;display: flex;justify-content: space-around;}
.fot-l figure{display: flex;flex-direction: column;align-items: center;justify-content: center}
.fot-l figure span{font-size: 20px;}
.fot-l figure figcaption{font-size: 10px;}



.fot-r{width: 38vw;height: 60px;
background-color: rgba(31, 143, 238, 1);
color: rgba(255, 255, 255, 1);
font-size: 14px;
font-family: Arial;line-height: 60px}





.iconfont{font-size:20px;}
.hea{height: 60px;display: flex;justify-content: space-between;align-items: center}
.hea span{color: rgba(0, 118, 255, 1);display: block;width: 40px;height: 45px;line-height: 45px;text-align: center}
.det11{width: 100vw;height: 236px;}
.det11 img{display: block;width: 100%;height: 100%;background: red;}
.det12 span:nth-of-type(1){  margin-left: 5px;margin-top: 8px;display: block;font-size: 14px;color: rgba(0, 0, 0, 1);}
.det12 span:nth-of-type(2){  margin-left: 5px;margin-top: 5px;display: block;font-size: 10px;color: rgba(255, 152, 0, 1);}
.det12 span:nth-of-type(3){  margin-left: 5px;margin-top: 5px;display: block;font-size: 10px;color: rgba(255, 152, 0, 1);width: 42px;
height: 20px;line-height: 20px;border-radius: 5px;text-align: center;font-family: Arial;color: rgba(138, 136, 136, 1);border: 1px solid rgba(187, 187, 187, 1);}
.det12 span:nth-of-type(4){  margin-left: 5px;margin-top: 5px;font-size: 10px;color: rgba(136, 136, 136, 1);}
.det12 span:nth-of-type(5){  margin-left: 5px;margin-top: 5px;font-size: 10px;color: rgba(6, 6, 6, 1);}
.det12 span:nth-of-type(6){  margin-left: 5px;margin-top: 5px;font-size: 10px;color: rgba(136, 136, 136, 1);}
.det12 span:nth-of-type(7){  margin-left: 10px;margin-top: 5px;font-size: 10px;color: rgba(6, 6, 6, 1);}
.det12 span:nth-of-type(8){  margin-left: 5px;margin-top: 5px;font-size: 10px;color: rgba(136, 136, 136, 1);}
.det12 span:nth-of-type(9){  margin-left: 5px;margin-top: 5px;font-size: 10px;color: rgba(6, 6, 6, 1);}
.det12 span:nth-of-type(10){  margin-left: 5px;margin-top: 5px;font-size: 10px;color: rgba(136, 136, 136, 1);}
.det12 span:nth-of-type(11){  margin-left: 13px;margin-top: 5px;font-size: 10px;color: rgba(6, 6, 6, 1);}
.det12 span:nth-of-type(12){  margin-left: 5px;margin-top: 5px;font-size: 10px;color: rgba(136, 136, 136, 1);width: 42px;
height: 20px;
line-height: 20px;
border-radius: 5px;
background-color: rgba(255, 152, 0, 1);
color: rgba(255, 255, 255, 1);
font-size: 10px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(255, 255, 255, 0);display: inline-block;}
.det12 span:nth-of-type(13){  margin-left: 13px;margin-top: 5px;font-size: 10px;color: rgba(6, 6, 6, 1);}

.det13{margin-top:10px;width: 100vw;height: 40px;display: flex;justify-content: space-around;background: #ccc;}
.det13 figure{display: flex;flex-direction: column;align-items: center;justify-content: center}
.det13 figure span{font-size: 10px;}
.det13 figure figcaption{font-size: 10px;}
</style>












