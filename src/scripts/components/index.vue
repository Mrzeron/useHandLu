<template>
<div class="index-container"><div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide left" >
		<header>
			<img src="http://offtkz7wd.bkt.clouddn.com/img/logo.jpg" alt="#">
			<h3>倚马七纸</h3>
		</header>
		<ul>
			<li v-for="item in list"><img v-bind:src="item.img" ><span>{{item.name}}<span></li>
		</ul>
		<div class="setting"><img src="http://offtkz7wd.bkt.clouddn.com/img/menu_setting.png"><span>设置</span></div>
    </div>
    <div class="swiper-slide right" @click="hideMsg" >

    	<!-- 路由页面 -->
		<router-view></router-view>

		<header><img src="http://offtkz7wd.bkt.clouddn.com/img/logo.jpg" @click.stop="showMsg"></header>
    	<nav>
    		<ul>
    			<li v-for="item in nav_list" v-link="{path:item.path}" @click.stop="change_nav($index)">
    			<img v-show="cur==$index? true:false" v-bind:src="item.cli_img">
    				<img  v-show="cur!=$index" v-bind:src="item.img">
    				<span>{{item.title}}</span>
    			</li>
    		</ul>
    	</nav>
    </div>

  </div>
</div>
</div>

</template>
<script>
var main_swiper=null;
	export default{
		data(){
			return {
				cur:"0",
				list:[
				{	img:"http://offtkz7wd.bkt.clouddn.com/img/menu_friend_cycle.png",
					name:"我的动态"

				},
					{	img:"http://offtkz7wd.bkt.clouddn.com/img/menu_download.png",
					name:"我的下载"

				},
					{	img:"http://offtkz7wd.bkt.clouddn.com/img/menu_subscribe.png",
					name:"我的订阅"

				},
					{	img:"http://offtkz7wd.bkt.clouddn.com/img/menu_favorite.png",
					name:"我的收藏"

				}
				],
				nav_list:[
					{
						img:"http://offtkz7wd.bkt.clouddn.com/img/tab_news.png",
						cli_img:"http://offtkz7wd.bkt.clouddn.com/img/tab_news_checked.png",
						title:"资讯",
						path:'/index'
					},
					{
						img:"http://offtkz7wd.bkt.clouddn.com/img/tab_friend.png",
						cli_img:"http://offtkz7wd.bkt.clouddn.com/img/tab_friend_checked.png",
						title:"好友",
							path:'/index/friend'
					},
					{
						img:"http://offtkz7wd.bkt.clouddn.com/img/tab_discovery.png",
						cli_img:"http://offtkz7wd.bkt.clouddn.com/img/tab_discovery_checked.png",
						title:"发现",
							path:'/index/search'
					},
					{
						img:"http://offtkz7wd.bkt.clouddn.com/img/tab_me.png",
						cli_img:"http://offtkz7wd.bkt.clouddn.com/img/tab_me_checked.png",
						title:"我的",
							path:'/index/my'
					}

					]
			}


		},
		ready(){
			 main_swiper = new Swiper('.swiper-container', {
				slidesPerView:'auto',
				effert:"coverflow",
				initialSlide :2,
        click:true
			})
		},
		methods:{
			showMsg(){
				main_swiper.slideTo(0, 500, false)
			},
			hideMsg(){
				main_swiper.slideTo(1, 500, false)
			},
			change_nav(index){
				/*this.change(index)*/
				this.cur=index;
			}
		}
	}

</script>
