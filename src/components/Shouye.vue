<template>
<div>
    <div>
        <mt-swipe :auto="3000" style="width:100wh;height:200px;">
            <mt-swipe-item style="background:red;"><img src="static/img/1.jpg" style="width:100%;height:100%;"></mt-swipe-item>
            <mt-swipe-item style="background:blue;"><img src="static/img/2.jpg" style="width:100%;height:100%;"></mt-swipe-item>
            <mt-swipe-item style="background:yellow;"><img src="static/img/3.jpg" style="width:100%;height:100%;"></mt-swipe-item>
            <mt-swipe-item style="background:blue;"><img src="static/img/4.jpg" style="width:100%;height:100%;"></mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="con1">
        <router-link  to='/zufang' tag='p' class="con1-l">
            租房
        </router-link>
        <div class="con1-r">
            <router-link to='/hezu' tag='p' style="margin-right:25px;margin-bottom:24px;">合租</router-link>
            <router-link to='/zhengzu' tag='p'>整租</router-link>
            <router-link to='/gongyu' tag='p' style="margin-right:25px;">公寓</router-link>
            <router-link to='/haozai' tag='p'>豪宅</router-link>
        </div>
    </div>
   <div class="con2">
        <router-link to='/fuwu' tag='p' class="con2-l">
            服务
        </router-link>
        <div class="con2-r">
            <router-link to='/baojie' tag='p' style="margin-right:25px;margin-bottom:24px;">保洁</router-link>
            <router-link to='/banjia' tag='p'>搬家</router-link>
            <router-link to='/weixiu' tag='p' style="margin-right:25px;">维修</router-link>
        </div>
    </div>
       <div class="con3">
        <router-link to='/maimai' tag='p' class="con3-l">
            买卖
        </router-link>
        <div class="con3-r">
            <router-link to='/hwfc' tag='p' style="margin-right:25px;margin-bottom:24px;">海外房产</router-link>
            <router-link to='/gnfc' tag='p'>国内房产</router-link>
            <p style="margin-right:25px;" @click='jiekou()'>客户记录</p>
        </div>
    </div>
</div> 
</template>
<script>
import axios from 'axios'
export default {
    name:'Shouye',
    data(){
        return{
           color:'red' 
        }
        
    },
    methods:{
        jiekou(){
            console.log('sss')
            var _this=this
                axios({
                method:'get',
                url:'http://10.8.155.30:8081/house/deleteGoods.do',
                 params:{id:1}
            }).then(function(data){
                console.log(data.data)
                // if(data.data.code==0){
                //     // location.href='/login'
                //     alert('注册成功')
                //        _this.$router.push({
                //         path:'/login'
                //     })
                // }else{
                //     alert('请重新注册')
                // }
            })
        }
    },
    mountde(){
            //      axios({
            //     method:'get',
            //     url:'http://10.8.155.30:8081/house/pagegoodsall.do',
            //     // params:{phone:_this.phone,password:_this.password}
            // }).then(function(data){
            //     console.log(data.data)
            //     // if(data.data.code==0){
            //     //     // location.href='/login'
            //     //     alert('注册成功')
            //     //        _this.$router.push({
            //     //         path:'/login'
            //     //     })
            //     // }else{
            //     //     alert('请重新注册')
            //     // }
            // })
    }
}
</script>
<style scopde=''>
.con1{margin-top: 20px;padding:0 10px;height: 82px;}
.con1-l{
    width: 105px;
    height: 70px;
    float: left;
    background:url(/static/img/2.jpg) no-repeat;
    background-size: 117px 80px;
    text-align: right;
    padding-top: 12px;
    padding-right: 10px;
}
.con1-r{
    float: right;
    
    width: 210px;
    height: 82px;
}
.con1-r p{
width: 88px;
height: 27px;
line-height: 27px;
float: left;
color: #000;
font-size: 14px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}



.con2{margin-top: 35px;padding:0 10px;height: 82px;}
.con2-l{
    width: 105px;
    height: 70px;
    float: left;
    background:url(/static/img/4.jpg) no-repeat;
    background-size: 117px 80px;
    text-align: right;
    padding-top: 12px;
    padding-right: 10px;
}
.con2-r{
    float: right;
    
    width: 210px;
    height: 82px;
}
.con2-r p{
width: 88px;
height: 27px;
line-height: 27px;
float: left;
color: #000;
font-size: 14px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}

.con3{margin-top: 35px;padding:0 10px;height: 82px;}
.con3-l{
    width: 105px;
    height: 70px;
    float: left;
    background:url(/static/img/3.jpg) no-repeat;
    background-size: 117px 80px;
    text-align: right;
    padding-top: 12px;
    padding-right: 10px;
}
.con3-r{
    float: right;
    
    width: 210px;
    height: 82px;
}
.con3-r p{
width: 88px;
height: 27px;
line-height: 27px;
float: left;
color: #000;
font-size: 14px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
</style>


