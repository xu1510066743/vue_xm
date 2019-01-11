<template>
    <div class="hello">
            <header style="height: 180px;display: flex;flex-direction: column;">
                <div class="header-t"  >
                    <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                    <router-link to='/fuwu' tag='span' style="font-size: 20px;color:rgba(0,118,255,1);">Back</router-link>
                </div>
                <div class="header-b">
                    <router-link to='/mbxb' tag='p'>面包小搬</router-link>
                    <router-link to='/jbzb' tag='p'>金杯中搬</router-link>
                    <router-link to='/xhdb' tag='p'>厢货大搬</router-link>
                    <router-link to='/jzbj' tag='p'>精致搬家</router-link>
                    <router-link to='/qybj' tag='p'>企业搬家</router-link>
                </div>
            </header>
            <section>
               <router-view></router-view>
            </section>
            <footer>
                <button>单次预约</button>
            </footer>        
    </div>
</template>
<script>

export default {
    name:'Banjia',
    methods:{
        fanhui(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scopde=''>

.hello{display: flex;flex-direction: column;height: 100vh;}

section{flex: 1;}

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
.header-b{display: flex;justify-content: space-around;width:100vw;height: 50px;}
.header-b p{width: 74px;
line-height: 50px;
height: 30px;
color: rgba(0, 0, 0, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);}
 .header-b p:hover{color: red;} 
</style>










