<template>
    <div class="hello">
        <header style="background:#fff;">
            <router-link class="header-l" to='/maimai' tag='div'>
                <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
            </router-link>
            <div class="header-r">
                <span class="iconfont icon-location" style="font-size: 20px;margin-right:10px;color:red;"></span>
                <span class="iconfont icon-xiaoxi1" style="font-size: 20px;"></span>
            </div>
        </header>
        <section>
            <div class="hwfc1" style="">
               <p >海外房产</p>
               <span>高品质的优质房产</span>
            </div>
            <div class="hwfc2">
                <input type="text" name="" id="">
                <span class="iconfont icon-sousuo" style="position: absolute;left: 9px;top: 8px;font-size:11px;"></span>
                <span class="iconfont icon-cuowu" style="position: absolute;left: 210px;top: 8px;font-size:11px;"></span>
            </div>
            <div class="hwfc3">
            
                <select name="" id="">
                    <option value="">区域</option>
                    <option value="">整租</option>
                    <option value="">公寓</option>
                    <option value="">业主直租</option>
                </select> 
                <select name="" id="">
                    <option value="">单价</option>
                    <option value="">附近</option>
                    <option value="">商圈</option>
                    <option value="">地铁</option>
                </select>
                <select name="" id="">
                    <option value="">面积</option>
                    <option value="">不限</option>
                    <option value="">1500以下</option>
                </select>
                <select name="" id="">
                    <option value="">更多</option>
                
                </select>
                <!-- <div>
                    <p>hezu</p>
                    <span class="iconfont icon-xiangxia"></span>
                </div> -->
            </div>
            <p style="margin:8px 0 0 22px;border: 1px solid rgba(255, 255, 255, 0);font-family: Microsoft Yahei;font-size: 10px;color: rgba(136, 136, 136, 1);background-color: rgba(255, 255, 255, 0);">共有20个楼盘搜索</p>

            <div class="hwfc4">
                
                <ul >
                    <li v-for='item in arr' :key='item'>
                        
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
    name:'Hwfc',
    data(){
        return{
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

.hwfc1{width: 100vh;height: 102px;    background: url(/static/img/3.jpg) no-repeat;background-size: 100vw 102px;position: relative;}
    .hwfc1 p{position: absolute;top: 35px;left: 45px;font-size: 28px;font-family: PingFangSC-regular;color: rgba(255, 255, 255, 1);}
     .hwfc1 span{position: absolute;top: 58px;left: 166px;color: rgba(255, 255, 255, 1);font-size: 14px;font-family: PingFangSC-regular;}

.hwfc2{width: 230px;height: 27px;position: relative;top: -13px;left: 22%;}
.hwfc2 input{width: 220px;height: 27px;border: none;background: #cdcdcd;border-radius:5px;padding-left: 10px }

.hwfc3{display: flex;justify-content: space-around;margin-top: 10px;}
.hwfc3 select{width: 65px;height: 30px;display: flex;justify-content: space-around;border: 1px solid #ccc;border-radius:5px; }


.hwfc4{width: 100vw;min-height:100px;display: flex;justify-content: center;margin-top: 20px}
.hwfc4 ul{width: 330px;min-height:100px;}
.hwfc4 ul li{width: 330px;min-height:177px;margin-bottom: 10px}
.hwfc4 ul li img{display: block;width: 330px;height: 120px;background: #ccc;}
.hwfc4 ul li>div>div{border: 1px solid #ccc;border-top:none; }
.hwfc4 ul li>div>div p{font-size: 16px;line-height: 30px;margin-left: 8px}
.hwfc4 ul li>div>div span{font-size: 16px;line-height: 20px;font-size: 12px;color: rgba(255, 152, 0, 1);margin-left: 8px}
</style>

