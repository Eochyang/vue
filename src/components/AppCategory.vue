<template>
    <div>
        <header class="header">
            <div class="fix_nav">
                <div class="nav_inner">
                    <a class="nav-left back-icon" href="javascript:history.go(-1);">返回</a>
                    <div class="tit">分类</div>
                    <div class="sousuo" id="sousou" @click="show"><img src="../assets/images/sou.png"></div>
                </div>
            </div>
	    </header>
        <div style="overflow: hidden;position: fixed;width: 100%;z-index: 10000;top:0px;">
            <div class="order_top_count" style="display:none;">
                <div class="order_top">
                    <div class="order_a_l">
                        <div id="nav-left_ll" @click="hide"><img src="../assets/images/order_top_l.png"></div>
                    </div>
                    <div class="order_sou">
                        <form action="/list" method="get" id="searchform" name="searchform">
                            <input name="keyword" id="keyword" placeholder="搜索商品" type="text" value="">
                            <span class="pro_sou" style="cursor: pointer;" @click="searchproduct"><img src="../assets/images/Search.png"></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
			<div class="row" id="row_5">
				<div class="sort-arat" style="margin-top: 10px;">
					<ul>
						<router-link tag="li" :to="'/list/'+item.ClassifyId" v-for="item of list" :key="item.id" >
							<img alt="图片大小为100*100" style="width:initial;height:100px;" :src="item.img">
							<div style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;">{{item.title}}</div>
						</router-link>
					</ul>
				</div>

				<div class="mt10 white-bg">
					<h4 class="sort-tit">品牌分类</h4>
					<div class="sort-arat brand-areat">
						<ul>
							<router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/886a68b6-f0aa-41cd-ad89-757c427a33c9.jpg" style="height: 39px;" />
							</router-link>
							<router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/899329e3-9ec3-466b-856f-15f2a91b72a4.jpg" style="height: 39px;" />
							</router-link><router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/276aed28-5c4c-4ded-9070-59719e583ee5.jpg" style="height: 39px;" />
							</router-link><router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/01d5dc75-9e5d-405f-bf93-5793fec72e24.jpg" style="height: 39px;" />
							</router-link>
							<router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/a5b3890a-7d78-4bac-be54-45febc984835.jpg" style="height: 39px;" />
							</router-link><router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/e6657ca7-c4c5-43fc-9bd6-29999102fc61.jpg" style="height: 39px;" />
							</router-link>

							<router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/7865e470-0296-4f6b-98aa-30ab9824358d.jpg" style="height: 39px;" />
							</router-link><router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/b5804b78-d14c-4e34-bd39-244183f92997.jpg" style="height: 39px;" />
							</router-link><router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/ee767da6-119b-4463-a376-72eb0f495629.png" style="height: 39px;" />
							</router-link>
							<router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/917b4ded-1980-4602-8ad6-a5fa95a9b3b9.jpg" style="height: 39px;" />
							</router-link>
							<router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/ef8d9883-7711-4142-8533-5d7cf91082e4.png" style="height: 39px;" />
							</router-link>
							<router-link tag="li" to="/list">
								<img alt="图片大小为200*105" src="../assets/img/a265b462-4d22-4914-951b-4068d533be6b.png" style="height: 39px;" />
							</router-link>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	data(){
		return {list:[]}
	},
	mounted(){
		axios({
			url:'/data/classify.data'
		}).then(res=>this.list=res.data)
	},
	methods:{
		show(){
			$(".order_top_count").show();
		},
		hide(){
			$(".order_top_count").hide();
		},
		searchproduct(){
			var keyword = document.getElementById("keyword").value;
			if(keyword == undefined || keyword==null ||keyword ==""){
				alert("请输入搜索关键字！");
				return false;
			}
			document.getElementById("searchform").submit();
		}
	}
}
</script>


