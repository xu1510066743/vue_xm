<template>
    <div class="qing">
        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>个人空间</span>
            <em class="iconfont icon-i-xiaoxi" style="width:30px;"></em>
        </header>
        <setion>
            <div class="q-ve"> 
                <div class="q-ve1">
                    <img src="static/a.jpg" />
                </div>
                <span>柚家客3d67</span>
            </div>
            <div class="que">
                <figure>
                    <div class="que1"></div>
                    <figcaption>收藏</figcaption>

                </figure>

            </div>



        </setion>
        
    </div>
</template>
<script>
export default {
    name:'Me',
    data(){
        return{

        }
    },
    methods:{
    fanhui(){
    this.$router.go(-1)
    },
   
    },
    mounted(){

    }
}
</script>
<style scopde=''>
.qing{height: 100vh;display: flex;flex-direction:column;}
header{height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
setion{flex: 1;overflow:auto;}
.q-ve{height:55px;background: coral;display: flex;justify-content: flex-start;align-items: center;}
.q-ve .q-ve1{width:55px ;height:55px ;border-radius:50%;margin: 0 20px;}
.q-ve1 img{width:55px ;height:55px ;border-radius:50%;}

.que1

</style>


