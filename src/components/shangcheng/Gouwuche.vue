<template>
    <div class="marker">
        <header>
            <em class="iconfont icon-left" style="width:30px;color:#0076FF" @click="fanhui()">&nbsp;Back</em>
            <span>{{tit}}</span>
            <em class="iconfont icon-fasong" style="width:30px;"></em>
        </header>



    <section>

        <ul class="warp1">
            <li>
                <input type="checkbox"/>
                <img src="static/a.jpg" />
                <div class="bos">
                    <h3>黛丽芙 基础款优质羽绒丝绵保温丝绒被秋冬被子</h3>
                    <button type="button" class="btn btn-danger btn-sm del">删除</button>
                    <div class="box2">
                        <form>
                            <button class="btn btn-sm">减</button>
                            <button class="btn btn-sm teshu">变化</button>
                            <button class="btn btn-sm">加</button>
                        </form>
                        <span>价格</span>
                    </div>
                </div>
            </li>


            <li>
                <input type="checkbox"/>
                <img src="static/a.jpg" />
                <div class="bos">
                    <h3>黛丽芙 基础款优质羽绒丝绵保温丝绒被秋冬被子</h3>
                    <button type="button" class="btn btn-danger btn-sm del">删除</button>
                    <div class="box2">
                        <form>
                            <button class="btn btn-sm">减</button>
                            <button class="btn btn-sm teshu">变化</button>
                            <button class="btn btn-sm">加</button>
                        </form>
                        <span>价格</span>
                    </div>
                </div>
            </li>
        </ul>
</section>
        <div class="warper1">
            <div>
            <input type="checkbox" class="you" value=""/>
            <span>全选</span>
            </div>
            <div class='con'>
            <h5>总计：</h5>
            <router-link to="/order" tag='span'>
            <button class="btn btn-info jiesun">去结算</button>
            </router-link>
            </div>



        </div>

        <footer>
            <router-link to='/home' tag='h5'>
            <figure>
				<span class="iconfont icon-yemian-copy-copy-copy"></span>
				<figcaption>首页</figcaption>
		  	</figure>
            </router-link>

            <router-link to='/gouwuche' tag='h5'>
                <figure>
				<span class="iconfont icon-gouwuche2"></span>
				<figcaption>购物车</figcaption>
		  	    </figure>
            </router-link>
              <router-link to='/my' tag='h5'>
              <figure>
                
                    <span class="iconfont icon-wodedangxuan"></span>
                    <figcaption>我的</figcaption>
		  	</figure>
              </router-link>
        </footer>
       
    </div>
    
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

export default {
  name:"Gouwuche",
  data(){
      return{
          tit:'购物车',
      }
  },
  methods:{
      fanhui(){
          this.$router.go(-1);
      },
  },
   mounted(){
      //this.$emit('toparent',this.tit)

  }
}
</script>










<style scoped>
.marker{height: 100vh;display: flex;flex-direction: column;}


*{margin: 0;padding: 0;} 

header{
      height:44px;background:#F7F7F7;display:flex;justify-content:space-between;align-items: center} 
header span{font-size:17px}

section{flex: 1;overflow: auto;position: relative;}
  
footer{display: flex;justify-content: space-around;align-items: center;height:44px;background:#F7F7F7; opacity: 0.8;}
footer figure{display: flex;flex-direction: column;align-items: center;}


.warp1 li{float: left;display:flex;height:95px;background: #fff;justify-content: space-around;align-items: center;border-bottom:1px solid #ddd;margin: 15px 20px;}
.bos{display: flex;flex-direction: column;padding-left:20px; }
.bos .box2{display: flex;justify-content: space-between}
img{display: block;border: none;width:80px;height: 80px;}
h3{font-size: 12px;width: 256px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
input[type="checkbox"]{width: 30px;height: 20px;}
.warper1{border-top:1px solid #ddd; height: 60px;display: flex;justify-content: space-between;align-items: center;}
.jiesun{width: 90px;height: 36px;}
.con{display: flex;align-items: center;}
.con h5{width: 67px;height: 18px;}
.you{margin-left:20px; }











.bos .del{width:40px;}
</style>


