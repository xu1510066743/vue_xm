<template>
<div>
    <!-- <van-cell-group>
    <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        icon="question-o"
        placeholder="请输入用户名"
        @click-icon="$toast('question')"
    />

    <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
    />
    </van-cell-group>
    <van-button type="warning" @click="login()">登陆成功</van-button> -->
</div>
    
</template>
<script>
export default {
    name:'Login2',
    data(){
        return{
        username:'',
        password:''
        }
    },
    mothods:{
        login(){
            this.$store.commit('login',this.username)
        }
        
    }

    
}
</script>
<style scoped>

</style>


