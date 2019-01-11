<template>
<div class="alipy">
        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>支付</span>
            <em class="iconfont" style="width:30px;"></em>
        </header>
        <section>
            <div class="way">
                <p>支付方式</p>
            </div>
            <div>
            <div class="meth">
                    <em class="iconfont icon-weixin">&nbsp;&nbsp;微信</em>
                    <span style="width:20px"></span>
                    <p class=" var"></p>
            </div>
            <div class="meth">
                    <em class="iconfont icon-umidd17">&nbsp;&nbsp;支付宝</em>
                    <span style="width:20px"></span>
                    <p></p>
            </div>
                    <div class="meth">
                    <em class="iconfont icon-creditcard">&nbsp;&nbsp;信用卡</em>
                    <span style="width:20px"></span>
                    <p></p>
            </div>
            </div>
        </section>

            <footer>
                <span>合计:￥1130</span>
                
                <h2>
                    <router-link to="alipy" tag="span">
                    立即付款
                    </router-link>
                </h2>
            
            </footer>


</div>
    
</template>
<script>
import $ from 'jquery'
$(function(){
    $('.meth p').click(function(){
    $(this).addClass('var').parent().siblings().find('p').removeClass('var')
})





})


export default {
    name:"Alipy",
    methods:{
        fanhui(){
        this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
*{margin: 0;padding: 0;} 
.alipy{height:100vh;display: flex;flex-direction: column;}
header{height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
section .way{height: 60px;display: flex;align-items: center;justify-content: flex-start;background: coral;}
.way p{margin-left:10px;}


.meth{height: 60px;background:#fff;display: flex;justify-content: space-around;align-items: center;}
.meth em{font-size:14px; }
.meth p{width:25px;height: 25px;border: 1px solid #ddd;border-radius: 50%;}
.var{background:red;}
section{flex: 1;}


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


