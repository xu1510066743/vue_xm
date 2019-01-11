<template>
<div>
    <div class="warper">
        <div class="w-c">
            <span>业主收益高</span>
            <span>运营成本低</span>
            <span>用户口碑好</span>
        </div>
        <div class="w-d">
            <h2>
                做中国专业，高效的整栋资产<br/>管理平台
            </h2>
        </div>
    </div>

    <div class="w-f">
        <h3>电话咨询</h3>
        <button type="button" class="btn btn-warning" style="height:40px;">留下联系方式，成为或做伙伴
</button>
    </div>
    <h4>两种合作模式</h4>
    <div class='w-g'>
        <h5>委托管理</h5>
        <div class="w-g1">
            <span>将整栋或整层房屋资产委托给柚家借助平台优势</span>
            <span>高效运营，风险共存。平台收费低，业主收益</span>
            <span>高，入住率低于70%不收管理费</span>

        </div>
    </div>
    <div class='w-g'>
        <h5>租赁直营</h5>
        <div class="w-g1">
            <span>将整栋或整层房屋资产长期出租给柚家，柚家进 </span>
            <span>行整体规划与运营管理，提升物业价值。定时打</span>
            <span> 款，省心省时带来稳定收益。</span>
        </div>
    </div>
    <h4>两种合作模式</h4>
    <div class="w-h">
        <img src="static/b.jpg" alt="" width=312 height=140/>
        <div class="fix">
            <h4>北京柚家城市之光</h4>
             <p>企业员工首选的一战式服务公寓</p>

        </div>
    </div>
    <div class='w-h' style="margin:20px 0 10px 34px;">
         <img src="static/b.jpg" alt="" width=312 height=140/>
          <video width="312px" height="140px" class="shi" controls poster> 
              <source src="static/you.mp4" type="video/mp4"/>
         </video> 
    </div>
    <h6>北京Meeta柚家公寓</h6>
    <h4>资管新闻</h4>
    <div class="yang">
        <img src="static/b.jpg" alt="" width=102 height=80/>
        <div class="yang1">
            <p>柚家入选城市更新十佳案例，<br/>组里科技创新发展</p>
        </div>
    </div>
    <div class="yang">
        <img src="static/b.jpg" alt="" width=102 height=80/>
        <div class="yang1">
            <p>柚家入选城市更新十佳案例，<br/>组里科技创新发展</p>
        </div>
    </div>






</div>













    
</template>
<script>
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
$(function(){
    $('.w-h').hover(function(){
    $('.fix').show()
    },function(){
        $('.fix').hide()
    })

})




export default {
    name:'Hezu2',
    
}
</script>
<style scoped=''>
*{margin: 0;padding:0;}
.warper{height: 546px;background: paleturquoise;}
.w-c{color:#fff;  position: absolute;left: 22px;top: 216px;border:3px solid #fff;background: red;height: 160px;width: 149px;display: flex;justify-content: center;align-items: center;flex-direction: column;}
.w-c span{font: size 14px;font-family:Arial; }
.w-d{height: 100px;width:340px;background: coral;position: absolute;left:22px;top:396px;}
.w-d h2{
line-height: 26px;
color: rgba(255, 255, 255, 1);
font-size: 18px;
font-family: Microsoft Yahei;
border: 1px solid rgba(255, 255, 255, 0);
}
.w-f{height: 85px;background: cornflowerblue;display:flex;justify-content: space-around;align-items: center; }
.w-f h3{color: rgba(16, 16, 16, 1);font-size: 14px;height: 40px;width: 93px;border: 2px solid #101010;text-align: center;line-height: 40px;
font-family: Arial;}

h4{height: 40px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Arial;line-height: 40px;padding-left:32px; }
.w-g{margin: 15px 32px;  width:80%;  height: 100px;display: flex;justify-content: center;align-items: center;border: 2px solid #ddd;}
.w-g h5{width: 76px;height: 61px;text-align: center;line-height: 61px;}
.w-g1{width: 228px;display: flex;flex-direction: column;align-items:flex-start;}
.w-g1 span{
color: rgba(136, 136, 136, 1);
font-size: 10px;
text-align: left;
font-family: Microsoft Yahei;
}
.w-h{width: 312px;height: 140px;margin-left: 32px;position: relative;}
.fix{display:none;  width: 312px;height: 140px;background:skyblue;opacity: 0.5;position: absolute;left: 0;top: 0;}
.fix h4,.fix p{width: 200px;height: 30px;line-height:30px;}
.fix h4{position: absolute;left: 16px;top: 60px;
color: rgba(255, 255, 255, 1);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;

}
.fix p{position: absolute;left: 16px;top: 90px;font-size: 12px;
color: rgba(255, 255, 255, 1);
text-align: left;
font-family: Microsoft Yahei;}
.shi{position: absolute;left: 0;top: 0;}

h6{height:30px;text-align: center;line-height: 30px;
color: rgba(136, 136, 136, 1);
font-size: 14px;

font-family: Microsoft Yahei;
}

.yang{height:82px;width: 80%; display: flex;justify-content: space-around;align-items: center;margin: 20px 32px;}





</style>


