<template>
	<div class="allHero">
		<div class="searchBox">
			<vue-search-box></vue-search-box>
		</div>
		<div id="wrapper">
			<ul class="allHeroList">
				<li v-for="hero in heroData">
				    <img v-bind:src="heroImg[hero.id]">
				    <div>
						<span class="name">{{hero.name}}</span>
						<span class="nick">{{hero.nick}}</span>	
						<span class="tag">{{hero.tag1}}  {{hero.tag2}}</span>
				    </div>
				</li>
			</ul>
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
				heroData:[],
				heroImg:[]
			}
		},
		ready:function(){
			this.$http.get('/mock/search/hero_list.json').then((res)=>{
				console.log(res.body);
				this.heroData = res.body;
				setTimeout(() => {
						myScroll.refresh();
					}, 1000);
			}, (res)=>{
				console.log(res);
			});
			myScroll = new IScroll('#wrapper',{
				scrollX:true,
				scrollY:true,
				mouseWheel: true,
	        	scrollbars: false
			});
			this.$http.get('/mock/search/heroImg.json').then((res)=>{
				console.log(res.body.heroImg);
				this.heroImg = res.body.heroImg;
			}, (res)=>{
				console.log(res);
			});
		}
	}
</script>
