<template>
    <div class="marker">
        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>地图</span>
            <em style="    width: 30px;"></em>
        </header>
        <section>
           <div id="allmap" style="height:100%">


           </div>








        </section>












        <footer>
            <router-link to='/shouye' tag='p'>
            <figure>
                <span class="iconfont icon-index"></span>
                <figcaption>首页</figcaption>
            </figure>
            </router-link>
            <router-link to='/xiaoxi' tag='p'>
                <figure>
                <span class="iconfont icon-i-xiaoxi"></span>
                <figcaption>消息</figcaption>
                </figure>
            </router-link>
            <router-link to='/shangcheng' tag='p'>
                <figure>
                <span class="iconfont icon-iconshangcheng"></span>
                <figcaption>商城</figcaption>
                </figure>
            </router-link>
            <router-link to='/fangdong' tag='p'>
                <figure>
                <span class="iconfont icon-fangdong"></span>
                <figcaption>房东</figcaption>
                </figure>
            </router-link>
            <router-link to='/me' tag='p'>
                <figure>
                <span class="iconfont icon-mine-gray"></span>
                <figcaption>我的</figcaption>
                </figure>
            </router-link>
                
        </footer>
    </div>
</template>
<script>


export default {
    name:'Map',
    data(){
        return{
            tit:''
        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1)
        },
        ready: function(x, y) {
        var map = new BMap.Map('allmap')//显示标签
        var point = new BMap.Point(x, y)
        
        map.addControl(new BMap.MapTypeControl())
        map.enableScrollWheelZoom(true)//启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
        map.enableDoubleClickZoom(true)
        var marker = new BMap.Marker(point)
      
        
        map.addOverlay(marker)
 
        map.centerAndZoom(point, 15)// 初始化地图,设置城市和地图级别。
        map.centerAndZoom(point, 14)// 初始化地图,设置城市和地图级别。
    }
    },
    mounted(){
      //this.ready(x,y)
      this.ready(120,30)
         
  }
}
</script>










<style scopde=''>
*{margin: 0;padding: 0;}

.marker{  height: 100vh;
  display: flex;
  flex-direction: column;}
  .router-link-active{
  color:skyblue;
}
header{
      height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}

section{flex: 1;overflow: auto;position: relative;}
  
footer{display: flex;justify-content: space-around;align-items: center;height:44px;background:#F7F7F7; opacity: 0.8;}
footer figure{display: flex;flex-direction: column;align-items: center;justify-content:center;}

</style>


