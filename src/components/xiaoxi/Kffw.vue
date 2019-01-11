<template>
    <div class="hello">
        <div style="height:60px;display:flex;">
            <router-link class="kffw" to='/xiaoxi' tag='div' style="">
                <span class="iconfont icon-zuo" style="font-size: 20px;color:rgba(0,118,255,1);"></span>
                <span style="font-size: 20px;color:rgba(0,118,255,1);">Back</span>
            </router-link>
            <div class="kffw1">
               <span style="background-color: rgba(247, 247, 247, 0.8);
color: rgba(16, 16, 16, 1);
font-size: 14px;
font-family: Arial;">客服服务</span>



            </div>
            <div class="kffw2">
                <span class="iconfont icon-xiaoxi1"></span>
            </div>
        </div>
        <section>
           <div id="cont">

           </div>
        </section>
        <footer>
            <div style="width:20%;height: 45px;display: flex;justify-content: center;align-items: center">
                <span class="iconfont icon-xiaolian"></span>
            </div>
            <div style="width:60%;height: 45px;display: flex;justify-content: center;align-items: center">
                <input type="text" name="" id="txt" placeholder="没解决？就问小V吧">
            </div>
            <div style="width:20%;height: 45px;display: flex;justify-content: center;align-items: center">
                <span class="iconfont icon-jiahao" id="btn"></span>
            </div>          
        </footer>
    </div>
</template>
<script>
var cont1=document.getElementById('cont')
     var cont = $id("cont");
    console.log(cont1)
	// $id("btn").onclick=function(){
        
	// 	//实现用户的聊天发送功能
	// 	var myChat = cont.children[0].cloneNode(true);
	// 	myChat.children[1].innerHTML = txt.value;
	// 	cont.appendChild(myChat);
	// 	myChat.scrollIntoView();
		
	// 	//实现机器人的聊天发送功能
	// 	//ajax请求接口路径实现
	// 	var url = "http://www.tuling123.com/openapi/api";
	// 	var data = `key=2465e182e4154777a3a02da0ccaa6c88&userid=18&info=${txt.value}`;
	// 	ajaxGet( url , function(msg){
	// 		var json = JSON.parse( msg );
	// 		//创建机器人的聊天记录元素
	// 		var herChat = cont.children[1].cloneNode(true);
	// 		herChat.children[1].innerHTML = json.text;
	// 		cont.appendChild( herChat );
	// 		herChat.scrollIntoView();
	// 	},data )
		
	// 	txt.value = "";
	// }



export default {
    name:'Xiaoxi'
}


</script>
<style scopde=''>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;

}

.icon-xiaoxi1{font-size:25px;}
.icon-xiaolian,.icon-jiahao{font-size: 25px}
section{flex: 1;overflow: auto;}
footer{width: 100%;height: 45px;display: flex;justify-content: space-around;
background: #ccc;
}




.kffw{width:75px;height: 60px;display:flex;justify-content: space-around;align-items: center}


.kffw1{width:210px;height: 60px; display: flex;justify-content: center;align-items: center}
.kffw2{width:75px;height: 60px; display: flex;justify-content: center;align-items: center;}

</style>


