a<style type="text/css">
	
	#zixun-home{
		
		height: 100%;
		width: 100%;
		
		#zixun-scroll{
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: relative;

			>div{

				.pull{
					height: 60px;
					text-align: center;
					img{
						height: 31px;
						width: 27px;
					}
					span{
						padding:3px 0;
						display: block;
						height: 24px;
						font-size: 12px;
						color: #aaa;
					}


				}

			}
		}

		header{
			width: 100%;
			height: 60px;
			position: absolute;
			background: none;
			top:0;
			z-index: 99999;
			background-position: center bottom;  
			background-size: 100%; 
		}

		.banner{
			width: 100%;

			
			img{
				height: auot;
				width: 100%;
			}
		}
		.top{
			height: 60px;
			background: rgb(0, 0,0);
			
		}


		.nav{
			display: flex;
			height: 32px;
			font-size: 12px;
			
			color:#888;
			text-align: center;
			align-items: 1;
			background: #fff;
			box-shadow: 0 0 2px #999;
			span{
				flex:1;
				line-height: 28px
			}
			.active{
				color: #d3bf8d;
				background: url('/images/pager_tab_selected.png') center 22px no-repeat;
				background-size: 60%;
			}
		}
		.list{

			ul{

				padding: 0 1%;
				li{
					display: flex;
					height: 60px;
					padding: 5px 3px;
					margin: 3px 0;
					background: #fff;
					.left{
						width: 20%;
						
						align-self: center;
						img{
							width: 100%;
							
						}
						/*height: 60px;*/
					}
					.con{
						flex:1;
						height: 100%;
						color:#555;
						padding: 0 4px ;


						h3{
							transform: scale(0.8);
							margin-left: -10%;
							margin-top: -4px;
							font-weight: 100;
							font-size: 14px;
							color:#111;
						}
						p{

							width:120%;
							margin-left: -10%;
							margin-top: -3px;
							transform: scale(0.8);
							height: 32px;
							line-height: 12px;
							font-size: 10px;
						}
						.time{
							width:120%;
							margin-left: -10%;
							margin-top: -10px;
							transform: scale(0.8);
							height: 20px;
							font-size: 10px;
						}
					}
					.label{
						width: 10%;
						align-self: flex-end;
						span{
							display: inline-block;
							height: 20px;
							transform: scale(0.8);;
							border:1px solid #da9852;
							border-radius: 3px;
							line-height	: 18px;
							font-size: 10px;
							padding: 0 2px;
							color:#da9852;
							text-align: center;
						}
					}
				}
			}
			
		}
	}
	
</style>

<template>
<div id="zixun-home">

	<header v-bind:style="topimgurl">
		<div class="top" style="opacity: {{topbgcolor}};" ></div>
		<div class="nav" v-if="headerNav">
			<span  v-bind:class="curlist == $index ? 'active' : '' "  v-for="n in nav"  v-on:click="swiperList($index)">{{n.title}}</span>
		</div>
	</header>


	<!-- 滚动 IScroll -->
	<div id="zixun-scroll"><div>

		<div class="pull pullDownEl">
			<img v-bind:src="pullPngSrc">
			<span>{{pullDown}}</span>
		</div>

		<!-- banner -->
		<div class="swiper-container banner" >
			  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="b in banner">
				    	<img  v-bind:src="b.image_url_big" alt="" />
				    </div>
			  </div>
		</div>

		<!--  nav -->
		<div class="nav">
			<span  v-bind:class="curlist == $index ? 'active' : '' "  v-for="n in nav"  v-on:click="swiperList($index)">{{n.title}}</span>
		</div>
		<div class="swiper-container list">
			  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="n in nav">
				    	<ul>
				    		<li v-for="li in list" v-on:click="listClick($index)">
						    	<div class="left">
						    		<i></i>
						    		<img v-bind:src="li.image_url_small">
						    	</div>
						    	<div class="con">
						    		<h3>{{li.title}}</h3>
						    		<p>{{li.summary}}</p>
						    		<div class="time">{{li.publication_date}}{{li.pv}}</div>
						    	</div>
						    	<div class="label" v-if="li.newstype"><span>{{li.newstype}}</span></div>
					    	</li>
				    	</ul>
				    </div>
			  </div>
		</div>
		<div class="pull pullUpEl"> <span>上拉加载更多</span></div>
	</div></div>
</div>
</template>





<script>
var Vue = require('../../libs/vue.js');
var VueRouter = require('../../libs/vue-router.js');
var VueResource = require('../../libs/vue-resource.js');

Vue.use( VueResource );
Vue.use( VueRouter );






var mySwiper = null;
var listSwiper = null;
var myIscroll;
var isPull = false;
var huifu = true;
var huifuTo_0 = false;
var that;
var pullDataElHeight = 60; 
var headerHeight = window.innerWidth / 2 - 60;

var listurl = '/qtqq/zixun-list';
var bannerurl = '/qtqq/zixun-banner';

export default {
	
	//数据
    data() {
      return {
      	pullDown: '下拉刷新',
      	pullUp: '加载更多',
      	pullPngSrc: '/images/teemo_8.png',
      	headerNav:false,		
      	topbgcolor: 0,
      	topimgurl:'',
      	curlist: 0,
        banner: [],
        list: [],
        nav:[{title: '最新'},{title: '活动'},{title: '娱乐'},{title: '官方'},{title: '攻略'},{title: '收藏'}]
      }
    },
    


    //加载完成
	ready: function() {
      that = this;
      // console.log(Math);
      getJson(bannerurl, (res) => {
      		// console.log(res );
      		that.banner = res.body.list;
      		setTimeout(()=>{
            	myIscroll = new IScroll('#zixun-scroll', { 
            		click: true,
            		probeType:3,
            		mouseWheel: true,
            		startY: -pullDataElHeight,
            		momentum: true

            	});  

            	myIscroll.lastScrollY = pullDataElHeight;
            	myIscroll.on('scroll', pullDataScroll);
				myIscroll.on('scrollEnd', pullDataScrollEnd);
				console.log(myIscroll );



      			mySwiper = new Swiper('.banner', {
	      			autoplay: 5000,
	      			onSlideChangeStart: function(){
	      				if( that.headerNav ){
	      					that.topimgurl = ' background: url(' + that.banner[mySwiper.activeIndex].image_url_big + '); background-size:100%; background-position:center bottom;';
	      				}else{
	      					that.topimgurl = 'none';
	      				}
		              
		            }
	      		});

	      		function pullDataScrollEnd(){
	      			var curP = this.y>>0;

	      			//  保证刷新后正确回到初始状态
	      			if( curP == 0 ){
	      				if( !isPull ){
	      					myIscroll.scrollTo( 0, -pullDataElHeight, 500 );
	      				} else{
	      					huifuTo_0 = true;
	      				}
	      			} else{
	      				huifuTo_0 = false;
	      			}

	      			//底部加载更多  效果相关
	      			if( curP > -pullDataElHeight &&  curP < 0 ){
	      				myIscroll.scrollTo( 0, -pullDataElHeight, 500 );
	      			}


	      			// 划到顶部时的定位 和 恢复到初始状态的记录
	      			if(curP == -pullDataElHeight){
	      				huifu = true;
	      				this.options.momentum = true;
	      				clearInterval (myIscroll.pullPngSrc);
			      		that.pullPngSrc = '/images/teemo_8.png';
	      				console.log('momentum === true',this.options.momentum );
	      			}

	      			//加载更过数据
	      			if( curP < myIscroll.maxScrollY + pullDataElHeight ){
	      				// myIscroll.scrollTo( 0, myIscroll.maxScrollY + pullDataElHeight, 300 );
	      				getJson(listurl, (res) => {
		      					that.$set('list', that.list.concat(res.body.list));
		      					setTimeout(() => myIscroll.refresh() ,500);
		      			});
	      			}

	      		}



	      		function pullDataScroll(){
	      			
	      			var curP = this.y>>0;
	      			
	      			// 固定导航
	      			if( curP  < -headerHeight - pullDataElHeight ){
      					that.headerNav = true;
      					that.topbgcolor = 0.5 ;
      					that.topimgurl = ' background: url(' + that.banner[mySwiper.activeIndex].image_url_big + '); background-size:100%; background-position:center bottom;';
      					mySwiper.stopAutoplay();

	      			}else{
	      				that.headerNav = false;
	      				that.topimgurl = 'background:none';
	      				that.topbgcolor =   Math.min( - curP/300, 0.5);
	      				// autoplay
	      				mySwiper.startAutoplay();
	      			}

	      			// 更新数据
	      			if( curP >= -pullDataElHeight ){

	      				console.log( myIscroll.directionY , curP, myIscroll.lastScrollY , isPull, huifu);
	      				
	      				
	      				if( curP > 0 ){
	      					//设置提示信息

	      					if( !isPull && huifu){
	      						that.pullDown = '松开刷新';
	      					}

	      					if( myIscroll.directionY  == -1 && curP <  myIscroll.lastScrollY && !isPull  && huifu){
      							isPull = true;
	      						huifu = false;
	      						that.pullDown = '正在刷新';
	      						var i =0;
	      						myIscroll.pullPngSrc = setInterval(()=>{
	      							that.pullPngSrc = '/images/teemo_'+ ( ++i % 8  + 1 )+'.png';
	      						}, 80);

			      				getJson(listurl, (res) => {
			      					that.pullDown = '刷新成功';
			      					isPull = false;
			      					// clearInterval (myIscroll.pullPngSrc);
			      					// that.pullPngSrc = '/images/teemo_8.png';
			      					that.$set('list', [].concat( res.body.list, that.list));
			      					
			      					if( huifuTo_0 ){
			      						myIscroll.scrollTo( 0, -pullDataElHeight, 500 );
			      					}
			      					setTimeout( () =>  myIscroll.refresh() ,200);
			      				});  
	      					}
	      				}else{

	      					if( !isPull && huifu){
	      						that.pullDown=  '下拉刷新'  
	      					}
	      				}
	      			} 
	      			myIscroll.lastScrollY = curP;
	      		}

	      		
      		},1000);
      		
      });

       getJson(listurl, (res) => {
      		console.log( res);
      		that.list = res.body.list;

      		setTimeout( ()=>{
      			listSwiper = new Swiper('.list',{
      				onSlideChangeStart: function(){
		              that.curlist = listSwiper.activeIndex;
		            }
      			});
      		}, 1000);
      });

    },
	//放方法
    methods: {
//    changPage(i) {
//      this.cur = i;
//    }
		swiperList( i ){
			this.curlist = i;
			listSwiper.slideTo(i);
		},

		listClick( index ){
			this.$router.go({path:'/index/zixun/content?url='+ this.list[index].article_url  });
		}
    }
}


function getJson(url , succer){
	Vue.http.get(url)
        .then((res) => {
        	succer( res );
        })
}
</script>