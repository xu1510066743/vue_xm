<template>
    <div class="hello">
            <header style="height: 120px;display: flex;flex-direction: column;">
                <div class="header-t"  >
                    <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                    <router-link to='/fuwu' tag='span' style="font-size: 20px;color:rgba(0,118,255,1);">Back</router-link>
                </div>
            </header>
            <section>
                <p style="margin:15px 0 0 18px;">日常保洁</p>
                <div class="weixiu1">
                    <p>家电清洗</p>
                    <p>家电清洗</p>
                    <p>家电清洗</p>
                    <p>家电清洗</p>
                    <p>家电清洗</p>
                    <p>家电清洗</p>
                    <p>家电清洗</p>
                </div>
                <p style="margin:15px 0 0 18px;">客户口碑推荐</p>
                <div class="weixiu">                   
                        <img src="" alt="">
                        <p>王师傅</p>
                        <p>金牌维修员</p>
                        <p>客户评价：</p>
                        <p>王师傅的服务我和家人都非常满意，人很热情，认真细致，很专业，还讲解了许多维修知识，赞！</p>
                        <button>立即预约</button>                                    
                </div>
            </section>
            <footer>
                <button>单次预约</button>
            </footer>        
    </div>
</template>
<script>

export default {
    name:'Weixiu',
    methods:{
        fanhui(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scopde=''>

.hello{display: flex;flex-direction: column;height: 100vh;}

section{flex: 1;overflow: auto;}

footer{width:100vw;height: 50px;display: flex;justify-content: center;}
footer button{width: 200px;
height: 33px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);}

.header-t{width:100vw;height: 110px;padding-top: 10px;padding-left: 10px;   background:url(/static/img/4.jpg) no-repeat;    background-size:100%  120px;}
.weixiu{width:289px;height: 191px;border: 1px solid #ccc;margin:9px 0 0 18px;position: relative;}
.weixiu img{position: absolute;left: 17px;top:18px;display: block;width:52px;height: 52px;border-radius:50%;border: 1px solid #ccc; }
.weixiu button{
    position: absolute;left: 200px;top:156px;
width: 80px;
height: 30px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);
}
.weixiu p:nth-of-type(1){left: 111px;
  position: absolute;left: 80px;top:30px;
height: 30px;
color: rgba(111, 111, 111, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.weixiu p:nth-of-type(2){
 position: absolute;left: 135px;top:31px;
width: 82px;
height: 30px;
color: rgba(183, 183, 183, 1);
font-size: 12px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.weixiu p:nth-of-type(3){
 position: absolute;left: 0px;top:81px;
width: 85px;
height: 30px;
background-color: rgba(255, 255, 255, 0);
color: rgba(136, 136, 136, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);

}
.weixiu p:nth-of-type(4){
 position: absolute;left: 83px;top:81px;
width: 197px;
height: 105px;
line-height: 19px;
background-color: rgba(255, 255, 255, 0);
color: rgba(136, 136, 136, 1);
font-size: 13px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);

}

.weixiu1{width: 100vw;height: 114px;display: flex;flex-wrap: wrap;padding-left: 20px;margin-top: 20px;}
.weixiu1 p{width: 60px;height: 47px;background: #ccc;margin-right: 30px;line-height: 50px;
background-color: rgba(206, 206, 206, 1);
text-align: center;
border: 1px solid rgba(187, 187, 187, 1);font-size: 10px;}
</style>










