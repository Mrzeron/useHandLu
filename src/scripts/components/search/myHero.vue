<template>
	<div class="myHero">
		<div class="searchBox">
			<div>
				<form class="yo-search">
					<label class="operation">
					    <span class="yo-ico">&#xf067;</span>
					    <input type="text" class="input" placeholder="输入搜索关键字..." v-model='searchText' />
					</label>
				</form>
			</div>
		</div>
		<div class="assets">
			<span>英雄资产(黑色玫瑰)</span>
			<span>你共有10个英雄,价值22350金币</span>
		</div>
		<div id="wrapper">
			<ul class="myHeroList">
				<li v-for="myHero in myHeroData | filterBy searchText">
				    <img v-bind:src="myHero.img">
				    <div>
					    <div class="infoMain">
							<span class="nick">{{myHero.nick}}</span>
							<span class="name">{{myHero.name}}</span>	
					    </div>
					    <div class="infoIntro">
							<span class="useOcscasionCN">{{myHero.useOccasionCN}}</span>
					    	<span class="useCount">{{myHero.useCount}}</span>
					    	<span class="winCN">{{myHero.winCN}}</span>
					    	<span class="winPercent">{{myHero.winPercent}}</span>
					    </div>
				    </div>
				</li>
				<div class="attention">
					<span>说明:英雄使用数据来自<span class="lolColor">LOL官方助手</span></span>
				<span>从2013年10月开始积累，不计算人机和自定义模式</span>
			</ul>
		</div>
		</div>
	</div>
</template>
<script>
	let router = new VueRouter();
	import VueSearchBox from '../../plugins/vue-searchBox';
	Vue.use(VueSearchBox);
	var myScroll;
	
	export default {
		data(){
			return {
				myHeroData:[],
				searchText:''
			}
		},
		ready:function(){
			this.$http.get('/mock/search/myHero.json').then((res)=>{
				//console.log(res.body);
				this.myHeroData = res.body;
				setTimeout(() => {
						myScroll.refresh();
					}, 500);
			}, (res)=>{
				console.log(res);
			});
			myScroll = new IScroll('#wrapper',{
				scrollX:true,
				scrollY:true,
				mouseWheel: true,
	        	scrollbars: false
			});
			console.log(this.searchText);
		}
	}
</script>
