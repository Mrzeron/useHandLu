<template>
<div class="friend-container">
	<header class="nav_header">
	<div class="fri_btns">
			<div v-for="items in menu">
				<button type="button"  v-show="cur==$index? true:false">{{items}}</button>
				<button type="button" v-show="cur!=$index?true:false" style="color:#fff" @click="changeIndex($index)">{{items}}</button>
				<img v-show="cur==$index? true:false" src="http://offtkz7wd.bkt.clouddn.com/img/pager_tab_selected.png"  class="fri_btns_select">	
				<img v-show="cur!=$index?true:false" src="http://offtkz7wd.bkt.clouddn.com/img/pager_tab.png"  class="fri_btns_select">	
			</div>
			
		</div>
		<div class="fri_menu">
			<img  src="http://offtkz7wd.bkt.clouddn.com/img/add_friend_btn_normal.png" @click="showmsg">
			<div class="fri_menu_list" v-show="menu_show" transition="fri_menu_show">
				<ul >
					<li v-for="items in menu_list" @click="click_hide"><img :src="items.img">{{items.title}}</li>
				</ul>
			</div>
		</div>
		
		
	</header>
		<div class="friend_body">
			<div class="friend_body_swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide fri_list">
					<form class="yo-search">
					    <label class="operation">
					        <span class="yo-ico">&#xf067;</span>
					        <input type="text" class="input" placeholder="搜索你的好友..." />
					    </label>
					</form>
					<div class="fri_aboout_msg">
						<div class="fri_about_left">
							好友动态
						</div>
						<div class="fri_about_right" ></div>

					</div>
					<div class="zm_fri_top" @click="changeList">
						<div class="zhangmeng_fri">
							<div class="zm_left">掌盟好友</div>
							<div class="zm_right">{{fri_num}}</div>
						</div>
						<ul class="zm_list" v-show="zm_listShow" transition="list_down">
							<li v-for="fri in fri_list"> 
								<img :src="fri.img">
								<div class="zmlist_title">{{fri.name}}</div>
								<div class="zm_state">
									<button @click.stop="">聊天</button>
									<span class="state">{{fri.state}}</span>
								</div>
							</li>
						</ul>
					</div>
			    </div>
			    <div class="swiper-slide fri_msg"> 
			    	<div v-show="fri_msg==0" class="msgs">暂无消息</div>
			    </div>			    
			  </div>
			</div>
		</div>
	<div>
</div>
</template>
<script>
var mySwiper=null;
	export default {
		data(){
			return{
				menu:["好友","消息"],
				fri_msg:0
				,
				cur:0,
				fri_num:0,
				menu_list:[{
					img:"http://offtkz7wd.bkt.clouddn.com/img/personalcenter_add.png",
					title:"发起群聊"
				},
				{
					img:"http://offtkz7wd.bkt.clouddn.com/img/add_new_friend.png",
					title:"添加好友"
				},{
					img:"http://offtkz7wd.bkt.clouddn.com/img/subscribe_friend.png",
					title:"好友订阅"
				}],
				fri_list:[],
				menu_show:false,
				zm_listShow:false
			}
		},
		ready(){
			var that=this;
			mySwiper = new Swiper('.friend_body_swiper-container', {
			onSlideChangeEnd(swiper){
				that.cur=swiper.activeIndex
			}
	
			})
			console.log("DOMReady");
				  this.$http.get('/rest/fri_msg').then((res) => {
				    
				    this.fri_list=res.data;
				    this.fri_num=res.data.length;
				    console.log(res.data)

				  }, (response) => {
				    
				    console.log("ajaxError")
				  });
			
		},
		methods:{
			showmsg(){
				this.menu_show=!this.menu_show;
			},
			changeIndex(index){
				this.cur=index;
				mySwiper.slideTo(index, 300, false);
			},
			click_hide(){
				this.menu_show=false;
			},
			changeList(){
				this.zm_listShow=!this.zm_listShow;
			}
		}
	
	}
</script>