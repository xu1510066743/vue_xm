<template>
    <div class="hello">
        <header>
            <div style="height:60px;display:flex;">
                <router-link class="xiaoxi" to='/shouye' tag='div' style="">
                    <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                    <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
                </router-link>
                <div class="xiaoxi1">
                    <span style="background-color: rgba(247, 247, 247, 0.8);
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        font-family: Arial;">消息中心</span>
                </div>
                <div class="xiaoxi2">
                    
                </div>
            </div>
        </header>
    
        <section>
            <router-link to='/kffw' tag='div' class="xiaoxi3">
                <div class="xiaoxi3l">
                    <span class="iconfont icon-wo2"></span>
                </div>
                <div class="xiaoxi3r">
                    <p>客服</p>
                    <p>合租，整租，公寓，豪宅，服务相关问题沟通</p>
                </div>
            </router-link>
            <div class="xiaoxi4">
                <div class="xiaoxi4l">
                    <span class="iconfont icon-wenti"></span>
                </div>
                <div class="xiaoxi4r">
                    <p>系统消息</p>
                    <p>限时优惠|签约最高立减2000元  ，双人沙发【心动】</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'Xiaoxi'
}
</script>
<style scopde=''>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;

}
.xiaoxi{width:75px;height: 60px;display:flex;justify-content: space-around;align-items: center}


.xiaoxi1{width:210px;height: 60px; display: flex;justify-content: center;align-items: center}
.xiaoxi2{width:75px;height: 60px;}
.xiaoxi3{width:100%;height: 80px;display: flex;align-items: center;border-bottom: 1px solid #ccc}
.xiaoxi3l{width:20%;height: 80px;display: flex;align-items: center;justify-content: center;}
.xiaoxi3r{width:80%;height: 80px;}
.xiaoxi3r p:nth-child(1){
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
line-height: 20px;
margin-top: 20px
}
.xiaoxi3r p:nth-child(2){
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
line-height: 20px
}


.xiaoxi4{width:100%;height: 80px;display: flex;align-items: center;}
.xiaoxi4l{width:20%;height: 80px;display: flex;align-items: center;justify-content: center;}
.xiaoxi4r{width:80%;height: 80px;}
.xiaoxi4r p:nth-child(1){
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
line-height: 20px;
margin-top: 20px
}
.xiaoxi4r p:nth-child(2){
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
line-height: 20px
}
</style>


