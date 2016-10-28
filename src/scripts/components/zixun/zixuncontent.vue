
<template>
<div id="zixun-content" v-on:click="fenxianghide">
	<div class="header">

		<span class="back" v-on:click="backPage">
			<img src="http://127.0.0.1/images/nav_back_normal.png">
		</span>
		<span class="title">资讯详情</span>
		<span class="more" v-on:click.stop="fenxianghideshow"><img src="http://127.0.0.1/images/menu_more.png"></span>
	</div>

	<iframe v-bind:src="iframeurl"></iframe>

	<div class="footer">
		
		<!-- 底部的评论滚动 -->
		<div class="swiper-container conSwiper">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for=" com in comment">
		        	<img v-bind:src="com.img">
		        	<span>{{com.cat}}</span>
		        </div>
		    </div>
		</div>

		<div class="comment" v-link="{path:'/index/zixun/comment'}">
			<img src="http://127.0.0.1/images/news_comments_num.png">
		</div>	
		<div class="editor" v-on:click="editorShow(false)">
			<img src="http://127.0.0.1/images/news_comment_publish_icon.png">
		</div>
		
		<!-- 评论编辑框 -->
		<div v-bind:class="mask" v-on:click="editorShow(true)">
			<div class="comment-editor" v-on:click.stop>
				<span><input type="text" /></span>
				<span>
					<span> <input type="checkbox" name="" />同步到好友动态</span>
					<span class="fabiao" v-on:click="editorShow(true)">发表</span>
				</span>
			</div>
		</div>
		
		
		<!-- 分享 -->
		<div class="fenxiang" v-bind:class="hide" v-on:click.stop>
			<div >分享到</div>
			<div class="con">
				<span>
					<img src="http://127.0.0.1/images/btn_zm.png" alt="" />
					<i>掌盟好友</i>
				</span>
				<span>
					<img src="http://127.0.0.1/images/btn_favor_normal.png" alt="" />
					<i>好友动态</i>
				</span>
				<span>
					<img src="http://127.0.0.1/images/btn_wx_friends.png" alt="" />
					<i>朋友圈</i>
				</span>
				<span>
					<img src="http://127.0.0.1/images/btn_wx.png" alt="" />
					<i>微信好友</i>
				</span>
				<span>
					<img src="http://127.0.0.1/images/btn_qq.png" alt="" />
					<i>手机QQ</i>
				</span>
				<span>
					<img src="http://127.0.0.1/images/btn_qq_qzone.png" alt="" />
					<i>QQ空间</i>
				</span>
				<span>
					<img src="http://127.0.0.1/images/btn_video_normal.png" alt="" />
					<i>新浪微博</i>
				</span>
			</div>
			
			<span class="backcolor">收藏</span>
			<span v-on:click="fenxianghide">取消</span>
			
		</div>
	</div>
</div>


	
</template>


<script type="text/javascript">

var that;

export default {
	data: function(){
		return {
			iframeurl: '',
			hide: 'hide',
			mask: 'none',
			comment: [
				{
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				},
				{
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				},
				{
					img: 'http://127.0.0.1//images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				},
				{
					img: 'http://127.0.0.1//images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				},
				{
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				},
				{
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				}
			]
		};
	},
	ready: function() {
		that = this;
		this.iframeurl =  this.$route.query.url ;
		console.log( this.$route.query );

		var conSwiper = new Swiper('.conSwiper',{
			direction :'vertical',
			autoplay: 2000,
			speed: 300
		});
		
	},
	methods: {
		backPage:function(	){
			console.log( window);
			history.go(-1);
		},
		editorShow(hide){
			this.mask =  hide ? 'none' : this.mask == 'none'? 'yo-mask': 'none'; 
		},
		fenxianghideshow(){
			this.hide = this.hide == 'hide' ? '' : 'hide';
		},
		fenxianghide( ){
			this.hide = 'hide';
		}
	}

}	
</script>


