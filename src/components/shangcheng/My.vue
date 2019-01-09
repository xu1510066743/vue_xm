<template>
    <div class="my">
        <div>
            <img src="static/254985.jpg" height=120 width=100% />
        </div>
        <div class="warp">
            <div class="box">
                        <figure>
                            <img src="static/254985.jpg" height=40 width=30 />
                            <figcaption>
                            待付款
                            </figcaption>
                        </figure>
                                                <figure>
                            <img src="static/254985.jpg" height=40 width=30 />
                            <figcaption>
                            待接单
                            </figcaption>
                        </figure>
                                                <figure>
                            <img src="static/254985.jpg" height=40 width=30 />
                            <figcaption>
                            待发货
                            </figcaption>
                        </figure>
                                                <figure>
                            <img src="static/254985.jpg" height=40 width=30 />
                            <figcaption>
                            已发货
                            </figcaption>
                        </figure>
                                                <figure>
                            <img src="static/254985.jpg" height=40 width=30 />
                            <figcaption>
                            已完成
                            </figcaption>
                        </figure>
            </div>
            <div class="wuliu">
                <img src="static/254985.jpg" height=40 width=30 />
                <div class="xiao">
                    <span>全部订单</span>
                    <strong class="iconfont icon-iconfontyoujiantou"></strong>
                </div>
            </div>










            <div class="wuliu" style="margin:5px 0;background:#fff;height:59px">
                <img src="static/254985.jpg" height=40 width=30 />
                <div class="xiao">
                    <span>我的购物车</span>
                    <strong class="iconfont icon-iconfontyoujiantou"></strong>
                </div>
            </div>
             <div class="wuliu" style="margin:6px 0;background:#fff;height:75px">
                <img src="static/254985.jpg" height=40 width=30 />
                <div class="xiao">
                    <span>我的会员卡</span>
                    <strong class="iconfont icon-iconfontyoujiantou"></strong>
                </div>
            </div>
            <div class="wuliu" style="margin:1px 0;background:#fff;height:75px">
                <img src="static/254985.jpg" height=40 width=30 />
                <div class="xiao">
                    <span>我的积分</span>
                    <strong class="iconfont icon-iconfontyoujiantou"></strong>
                </div>
            </div>
            <div class="wuliu" style="margin:2px 0;background:#fff;height:75px">
                <img src="static/254985.jpg" height=40 width=30 />
                <div class="xiao">
                    <span>我的优惠劵</span>
                    <strong class="iconfont icon-iconfontyoujiantou"></strong>
                </div>
            </div>



            <div class="wuliu" style="margin:6px 0;background:#fff;height:75px">
                <img src="static/254985.jpg" height=40 width=30 />
                <div class="xiao">
                    <span>我的赠品</span>
                    <strong class="iconfont icon-iconfontyoujiantou"></strong>
                </div>
            </div>







            </div>
       
    </div>
    
</template>


<script>


export default {
  name:"My", 
  data(){
      return{
          tit:'会员中心'
      }
  },
  mounted(){
      this.$emit('toparent',this.tit)
  } 
    
}
</script>










<style scopde='kkk'>
.my{background:#eeeeee;height: 100%}
img{display: block;border: none}
.warp{height: 166px;background:#fff}
.warp .box{height:96px;}


.box{display: flex;justify-content: space-around;align-items: center;}
.box figure{display: flex;flex-direction: column;align-items: center;}
.warp .wuliu{height: 70px;display: flex;justify-content:space-around;align-items: center}
.wuliu .xiao{width: 286px;display:flex;justify-content: space-between}
.xiao span{
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}

</style>


