<template>
<div class="kun">
    <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>提交订单</span>
            <em class="iconfont" style="width:30px;"></em>
    </header>
    <section>
        <div class="di">
            <div class="kun1">
                <em class="iconfont icon-tubiaozhizuomoban">郑州千峰</em>
                <span style="width:70px"></span>
                <p>+8612552356955</p>
            </div>
            <div class="kun2">
                <span>河南省  郑州市  金水区  今夕何夕H座12楼  450000</span>
                <i class="iconfont icon-iconfontyoujiantou"></i>
            </div>
        </div>
        <div class="hei">
            <div class="hei1">
                <b class="iconfont icon-info-affirm">确认订单信息</b>
                <span>请仔细核对本页信息，一经提交无法修改</span>
            </div>
            <ul class="aqu">
                <li class="aqu1">
                    <img src="static/a.jpg" />


                    <div class="aqu2">
                    <h6>玛丽黛佳哑光唇釉</h6>
                    <span>颜色:211</span>
                    <div class="aqu3">
                            <i>1</i>
                            <span>￥40</span>
                    </div>
                    </div>


                </li>
                <li class="aqu1">
                    <img src="static/a.jpg" />


                    <div class="aqu2">
                    <h6>玛丽黛佳哑光唇釉</h6>
                    <span>颜色:211</span>
                    <div class="aqu3">
                            <i>1</i>
                            <span>￥40</span>
                    </div>
                    </div>


                </li>
                <li class="aqu1">
                    <img src="static/a.jpg" />


                    <div class="aqu2">
                    <h6>玛丽黛佳哑光唇釉</h6>
                    <span>颜色:211</span>
                    <div class="aqu3">
                            <i>1</i>
                            <span>￥40</span>
                    </div>
                    </div>


                </li>
            </ul>
            <div class="zhi">
                <b class="iconfont icon-info-affirm">支付方式</b>
                <span class="iconfont icon-jia-"></span>
            </div>











        </div>





    </section>



    <footer>
        <span>合计:￥1130</span>
        
        <h2>
            <router-link to="alipy" tag="span">
            提交订单
              </router-link>
        </h2>
      
    </footer>







</div>
</template>



<script>
export default {
    name:'Order',
    methods:{
        fanhui(){
        this.$router.go(-1)
        }
    },
    
}
</script>

<style scoped>
*{margin: 0;padding: 0;} 
.kun{background:#F0F0F0;height:100vh;display: flex;flex-direction: column;}
header{height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
section{flex: 1;overflow:auto;}
.di{height: 65px;background: #fff;}
.kun1{height: 35px;display: flex;display: flex;align-items: center;justify-content: space-around;}
.kun2{height: 35px;display: flex;display: flex;align-items: center;justify-content: space-around;}
.kun1 em{font-size: 12px;}
.kun1 p{
color: rgba(76, 76, 76, 1);
font-size: 10px;
font-family: SourceHanSansSC-regular;
}
.kun2 span{

color: rgba(164, 164, 164, 1);
font-size: 12px;
font-family: SourceHanSansSC-regular;
}


.hei{height: 277px;margin: 10px 0;background: #fff;}
.hei1{height: 30px;display: flex;justify-content: space-around;align-items: center;}
.hei1 b{
color: rgba(77, 77, 77, 1);
font-size: 12px;
font-family: SourceHanSansSC-regular;
}
.hei1 span{
color: rgba(229, 28, 35, 1);
font-size: 10px;
font-family: SourceHanSansSC-regular;
}


.aqu1 img{width: 60px;height: 60px;display: block;border: none;margin-left:5% }



.aqu2{width: 60%;margin-right:4% }
.aqu1{height:80px;display: flex;justify-content: space-around;align-items: center; }
.aqu3{display: flex;justify-content: space-between;align-items: center;}

.zhi{height: 45px;background:#fff;display: flex;justify-content: space-between;align-items: center;margin:20px 0; }

.zhi b{margin-left:8%; }
.zhi span{margin-right:4%;}


footer{
height: 40px;
border: 1px solid rgba(187, 187, 187, 1);
display: flex;justify-content: space-between;align-items: center;
}
footer span{margin-left: 8%;}
footer h2{width:25%;height: 40px;
font-size: 14px;
color: #fff;
background-color: rgba(0, 0, 0, 1);
text-align: center;
line-height: 40px;
}

</style>

