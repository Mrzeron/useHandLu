<template>
<div id="zixun-home">
	<div class="swiper-container">
		  <div class="swiper-wrapper">
			    <div class="swiper-slide">slider1</div>
			    <div class="swiper-slide">slider2</div>
			    <div class="swiper-slide">slider3</div>
		  </div>
	</div>
</div>
</template>


<style type="text/css">
	body{
		height: 100%;
	}
</style>

<script>
var Vue = require('../libs/vue.js');
var VueRouter = require('../libs/vue-router.js');
var VueResource = require('../libs/vue-resource.js');

Vue.use( VueResource );
Vue.use( VueRouter );


export default {
	
	//数据
    data() {
      return {
        
      }
    },

	//放方法
    methods: {
      changPage(i) {
        this.cur = i;
      }
    }
  }
</script>