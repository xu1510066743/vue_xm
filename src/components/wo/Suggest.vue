<template>
<div class="sug">
     <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>投诉建议</span>
            <em class="iconfont icon-i-xiaoxi" style="width:30px;"></em>
     </header>
     <section>
          <div class="sug1">
               <div class="sug2">
                    <img src="static/a.jpg" />
                    <span>我要投诉</span>
               </div>
               <h6></h6>
               <div class="sug2">
                    <img src="static/a.jpg" />
                    <span>我有建议</span>
               </div>
          </div>


          <div class="sug3">
               <h2>查看我的历史投诉信息</h2>
          </div>
          <div class="sug4">
               <h3>其他投诉信息</h3>
               <div class="sug-1">
                    <img src="static/a.jpg" />
                    <span>韩女士</span>
               </div>
               <p>韩女士反馈，今天中午有一批人看房，进门没有穿鞋套，之前看房的都有穿鞋套的，不穿很不卫生。</p>
               <p class="sug-2">解决方案：尊敬的客户您好，关于您的反馈，经核实确实属实，工作人员工作存在失误，公司已对相关负责人作出处罚。感谢您的反馈，我们将竭诚为您提供更好地服务与体验。</p>
          </div>
          <div class="sug4">
              
               <div class="sug-1">
                    <img src="static/a.jpg" />
                    <span>韩女士</span>
               </div>
               <p>韩女士反馈，今天中午有一批人看房，进门没有穿鞋套，之前看房的都有穿鞋套的，不穿很不卫生。</p>
               <p class="sug-2">解决方案：尊敬的客户您好，关于您的反馈，经核实确实属实，工作人员工作存在失误，公司已对相关负责人作出处罚。感谢您的反馈，我们将竭诚为您提供更好地服务与体验。</p>
          </div>
     </section>
     <footer>
          <div class="foo">
               点击查看更多
          </div>



     </footer>



</div>
    
</template>
<script>
export default {
     name:"Suggest",
     data(){
          return{

          }
     },
     methods:{
          fanhui(){
          this.$router.push({
               path:'/me'
          })     
          }
     }
     
   
   
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
.sug{height:100vh;display: flex;
  flex-direction: column;}
header{height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}
section{flex: 1;overflow: auto;}
.sug1{height: 105px;display: flex;justify-content: space-around;align-items: center;background: chocolate;}
.sug1 img{width: 55px;height: 55px;border-radius:50%; }
.sug2{height: 105px;display: flex;justify-content: center;align-items: center;flex-direction: column;}
.sug1 h6{width: 2px;height: 57px;background: #ddd;} 


.sug3{height: 66px;display: flex;justify-content: center;align-items: center;}

.sug3 h2{width: 80%;height: 30px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;line-height: 30px;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);
}



.sug4 img{height: 41px;width: 41px;border-radius:50%;margin:20px 0;  }
.sug-1 span{
color: rgba(136, 136, 136, 1);
font-size: 14px;
font-family: Microsoft Yahei;
}
.sug4{display: flex;justify-content: center;flex-direction: column;margin-left:8%; }


.sug-1{display: flex;align-items: center;}
.sug-1 span{padding-left: 10px; }
.sug3 h2{
width: 80%;
height: 30px;
color: rgba(0, 0, 0, 1);
font-size: 14px;
font-family: Microsoft Yahei;
}
.sug4 p{
width: 80%;
height: 53px;
color: rgba(136, 136, 136, 1);
font-size: 12px;
font-family: Microsoft Yahei;
}
.sug4 .sug-2{

width: 80%;
height: 85px;
background-color: rgba(247, 247, 247, 0.8);
color: rgba(136, 136, 136, 1);
font-size: 12px;
line-height: 17px;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}



footer{height:55px;display: flex;justify-content: center;align-items: center;}
.foo{width:40%;height:30px;border:1px solid #ddd;text-align: center;line-height:30px; }
</style>


