<template>
    <div class="hello">
        <header style="background:#fff;">
            <router-link class="header-l" to='/shouye' tag='div'>
                <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
            </router-link>
            <div class="header-r">
                <span class="iconfont icon-location" style="font-size: 20px;margin-right:10px;color:red;"></span>
                <span class="iconfont icon-xiaoxi1" style="font-size: 20px;"></span>
            </div>
        </header>
        <section>
            <div class="con41" style="">
               <p >买卖</p>
               <span>高品质合租公寓</span>
            </div>
            <div class="con42">
                <input type="text" name="" id="">
                <span class="iconfont icon-sousuo" style="position: absolute;left: 9px;top: 8px;font-size:11px;"></span>
                <span class="iconfont icon-cuowu" style="position: absolute;left: 210px;top: 8px;font-size:11px;"></span>
            </div>
            <div class="con43">
                <router-link to='/gnfc' tag='figure'>
                  <span><img src="static/img/5.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></span>
                    <figcaption>国内房产</figcaption>
                </router-link>
                 <router-link to='/hwfc' tag='figure'>
                   <span><img src="static/img/1.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></span>
                    <figcaption>海外房产</figcaption>
                </router-link>
                <figure>
                   <span><img src="static/img/2.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></span>
                    <figcaption>客户记录</figcaption>
                </figure>

            </div>
            <div class="con44-wrap">
                <div class="con44">
                    <div style="">
                        <p>北京11大新区组团新建设方案</p>
                        <p><img src="static/img/1.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></p>
                    </div>
                      <div>
                        <p>北京11大新区组团新建设方案</p>
                        <p><img src="static/img/2.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></p>
                    </div>
                      <div>
                        <p>北京11大新区组团新建设方案</p>
                        <p><img src="static/img/3.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></p>
                    </div>
                      <div>
                        <p>北京11大新区组团新建设方案</p>
                        <p><img src="static/img/4.jpg" style="border-radius: 5px;display: block;width: 100%;height: 100%;"/></p>
                    </div>
                </div>
            </div>
            <p style="width: 89px;height:30px;line-height: 50px;font-size: 16px;margin-left:26px;margin-top:20px;">推荐楼盘</p>
            <div class="con45">
                
                <ul >
                    <li v-for="item in arr" :key='item'>
                        
                        <router-link :to='"/detail1/"+item.userid' tag='div'>
                            <img :src='item.img' alt="">
                            <div>
                                <p>{{item.username1}}</p>
                                <span>￥{{item.shijian1}}</span>
                            </div>
                        </router-link>
                    </li>
    
                </ul>
            </div>
          
        </section>
    </div>
</template>
<script>

    import axios from 'axios'
    import Mock from 'mockjs'
    Mock.mock('http://www.maimai.com',{
        'users|3-4':[
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
    name:'Maimai',
    data(){
        return{
            arr:[]
        }
    },
    methods:{
        fanhui(){
   
        },
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

.con41{width: 100vh;height: 102px;    background: url(/static/img/3.jpg) no-repeat;background-size: 100vw 102px;position: relative;}
    .con41 p{position: absolute;top: 35px;left: 80px;font-size: 28px;font-family: PingFangSC-regular;color: rgba(255, 255, 255, 1);}
     .con41 span{position: absolute;top: 58px;left: 146px;color: rgba(255, 255, 255, 1);font-size: 14px;font-family: PingFangSC-regular;}

.con42{width: 230px;height: 27px;position: relative;top: -13px;left: 22%;}
.con42 input{width: 220px;height: 27px;border: none;background: #FFF2F2F2;border-radius:5px;padding-left: 10px }
.con43{display: flex;justify-content: space-around;align-items: center;margin-top: 10px;}
.con43 figure{display: flex;flex-direction: column;align-items: center;}
.con43 figure span{display: block;width: 40px;height: 30px;background: #ccc;border-radius: 5px;}
.con43 figure figcaption{font-size: 16px;font-family: "PingFangSC-regular";font-weight:500;}
.con44-wrap{width: 100vw;height: 103px;display: flex;justify-content: center;margin-top: 20px}
.con44{width: 331px;height: 101px;border: 1px solid #ccc;flex-wrap: wrap;display: flex;}
.con44>div{width:151px;height:43px;display: flex;justify-content: space-between;padding: 7px 7px 0;}
.con44>div:nth-child(1){border-right:1px solid #ccc;border-bottom:1px solid #ccc; }
.con44>div:nth-child(2){border-bottom:1px solid #ccc; }
.con44>div:nth-child(3){border-right:1px solid #ccc; }
.con44>div>p:nth-child(1){width: 94px;height: 38px;font-size: 12px}
.con44>div>p:nth-child(2){width: 51px;height: 37px;background: #ccc;}

.con45{width: 100vw;min-height:100px;display: flex;justify-content: center;margin-top: 20px}
.con45 ul{width: 330px;min-height:100px;}
.con45 ul li{width: 330px;min-height:177px;margin-bottom: 10px}
.con45 ul li img{display: block;width: 330px;height: 120px;background: #ccc;}
.con45 ul li>div>div{border: 1px solid #ccc;border-top:none; }
.con45 ul li>div>div p{font-size: 16px;line-height: 30px;margin-left: 8px}
.con45 ul li>div>div span{font-size: 16px;line-height: 20px;font-size: 12px;color: rgba(255, 152, 0, 1);margin-left: 8px}
</style>

