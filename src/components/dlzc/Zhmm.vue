<template>
    <div>
      <div class="zhmm2">
           <p>找回密码</p>
            <p>账号或密码错误</p>
           <input type="text" placeholder="请输入已绑定手机号">
           <input type="text" placeholder="请输入验证码">
           <input type="text" placeholder="请输入新密码">
           <input type="text" placeholder="请确认密码">
           <router-link to='' tag='button'>找回密码</router-link>
           <button>获取验证码</button>
       </div>
    </div>
</template>
<script>
export default {
    name:'Zhmm'
}
</script>
<style scopde=''>
.zhmm2{display: flex;flex-direction: column;}
.zhmm2 p:nth-of-type(1){background-color: rgba(255, 255, 255, 0);
color: rgba(83, 83, 83, 1);
font-size: 16px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
margin-top: 30px;margin-left: 44%}

.zhmm2 p:nth-of-type(2){
background-color: rgba(255, 255, 255, 0);
color: rgba(255, 86, 86, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
margin-top: 10px;margin-left: 15px;}





.zhmm2 input:nth-of-type(1){

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
.zhmm2 input:nth-of-type(2){

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

.zhmm2 input:nth-of-type(3){

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
.zhmm2 input:nth-of-type(4){

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
margin-top: 30px;margin-left: 20px
}
button:nth-of-type(2){position: absolute;
top:93px;left: 15px;
width: 111px;
height: 30px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);

}

</style>



