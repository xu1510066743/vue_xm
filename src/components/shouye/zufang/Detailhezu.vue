<template>
    <div class="hello">
        <div class="detailhezu1">
            <router-link to='/hezu' tag='div' style="width:70px;height:44px;display: flex;justify-content: center;align-items: center"><span @click='fanhui()' class="iconfont icon-zuo"></span><span>Back</span></router-link>
            <div style="width:70px;height:44px;display: flex;justify-content:space-around ;align-items: center">
                <span class="iconfont icon-xin"></span>
                <span class="iconfont icon-icon_share"></span>
            </div>    
        </div>
        <div class="detailhezu2">
            <mt-swipe :auto="3000" style="width:100wh;height:200px;">
                <mt-swipe-item style="background:red;"><img src="static/img/1.jpg" style="width:100%;height:100%;"></mt-swipe-item>
                <mt-swipe-item style="background:blue;"><img src="static/img/2.jpg" style="width:100%;height:100%;"></mt-swipe-item>
                <mt-swipe-item style="background:yellow;"><img src="static/img/3.jpg" style="width:100%;height:100%;"></mt-swipe-item>
                <mt-swipe-item style="background:blue;"><img src="static/img/4.jpg" style="width:100%;height:100%;"></mt-swipe-item>
            </mt-swipe>
        </div>
        <p style="margin:12px 0 0 3px;color: rgba(4, 4, 4, 1);font-size: 14px;text-align: left;font-family: PingFangSC-regular;">【订】{{detail2.username1}}</p>

        <div class="detailhezu3" style="margin-top:10px;">
            <span>￥1890/月（季付价）</span>
            <span>付款方式     ></span>
        </div>
        <div class="detailhezu4">
            <div style="border-radius: 5px;
                    background-color: rgba(227, 240, 211, 1);
                    color: rgba(139, 195, 74, 1);
                    font-size: 12px;
                    text-align: center;
                    font-family: Arial;
                    ">
                <p>空气质量已检测</p>
                <p>查看结果   ></p>
            </div>
            <div style="
                border-radius: 5px;
                background-color: rgba(251, 214, 160, 0.58);
                color: rgba(255, 152, 0, 1);
                font-size: 12px;
                text-align: center;
                font-family: Arial;
                ">
                <p>承诺空置30天出租</p>
                <p>已空置20天</p>
            </div>
        </div>
        <div class="detailhezu5">
            <span>深呼吸</span>
            <span>智能锁</span>
            <span>首次出租</span>
            <span>离地铁近</span>
        </div>
        <hr style="margin-top:80px;">
        <div class="detailhezu6">
            <div>
                <span class="iconfont icon-xin1" style="display:black;font-size:16px;"></span>
                <span>收藏</span>
            </div>
            <div>
               立即预订 
            </div>
            <div>
                预约看房
            </div>
        </div>
    </div>
</template>
<script>








    import axios from 'axios'
    import Mock from 'mockjs'
    var Random=Mock.Random;
 Random.extend({
    xijie: function(date) {
        var constellations = ['家纺用品', '收纳整理', '卫浴个护', '餐厨用品', '生活数码', '居家装饰', '设计师', '家具', '户外出行', '饮食',]
        return this.pick(constellations)
    }
    })
    Mock.mock('http://www.maimai1.com',{
        'users|1':[
            {
                "userid|+1":0,//id
                "img":"@image('300x120')",//图片
                "address":"@county(true)",//地址
                "username1":"@csentence(5)",//名字
                "username2":"@csentence(5)",//名字
                "shijian1":"@date()",//开盘时间
                "shijian2":"@date()",//交房时间
            }
        ]
    })
export default {
    name:'Detailhezu',
     data(){
        return{
            detail2:[]
        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1)
             
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
          _this.detail2=data.data.users
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
.detailhezu1{width: 100%;height: 60px;display: flex;justify-content: space-between;align-items: center}
.detailhezu1 span{color: rgba(0, 118, 255, 1);display: block;width: 40px;height: 45px;line-height: 45px;text-align: center}
.detailhezu3{width: 100%;height: 17px;display: flex;justify-content: space-between;align-items: center}
.detailhezu3 span{color: rgba(181, 178, 178, 1);font-size: 12px;text-align: left;font-family: PingFangSC-regular;}
.detailhezu3 span:nth-child(1){margin: 6px 0 0 13px}
.detailhezu3 span:nth-child(2){margin-right:15px;}
.detailhezu4{margin-top:31px;padding:0 5%;width: 90%;height: 74px;display: flex;justify-content: space-between;}
.detailhezu4>div{width: 159px;height: 74px;display: flex;flex-direction: column;justify-content:center; }
.detailhezu5{margin-top:35px;width: 100%;height: 30px;display:flex;justify-content: space-around;}
.detailhezu5 span{
width: 60px;
height: 30px;
line-height: 30px;
border-radius: 5px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
.detailhezu6{margin-top:25px;width: 100%;height: 40px;display: flex;justify-content: space-between;}
.detailhezu6>div:nth-child(1){width: 101px;
height: 40px;
line-height: 40px;
color: rgba(16, 16, 16, 1);
font-size: 16px;
text-align: center;
font-family: Arial;
display: flex;justify-content: space-around
}
.detailhezu6>div:nth-child(2){width: 115px;
height: 40px;
line-height: 40px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);}
.detailhezu6>div:nth-child(3){
width: 114px;
height: 40px;
line-height: 40px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
</style>




