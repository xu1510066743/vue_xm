<template>
    <div class="adv">
        <header>
                <img src="static/a.jpg" />
                <div class="adv-1">
                    <h3>Hi,柚家客3d67</h3>
                    <span>我是您的服务助手柚柚，有问题就联系我哈</span>
                </div>
        </header>
        <section>
            <div class="adv-2">
                    <h5>
                        自助服务我的家
                    </h5>
            </div>
            <div class="xin2">
               <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
                              <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
                              <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
                              <figure>
                   <img src="static/254985.jpg" height=20 width=26 />
                   <figcaption>我的合同</figcaption>
               </figure>
            </div>

            <div class="adv-2">
                    <h5>
                        常见问题
                    </h5>
            </div>
            <div>
                <div class="adv-4">
                        <div class="adv-41">
                            <img src="static/a.jpg" style="width:34px;height:34px;border-radius:50%;" />
                            <span>柚家维修</span>
                        </div>
                        <div class="adv-42">
                            <span>维修超出预约时间未上门</span>
                            <b class=" iconfont icon-iconfontyoujiantou"></b>
                        </div>
                </div>
                <div class="adv-4">
                        <div class="adv-41">
                            <img src="static/a.jpg" style="width:34px;height:34px;border-radius:50%;" />
                            <span>柚家保洁</span>
                        </div>
                        <div class="adv-42">
                            <span>保洁卡如何使用</span>
                            <b class=" iconfont icon-iconfontyoujiantou"></b>
                        </div>
                </div>
                <div class="adv-4">
                        <div class="adv-41">
                            <img src="static/a.jpg" style="width:34px;height:34px;border-radius:50%;" />
                            <span>柚家搬家</span>
                        </div>
                        <div class="adv-42">
                            <span>如何预约搬家？搬家上门范围？</span>
                            <b class=" iconfont icon-iconfontyoujiantou"></b>
                        </div>
                </div>
                <div class="adv-4">
                        <div class="adv-41">
                            <img src="static/a.jpg" style="width:34px;height:34px;border-radius:50%;" />
                            <span>宽带问题</span>
                        </div>
                        <div class="adv-42">
                            <span>查询WIFI账号与密码</span>
                            <b class=" iconfont icon-iconfontyoujiantou"></b>
                        </div>
                </div>
            </div>
        </section>
        <footer>
                <van-search placeholder="问题还没解决？来提问柚柚吧" v-model="value" />
        </footer>
        


    </div>
    
</template>
<script>
export default {
     name:'Adivce',
    
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
.adv{height: 100vh;display: flex;flex-direction:column;}
header{height: 88px;background: cyan;display:flex;justify-content:flex-start;align-items: center}
header img{width:55px ;height:55px ;border-radius:50%;display: block;border: none;margin:0 10px 0 20px;}
.adv-1 h3{
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Arial;
}
.adv-1 span{
color: rgba(136, 136, 136, 1);
font-size: 10px;
font-family: Microsoft Yahei;
}








section{flex: 1;overflow: auto;}
.adv-2{height:30px;line-height: 30px;}
.adv-2 h5{line-height: 30px;margin-left:20px;left: 7px;
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
 }

.xin2{
    height: 83px;background:khaki;direction: flex;justify-content: center;align-items: center;display: flex;justify-content: space-around;align-items: center;
background: #fff;border-bottom: 2px solid #ddd;}
.xin2 figure{width:60px;height: 47px;background: lightblue;display: flex;flex-direction: column;align-items: center;justify-content: center;}
.xin2 figcaption{
color: rgba(136, 136, 136, 1);
font-size: 8px;
text-align: left;
font-family: Microsoft Yahei;
}
.adv-4{height: 57px;border-bottom: 2px solid #ddd;   background: #fff;display: flex;align-items: center; justify-content:flex-start;width: 80%;margin-left:4%; }
.adv-41{width: 55px;height: 57px;display: flex;align-items: center;flex-direction: column;justify-content: center;}
.adv-41 span{
color: rgba(136, 136, 136, 1);
font-size: 8px;
font-family: Microsoft Yahei;
}
.adv-42{display: flex;justify-content: space-between;width: 60%;}
.adv-42 span{
color: rgba(136, 136, 136, 1);
font-size: 10px;
font-family: Microsoft Yahei;
}
footer{height: 45px;background: #eee;display: flex;align-items: center;justify-content: center;}
</style>
