<template>
  <footer class="footer">
  <div class="foot-con">
	<div class="foot-con_2">

		<router-link to="/home" class="active" >
			<i class="navIcon home"></i>
			<span class="text">首页</span>
		</router-link>
		<router-link to="/category" class="active" >
			<i class="navIcon sort"></i>
			<span class="text">分类</span>
		</router-link>
		<router-link to="/shopcart" class="active" >
			<i class="navIcon shop"></i>
			<span class="text">购物车</span>
		</router-link>
		<router-link to="/userhome" class="active" >
			<i class="navIcon member"></i>
			<span class="text">我的</span>
		</router-link>
	</div>
  </div>
</footer>
</template>