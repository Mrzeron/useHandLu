<template>
	<div class="freeHero">
		<div class="title">
			<div>更新时间:每周五中午</div>
		</div>
		<ul class="freeHeroList">
			<template v-for="hero in heroData">
			<li v-if="$index<13">
			    <img v-bind:src="heroImg[hero.id]">
			    <div>
					<span class="name">{{hero.name}}</span>
					<span class="nick">{{hero.nick}}</span>	
					<span class="tag">{{hero.tag1}}  {{hero.tag2}}</span>
			    </div>
			</li>
			</template>
		</ul>
	</div>
</template>
<script>
	var Vue = require('../../libs/vue.js');
	var VueResource = require('../../libs/vue-resource.js');
	Vue.use(VueResource);
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
			}, (res)=>{
				console.log(res);
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
