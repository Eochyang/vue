<template>
    <div>
        <div class="fanhui_cou">
	<div class="fanhui_1"></div>
	<!-- <div class="fanhui_ding">顶部</div> -->
</div>

<header class="header">
	<div class="fix_nav">
		<div style="max-width:768px;margin:0 auto;background:#000;position: relative;">
			<a class="nav-left back-icon" href="javascript:history.back();">返回</a>
			<div class="tit">商品详细</div>
		</div>
	</div>
</header>
<input type="hidden" id="prodId" value="663"/>
<input id="currSkuId" value="" type="hidden"/>
<div class="container">
    <div class="row white-bg">
        <div id="slide"> 
            <div class="bd">
                <div class="tempWrap" style="overflow:hidden; position:relative;">
                    <swipe class="my-swipe">
                        <swipe-item class="slide1" v-for="item of list.lbimg" :key="item" style="display: table-cell; vertical-align: middle; max-width: 768px;"><a href="#"><img :src="item" style="max-width:100vw;margin:auto;"></a></swipe-item>
                    </swipe>
                    
               </div>
            </div>
        </div>
    </div>
    <div class="row gary-bg">
         <div class="white-bg p10 details_con">
         <h1 class="item-name" id="prodName">{{list.name}}</h1>
         <ul>
			<li>
				<label>商城价格：</label>
				<span class="price"><span class="price" id="prodCash">{{list.newprice}}</span></span>
			</li>
            <li id="choose_0" index="0" >
					<label id="propName" propname="颜色">颜色：</label>
					<dl class="type" ref='aaa'>
                        <dd  v-for="item in list.type" :key="item">{{item}}<span></span></dd>
                    </dl>
				</li>
			  <li>
				<label>数量：</label>
				<div class="count_div" style="height: 30px; width: 130px;">
					<a href="javascript:void(0);" class="minus" ></a>
					  <input type="text" class="count" value="1" id="prodCount" readonly="readonly"/>
					<a href="javascript:void(0);" class="add" ></a>
				</div>
			</li>
			</ul>
		</div>
        <div id="goodsContent" class="goods-content white-bg">
			
            <div class="hd hd_fav">
                <ul>
                    <li class="on">图文详情</li>
                    <li class="">规格参数</li>
                    <li class="">评价(0)</li>
                </ul>
            </div>
			
            <div class="tempWrap" style="overflow:hidden; position:relative;">
            <div style="width: 2304px; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 200ms; transform: translateX(0px);" class="bd">
                <ul style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;" class="property">
                    <div class="prop-area" style="min-height:300px;overflow: hidden;">
                        <li v-for="item in list.detimg" :key="item">
                    	    <img :src="item" alt="" style="width:100vw"/>
                        </li>
                        </div>
                </ul>
                <ul class="txt-imgs" style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;">
                	<div class="desc-area" style="padding: 0px 10px 0 10px;">
	                <li style="height:30px;">
	                	<div id="ajax_loading" style="margin: 10px  auto 15px;text-align:center;"> <img src="../assets/images/loading.gif" style="width: auto; display: block;  margin: auto;"></div>
	                </li>
	                </div>
                </ul>
                <ul style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;" class="appraise" rel="1" status="1">
                	<div style="height:30px;">
	                	<div id="ajax_loading" style="margin: 10px  auto 15px;text-align:center;"> <img src="../assets/images/loading.gif" style="width: auto; display: block;  margin: auto;"></div>
	                </div>
                     <div class="wap_page" style="display: none;" onclick="next_comments(this)"><span>下一页</span></div>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>

<div class="fixed-foot">
	<div class="fixed_inner">
		<a class="btn-fav" href="javascript:void(0);" onclick="addInterest(this,'663');">
		<i class="i-fav"></i><span>收藏</span>
		</a>
		<a class="cart-wrap" href="/shopcart">
			<i class="i-cart"></i>
			<span>购物车</span>
			<span class="add-num" id="totalNum">0</span>
		</a>
		<div class="buy-btn-fix">
		    <a class="btn btn-info btn-cart"  onclick="addShopCart();" href="javascript:void(0);">加入购物车</a>
		    <a class="btn btn-danger btn-buy" onclick="buyNow();" href="javascript:void(0);">立即购买</a>
		</div>
	</div>
</div>
    </div>
</template>
<style type="text/css">
.details_con li .tb-out-of-stock{
border: 1px dashed #bbb;
color:#bbb;
cursor: not-allowed;
}
.no-selected{
background: #ffe8e8 none repeat scroll 0 0;
border: 2px solid #be0106;
margin: -1px;
}
</style>
<script>
import '../assets/css/productDetail.css';
import TouchSlide from '../assets/js/TouchSlide.js';
export default {
    data(){
        return {
            list:{}
        }
    },
    mounted(){
        $(".type").children().eq(0).addClass("check")
        $('.details_con .minus,.cart_count .minus').click(function(){
                var _index=$(this).parent().parent().index()-1;
                var _count=$(this).parent().find('.count');
                var _val=_count.val();
                if(_val>1){
                    _count.val(_val-1);
                    $('.details_con .selected span').eq(_index).text(_val-1);
                    
                }
                if(_val<=2){
                    $(this).addClass('disabled');
                }
                
            });

            // 详情数量添加
            $('.details_con .add,.cart_count .add').click(function(){
                var _index=$(this).parent().parent().index()-1;
                var _count=$(this).parent().find('.count');
                var _val=_count.val();
                $(this).parent().find('.minus').removeClass('disabled');
                _count.val(_val-0+1);
                $('.details_con .selected span').eq(_index).text(_val-0+1);
                
            });
            
            //详情属性选择
            this.$refs.aaa.addEventListener('click',function(e){
                var target = e.target;
                if(target.tagName == "DD"){
                    clickChoose(target);
                }
            })

            function clickChoose(object){
            //---------------------------------------------------------------------- 输出语句
            //console.debug("clickChoose 被调用到。");
            
            if (!$(object).hasClass('attr_sold_out')) {
                $(object).addClass('check').siblings().removeClass('check');
            }
            
            var chooseCount = $(object).parents("li").attr("index");
        }
    
        let _id = this.$route.params.goodsId;
        axios({
            url:'/data/classify.data'
        }).then(res=>{
            res.data.forEach(ele => {
                if(ele.list){
                    ele.list.forEach(e=>{
                        if(e.goodsId == _id){
                            this.list = e;
                        }
                    })
                }
			});
        })
    }
}
</script>

<style>
    .my-swipe {
        height: 320px!important;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    
</style>

