<template>
    <div>
       <div class="zc1">
           <p>您好</p>
           <p>欢迎来到柚家，请输入注册信息</p>
           <input type="text" placeholder="请输入用户名/手机号/邮箱" v-model='phone'>
           <input type="text" placeholder="请输入密码/密码错误请重新输入" v-model='password'>
           <input type="text" placeholder="再次确认密码">
           <!-- <router-link to='/login' tag='button'>确定</router-link> -->
           <button @click='register()'>确定</button>
       </div>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    name:'Register',
    data(){
        return{
            phone:'',
            password:'',
        }
        
    },
    methods:{
        register(){
            var _this=this
            axios({
                method:'post',
                url:'http://10.8.155.2:8081/house/save.do',
                params:{phone:_this.phone,password:_this.password}
            }).then(function(data){
                console.log(data.data)
                console.log(data.code)
                if(data.data.code==0){
                    // location.href='/login'
                    alert('注册成功')
                       _this.$router.push({
                        path:'/login'
                    })
                }else{
                    alert('请重新注册')
                }
            })
        }
    },
    mounted(){
        // console.log(this.$route.params.id)
        
    }
}
</script>
<style scopde=''>
.zc1{display: flex;flex-direction: column;}
.zc1 p:nth-of-type(1){background-color: rgba(255, 255, 255, 0);
color: rgba(83, 83, 83, 1);
font-size: 16px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
margin-top: 50px;margin-left: 15px}
.zc1 p:nth-of-type(2){
background-color: rgba(255, 255, 255, 0);
color: rgba(83, 83, 83, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
margin-top: 10px;margin-left: 15px
}
.zc1 input:nth-of-type(1){

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
.zc1 input:nth-of-type(2){

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
.zc1 input:nth-of-type(3){

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



