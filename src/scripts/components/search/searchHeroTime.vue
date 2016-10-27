<template>
	<div class="searchHeroTime">
		<div class="header">
			<span class="back" v-on:click="backPage">
				<img src="/images/nav_back_normal.png">
			</span>
			<span class="title">{{headTitle}}</span>
			<span class="more"></span>
		</div>
		<iframe v-bind:src="iframeurl+bid"></iframe>
	</div>
</template>
<script>
	export default {
	data: function(){
		return {
			iframeurl: '',
			bid:'',
			discuzUrl:'http://wsq.discuz.qq.com/?siteid=187674040&c=1&f=inner&a=1&sid=$VKEY$',
			headTitle:''
		};
	},
	ready: function() {
		// console.log('测试'+this.$route.query.url);
		// console.log('测试'+this.$route.query.id);
		// console.log('测试'+this.$route.query.idFlag);
		if(this.$route.query.id){
			if(this.$route.query.c){
				this.iframeurl =  this.discuzUrl;
				this.headTitle = this.$route.query.headTitle;
			}else{
			  this.bid = this.$route.query.idFlag + '=' + this.$route.query.id;
			  this.iframeurl =  this.$route.query.url+this.did;
			  this.headTitle = this.$route.query.headTitle;
			}
		}else{
			this.iframeurl =  this.$route.query.url;
			this.headTitle = this.$route.query.headTitle;
		}
	},
	methods: {
		backPage:function(){
			history.go(-1);
		}
	}



}	
</script>