<template>
    <div class="marker">
        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>{{tit}}</span>
            <em class="iconfont icon-fasong" style="width:30px;"></em>
        </header>
        <section>
           <router-view @toparent='getdata'></router-view>










        </section>












        <footer>
            <router-link to='/home' tag='h5'>
            <figure>
				<span class="iconfont icon-yemian-copy-copy-copy"></span>
				<figcaption>首页</figcaption>
		  	</figure>
            </router-link>

            <router-link to='/gouwuche' tag='h5'>
                <figure>
				<span class="iconfont icon-gouwuche2"></span>
				<figcaption>购物车</figcaption>
		  	    </figure>
            </router-link>
              <router-link to='/my' tag='h5'>
              <figure>
                
                    <span class="iconfont icon-wodedangxuan"></span>
                    <figcaption>我的</figcaption>
		  	</figure>
              </router-link>
        </footer>
    </div>
</template>
<script>


export default {
    name:'Shangcheng',
    data(){
        return{
            tit:''
        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1)
        },
        getdata(msg){
            this.tit=msg
        }
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
footer figure{display: flex;flex-direction: column;align-items: center;}

</style>


