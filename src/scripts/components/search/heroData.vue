<template>
<div class="heroData">
	<div class="heroDataHeader">
		<span class="back" v-on:click="backPage">
			<img src="/images/nav_back_normal.png">
		</span>
		<span class="title">{{headTitle}}</span>
		<span class="more"></span>
	</div>
	<ul class="heroDataNav">
		<li v-for:="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'activeHero': ''">{{nav}}</li>
	</ul>
	<div class="heroDataContainer">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
					<vue-freehero></vue-freehero>
		        </div>
		        <div class="swiper-slide">
					<vue-myhero></vue-myhero>
		        </div>
		        <div class="swiper-slide">
					<vue-allhero></vue-allhero>
		        </div>
		    </div>
		</div>	
	</div>
</div>
</template>
<script>
	var mySwiper = null;
	var Vue = require('../../libs/vue.js');
	var VueRouter = require('../../libs/vue-router.js');
	Vue.use(VueRouter);
	let router = new VueRouter();
	import freeHero from './freeHero.vue';
	import myHero from './myHero.vue';
	import allHero from './allHero.vue';
	export default {
		data(){
			return {
				indexNav:['周免英雄','我的英雄','全部英雄'],
				headTitle:'英雄资料',
				curIndex:0
			}
		},
		ready:function(){
			var that = this;
			mySwiper = new Swiper ('.swiper-container', {
			    onSlideChangeStart: function(swiper){
			    	that.curIndex = mySwiper.activeIndex;
			    }
			}); 
		},
		methods:{
			backPage:function(){
				history.go(-1);
			},
			switchSwiper(index) {
                this.curIndex = index;
                console.log(index);
                mySwiper.slideTo(index);
            }
		},
		components:{
			'vue-freehero': freeHero,
			'vue-myhero':myHero,
			'vue-allhero':allHero
		}
	}     
</script>