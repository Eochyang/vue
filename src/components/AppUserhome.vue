<template>
<div class="maincontainer">
<div class="container" style="max-width:768px;margin:0 auto;">
	<div class="row">
	<a href="#">
		<div class="member_top member_top_1">
			<div class="member_top_bg"><img src="../assets/images/member_bg.png"></div>
			<div class="member_m_pic member_m_pic_1">
				
					<img class="img-circle" src="../assets/images/noavatar.png">
				
        			</div>
			<div  class="member_m_z member_m_z_1">
				<div class="member_m_x">{{user}}</div>
				</div>
			<router-link to="/login">
			<div class="member_m_r">登录&gt;
			</div>
			</router-link>
    </div>
  </a>
		<div class="member_mp_img" data-toggle="modal" data-target="#myModalmin" data-title="我的名片" data-tpl="mp"><img src="../assets/images/member_mp_img.png"></div>
		<div class="list-group mb10">
			<a href="/p/userOrder" class="list-group-item tip">
				<div class="list_group_img">
				<img src="../assets/images/member_img16.png"></div>
				我的订单
				<span class="gary pull-right">查看全部</span>
			</a>
			<div class="list-group-item p0 clearfix">
				<div class="col-xs-3 p0">
					<a class="order_tab_link" href="/p/userOrder?state_type=1">
						<em class="order_img">
						<img src="../assets/images/order_bg_3.png"></em>待付款	
						</a>
				</div>
				<div class="col-xs-3 p0">
					<a class="order_tab_link" href="/p/userOrder?state_type=2">
						<em class="order_img">
						<img src="../assets/images/order_bg_2.png"></em>待发货
						</a>
				</div>
				<div class="col-xs-3 p0">
					<a class="order_tab_link" href="/p/userOrder?state_type=3">
						<em class="order_img">
						<img src="../assets/images/order_bg_1.png"></em>待收货
						</a>
				</div>
				<div class="col-xs-3 p0">
					<a class="order_tab_link" href="/p/userOrder?state_type=4">
						<em class="order_img">
						<img src="../assets/images/order_bg.png"></em>已完成
						</a>
				</div>
			</div>
		</div>
		<div class="list-group mb10 member_list_group clearfix">
			<a href="/p/collect" class="list-group-item col-xs-4">
				<div class="m_img"><img src="../assets/images/order_bg_5.png"></div>
				<p class="m_name">我的收藏</p>
				<span class="red">0</span>
			</a>
			<a href="/p/userComments" class="list-group-item col-xs-4">
				<div class="m_img"><img src="../assets/images/order_bg_8.png"></div>
				<p class="m_name">我的评论</p>
				<span class="red">&nbsp;&nbsp;</span>
			</a>
			<a href="/p/inbox" class="list-group-item col-xs-4">
				<div class="m_img"><img src="../assets/images/order_bg_4.png"></div>
				<p class="m_name">收件箱</p>
				<span class="red">&nbsp;&nbsp;</span>
			</a>

			<a href="/p/systemMessages" class="list-group-item col-xs-4">
				<div class="m_img"><img src="../assets/images/order_bg_7.png"></div>
				<p class="m_name">系统消息</p>
				<span class="red">&nbsp;&nbsp;</span>
			</a>
			
		</div>
				
		<div class="list-group mb10">
			<a href="/p/help" class="list-group-item tip">
				<div class="list_group_img"><img src="../assets/images/order_bg_10.png"></div>
				常见问题
			</a>
			<a href="/p/feedbacks" class="list-group-item tip">
				<div class="list_group_img"><img src="../assets/images/order_bg_9.png"></div>
				意见反馈
			</a>
		</div>
		
	</div>
</div>
<div style="display: none;" class="modal fade" id="myModalmin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
      	<form class="form-horizontal" role="form" data-method="formAjax">
	         <div class="modal-header member_tc_top">
	            <button type="button" class="close member_tc_xx" data-dismiss="modal" aria-hidden="true">×</button>
	            <h4 class="modal-title" id="myModalLabel">&nbsp;&nbsp;</h4>
	         </div>
			 <div style="overflow:hidden;width: 100%;padding-top: 20px;">
				<div style="">
					 <div class="member_mp_t_img" >
					 	<img src="../assets/images/noavatar.png">
		        			</div>
					 <div class="member_mp_t_m">萧雅哲</div>
					 <div class="member_mp_t_m_m">
						  	  <img src="img/a909bfc1-cada-4008-81c0-556ff86aace1.jpg">
						  </div>
						  <div class="member_mp_t_tit">用微信扫一扫二维码，成为我的粉丝</div>
					  </div>
			 </div>
			 <div style="height:60px;"></div>
         </form>
      </div>
	</div>
</div>
<footer class="footer">
  <div class="foot-con">
	<div class="foot-con_2">
		<a href="index.html">
			<i class="navIcon home"></i>
			<span class="text">首页</span>
		</a>
		<a href="category.html">
			<i class="navIcon sort"></i>
			<span class="text">分类</span>
		</a>
		<a href="shopcart.html">
			<i class="navIcon shop"></i>
			<span class="text">购物车</span>		
		</a>
		<a href="userhome.html" class="active">
			<i class="navIcon member"></i>
			<span class="text">我的</span>
		</a>
	</div>
  </div>
</footer>
</div>
</template>
<script>
import '../assets/js/global.js';
export default {
	data(){
		return {
			user:''
		}
	},
	mounted(){
		if($.getCookie("user")){
			this.user = $.getCookie("user");
		}else{
			this.user = "未登录";
		}
		
	}
}
</script>



