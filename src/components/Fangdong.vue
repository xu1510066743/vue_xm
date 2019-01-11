<template>
    <div class="mark">


        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <router-link to='/host' tag='span'><span>业主委托</span></router-link>
            <router-link to='/hezu2' tag='span'>
            <span>整栋合作</span>
            </router-link>
        </header>













        <section>
            <router-view @toparent='getdata'></router-view>


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
    name:'Fangdong',
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
    },
    
}
</script>
<style scopde=''>
*{margin:0;padding: 0;}
.mark{  height: 100vh;
  display: flex;
  flex-direction: column;}


  .router-link-active{
  color:black;
}
header{
      height:44px;background:#F7F7F7 80%;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
header span:last-child{color:#C8C4C4}

section{flex: 1;overflow: auto;position: relative;}
  
footer{display: flex;justify-content: space-around;align-items: center;height: 44px;}
footer figure{display: flex;flex-direction: column;align-items: center;}
footer figure span{font-size: 20px;}
footer figure figcaption{font-size: 14px;}




</style>


