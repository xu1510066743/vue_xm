<template>
    <div>
      <div class="dl1">
           <p>账号登录</p>
           <input type="text" placeholder="请输入用户名/手机号/邮箱" v-model='email'>
           <input type="text" placeholder="请输入密码" v-model='password'>
           <!-- <router-link to='/shouye' tag='button'>登录</router-link> -->
           <button @click='login()'>确定</button>
       </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { MessageBox } from 'mint-ui';
    import { Toast } from 'mint-ui';
export default {
    name:'Login',
     data(){
        return{
            email:'',
            password:'',
        }
        
    },
    methods:{
        login(){
            var _this=this
            axios({
                method:'post',
                url:'http://10.8.155.2:8081/house/login.do',
                params:{phone:_this.email,password:_this.password}
            }).then(function(data){

                 console.log(data.data)
                //   console.log(data.data.data.id)

                 if(data.data.code==0){
                     MessageBox('登录成功', '欢迎用户：'+data.data.data.password);
                     _this.$router.push({
                        path:'/shouye'
                    })
                 }else{
                //   MessageBox('请重新输入', '账号或密码错误');
                    Toast({
                        message: '账号或密码错误',
                        position: 'center',
                        duration: 3000
                    });
                 }
                
            })
        }
    },
}
</script>
<style scopde=''>
.dl1{display: flex;flex-direction: column;}
.dl1 p:nth-of-type(1){background-color: rgba(255, 255, 255, 0);
color: rgba(83, 83, 83, 1);
font-size: 16px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
margin-top: 30px;margin-left: 44%}

.dl1 input:nth-of-type(1){

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
.dl1 input:nth-of-type(2){

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

button{
width: 80px;
height: 30px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);
margin-top: 30px;margin-left: 237px
}
</style>



