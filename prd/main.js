/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	var _welcome = __webpack_require__(7);
	
	var _welcome2 = _interopRequireDefault(_welcome);
	
	var _signin = __webpack_require__(10);
	
	var _signin2 = _interopRequireDefault(_signin);
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _zixunhome = __webpack_require__(14);
	
	var _zixunhome2 = _interopRequireDefault(_zixunhome);
	
	var _home = __webpack_require__(16);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _zixuncontent = __webpack_require__(22);
	
	var _zixuncontent2 = _interopRequireDefault(_zixuncontent);
	
	var _store = __webpack_require__(27);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _commonUtil = __webpack_require__(30);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_commonUtil2.default.myScroll();
	
	//Vue.use(VueRouter);
	
	
	/* yjp  */
	var router = new VueRouter();
	var App = Vue.extend({});
	
	router.map({
	    '/': {
	        component: _welcome2.default
	
	    },
	    '/signin': {
	        component: _signin2.default
	    },
	    '/index': {
	
	        component: _index2.default,
	        subRoutes: {
	            '/zixun': {
	                component: _zixunhome2.default,
	                subRoutes: {
	                    '/': {
	                        component: _home2.default
	                    },
	                    '/content': {
	                        component: _zixuncontent2.default
	                    }
	                }
	
	            }
	        }
	    }
	
	});
	
	router.start(App, 'body');
	//2秒后自动跳转
	setTimeout(function () {
	    router.go({ path: '/index/zixun' });
	}, 1000);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\welcome.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-612377e2/welcome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="welcome-container">
	// 	<img src="http://125.39.6.156/dlied1.qq.com/qqtalk/lolApp/images/qidong/qidong-android.jpg?mkey=580a3a0162ceee9a&f=1a58&c=0&p=.jpg"/>
	// </div>
	//
	// </template>
	// <script>
	exports.default = {
		ready: function ready() {}
	};
	
	// </script>
	/* generated by vue-loader */

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"welcome-container\">\r\n\t<img src=\"http://125.39.6.156/dlied1.qq.com/qqtalk/lolApp/images/qidong/qidong-android.jpg?mkey=580a3a0162ceee9a&f=1a58&c=0&p=.jpg\"/>\r\n</div>\r\n\r\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3324d952/signin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"sigin-container\">\r\n\t<div class=\"bg\"></div>\r\n\t<div class=\"wrap\">\r\n\t\t<header>\r\n\t\t\t登录\r\n\t\t</header>\r\n\t\t<div class=\"form\">\r\n\t\t<div class=\"user_name\">\r\n\t\t<input type=\"text\" placeholder=\"QQ/手机号/邮箱\"><span>X</span></div>\r\n\t\t\r\n\t\t<div class=\"user_pass\">\r\n\t\t<input type=\"text\" placeholder=\"密码\"><span>X</span></div>\r\n\t\t<button type=\"button\" v-link=\"{path:'/index'}\">登录</button>\r\n\t\t</div>\r\n\t</div>\r\n\t\t\r\n</div>\r\n\r\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4ef86752/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\r\n<router-view></router-view>\r\n\r\n\r\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-bc352cf2/zixunhome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<router-view></router-view>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1b792329/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	// <style type="text/css">
	//
	// 	#zixun-home{
	//
	// 		height: 100%;
	// 		width: 100%;
	//
	// 		#zixun-scroll{
	// 			height: 100%;
	// 			width: 100%;
	// 			overflow: hidden;
	// 			position: relative;
	//
	// 			>div{
	//
	// 				.pull{
	// 					height: 60px;
	// 					text-align: center;
	// 					img{
	// 						height: 31px;
	// 						width: 27px;
	// 					}
	// 					span{
	// 						padding:3px 0;
	// 						display: block;
	// 						height: 24px;
	// 						font-size: 12px;
	// 						color: #aaa;
	// 					}
	//
	//
	// 				}
	//
	// 			}
	// 		}
	//
	// 		header{
	// 			width: 100%;
	// 			height: 60px;
	// 			position: absolute;
	// 			background: none;
	// 			top:0;
	// 			z-index: 99999;
	// 			background-position: center bottom;  
	// 			background-size: 100%; 
	// 		}
	//
	// 		.banner{
	// 			width: 100%;
	//
	//
	// 			img{
	// 				height: auot;
	// 				width: 100%;
	// 			}
	// 		}
	// 		.top{
	// 			height: 60px;
	// 			background: rgb(0, 0,0);
	//
	// 		}
	//
	//
	// 		.nav{
	// 			display: flex;
	// 			height: 32px;
	// 			font-size: 12px;
	//
	// 			color:#888;
	// 			text-align: center;
	// 			align-items: 1;
	// 			background: #fff;
	// 			box-shadow: 0 0 2px #999;
	// 			span{
	// 				flex:1;
	// 				line-height: 28px
	// 			}
	// 			.active{
	// 				color: #d3bf8d;
	// 				background: url('http://127.0.0.1/images/pager_tab_selected.png') center 22px no-repeat;
	// 				background-size: 60%;
	// 			}
	// 		}
	// 		.list{
	//
	// 			ul{
	//
	// 				padding: 0 1%;
	// 				li{
	// 					display: flex;
	// 					height: 60px;
	// 					padding: 5px 3px;
	// 					margin: 3px 0;
	// 					background: #fff;
	// 					.left{
	// 						width: 20%;
	//
	// 						align-self: center;
	// 						img{
	// 							width: 100%;
	//
	// 						}
	// 						/*height: 60px;*/
	// 					}
	// 					.con{
	// 						flex:1;
	// 						height: 100%;
	// 						color:#555;
	// 						padding: 0 4px ;
	//
	//
	// 						h3{
	// 							transform: scale(0.8);
	// 							margin-left: -10%;
	// 							margin-top: -4px;
	// 							font-weight: 100;
	// 							font-size: 14px;
	// 							color:#111;
	// 						}
	// 						p{
	//
	// 							width:120%;
	// 							margin-left: -10%;
	// 							margin-top: -3px;
	// 							transform: scale(0.8);
	// 							height: 32px;
	// 							line-height: 12px;
	// 							font-size: 10px;
	// 						}
	// 						.time{
	// 							width:120%;
	// 							margin-left: -10%;
	// 							margin-top: -10px;
	// 							transform: scale(0.8);
	// 							height: 20px;
	// 							font-size: 10px;
	// 						}
	// 					}
	// 					.label{
	// 						width: 10%;
	// 						align-self: flex-end;
	// 						span{
	// 							display: inline-block;
	// 							height: 20px;
	// 							transform: scale(0.8);;
	// 							border:1px solid #da9852;
	// 							border-radius: 3px;
	// 							line-height	: 18px;
	// 							font-size: 10px;
	// 							padding: 0 2px;
	// 							color:#da9852;
	// 							text-align: center;
	// 						}
	// 					}
	// 				}
	// 			}
	//
	// 		}
	// 	}
	//
	// </style>
	//
	// <template>
	// <div id="zixun-home">
	//
	// 	<header v-bind:style="topimgurl">
	// 		<div class="top" v-bind:style="'opacity: '+ topbgcolor+';'" ></div>
	// 		<div class="nav" v-if="headerNav">
	// 			<span  v-bind:class="curlist == $index ? 'active' : '' "  v-for="n in nav"  v-on:click="swiperList($index)">{{n.title}}</span>
	// 		</div>
	// 	</header>
	//
	//
	// 	<!-- 滚动 IScroll -->
	// 	<div id="zixun-scroll" v-scroll="zixunScroll"><div>
	//
	// 		<div v-if="isPull" class="pull pullDownEl">
	// 			<img v-bind:src="pullPngSrc">
	// 			<span>{{pullDown}}</span>
	// 		</div>
	//
	// 		<!-- banner -->
	// 		<div class="swiper-container banner" >
	// 			  <div class="swiper-wrapper">
	// 				    <div class="swiper-slide" v-for="b in banner">
	// 				    	<img  v-bind:src="b.image_url_big" alt="" />
	// 				    </div>
	// 			  </div>
	// 		</div>
	//
	// 		<!--  nav -->
	// 		<div class="nav">
	// 			<span  v-bind:class="curlist == $index ? 'active' : '' "  v-for="n in nav"  v-on:click="swiperList($index)">{{n.title}}</span>
	// 		</div>
	// 		<div class="swiper-container list">
	// 			  <div class="swiper-wrapper">
	// 				    <div class="swiper-slide" v-for="n in nav">
	// 				    	<ul>
	// 				    		<li v-for="li in list" v-on:click="listClick($index)">
	// 						    	<div class="left">
	// 						    		<i></i>
	// 						    		<img v-bind:src="li.image_url_small">
	// 						    	</div>
	// 						    	<div class="con">
	// 						    		<h3>{{li.title}}</h3>
	// 						    		<p>{{li.summary}}</p>
	// 						    		<div class="time">{{li.publication_date}}{{li.pv}}</div>
	// 						    	</div>
	// 						    	<div class="label" v-if="li.newstype"><span>{{li.newstype}}</span></div>
	// 					    	</li>
	// 				    	</ul>
	// 				    </div>
	// 			  </div>
	// 		</div>
	// 		<div  class="pull pullUpEl"> <span>上拉加载更多</span></div>
	// 	</div></div>
	// </div>
	// </template>
	//
	//
	//
	// <script>
	
	var mySwiper = null;
	var listSwiper = null;
	var myIscroll;
	var isPull = false;
	var pullIsShow = false;
	var huifu = true;
	var huifuTo_0 = false;
	
	var that;
	var pullDataElHeight = 60;
	var headerHeight = window.innerWidth / 2 - 60;
	
	var listurl = '/get.php?url=http://qt.qq.com/php_cgi/news/php/varcache_getnews.php&id=12&page=0&plat=android&version=9709';
	var bannerurl = '/get.php?url=http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml?plat=android&version=9709';
	
	exports.default = {
	
	      //数据
	      data: function data() {
	            return {
	                  pullDown: '下拉刷新',
	                  pullUp: '加载更多',
	                  pullPngSrc: 'http://127.0.0.1/images/teemo_8.png', //下拉的初始图片
	                  isPull: false, //是否可以下拉刷新
	                  headerNav: false, //固定nav的显示与隐藏
	                  topbgcolor: 0, //header 透明度
	                  topimgurl: '', //header 背景图片
	                  curlist: 0, //当前栏目
	                  banner: [], // banner图
	                  list: [], //内容列表
	                  zixunScroll: { el: '#zixun-scroll' }, //isscroll
	                  nav: [{ title: '最新', id: 12, page: 1 }, { title: '活动', id: 11, page: 1 }, { title: '娱乐', id: 10, page: 1 }, { title: '官方', id: 13, page: 1 }, { title: '攻略', id: 14, page: 1 }, { title: '收藏', id: 15, page: 1 }] //nav
	            };
	      },
	
	
	      //加载完成
	      ready: function ready() {
	            that = this;
	            // console.log(Math);
	            getJson(bannerurl, function (res) {
	                  // console.log(res );
	                  that.banner = res.list;
	
	                  setTimeout(function () {
	
	                        that.$set('zixunScroll.config', {
	                              click: true,
	                              probeType: 3,
	                              mouseWheel: true,
	                              // startY: -pullDataElHeight,
	                              momentum: true,
	                              event: {
	                                    'scroll': pullDataScroll,
	                                    'scrollEnd': pullDataScrollEnd
	                              }
	                        });
	
	                        // banner Swiper
	                        mySwiper = new Swiper('.banner', {
	                              autoplay: 5000,
	                              onSlideChangeStart: function onSlideChangeStart() {
	                                    if (that.headerNav) {
	                                          that.topimgurl = ' background: url(' + that.banner[mySwiper.activeIndex].image_url_big + '); background-size:100%; background-position:center bottom;';
	                                    } else {
	                                          that.topimgurl = 'none';
	                                    }
	                              }
	                        });
	                  }, 1000);
	
	                  function pullDataScrollEnd() {
	                        var curP = this.y >> 0;
	
	                        //  保证刷新后正确回到初始状态
	                        if (curP == 0) {
	                              if (!isPull) {
	                                    myIscroll.scrollTo(0, -pullDataElHeight, 500);
	                              } else {
	                                    huifuTo_0 = true;
	                              }
	                        } else {
	                              huifuTo_0 = false;
	                        }
	
	                        //底部加载更多  效果相关
	                        if (curP > -pullDataElHeight && curP < 0) {
	                              myIscroll.scrollTo(0, -pullDataElHeight, 500);
	                        }
	
	                        // 划到顶部时的定位 和 恢复到初始状态的记录
	                        if (curP == -pullDataElHeight) {
	                              huifu = true;
	                              this.options.momentum = true;
	                              clearInterval(myIscroll.pullPngSrc);
	                              that.pullPngSrc = 'http://127.0.0.1/images/teemo_8.png';
	                              console.log('momentum === true', this.options.momentum);
	                        }
	
	                        //加载更过数据
	                        if (curP < myIscroll.maxScrollY + pullDataElHeight) {
	                              // myIscroll.scrollTo( 0, myIscroll.maxScrollY + pullDataElHeight, 300 );
	                              getJson(listUrl(0), function (res) {
	                                    that.$set('list', that.list.concat(res.list));
	                                    setTimeout(function () {
	                                          return myIscroll.refresh();
	                                    }, 500);
	                              });
	                        }
	                  }
	
	                  function pullDataScroll() {
	
	                        var curP = this.y >> 0;
	
	                        if (!that.isPull && curP > 0 && that.zixunScroll.scroll) {
	                              that.isPull = true;
	                              myIscroll = that.zixunScroll.scroll;
	                              myIscroll.refresh();
	                              myIscroll.scrollTo(0, -pullDataElHeight, 0);
	                        }
	
	                        // 固定导航
	                        if (curP < -headerHeight - pullDataElHeight) {
	                              that.headerNav = true;
	                              that.topbgcolor = 0.5;
	                              that.topimgurl = ' background: url(' + that.banner[mySwiper.activeIndex].image_url_big + '); background-size:100%; background-position:center bottom;';
	                              mySwiper.stopAutoplay();
	                        } else {
	                              that.headerNav = false;
	                              that.topimgurl = 'background:none';
	                              that.topbgcolor = Math.min(-curP / 300, 0.5);
	                              // autoplay
	                              mySwiper.startAutoplay();
	                        }
	
	                        // 更新数据
	                        if (curP >= -pullDataElHeight) {
	
	                              console.log(myIscroll.directionY, curP, myIscroll.lastScrollY, isPull, huifu);
	
	                              if (curP > 0) {
	                                    //设置提示信息
	
	                                    if (!isPull && huifu) {
	                                          that.pullDown = '松开刷新';
	                                    }
	
	                                    if (myIscroll.directionY == -1 && curP < myIscroll.lastScrollY && !isPull && huifu) {
	                                          isPull = true;
	                                          huifu = false;
	                                          that.pullDown = '正在刷新';
	                                          var i = 0;
	                                          myIscroll.pullPngSrc = setInterval(function () {
	                                                that.pullPngSrc = 'http://127.0.0.1/images/teemo_' + (++i % 8 + 1) + '.png';
	                                          }, 80);
	
	                                          getJson(listurl, function (res) {
	                                                that.pullDown = '刷新成功';
	                                                isPull = false;
	                                                // clearInterval (myIscroll.pullPngSrc);
	                                                // that.pullPngSrc = '/images/teemo_8.png';
	                                                that.$set('list', [].concat(res.list, that.list));
	
	                                                if (huifuTo_0) {
	                                                      myIscroll.scrollTo(0, -pullDataElHeight, 500);
	                                                }
	                                                setTimeout(function () {
	                                                      return myIscroll.refresh();
	                                                }, 200);
	                                          });
	                                    }
	                              } else {
	
	                                    if (!isPull && huifu) {
	                                          that.pullDown = '下拉刷新';
	                                    }
	                              }
	                        }
	                        myIscroll.lastScrollY = curP;
	                  }
	            });
	
	            getJson(listUrl(0), function (res) {
	                  console.log(res);
	                  that.list = res.list;
	
	                  setTimeout(function () {
	                        listSwiper = new Swiper('.list', {
	                              onSlideChangeStart: function onSlideChangeStart() {
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
	            swiperList: function swiperList(i) {
	                  this.curlist = i;
	                  listSwiper.slideTo(i);
	            },
	            listClick: function listClick(index) {
	                  this.$router.go({ path: '/index/zixun/content?url=' + this.list[index].article_url });
	            }
	      }
	};
	
	
	function listUrl(index, isPullDown) {
	      if (isPullDown) {
	            return '/get.php?url=http://qt.qq.com/php_cgi/news/php/varcache_getnews.php&id=' + that.nav[index].id + '&page=0&plat=android&version=9709';
	      } else {
	
	            return '/get.php?url=http://qt.qq.com/php_cgi/news/php/varcache_getnews.php&id=' + that.nav[index].id + '&page=' + that.nav[index].page++ + '&plat=android&version=9709';
	      }
	}
	
	function getJson(url, succer) {
	      Vue.http.get(url).then(function (res) {
	
	            var str = res.data;
	            str = str.substring(0, str.indexOf('<script'));
	
	            succer(JSON.parse(str));
	            // console.log( JSON.parse(res) ) ;
	            // succer(  JSON.parse(res.data)  );
	      });
	}
	// </script>
	/* generated by vue-loader */

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n<div id=\"zixun-home\">\r\n\r\n\t<header v-bind:style=\"topimgurl\">\r\n\t\t<div class=\"top\" v-bind:style=\"'opacity: '+ topbgcolor+';'\" ></div>\r\n\t\t<div class=\"nav\" v-if=\"headerNav\">\r\n\t\t\t<span  v-bind:class=\"curlist == $index ? 'active' : '' \"  v-for=\"n in nav\"  v-on:click=\"swiperList($index)\">{{n.title}}</span>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\r\n\t<!-- 滚动 IScroll -->\r\n\t<div id=\"zixun-scroll\" v-scroll=\"zixunScroll\"><div>\r\n\r\n\t\t<div v-if=\"isPull\" class=\"pull pullDownEl\">\r\n\t\t\t<img v-bind:src=\"pullPngSrc\">\r\n\t\t\t<span>{{pullDown}}</span>\r\n\t\t</div>\r\n\r\n\t\t<!-- banner -->\r\n\t\t<div class=\"swiper-container banner\" >\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t\t    <div class=\"swiper-slide\" v-for=\"b in banner\">\r\n\t\t\t\t    \t<img  v-bind:src=\"b.image_url_big\" alt=\"\" />\r\n\t\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t</div>\r\n\r\n\t\t<!--  nav -->\r\n\t\t<div class=\"nav\">\r\n\t\t\t<span  v-bind:class=\"curlist == $index ? 'active' : '' \"  v-for=\"n in nav\"  v-on:click=\"swiperList($index)\">{{n.title}}</span>\r\n\t\t</div>\r\n\t\t<div class=\"swiper-container list\">\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t\t    <div class=\"swiper-slide\" v-for=\"n in nav\">\r\n\t\t\t\t    \t<ul>\r\n\t\t\t\t    \t\t<li v-for=\"li in list\" v-on:click=\"listClick($index)\">\r\n\t\t\t\t\t\t    \t<div class=\"left\">\r\n\t\t\t\t\t\t    \t\t<i></i>\r\n\t\t\t\t\t\t    \t\t<img v-bind:src=\"li.image_url_small\">\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t    \t<div class=\"con\">\r\n\t\t\t\t\t\t    \t\t<h3>{{li.title}}</h3>\r\n\t\t\t\t\t\t    \t\t<p>{{li.summary}}</p>\r\n\t\t\t\t\t\t    \t\t<div class=\"time\">{{li.publication_date}}{{li.pv}}</div>\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t    \t<div class=\"label\" v-if=\"li.newstype\"><span>{{li.newstype}}</span></div>\r\n\t\t\t\t\t    \t</li>\r\n\t\t\t\t    \t</ul>\r\n\t\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t</div>\r\n\t\t<div  class=\"pull pullUpEl\"> <span>上拉加载更多</span></div>\r\n\t</div></div>\r\n</div>\r\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\zixuncontent.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-199c8f01/zixuncontent.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style type="text/css">
	//
	// 	#zixun-content{
	// 		display: flex;
	// 		height: 100%;
	// 		flex-direction: column;
	//
	// 		.header{
	// 			height: 44px; 
	// 			width: 100%;
	// 			display: flex;
	// 			align-items: center;
	// 			text-align: center;
	// 			background: url('http://127.0.0.1/images/header_bg_mid.png') center;
	// 			background-size: 100%;
	//
	// 			.back{
	// 				width: 60px;
	//
	// 				img{
	// 					height:20px;
	// 				}
	// 			}
	// 			.title{
	// 				flex: 1;
	// 				color: #baac81; 
	// 			}
	// 			.more{
	// 				width: 60px;
	// 				img{
	// 					height: 10px;
	// 				}
	// 			}
	// 		}
	//
	// 		iframe{
	// 			padding:0;
	// 			border:0;
	// 			margin:0;
	// 			width: 100%;
	// 			flex:1;
	// 		}
	//
	// 		.footer{
	// 			height: 30px;
	// 			border-top: 1px solid #eee;
	// 			width: 100%;
	// 			display: flex;
	// 			align-items: center;
	// 			background: #fff;
	//
	// 			.conSwiper{
	// 				flex:1;
	// 				padding: 0 5px;
	// 				height: 30px;
	// 				color: #888;
	//
	// 				img{
	// 					width: 20px;
	// 					border-radius: 10px;
	// 					vertical-align: sub;
	// 				}
	// 			}
	// 			.comment,.editor{
	// 				width: 30px;
	// 				img{
	// 					width: 20px;
	// 				}
	// 			}
	//
	// 		}
	// 	}	
	//
	// </style>
	//
	// <template>
	// <div id="zixun-content">
	// 	<div class="header">
	//
	// 		<span class="back" v-on:click="backPage">
	// 			<img src="http://127.0.0.1/images/nav_back_normal.png">
	// 		</span>
	// 		<span class="title">资讯详情</span>
	// 		<span class="more"><img src="http://127.0.0.1/images/menu_more.png"></span>
	// 	</div>
	//
	// 	<iframe v-bind:src="iframeurl"></iframe>
	//
	// 	<div class="footer">
	//
	// 		<div class="swiper-container conSwiper">
	// 		    <div class="swiper-wrapper">
	// 		        <div class="swiper-slide" v-for=" com in comment">
	// 		        	<img v-bind:src="com.img">
	// 		        	<span>{{com.cat}}</span>
	// 		        </div>
	// 		    </div>
	// 		</div>
	//
	// 		<div class="comment">
	// 			<img src="http://127.0.0.1/images/news_comments_num.png">
	// 		</div>	
	// 		<div class="editor">
	// 			<img src="http://127.0.0.1/images/news_comment_publish_icon.png">
	// 		</div>
	// 	</div>
	// </div>
	//
	//
	//
	// </template>
	//
	//
	// <script type="text/javascript">
	
	var that;
	
	exports.default = {
		data: function data() {
			return {
				iframeurl: '',
				comment: [{
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				}, {
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				}, {
					img: 'http://127.0.0.1//images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				}, {
					img: 'http://127.0.0.1//images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				}, {
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				}, {
					img: 'http://127.0.0.1/images/teemo_1.png',
					cat: '蚊子啊护发素佛阿飞大红'
				}]
			};
		},
		ready: function ready() {
			that = this;
			this.iframeurl = this.$route.query.url;
	
			var conSwiper = new Swiper('.conSwiper', {
				direction: 'vertical',
				autoplay: 2000,
				speed: 300
			});
		},
		methods: {
			backPage: function backPage() {
				console.log(window);
				history.go(-1);
			}
		}
	
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n<div id=\"zixun-content\">\r\n\t<div class=\"header\">\r\n\r\n\t\t<span class=\"back\" v-on:click=\"backPage\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/nav_back_normal.png\">\r\n\t\t</span>\r\n\t\t<span class=\"title\">资讯详情</span>\r\n\t\t<span class=\"more\"><img src=\"http://127.0.0.1/images/menu_more.png\"></span>\r\n\t</div>\r\n\r\n\t<iframe v-bind:src=\"iframeurl\"></iframe>\r\n\r\n\t<div class=\"footer\">\r\n\r\n\t\t<div class=\"swiper-container conSwiper\">\r\n\t\t    <div class=\"swiper-wrapper\">\r\n\t\t        <div class=\"swiper-slide\" v-for=\" com in comment\">\r\n\t\t        \t<img v-bind:src=\"com.img\">\r\n\t\t        \t<span>{{com.cat}}</span>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"comment\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/news_comments_num.png\">\r\n\t\t</div>\t\r\n\t\t<div class=\"editor\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/news_comment_publish_icon.png\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t\r\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var state = __webpack_require__(28);
	var mutations = __webpack_require__(29);
	
	console.log(state);
	console.log(mutations);
	
	exports.default = new Vuex.Store({
	  state: state,
	  mutations: mutations
	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  count: 0
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
		NCREMENT: function NCREMENT(state) {
			state.count++;
		}
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    dirScroll: function dirScroll() {
	        var that = this;
	        // 自定义指令
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded('#index-scroll', function () {
	                    new IScroll(value);
	                });
	            }
	        });
	    },
	    myScroll: function myScroll() {
	        var that = this;
	        //自定义指令
	        Vue.directive('scroll', function (option) {
	            if (option.config) {
	                that.isAllLoaded(option.el, function () {
	                    option.scroll = new IScroll(option.el, option.config);
	                    if (option.config.event && option.scroll) {
	                        for (var key in option.config.event) {
	                            option.scroll.on(key, option.config.event[key]);
	                        };
	                    }
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map