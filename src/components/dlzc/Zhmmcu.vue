<template>
    <div>
      <div class="zhmm1">
           <p>账号登录</p>
           <input type="text" placeholder="请重新输入账号">
           <input type="text" placeholder="请输入密码">
           <router-link to='/zhmm' tag='button'>找回密码</router-link>
           <router-link to='/login' tag='button'>登录</router-link>
       </div>
    </div>
</template>
<script>
export default {
    name:'Zhmmcu'
}
</script>
<style scopde=''>
.zhmm1{display: flex;flex-direction: column;}
.zhmm1 p:nth-of-type(1){background-color: rgba(255, 255, 255, 0);
color: rgba(83, 83, 83, 1);
font-size: 16px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
margin-top: 30px;margin-left: 44%}

.zhmm1 input:nth-of-type(1){

width: 340px;
height: 30px;
background-color: rgba(255, 255, 255, 0);
color: rgba(202, 202, 202, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: none;
border-bottom:1px solid #ccc;
margin-top: 30px;margin-left: 15px;
padding-left: 8px
}
.zhmm1 input:nth-of-type(2){

width: 340px;
height: 30px;
background-color: rgba(255, 255, 255, 0);
color: rgba(202, 202, 202, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: none;
border-bottom:1px solid #ccc;
margin-top: 10px;margin-left: 15px;
padding-left: 8px
}

button:nth-of-type(1){
width: 80px;
height: 30px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);
margin-top: 10px;margin-left: 20px
}
button:nth-of-type(2){
width: 80px;
height: 30px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);
margin-top: 20px;margin-left: 237px
}
</style>



