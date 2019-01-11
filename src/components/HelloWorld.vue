<template>
  <div class="hello">
   <header style="background:#fff;">
     <div class="foot_l">
         <span>北京</span>
         <span class="iconfont icon-xiangxia" style="margin-left:8px"></span>
     </div>
     
      <div class="foot_c">
        <input type="text" name="" id="">
        <span class="iconfont icon-sousuo" style="position: absolute;left: 9px;top: 8px;font-size:11px;"></span>
        <span class="iconfont icon-cuowu" style="position: absolute;left: 210px;top: 8px;font-size:11px;"></span>
      </div>
      <div class="foot_r">
        <span class="iconfont icon-xiaoxi1"></span>
      </div>
      
   </header>


   
   <section>
     <router-view></router-view>
   </section>


   <footer>
     <router-link to='/shouye' tag='p'>
        <figure>
				<span class="iconfont icon-shouye"></span>
				<figcaption>首页</figcaption>
		  	</figure>
     </router-link>
     <router-link to='/xiaoxi' tag='p'>
        <figure>
          <span class="iconfont icon-xiaoxi"></span>
          <figcaption>消息</figcaption>
        </figure>
     </router-link>
     <router-link to='/shangcheng' tag='p'>
        <figure>
          <span class="iconfont icon-shangcheng2"></span>
          <figcaption>商城</figcaption>
        </figure>
     </router-link>
     <router-link to='/fangdong' tag='p'>
        <figure>
          <span class="iconfont icon-lianxifangdong"></span>
          <figcaption>房东</figcaption>
        </figure>
     </router-link>
     <router-link to='/me' tag='p'>
        <figure>
          <span class="iconfont icon-wo2"></span>
          <figcaption>我的</figcaption>
        </figure>
    </router-link>
		
			
			
			
   </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped=''>
.router-link-active{
  color: #fff;
}

.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section{
  flex: 1;overflow: auto;

}
footer{
  height: 60px;background: #ccc;
  
}
header{height: 60px;}

footer{display: flex;justify-content: space-around;align-items: center;}
footer figure{display: flex;flex-direction: column;align-items: center;}
footer figure span{font-size: 20px;}
footer figure figcaption{font-size: 14px;}

header{display: flex;justify-content: space-around;align-items: center}
.foot_l{width: 65px;height: 30px;line-height: 30px;display: flex;}
.foot_c{width: 230px;height: 27px;position: relative;}
.foot_c input{width: 220px;height: 27px;border: none;background: #ccc;padding-left: 10px}
.foot_r{width: 24px;height: 24px;}
.foot_r span{font-size: 24px;}
</style>
