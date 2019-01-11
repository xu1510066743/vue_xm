<template>
<div class="hello">
    <header style="background:#fff;">
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
        <div class="conh1" style="">
            <p >合租</p>
            <span>{{tit}}</span>
        </div>
        <div class="conh2">
            <input type="text" name="" id="">
            <span class="iconfont icon-sousuo" style="position: absolute;left: 9px;top: 8px;font-size:11px;"></span>
            <span class="iconfont icon-cuowu" style="position: absolute;left: 210px;top: 8px;font-size:11px;"></span>
        </div>
         <router-view></router-view>
        <div class="conh3" >
           <p>历史搜索</p>
           <p>全城 合租/整租...</p>
           <p>全城 空气检测</p>
           <p>全城 VR看房</p>
        </div>
        <p style="
                    width: 70px;
                    height: 20px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                    margin-top:15px;
                    margin-left:5px;
                    ">租房情报局</p>
        <div class="conh4">
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
        <div class="conh5">
            <mt-swipe :show-indicators="false">
                <mt-swipe-item><img src="static/img/2.jpg" style="width:100%;height:100%;"></mt-swipe-item>
                <mt-swipe-item style="background:blue;"><img src="static/img/1.jpg" style="width:100%;height:100%;"></mt-swipe-item>
                <mt-swipe-item><img src="static/img/4.jpg" style="width:100%;height:100%;"></mt-swipe-item>
            </mt-swipe>
        </div>
        <p style="font-size:14px;font-family: PingFangSC-regular;margin-top:22px;margin-left:5px;color: rgba(16, 16, 16, 1);">租房</p>
   


        <div class="conh6">
            <div class="conh6-l">
                <p>视频看房就现在</p>
                <span>省时省力，身临其境</span>
            </div>
            <div class="conh6-r">
                <p>公积金租房政策</p>
                <span>每月省1500不是梦</span>
            </div>
        </div>
        <p style="font-size:14px;font-family: PingFangSC-regular;color: rgba(16, 16, 16, 1);margin-top:22px;margin-left:5px;">热门房源</p>


        <div class="conh7">
            
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
        <ul>
            <li v-for="item in arr">
                <router-link :to='"/detailhezu/"+item.userid' tag='div' class="conh8">
                    <div class="conh8-l">
                        <img :src='item.img' style="width: 100%;height: 100%;"/>
                    </div>
                    <div class="conh8-r">
                        <p style="font-size:14px;">{{item.username1}}</p>
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
                </router-link>
            </li>
           
        </ul>
    

    </section>
</div>
    
</template>
<script>
    import axios from 'axios'
    import Mock from 'mockjs'
    Mock.mock('http://www.maimai.com',{
        'users|3-5':[
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
    name:'Hezu',
    data(){
        return{
            tit:"高品质合租公寓" ,
            arr:[]
        }
        
    },
    methods:{
        fanhui(){
            this.$router.go(-1)
             
        }
    },
    mounted(){
        var _this=this
        axios({
            method:'get',
            url:'http://www.maimai.com',
        }).then(function(data){
          console.log(data.data.users)
          _this.arr=data.data.users
        })
    }
}
</script>
<style scopde=''>
.hello{display: flex;flex-direction: column;height: 100vh;}
    header{height: 60px;display: flex;justify-content:space-between;align-items: center;
            padding: 0 10px;
    }
    section{flex: 1;overflow: auto;}
    .conh1{width: 100vh;height: 102px;    background: url(/static/img/3.jpg) no-repeat;background-size: 100vw 102px;position: relative;}
    .conh1 p{position: absolute;top: 35px;left: 80px;font-size: 28px;font-family: PingFangSC-regular;color: rgba(255, 255, 255, 1);}
     .conh1 span{position: absolute;top: 58px;left: 146px;color: rgba(255, 255, 255, 1);font-size: 14px;font-family: PingFangSC-regular;}

.conh2{width: 230px;height: 27px;position: relative;top: -13px;left: 22%;}
.conh2 input{width: 220px;height: 27px;border: none;background: #FFF2F2F2;border-radius:5px;padding-left: 10px }
.conh3{display: flex;justify-content: space-around;align-items: center;margin-top: 10px;}
.conh3 p{width: 77px;height: 20px;line-height: 20px;border-radius: 5px;color: rgba(16, 16, 16, 1);
font-size: 10px;text-align: center;font-family: Arial;border: 1px solid rgba(187, 187, 187, 1);}


.conh4{width: 100vw;height:65px ;display: flex;justify-content: space-around;margin-top: 29px}
.conh4 div{width: 89px;height:48px ;text-align: center;border: 1px solid #ccc;padding-top:15px }
.conh4 div p{font-size: 10px;}
.conh4 div span{font-size: 8px;color: #ccc;}
.conh5{width: 100vw;height: 154px;background: #ccc;margin-top: 20px}
.conh6{display: flex;justify-content: space-between;margin-top: 15px;}
.conh6 .conh6-l{width: 177px;height: 75px;border:1px solid #ccc; text-align: center;padding-top: 22px}
.conh6 .conh6-l p{font-size: 16px;}
.conh6 .conh6-l span{font-size: 10px ;}
.conh6 .conh6-r{width: 177px;height: 75px;border:1px solid #ccc;text-align: center;padding-top: 22px;}
.conh6 .conh6-r p{font-size: 16px;}
.conh6 .conh6-r span{font-size: 10px ;}
.conh7{display: flex;justify-content: space-around;margin-top: 5px;}
.conh7 select{width: 65px;height: 30px;display: flex;justify-content: space-around;border: 1px solid #ccc;border-radius:5px; }
.conh8{padding: 0 10px;width: 100vw;height: 70px;display: flex;justify-content: space-between;margin-top: 20px;}
.conh8-l{width: 102px;height: 70px;background: #ccc;border-radius: 5px;}
.conh8-r{width: 300px;padding: 0 10px;}
.conh8-r div:nth-of-type(1){display: flex;justify-content: space-between;position: relative;}
.conh8-r div:nth-of-type(1) span:nth-child(1){font-size: 10px;}
.conh8-r div:nth-of-type(1) span:nth-child(2){font-size: 12px;color: rgba(255, 152, 0, 1);position: absolute;left: 170px; }
.conh8-r div:nth-of-type(2) span{display:inline-block;width: 53px;height: 20px;line-height: 20px;text-align: center;font-family: Arial;font-size: 10px;border-radius: 5px;border: 1px solid rgba(187, 187, 187, 1);}
</style>






