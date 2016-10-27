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
	
<<<<<<< HEAD
	var _search = __webpack_require__(14);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _searchHeroTime = __webpack_require__(22);
	
	var _searchHeroTime2 = _interopRequireDefault(_searchHeroTime);
	
	var _heroData = __webpack_require__(25);
	
	var _heroData2 = _interopRequireDefault(_heroData);
	
	var _freeHero = __webpack_require__(28);
	
	var _freeHero2 = _interopRequireDefault(_freeHero);
	
	var _allHero = __webpack_require__(31);
	
	var _allHero2 = _interopRequireDefault(_allHero);
	
	var _myHero = __webpack_require__(37);
	
	var _myHero2 = _interopRequireDefault(_myHero);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//加载样式
	_vue2.default.use(_vueRouter2.default);
	
	//加载模块
	
	
	//加载库文件
	
	var router = new _vueRouter2.default();
	var App = _vue2.default.extend({});
=======
	var _friend = __webpack_require__(15);
	
	var _friend2 = _interopRequireDefault(_friend);
	
	var _zixunhome = __webpack_require__(18);
	
	var _zixunhome2 = _interopRequireDefault(_zixunhome);
	
	var _home = __webpack_require__(20);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _zixuncontent = __webpack_require__(26);
	
	var _zixuncontent2 = _interopRequireDefault(_zixuncontent);
	
	var _comment = __webpack_require__(29);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _commonUtil = __webpack_require__(32);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_commonUtil2.default.myScroll();
	
	//Vue.use(Vuex);
	/*Vue.use(Vueresource);
	Vue.use(VueRouter);*/
	
	
	//import store from './vuex/store.js';
	
	/* yjp  */
	
	
	/*import Vue from './libs/vue.js';*/
	/*import VueRouter from './libs/vue-router.js';*/
	/*import Vueresource from './libs/vue-resource';*/
	//import Vuex from './libs/vuex.min.js';
	//import store from './vuex/store.js';
	
	var router = new VueRouter();
	var App = Vue.extend({
	    /*store:store*/
	});
>>>>>>> master
	router.map({
	    '/': {
	        component: _welcome2.default
	    },
	    '/signin': {
	        component: _signin2.default
	    },
	    '/index': {
<<<<<<< HEAD
	        component: _index2.default
	    },
	    '/search': {
	        component: _search2.default
	    },
	    '/searchHeroTime': {
	        component: _searchHeroTime2.default
	    },
	    '/heroData': {
	        component: _heroData2.default,
	        subRoutes: {
	            '/': {
	                component: _freeHero2.default
	            }
	        }
	    },
	    '/freeHero': {
	        component: _freeHero2.default
	    },
	    '/allHero': {
	        component: _allHero2.default
	    },
	    '/myHero': {
	        component: _myHero2.default
=======
	        component: _index2.default,
	        subRoutes: {
	            '/zixun': {
	                component: _zixunhome2.default,
	                subRoutes: {
	                    '/': {
	                        component: _home2.default
	                    },
	                    '/friend': {
	                        component: _friend2.default
	                    },
	                    '/content': {
	                        component: _zixuncontent2.default
	                    },
	                    '/comment': {
	                        component: _comment2.default
	                    }
	                }
	            }
	        }
>>>>>>> master
	    }
	});
	
	router.start(App, 'body');
	
	//2秒后自动跳转
<<<<<<< HEAD
	// setTimeout(function(){
	// 	router.go({path:'/signin'})
	// },2000)
=======
	setTimeout(function () {
	    // router.go({path:'/index/zixun'});
	}, 1000);
>>>>>>> master

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

	module.exports = "\r\n<div class=\"sigin-container\" transition=\"expand\">\r\n\t<div class=\"bg\"></div>\r\n\t<div class=\"wrap\">\r\n\t\t<header>\r\n\t\t\t登录\r\n\t\t</header>\r\n\t\t<div class=\"form\">\r\n\t\t<div class=\"user_name\">\r\n\t\t<input type=\"text\" placeholder=\"QQ/手机号/邮箱\"><span>X</span></div>\r\n\t\t\r\n\t\t<div class=\"user_pass\">\r\n\t\t<input type=\"text\" placeholder=\"密码\"><span>X</span></div>\r\n\t\t<button type=\"button\" v-link=\"{path:'/index'}\" >登录</button>\r\n\t\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t\t\r\n</div>\r\n\r\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <<<<<<< HEAD
	// <router-view></router-view>
	// =======
	// <div class="index-container"><div class="swiper-container">
	//   <div class="swiper-wrapper">
	//     <div class="swiper-slide left" >
	// 		<header>
	// 			<img src="http://offtkz7wd.bkt.clouddn.com/img/logo.jpg" alt="#">
	// 			<h3>倚马七纸</h3>
	// 		</header>
	// 		<ul>
	// 			<li v-for="item in list"><img v-bind:src="item.img" ><span>{{item.name}}<span></li>
	// 		</ul>
	// 		<div class="setting"><img src="http://offtkz7wd.bkt.clouddn.com/img/menu_setting.png"><span>设置</span></div>
	//     </div>
	//     <div class="swiper-slide right" @click="hideMsg">
	//
	//
	//
	// 				  <router-view></router-view>
	// 		<header><img src="http://offtkz7wd.bkt.clouddn.com/img/logo.jpg" @click.stop="showMsg"></header>
	//     	<nav>
	//     		<ul>
	//     			<li v-for="item in nav_list" v-link="{path:item.path}" @click.stop="change_nav($index)">
	//     			<img v-show="cur==$index? true:false" v-bind:src="item.cli_img">
	//     				<img  v-show="cur!=$index" v-bind:src="item.img">
	//     				<span>{{item.title}}</span>
	//     			</li>
	//     		</ul>
	//     	</nav>
	//     </div>
	//
	//   </div>
	// </div>
	// </div>
	//
	//
	// >>>>>>> master
	//
	//
	// </template>
	// <script>
	/*import {getIndex }from '../vuex/getters.js';
	import  {changeIndex} from '../vuex/actions.js';*/
	var mySwiper = null;
	exports.default = {
		data: function data() {
			return {
				cur: "0",
				list: [{ img: "http://offtkz7wd.bkt.clouddn.com/img/menu_friend_cycle.png",
					name: "我的动态"
	
				}, { img: "http://offtkz7wd.bkt.clouddn.com/img/menu_download.png",
					name: "我的下载"
	
				}, { img: "http://offtkz7wd.bkt.clouddn.com/img/menu_subscribe.png",
					name: "我的订阅"
	
				}, { img: "http://offtkz7wd.bkt.clouddn.com/img/menu_favorite.png",
					name: "我的收藏"
	
				}],
				nav_list: [{
					img: "http://offtkz7wd.bkt.clouddn.com/img/tab_news.png",
					cli_img: "http://offtkz7wd.bkt.clouddn.com/img/tab_news_checked.png",
					title: "资讯",
					path: '/index'
				}, {
					img: "http://offtkz7wd.bkt.clouddn.com/img/tab_friend.png",
					cli_img: "http://offtkz7wd.bkt.clouddn.com/img/tab_friend_checked.png",
					title: "好友",
					path: '/index/friend'
				}, {
					img: "http://offtkz7wd.bkt.clouddn.com/img/tab_discovery.png",
					cli_img: "http://offtkz7wd.bkt.clouddn.com/img/tab_discovery_checked.png",
					title: "发现",
					path: '/index'
				}, {
					img: "http://offtkz7wd.bkt.clouddn.com/img/tab_me.png",
					cli_img: "http://offtkz7wd.bkt.clouddn.com/img/tab_me_checked.png",
					title: "我",
					path: '/index'
				}]
			};
		},
	
		/*	vuex:{
	 		getters:{
	 			curIndex:getIndex
	 		},
	 		actions:{
	 			change:changeIndex
	 		}
	 	},*/
		ready: function ready() {
			mySwiper = new Swiper('.swiper-container', {
				slidesPerView: 'auto',
				effert: "coverflow",
				initialSlide: 2
	
			});
		},
	
		methods: {
			showMsg: function showMsg() {
				mySwiper.slideTo(0, 500, false);
			},
			hideMsg: function hideMsg() {
				mySwiper.slideTo(1, 500, false);
			},
			change_nav: function change_nav(index) {
				/*this.change(index)*/
				this.cur = index;
			}
		}
	};
	
	// </script>

	/* generated by vue-loader */

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\r\n<<<<<<< HEAD\r\n<router-view></router-view>\r\n=======\r\n<div class=\"index-container\"><div class=\"swiper-container\">\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"swiper-slide left\" >\r\n\t\t<header>\r\n\t\t\t<img src=\"http://offtkz7wd.bkt.clouddn.com/img/logo.jpg\" alt=\"#\">\r\n\t\t\t<h3>倚马七纸</h3>\r\n\t\t</header>\r\n\t\t<ul>\r\n\t\t\t<li v-for=\"item in list\"><img v-bind:src=\"item.img\" ><span>{{item.name}}<span></li>\r\n\t\t</ul>\r\n\t\t<div class=\"setting\"><img src=\"http://offtkz7wd.bkt.clouddn.com/img/menu_setting.png\"><span>设置</span></div>\r\n    </div>\r\n    <div class=\"swiper-slide right\" @click=\"hideMsg\">\r\n    \r\n\t\r\n\r\n\t\t\t\t  <router-view></router-view>\r\n\t\t<header><img src=\"http://offtkz7wd.bkt.clouddn.com/img/logo.jpg\" @click.stop=\"showMsg\"></header>\r\n    \t<nav>\r\n    \t\t<ul>\r\n    \t\t\t<li v-for=\"item in nav_list\" v-link=\"{path:item.path}\" @click.stop=\"change_nav($index)\">\r\n    \t\t\t<img v-show=\"cur==$index? true:false\" v-bind:src=\"item.cli_img\">\r\n    \t\t\t\t<img  v-show=\"cur!=$index\" v-bind:src=\"item.img\">\r\n    \t\t\t\t<span>{{item.title}}</span>\r\n    \t\t\t</li>\r\n    \t\t</ul>\r\n    \t</nav>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n>>>>>>> master\r\n\r\n\r\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\friend.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
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
	  var id = "_v-0510d364/friend.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="friend-container">
	// 	<header class="nav_header">
	// 	<div class="fri_btns">
	// 			<div v-for="items in menu">
	// 				<button type="button"  v-show="cur==$index? true:false">{{items}}</button>
	// 				<button type="button" v-show="cur!=$index?true:false" style="color:#fff" @click="changeIndex($index)">{{items}}</button>
	// 				<img v-show="cur==$index? true:false" src="http://offtkz7wd.bkt.clouddn.com/img/pager_tab_selected.png"  class="fri_btns_select">	
	// 				<img v-show="cur!=$index?true:false" src="http://offtkz7wd.bkt.clouddn.com/img/pager_tab.png"  class="fri_btns_select">	
	// 			</div>
	//
	// 		</div>
	// 		<div class="fri_menu">
	// 			<img  src="http://offtkz7wd.bkt.clouddn.com/img/add_friend_btn_normal.png" @click="showmsg">
	// 			<div class="fri_menu_list" v-show="menu_show" transition="fri_menu_show">
	// 				<ul >
	// 					<li v-for="items in menu_list" @click="click_hide"><img :src="items.img">{{items.title}}</li>
	// 				</ul>
	// 			</div>
	// 		</div>
	//
	//
	// 	</header>
	// 		<div class="friend_body">
	// 			<div class="friend_body_swiper-container">
	// 			  <div class="swiper-wrapper">
	// 			    <div class="swiper-slide fri_list">
	// 					<form class="yo-search">
	// 					    <label class="operation">
	// 					        <span class="yo-ico">&#xf067;</span>
	// 					        <input type="text" class="input" placeholder="搜索你的好友..." />
	// 					    </label>
	// 					</form>
	// 					<div class="fri_aboout_msg">
	// 						<div class="fri_about_left">
	// 							好友动态
	// 						</div>
	// 						<div class="fri_about_right" ></div>
	//
	// 					</div>
	// 					<div class="zm_fri_top" @click="changeList">
	// 						<div class="zhangmeng_fri">
	// 							<div class="zm_left">掌盟好友</div>
	// 							<div class="zm_right">{{fri_num}}</div>
	// 						</div>
	// 						<ul class="zm_list" v-show="zm_listShow" transition="list_down">
	// 							<li v-for="fri in fri_list"> 
	// 								<img :src="fri.img">
	// 								<div class="zmlist_title">{{fri.name}}</div>
	// 								<div class="zm_state">
	// 									<button @click.stop="">聊天</button>
	// 									<span class="state">{{fri.state}}</span>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	//
	//
	// 			    </div>
	// 			    <div class="swiper-slide fri_msg"> 
	// 			    	<div v-show="fri_msg==0" class="msgs">暂无消息</div>
	// 			    </div>
	//
	// 			  </div>
	// 			</div>
	// 		</div>
	// 	<div>
	//
	// </div>
	//
	// </template>
	// <script>
	//import {changeIndex} from "../vuex/actions.js";
	var mySwiper = null;
	exports.default = {
		data: function data() {
			return {
				menu: ["好友", "消息"],
				fri_msg: 0,
	
				cur: 0,
				fri_num: 0,
				menu_list: [{
					img: "http://offtkz7wd.bkt.clouddn.com/img/personalcenter_add.png",
					title: "发起群聊"
				}, {
					img: "http://offtkz7wd.bkt.clouddn.com/img/add_new_friend.png",
					title: "添加好友"
				}, {
					img: "http://offtkz7wd.bkt.clouddn.com/img/subscribe_friend.png",
					title: "好友订阅"
				}],
				fri_list: [],
	
				menu_show: false,
				zm_listShow: false
	
			};
		},
	
		/*	vuex:{
	 	actions:{
	 		change:changeIndex
	 	}
	 		}
	 	,*/
		ready: function ready() {
			var _this = this;
	
			/*this.change(1);*/
			var that = this;
			mySwiper = new Swiper('.friend_body_swiper-container', {
				onSlideChangeEnd: function onSlideChangeEnd(swiper) {
					that.cur = swiper.activeIndex;
				}
			});
			console.log("DOMReady");
	
			this.$http.get('/rest/fri_msg').then(function (res) {
	
				_this.fri_list = res.data;
				_this.fri_num = res.data.length;
				console.log(res.data);
			}, function (response) {
	
				console.log("ajaxError");
			});
		},
	
		methods: {
			showmsg: function showmsg() {
				this.menu_show = !this.menu_show;
			},
			changeIndex: function changeIndex(index) {
				this.cur = index;
				mySwiper.slideTo(index, 300, false);
			},
			click_hide: function click_hide() {
				this.menu_show = false;
			},
			changeList: function changeList() {
				this.zm_listShow = !this.zm_listShow;
			}
		}
	
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"friend-container\">\r\n\t<header class=\"nav_header\">\r\n\t<div class=\"fri_btns\">\r\n\t\t\t<div v-for=\"items in menu\">\r\n\t\t\t\t<button type=\"button\"  v-show=\"cur==$index? true:false\">{{items}}</button>\r\n\t\t\t\t<button type=\"button\" v-show=\"cur!=$index?true:false\" style=\"color:#fff\" @click=\"changeIndex($index)\">{{items}}</button>\r\n\t\t\t\t<img v-show=\"cur==$index? true:false\" src=\"http://offtkz7wd.bkt.clouddn.com/img/pager_tab_selected.png\"  class=\"fri_btns_select\">\t\r\n\t\t\t\t<img v-show=\"cur!=$index?true:false\" src=\"http://offtkz7wd.bkt.clouddn.com/img/pager_tab.png\"  class=\"fri_btns_select\">\t\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"fri_menu\">\r\n\t\t\t<img  src=\"http://offtkz7wd.bkt.clouddn.com/img/add_friend_btn_normal.png\" @click=\"showmsg\">\r\n\t\t\t<div class=\"fri_menu_list\" v-show=\"menu_show\" transition=\"fri_menu_show\">\r\n\t\t\t\t<ul >\r\n\t\t\t\t\t<li v-for=\"items in menu_list\" @click=\"click_hide\"><img :src=\"items.img\">{{items.title}}</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</header>\r\n\t\t<div class=\"friend_body\">\r\n\t\t\t<div class=\"friend_body_swiper-container\">\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t    <div class=\"swiper-slide fri_list\">\r\n\t\t\t\t\t<form class=\"yo-search\">\r\n\t\t\t\t\t    <label class=\"operation\">\r\n\t\t\t\t\t        <span class=\"yo-ico\">&#xf067;</span>\r\n\t\t\t\t\t        <input type=\"text\" class=\"input\" placeholder=\"搜索你的好友...\" />\r\n\t\t\t\t\t    </label>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<div class=\"fri_aboout_msg\">\r\n\t\t\t\t\t\t<div class=\"fri_about_left\">\r\n\t\t\t\t\t\t\t好友动态\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"fri_about_right\" ></div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"zm_fri_top\" @click=\"changeList\">\r\n\t\t\t\t\t\t<div class=\"zhangmeng_fri\">\r\n\t\t\t\t\t\t\t<div class=\"zm_left\">掌盟好友</div>\r\n\t\t\t\t\t\t\t<div class=\"zm_right\">{{fri_num}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"zm_list\" v-show=\"zm_listShow\" transition=\"list_down\">\r\n\t\t\t\t\t\t\t<li v-for=\"fri in fri_list\"> \r\n\t\t\t\t\t\t\t\t<img :src=\"fri.img\">\r\n\t\t\t\t\t\t\t\t<div class=\"zmlist_title\">{{fri.name}}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"zm_state\">\r\n\t\t\t\t\t\t\t\t\t<button @click.stop=\"\">聊天</button>\r\n\t\t\t\t\t\t\t\t\t<span class=\"state\">{{fri.state}}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n\t\t\t    </div>\r\n\t\t\t    <div class=\"swiper-slide fri_msg\"> \r\n\t\t\t    \t<div v-show=\"fri_msg==0\" class=\"msgs\">暂无消息</div>\r\n\t\t\t    </div>\r\n\t\t\t    \r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div>\r\n\r\n</div>\r\n\r\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(19)
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
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<router-view></router-view>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(21)
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
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
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */,
/* 24 */
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
	// 			height:60px;
	// 			background: rgb(0, 0,0);
	// 			display: flex;
	// 			align-items:center;
	// 			color: #f7d08c;
	//
	// 			span{
	//
	// 				padding-top: 10px;
	// 				&:nth-child(1){
	// 					width:40px;
	// 				}
	// 				&:nth-child(2){
	// 					flex:1;
	// 					text-align: center;
	// 				}
	// 				&:nth-child(3){
	// 					width:24px;
	// 					height:24px;
	// 					border-radius: 100%;
	// 					background:rgba(0,0,0,0.7);
	// 					padding-top: 0px;
	// 				    text-align: center;
	//    					line-height: 24px;
	// 					img{
	// 						margin:0 audio;
	// 						height: 14px;
	// 						width: 14px;
	// 					}
	//
	// 				}
	// 			}
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
	// 		<div class="top" v-bind:style="'background: rgba(0,0,0,'+ topbgcolor+');'" >
	// 			<span></span>
	// 			<span>资讯</span>
	// 			<span> <img src="http://127.0.0.1/images/search_icon.png" alt="" />
	// 			 </span>
	// 		</div>
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
	// 				    		<li v-for="li in list"   v-on:click="listClick($index)">
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
	            });
	
	            getJson(listUrl(0), function (res) {
	                  console.log(res);
	                  that.list = res.list;
	
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
	
	                        listSwiper = new Swiper('.list', {
	                              onSlideChangeStart: function onSlideChangeStart() {
	                                    that.curlist = listSwiper.activeIndex;
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
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n<div id=\"zixun-home\">\r\n\r\n\t<header v-bind:style=\"topimgurl\">\r\n\t\t<div class=\"top\" v-bind:style=\"'background: rgba(0,0,0,'+ topbgcolor+');'\" >\r\n\t\t\t<span></span>\r\n\t\t\t<span>资讯</span>\r\n\t\t\t<span> <img src=\"http://127.0.0.1/images/search_icon.png\" alt=\"\" />\r\n\t\t\t </span>\r\n\t\t</div>\r\n\t\t<div class=\"nav\" v-if=\"headerNav\">\r\n\t\t\t<span  v-bind:class=\"curlist == $index ? 'active' : '' \"  v-for=\"n in nav\"  v-on:click=\"swiperList($index)\">{{n.title}}</span>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\r\n\t<!-- 滚动 IScroll -->\r\n\t<div id=\"zixun-scroll\" v-scroll=\"zixunScroll\"><div>\r\n\r\n\t\t<div v-if=\"isPull\" class=\"pull pullDownEl\">\r\n\t\t\t<img v-bind:src=\"pullPngSrc\">\r\n\t\t\t<span>{{pullDown}}</span>\r\n\t\t</div>\r\n\r\n\t\t<!-- banner -->\r\n\t\t<div class=\"swiper-container banner\" >\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t\t    <div class=\"swiper-slide\" v-for=\"b in banner\">\r\n\t\t\t\t    \t<img  v-bind:src=\"b.image_url_big\" alt=\"\" />\r\n\t\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t</div>\r\n\r\n\t\t<!--  nav -->\r\n\t\t<div class=\"nav\">\r\n\t\t\t<span  v-bind:class=\"curlist == $index ? 'active' : '' \"  v-for=\"n in nav\"  v-on:click=\"swiperList($index)\">{{n.title}}</span>\r\n\t\t</div>\r\n\t\t<div class=\"swiper-container list\">\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t\t    <div class=\"swiper-slide\" v-for=\"n in nav\">\r\n\t\t\t\t    \t<ul>\r\n\t\t\t\t    \t\t<li v-for=\"li in list\"   v-on:click=\"listClick($index)\">\r\n\t\t\t\t\t\t    \t<div class=\"left\">\r\n\t\t\t\t\t\t    \t\t<i></i>\r\n\t\t\t\t\t\t    \t\t<img v-bind:src=\"li.image_url_small\">\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t    \t<div class=\"con\">\r\n\t\t\t\t\t\t    \t\t<h3>{{li.title}}</h3>\r\n\t\t\t\t\t\t    \t\t<p>{{li.summary}}</p>\r\n\t\t\t\t\t\t    \t\t<div class=\"time\">{{li.publication_date}}{{li.pv}}</div>\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t    \t<div class=\"label\" v-if=\"li.newstype\"><span>{{li.newstype}}</span></div>\r\n\t\t\t\t\t    \t</li>\r\n\t\t\t\t    \t</ul>\r\n\t\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t</div>\r\n\t\t<div  class=\"pull pullUpEl\"> <span>上拉加载更多</span></div>\r\n\t</div></div>\r\n</div>\r\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\zixuncontent.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
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
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	// <template>
	// <div id="zixun-content" v-on:click="fenxianghide">
	// 	<div class="header">
	//
	// 		<span class="back" v-on:click="backPage">
	// 			<img src="http://127.0.0.1/images/nav_back_normal.png">
	// 		</span>
	// 		<span class="title">资讯详情</span>
	// 		<span class="more" v-on:click.stop="fenxianghideshow"><img src="http://127.0.0.1/images/menu_more.png"></span>
	// 	</div>
	//
	// 	<iframe v-bind:src="iframeurl"></iframe>
	//
	// 	<div class="footer">
	//
	// 		<!-- 底部的评论滚动 -->
	// 		<div class="swiper-container conSwiper">
	// 		    <div class="swiper-wrapper">
	// 		        <div class="swiper-slide" v-for=" com in comment">
	// 		        	<img v-bind:src="com.img">
	// 		        	<span>{{com.cat}}</span>
	// 		        </div>
	// 		    </div>
	// 		</div>
	//
	// 		<div class="comment" v-link="{path:'/index/zixun/comment'}">
	// 			<img src="http://127.0.0.1/images/news_comments_num.png">
	// 		</div>	
	// 		<div class="editor" v-on:click="editorShow(false)">
	// 			<img src="http://127.0.0.1/images/news_comment_publish_icon.png">
	// 		</div>
	//
	// 		<!-- 评论编辑框 -->
	// 		<div v-bind:class="mask" v-on:click="editorShow(true)">
	// 			<div class="comment-editor" v-on:click.stop>
	// 				<span><input type="text" /></span>
	// 				<span>
	// 					<span> <input type="checkbox" name="" />同步到好友动态</span>
	// 					<span class="fabiao" v-on:click="editorShow(true)">发表</span>
	// 				</span>
	// 			</div>
	// 		</div>
	//
	//
	// 		<!-- 分享 -->
	// 		<div class="fenxiang" v-bind:class="hide" v-on:click.stop>
	// 			<div >分享到</div>
	// 			<div class="con">
	// 				<span>
	// 					<img src="http://127.0.0.1/images/btn_zm.png" alt="" />
	// 					<i>掌盟好友</i>
	// 				</span>
	// 				<span>
	// 					<img src="http://127.0.0.1/images/btn_favor_normal.png" alt="" />
	// 					<i>好友动态</i>
	// 				</span>
	// 				<span>
	// 					<img src="http://127.0.0.1/images/btn_wx_friends.png" alt="" />
	// 					<i>朋友圈</i>
	// 				</span>
	// 				<span>
	// 					<img src="http://127.0.0.1/images/btn_wx.png" alt="" />
	// 					<i>微信好友</i>
	// 				</span>
	// 				<span>
	// 					<img src="http://127.0.0.1/images/btn_qq.png" alt="" />
	// 					<i>手机QQ</i>
	// 				</span>
	// 				<span>
	// 					<img src="http://127.0.0.1/images/btn_qq_qzone.png" alt="" />
	// 					<i>QQ空间</i>
	// 				</span>
	// 				<span>
	// 					<img src="http://127.0.0.1/images/btn_video_normal.png" alt="" />
	// 					<i>新浪微博</i>
	// 				</span>
	// 			</div>
	//
	// 			<span class="backcolor">收藏</span>
	// 			<span v-on:click="fenxianghide">取消</span>
	//
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
				hide: 'hide',
				mask: 'none',
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
			console.log(this.$route.query);
	
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
			},
			editorShow: function editorShow(hide) {
				this.mask = hide ? 'none' : this.mask == 'none' ? 'yo-mask' : 'none';
			},
			fenxianghideshow: function fenxianghideshow() {
				this.hide = this.hide == 'hide' ? '' : 'hide';
			},
			fenxianghide: function fenxianghide() {
				this.hide = 'hide';
			}
		}
	
	};
	// </script>
	//
	//

	/* generated by vue-loader */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n\r\n<div id=\"zixun-content\" v-on:click=\"fenxianghide\">\r\n\t<div class=\"header\">\r\n\r\n\t\t<span class=\"back\" v-on:click=\"backPage\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/nav_back_normal.png\">\r\n\t\t</span>\r\n\t\t<span class=\"title\">资讯详情</span>\r\n\t\t<span class=\"more\" v-on:click.stop=\"fenxianghideshow\"><img src=\"http://127.0.0.1/images/menu_more.png\"></span>\r\n\t</div>\r\n\r\n\t<iframe v-bind:src=\"iframeurl\"></iframe>\r\n\r\n\t<div class=\"footer\">\r\n\t\t\r\n\t\t<!-- 底部的评论滚动 -->\r\n\t\t<div class=\"swiper-container conSwiper\">\r\n\t\t    <div class=\"swiper-wrapper\">\r\n\t\t        <div class=\"swiper-slide\" v-for=\" com in comment\">\r\n\t\t        \t<img v-bind:src=\"com.img\">\r\n\t\t        \t<span>{{com.cat}}</span>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"comment\" v-link=\"{path:'/index/zixun/comment'}\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/news_comments_num.png\">\r\n\t\t</div>\t\r\n\t\t<div class=\"editor\" v-on:click=\"editorShow(false)\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/news_comment_publish_icon.png\">\r\n\t\t</div>\r\n\t\t\r\n\t\t<!-- 评论编辑框 -->\r\n\t\t<div v-bind:class=\"mask\" v-on:click=\"editorShow(true)\">\r\n\t\t\t<div class=\"comment-editor\" v-on:click.stop>\r\n\t\t\t\t<span><input type=\"text\" /></span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span> <input type=\"checkbox\" name=\"\" />同步到好友动态</span>\r\n\t\t\t\t\t<span class=\"fabiao\" v-on:click=\"editorShow(true)\">发表</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t<!-- 分享 -->\r\n\t\t<div class=\"fenxiang\" v-bind:class=\"hide\" v-on:click.stop>\r\n\t\t\t<div >分享到</div>\r\n\t\t\t<div class=\"con\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_zm.png\" alt=\"\" />\r\n\t\t\t\t\t<i>掌盟好友</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_favor_normal.png\" alt=\"\" />\r\n\t\t\t\t\t<i>好友动态</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_wx_friends.png\" alt=\"\" />\r\n\t\t\t\t\t<i>朋友圈</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_wx.png\" alt=\"\" />\r\n\t\t\t\t\t<i>微信好友</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_qq.png\" alt=\"\" />\r\n\t\t\t\t\t<i>手机QQ</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_qq_qzone.png\" alt=\"\" />\r\n\t\t\t\t\t<i>QQ空间</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_video_normal.png\" alt=\"\" />\r\n\t\t\t\t\t<i>新浪微博</i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<span class=\"backcolor\">收藏</span>\r\n\t\t\t<span v-on:click=\"fenxianghide\">取消</span>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\comment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
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
	  var id = "_v-87c19df6/comment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div id="comment">
	// 		<div class="header">
	// 			<span class="back" v-on:click="backPage">
	// 				<img src="http://127.0.0.1/images/nav_back_normal.png">
	// 			</span>
	// 			<span class="title">查看评论（182）</span>
	// 			<span class="more" ></span>
	// 			<div class="zuixin" ></div>
	//
	// 			<!-- 嵌入到header的 模态框 -->
	// 			<div v-bind:class="mask" v-on:click="showMask('hide')">
	//
	// 				<div v-if="maskItem == 'choose'" class="choose" v-on:click.stop>
	// 					<h3>请选择</h3>
	// 					<p v-bind:class="huifu" v-on:click.stop="commentBox('huifu')" v-on:touchend="chooseEnd('huifu')" v-on:touchstart="chooseStart('huifu')">回复</p>
	// 					<p v-bind:class="fuzi" v-on:click.stop="commentBox('fuzi')" v-on:touchend="chooseEnd('fuzi')" v-on:touchstart="chooseStart('fuzi')">复制</p>
	// 					<p v-bind:class="jubao"  v-on:click.stop="commentBox('jubao')" v-on:touchend="chooseEnd('jubao')" v-on:touchstart="chooseStart('jubao')">举报</p>
	// 				</div>
	//
	// 				<!-- 举报理由 -->
	// 				<div v-if="maskItem == 'liyou'" class="liyou choose" v-on:click.stop>
	// 					<h3>请选择举报理由</h3>
	// 					<p >广告</p>
	// 					<p >色情</p>
	// 					<p >辱骂</p>
	// 					<p >骚扰</p>
	// 					<p >反动</p>
	// 					<p >其它</p>
	// 				</div>
	//
	// 				<!-- 评论编辑框   -->
	// 				<div v-if="maskItem == 'eitor'" class="comment-editor" v-on:click.stop>
	// 					<span><input type="text" /></span>
	// 					<span>
	// 						<span> <input type="checkbox" name="" />同步到好友动态</span>
	// 						<span class="fabiao" v-on:click="showMask('hide')">发表</span>
	// 					</span>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div class="comment-scroll" v-scroll="commentScroll">
	// 			<ul>
	// 				<li v-for="item in comment">
	// 					<div class="li-top">
	// 						<div > <img v-bind:src="item.imgurl" alt="" /> </div>
	// 						<div >
	// 							<h3>{{item.name}} </h3>
	// 							<div ><span> <img src="http://127.0.0.1/images/peoplenearby_woman.png" alt="" />{{item.zan}}</span><span></span><span></span> </div>
	// 						</div>
	// 						<div >{{item.time}}</div>
	// 					</div>
	// 					<div class="li-con"	 v-on:click="showMask($index)"> {{item.comment}}</div>
	// 					<div class="li-bot"	>
	// 						<span>{{item.zan}}个赞</span>
	// 						<span > 
	// 							<i v-bind:class=" zhaning == $index ? 'zhaning' : ''  "> +1 </i> 
	// 							<template v-if="!item.iszan"><span v-on:click="zhananimation($index, false)"><img src="http://127.0.0.1/images/praise_blue.png" alt="" /> 赞 </span></template>
	// 							<template v-if="item.iszan"><span v-on:click="zhananimation($index , true)" > 已赞 </span></template>
	// 						</span>
	// 					</div>
	// 				</li>
	//
	// 			</ul>
	//
	// 		</div>
	//
	// 	</div>
	// </template>
	//
	// <script>
	var that;
	
	exports.default = {
		data: function data() {
			return {
				huifu: '',
				fuzi: '',
				jubao: "",
				zhaning: -1,
				maskItem: 'choose',
				mask: 'none',
				comment: [],
				commentScroll: { el: '.comment-scroll' }
			};
		},
		ready: function ready() {
			var _this = this;
	
			that = this;
			// Vue.http.get('http://127.0.0.1/mock/comment.json')
			Vue.http.get('/commen.php').then(function (res) {
				console.log(res);
	
				var str = res.body;
				str = str.substring(0, str.indexOf('<script'));
				_this.comment = JSON.parse(str);
				for (var i = 0; i < _this.comment.length; i++) {
					_this.$set('comment[' + i + '].iszan', false);
				}
				// this.comment = res.body;
				Vue.nextTick(function () {
					console.log('ss');
					that.$set('commentScroll.config', {
						click: true
					});
				});
			});
		},
		methods: {
			backPage: function backPage() {
				console.log(window);
				history.go(-1);
			},
			showMask: function showMask(index) {
				this.maskItem = 'choose';
				if (index == 'hide') {
					this.mask = 'none';
				} else {
					this.mask = this.mask == "yo-mask" ? 'none' : 'yo-mask';
				}
			},
			chooseStart: function chooseStart(key) {
				this[key] = 'anxia';
			},
			chooseEnd: function chooseEnd(key) {
				this[key] = '';
			},
			commentBox: function commentBox(key) {
				console.log(key);
				switch (key) {
					case 'huifu':
						this.maskItem = 'eitor';
						break;
					case 'jubao':
						this.maskItem = 'liyou';
						break;
					case 'fuzhi':
						this.mask = 'none';
						break;
				}
			},
			zhananimation: function zhananimation(index, quxiao) {
	
				if (quxiao) {
					this.zhaning = -1;
					this.comment[index].iszan = false;
					this.comment[index].zan--;
				} else {
					this.zhaning = index;
					this.comment[index].iszan = true;
					this.comment[index].zan++;
					setTimeout(function () {
						that.zhaning = -1;
					}, 1000);
				}
			}
		}
	
	};
	
	// </script>

	/* generated by vue-loader */

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"comment\">\n\t<div class=\"header\">\n\t\t<span class=\"back\" v-on:click=\"backPage\">\n\t\t\t<img src=\"http://127.0.0.1/images/nav_back_normal.png\">\n\t\t</span>\n\t\t<span class=\"title\">查看评论（182）</span>\n\t\t<span class=\"more\" ></span>\n\t\t<div class=\"zuixin\" ></div>\n\t\t\n\t\t<!-- 嵌入到header的 模态框 -->\n\t\t<div v-bind:class=\"mask\" v-on:click=\"showMask('hide')\">\n\t\t\t\n\t\t\t<div v-if=\"maskItem == 'choose'\" class=\"choose\" v-on:click.stop>\n\t\t\t\t<h3>请选择</h3>\n\t\t\t\t<p v-bind:class=\"huifu\" v-on:click.stop=\"commentBox('huifu')\" v-on:touchend=\"chooseEnd('huifu')\" v-on:touchstart=\"chooseStart('huifu')\">回复</p>\n\t\t\t\t<p v-bind:class=\"fuzi\" v-on:click.stop=\"commentBox('fuzi')\" v-on:touchend=\"chooseEnd('fuzi')\" v-on:touchstart=\"chooseStart('fuzi')\">复制</p>\n\t\t\t\t<p v-bind:class=\"jubao\"  v-on:click.stop=\"commentBox('jubao')\" v-on:touchend=\"chooseEnd('jubao')\" v-on:touchstart=\"chooseStart('jubao')\">举报</p>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- 举报理由 -->\n\t\t\t<div v-if=\"maskItem == 'liyou'\" class=\"liyou choose\" v-on:click.stop>\n\t\t\t\t<h3>请选择举报理由</h3>\n\t\t\t\t<p >广告</p>\n\t\t\t\t<p >色情</p>\n\t\t\t\t<p >辱骂</p>\n\t\t\t\t<p >骚扰</p>\n\t\t\t\t<p >反动</p>\n\t\t\t\t<p >其它</p>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- 评论编辑框   -->\n\t\t\t<div v-if=\"maskItem == 'eitor'\" class=\"comment-editor\" v-on:click.stop>\n\t\t\t\t<span><input type=\"text\" /></span>\n\t\t\t\t<span>\n\t\t\t\t\t<span> <input type=\"checkbox\" name=\"\" />同步到好友动态</span>\n\t\t\t\t\t<span class=\"fabiao\" v-on:click=\"showMask('hide')\">发表</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"comment-scroll\" v-scroll=\"commentScroll\">\n\t\t<ul>\n\t\t\t<li v-for=\"item in comment\">\n\t\t\t\t<div class=\"li-top\">\n\t\t\t\t\t<div > <img v-bind:src=\"item.imgurl\" alt=\"\" /> </div>\n\t\t\t\t\t<div >\n\t\t\t\t\t\t<h3>{{item.name}} </h3>\n\t\t\t\t\t\t<div ><span> <img src=\"http://127.0.0.1/images/peoplenearby_woman.png\" alt=\"\" />{{item.zan}}</span><span></span><span></span> </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div >{{item.time}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"li-con\"\t v-on:click=\"showMask($index)\"> {{item.comment}}</div>\n\t\t\t\t<div class=\"li-bot\"\t>\n\t\t\t\t\t<span>{{item.zan}}个赞</span>\n\t\t\t\t\t<span > \n\t\t\t\t\t\t<i v-bind:class=\" zhaning == $index ? 'zhaning' : ''  \"> +1 </i> \n\t\t\t\t\t\t<template v-if=\"!item.iszan\"><span v-on:click=\"zhananimation($index, false)\"><img src=\"http://127.0.0.1/images/praise_blue.png\" alt=\"\" /> 赞 </span></template>\n\t\t\t\t\t\t<template v-if=\"item.iszan\"><span v-on:click=\"zhananimation($index , true)\" > 已赞 </span></template>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n\t\t\n\t</div>\n\t\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "\n\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\search.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-6a19de3b/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vueDialog = __webpack_require__(16);
	
	var _vueDialog2 = _interopRequireDefault(_vueDialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="searchHome">
	// 	<div v-if="isShow">
	// 		<vue-dialog></vue-dialog>
	// 	</div>
	// 		<div class="headerBox">
	// 			<div class="header">
	// 				<i>头像</i>
	// 				<b>发现</b>
	// 				<i>扫一扫</i>
	// 			</div>
	// 			<div class="teamClub">
	// 				<div id="wrapper">
	// 					<ul>
	// 						<li v-for="club in searchClub">
	// 							<img v-bind:src="club.iconUrl">
	// 							<b>{{club.name}}</b>
	// 						</li>
	// 					</ul>
	// 				</div>
	// 			</div>
	// 			<div class="fansClub">
	// 				<span>粉丝俱乐部 ></span>
	// 			</div>
	// 		</div>
	// 		<div class="searchContainer">
	// 			<ul class="allList">
	// 				<li v-link="{path:'heroData'}" v-for="al in allList">
	// 					<img v-bind:src="al.image_url_big">
	// 					<b>{{al.title}}</b>
	// 				</li>
	// 			</ul>
	// 			<ul class="sortList">
	// 				<template v-for="sl in sortList">
	// 					<li v-if="$index<1||$index>3&$index<6" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
	// 						<div>
	// 							<img v-bind:src="sl.image_url_big">
	// 							<b>{{sl.title}}</b>
	// 						</div>
	// 					</li>
	// 					<li v-if="$index==1" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
	// 						<div>
	// 							<img v-bind:src="sl.image_url_big">
	// 							<b>{{sl.title}}</b>
	// 							<img src="/images/find_hot_tips.png">
	// 						</div>
	// 					</li>
	// 					<li v-if="$index==3" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
	// 						<div>
	// 							<img v-bind:src="sl.image_url_big">
	// 							<b>{{sl.title}}</b>
	// 						</div>
	// 						<div class="download">
	// 							<b v-bind:class="sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'">&#xf031;</b>
	// 						</div>
	// 					</li>
	// 					<li v-if="$index==2" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
	// 						<div>
	// 							<img v-bind:src="sl.image_url_big">
	// 							<b>{{sl.title}}</b>
	// 						</div>
	// 						<div class="download">
	// 							<span class="downFont" @click.stop="download">下载</span>
	// 							<b v-bind:class="sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'">&#xf031;</b>
	// 						</div>
	// 					</li>
	// 					<li v-if="sl.subList.length > 0 "  data-d="{{sl.isHidden}}" v-bind:class=" sl.isHidden ? 'childLi':'childLi forHidden'">
	// 						<ul>
	// 							<li v-for="item in sl.subList" v-on:click="switchClick($index,item.article_url,item.article_id,item.title)">
	//                   				<img v-bind:src="item.image_url_big">
	// 					        	<b>{{item.title}}</b>
	// 							</li>
	// 						</ul>
	// 					</li>	
	// 				</template>
	// 			</ul>
	// 		</div>
	// 		<div class="searchFooter"></div>
	// 	</div>
	// </template>
	// <script>
	var Vue = __webpack_require__(5);
	var VueResource = __webpack_require__(20);
	var VueRouter = __webpack_require__(6);
	var myScroll;
	Vue.use(VueResource);
	Vue.use(VueRouter);
	var router = new VueRouter();
	
	Vue.use(_vueDialog2.default);
	exports.default = {
		data: function data() {
			return {
				allList: [],
				sortList: [],
				subList: [],
				curIndex: 0,
				searchClub: [],
				isShow: false
			};
		},
	
		ready: function ready() {
			var _this = this;
	
			this.$http.get('/mock/search/searchHome.json').then(function (res) {
				var dataList = res.data.list;
	
				var allArr = [];
				var sortArr = [];
				var subArr = [];
				//排序
				dataList.sort(function (a, b) {
					return a.section_index - b.section_index;
				});
				allArr.sort(function (a, b) {
					return a.pos_index - b.pos_index;
				});
	
				for (var _i = 0; _i < dataList.length; _i++) {
					if (dataList[_i].is_top == 1) {
						allArr.push(dataList[_i]);
					} else {
						if (dataList[_i].parentid) {
							subArr.push(dataList[_i]);
						} else {
							sortArr.push(dataList[_i]);
						}
					}
				}
	
				for (var i = 0; i < sortArr.length; i++) {
					sortArr[i].subList = [];
					for (var j = 0; j < subArr.length; j++) {
						if (sortArr[i].article_id == subArr[j].parentid) sortArr[i].subList.push(subArr[j]);
						sortArr[i].isHidden = false;
					}
				}
				_this.allList = allArr;
				_this.sortList = sortArr;
				_this.subList = subArr;
			}, function (res) {
				console.log(res);
			});
			this.$http.get('/mock/search/searchClub.json').then(function (res) {
				var clubData = res.data.clubs;
				_this.searchClub = clubData;
				setTimeout(function () {
					myScroll.refresh();
				}, 500);
			}, function (res) {
				console.log(res);
			});
			myScroll = new IScroll('#wrapper', {
				scrollX: true,
				scrollY: true,
				mouseWheel: true,
				scrollbars: false
			});
			this.$http.get('/mock/search/searchHome.json').then(function (res) {
				console.log(res);
			}, function (res) {
				console.log(res);
			});
		},
		methods: {
			//isHidden : true,
			switchClick: function switchClick(index, article_url, article_id, title) {
				if (article_id == 12458 || article_id == 12457) {
					this.sortList[index].isHidden = !this.sortList[index].isHidden;
				} else if (article_id == 3578) {
					console.log(article_id);
					router.go({ path: '/searchHeroTime?headTitle=' + title + '&idFlag=#bid&id=10038&url=http://buluo.qq.com/mobile/barindex.html?#bid=10038' });
				} else if (article_id == 3625) {
					console.log(article_id);
					router.go({ path: '/searchHeroTime?headTitle=' + title + '&idFlag=siteid&id=187674040&c=index&url=http://wsq.discuz.qq.com/?siteid=187674040&c=index&f=inner&a=index&sid=$VKEY$' });
				} else {
					console.log(article_id);
					router.go({ path: '/searchHeroTime?headTitle=' + title + '&url=' + article_url });
				}
			},
			download: function download() {
				this.isShow = true;
			},
			hide: function hide() {
				this.isShow = false;
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _dialog = __webpack_require__(17);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueDialog = function VueDialog() {};
	VueDialog.install = function (Vue, options) {
		Vue.component('vue-dialog', Vue.extend(_dialog2.default));
	};
	exports.default = VueDialog;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\plugins\\dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
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
	  var id = "_v-283bcf2e/dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <div v-if="isShow">
	//       <div class="yo-dialog yo-dialog-a">
	//         <header class="hd">
	//           <h2 class="title" yo-dialog-b>更新提示</h2>
	//         </header>
	//         <div class="bd">
	//           <p>下载包包含所有游戏资料,内容总计10.60M,是否确认下载?</p>
	//         </div>
	//         <footer class="ft">
	//           <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">取消</button>
	//           <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">确定</button>
	//         </footer>
	//       </div>
	//       <div class="yo-mask"></div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      isShow: true
	    };
	  },
	
	  methods: {
	    hide: function hide() {
	      this.isShow = false;
	    }
	  },
	  ready: function ready() {}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div v-if=\"isShow\">\n    <div class=\"yo-dialog yo-dialog-a\">\n      <header class=\"hd\">\n        <h2 class=\"title\" yo-dialog-b>更新提示</h2>\n      </header>\n      <div class=\"bd\">\n        <p>下载包包含所有游戏资料,内容总计10.60M,是否确认下载?</p>\n      </div>\n      <footer class=\"ft\">\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">取消</button>\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">确定</button>\n      </footer>\n    </div>\n    <div class=\"yo-mask\"></div>\n  </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * vue-resource v1.0.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
	
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.VueResource = factory();
	})(undefined, function () {
	    'use strict';
	
	    /**
	     * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	     */
	
	    var RESOLVED = 0;
	    var REJECTED = 1;
	    var PENDING = 2;
	
	    function Promise$1(executor) {
	
	        this.state = PENDING;
	        this.value = undefined;
	        this.deferred = [];
	
	        var promise = this;
	
	        try {
	            executor(function (x) {
	                promise.resolve(x);
	            }, function (r) {
	                promise.reject(r);
	            });
	        } catch (e) {
	            promise.reject(e);
	        }
	    }
	
	    Promise$1.reject = function (r) {
	        return new Promise$1(function (resolve, reject) {
	            reject(r);
	        });
	    };
	
	    Promise$1.resolve = function (x) {
	        return new Promise$1(function (resolve, reject) {
	            resolve(x);
	        });
	    };
	
	    Promise$1.all = function all(iterable) {
	        return new Promise$1(function (resolve, reject) {
	            var count = 0,
	                result = [];
	
	            if (iterable.length === 0) {
	                resolve(result);
	            }
	
	            function resolver(i) {
	                return function (x) {
	                    result[i] = x;
	                    count += 1;
	
	                    if (count === iterable.length) {
	                        resolve(result);
	                    }
	                };
	            }
	
	            for (var i = 0; i < iterable.length; i += 1) {
	                Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	            }
	        });
	    };
	
	    Promise$1.race = function race(iterable) {
	        return new Promise$1(function (resolve, reject) {
	            for (var i = 0; i < iterable.length; i += 1) {
	                Promise$1.resolve(iterable[i]).then(resolve, reject);
	            }
	        });
	    };
	
	    var p$1 = Promise$1.prototype;
	
	    p$1.resolve = function resolve(x) {
	        var promise = this;
	
	        if (promise.state === PENDING) {
	            if (x === promise) {
	                throw new TypeError('Promise settled with itself.');
	            }
	
	            var called = false;
	
	            try {
	                var then = x && x['then'];
	
	                if (x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && typeof then === 'function') {
	                    then.call(x, function (x) {
	                        if (!called) {
	                            promise.resolve(x);
	                        }
	                        called = true;
	                    }, function (r) {
	                        if (!called) {
	                            promise.reject(r);
	                        }
	                        called = true;
	                    });
	                    return;
	                }
	            } catch (e) {
	                if (!called) {
	                    promise.reject(e);
	                }
	                return;
	            }
	
	            promise.state = RESOLVED;
	            promise.value = x;
	            promise.notify();
	        }
	    };
	
	    p$1.reject = function reject(reason) {
	        var promise = this;
	
	        if (promise.state === PENDING) {
	            if (reason === promise) {
	                throw new TypeError('Promise settled with itself.');
	            }
	
	            promise.state = REJECTED;
	            promise.value = reason;
	            promise.notify();
	        }
	    };
	
	    p$1.notify = function notify() {
	        var promise = this;
	
	        nextTick(function () {
	            if (promise.state !== PENDING) {
	                while (promise.deferred.length) {
	                    var deferred = promise.deferred.shift(),
	                        onResolved = deferred[0],
	                        onRejected = deferred[1],
	                        resolve = deferred[2],
	                        reject = deferred[3];
	
	                    try {
	                        if (promise.state === RESOLVED) {
	                            if (typeof onResolved === 'function') {
	                                resolve(onResolved.call(undefined, promise.value));
	                            } else {
	                                resolve(promise.value);
	                            }
	                        } else if (promise.state === REJECTED) {
	                            if (typeof onRejected === 'function') {
	                                resolve(onRejected.call(undefined, promise.value));
	                            } else {
	                                reject(promise.value);
	                            }
	                        }
	                    } catch (e) {
	                        reject(e);
	                    }
	                }
	            }
	        });
	    };
	
	    p$1.then = function then(onResolved, onRejected) {
	        var promise = this;
	
	        return new Promise$1(function (resolve, reject) {
	            promise.deferred.push([onResolved, onRejected, resolve, reject]);
	            promise.notify();
	        });
	    };
	
	    p$1.catch = function (onRejected) {
	        return this.then(undefined, onRejected);
	    };
	
	    /**
	     * Promise adapter.
	     */
	
	    if (typeof Promise === 'undefined') {
	        window.Promise = Promise$1;
	    }
	
	    function PromiseObj(executor, context) {
	
	        if (executor instanceof Promise) {
	            this.promise = executor;
	        } else {
	            this.promise = new Promise(executor.bind(context));
	        }
	
	        this.context = context;
	    }
	
	    PromiseObj.all = function (iterable, context) {
	        return new PromiseObj(Promise.all(iterable), context);
	    };
	
	    PromiseObj.resolve = function (value, context) {
	        return new PromiseObj(Promise.resolve(value), context);
	    };
	
	    PromiseObj.reject = function (reason, context) {
	        return new PromiseObj(Promise.reject(reason), context);
	    };
	
	    PromiseObj.race = function (iterable, context) {
	        return new PromiseObj(Promise.race(iterable), context);
	    };
	
	    var p = PromiseObj.prototype;
	
	    p.bind = function (context) {
	        this.context = context;
	        return this;
	    };
	
	    p.then = function (fulfilled, rejected) {
	
	        if (fulfilled && fulfilled.bind && this.context) {
	            fulfilled = fulfilled.bind(this.context);
	        }
	
	        if (rejected && rejected.bind && this.context) {
	            rejected = rejected.bind(this.context);
	        }
	
	        return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	    };
	
	    p.catch = function (rejected) {
	
	        if (rejected && rejected.bind && this.context) {
	            rejected = rejected.bind(this.context);
	        }
	
	        return new PromiseObj(this.promise.catch(rejected), this.context);
	    };
	
	    p.finally = function (callback) {
	
	        return this.then(function (value) {
	            callback.call(this);
	            return value;
	        }, function (reason) {
	            callback.call(this);
	            return Promise.reject(reason);
	        });
	    };
	
	    /**
	     * Utility functions.
	     */
	
	    var debug = false;var util = {};var slice = [].slice;
	
	    function Util(Vue) {
	        util = Vue.util;
	        debug = Vue.config.debug || !Vue.config.silent;
	    }
	
	    function warn(msg) {
	        if (typeof console !== 'undefined' && debug) {
	            console.warn('[VueResource warn]: ' + msg);
	        }
	    }
	
	    function error(msg) {
	        if (typeof console !== 'undefined') {
	            console.error(msg);
	        }
	    }
	
	    function nextTick(cb, ctx) {
	        return util.nextTick(cb, ctx);
	    }
	
	    function trim(str) {
	        return str.replace(/^\s*|\s*$/g, '');
	    }
	
	    function toLower(str) {
	        return str ? str.toLowerCase() : '';
	    }
	
	    function toUpper(str) {
	        return str ? str.toUpperCase() : '';
	    }
	
	    var isArray = Array.isArray;
	
	    function isString(val) {
	        return typeof val === 'string';
	    }
	
	    function isBoolean(val) {
	        return val === true || val === false;
	    }
	
	    function isFunction(val) {
	        return typeof val === 'function';
	    }
	
	    function isObject(obj) {
	        return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	    }
	
	    function isPlainObject(obj) {
	        return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	    }
	
	    function isBlob(obj) {
	        return typeof Blob !== 'undefined' && obj instanceof Blob;
	    }
	
	    function isFormData(obj) {
	        return typeof FormData !== 'undefined' && obj instanceof FormData;
	    }
	
	    function when(value, fulfilled, rejected) {
	
	        var promise = PromiseObj.resolve(value);
	
	        if (arguments.length < 2) {
	            return promise;
	        }
	
	        return promise.then(fulfilled, rejected);
	    }
	
	    function options(fn, obj, opts) {
	
	        opts = opts || {};
	
	        if (isFunction(opts)) {
	            opts = opts.call(obj);
	        }
	
	        return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	    }
	
	    function each(obj, iterator) {
	
	        var i, key;
	
	        if (obj && typeof obj.length == 'number') {
	            for (i = 0; i < obj.length; i++) {
	                iterator.call(obj[i], obj[i], i);
	            }
	        } else if (isObject(obj)) {
	            for (key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    iterator.call(obj[key], obj[key], key);
	                }
	            }
	        }
	
	        return obj;
	    }
	
	    var assign = Object.assign || _assign;
	
	    function merge(target) {
	
	        var args = slice.call(arguments, 1);
	
	        args.forEach(function (source) {
	            _merge(target, source, true);
	        });
	
	        return target;
	    }
	
	    function defaults(target) {
	
	        var args = slice.call(arguments, 1);
	
	        args.forEach(function (source) {
	
	            for (var key in source) {
	                if (target[key] === undefined) {
	                    target[key] = source[key];
	                }
	            }
	        });
	
	        return target;
	    }
	
	    function _assign(target) {
	
	        var args = slice.call(arguments, 1);
	
	        args.forEach(function (source) {
	            _merge(target, source);
	        });
	
	        return target;
	    }
	
	    function _merge(target, source, deep) {
	        for (var key in source) {
	            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	                if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                    target[key] = {};
	                }
	                if (isArray(source[key]) && !isArray(target[key])) {
	                    target[key] = [];
	                }
	                _merge(target[key], source[key], deep);
	            } else if (source[key] !== undefined) {
	                target[key] = source[key];
	            }
	        }
	    }
	
	    /**
	     * Root Prefix Transform.
	     */
	
	    function root(options, next) {
	
	        var url = next(options);
	
	        if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	            url = options.root + '/' + url;
	        }
	
	        return url;
	    }
	
	    /**
	     * Query Parameter Transform.
	     */
	
	    function query(options, next) {
	
	        var urlParams = Object.keys(Url.options.params),
	            query = {},
	            url = next(options);
	
	        each(options.params, function (value, key) {
	            if (urlParams.indexOf(key) === -1) {
	                query[key] = value;
	            }
	        });
	
	        query = Url.params(query);
	
	        if (query) {
	            url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	        }
	
	        return url;
	    }
	
	    /**
	     * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	     */
	
	    function expand(url, params, variables) {
	
	        var tmpl = parse(url),
	            expanded = tmpl.expand(params);
	
	        if (variables) {
	            variables.push.apply(variables, tmpl.vars);
	        }
	
	        return expanded;
	    }
	
	    function parse(template) {
	
	        var operators = ['+', '#', '.', '/', ';', '?', '&'],
	            variables = [];
	
	        return {
	            vars: variables,
	            expand: function expand(context) {
	                return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                    if (expression) {
	
	                        var operator = null,
	                            values = [];
	
	                        if (operators.indexOf(expression.charAt(0)) !== -1) {
	                            operator = expression.charAt(0);
	                            expression = expression.substr(1);
	                        }
	
	                        expression.split(/,/g).forEach(function (variable) {
	                            var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                            values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                            variables.push(tmp[1]);
	                        });
	
	                        if (operator && operator !== '+') {
	
	                            var separator = ',';
	
	                            if (operator === '?') {
	                                separator = '&';
	                            } else if (operator !== '#') {
	                                separator = operator;
	                            }
	
	                            return (values.length !== 0 ? operator : '') + values.join(separator);
	                        } else {
	                            return values.join(',');
	                        }
	                    } else {
	                        return encodeReserved(literal);
	                    }
	                });
	            }
	        };
	    }
	
	    function getValues(context, operator, key, modifier) {
	
	        var value = context[key],
	            result = [];
	
	        if (isDefined(value) && value !== '') {
	            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	                value = value.toString();
	
	                if (modifier && modifier !== '*') {
	                    value = value.substring(0, parseInt(modifier, 10));
	                }
	
	                result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	            } else {
	                if (modifier === '*') {
	                    if (Array.isArray(value)) {
	                        value.filter(isDefined).forEach(function (value) {
	                            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                        });
	                    } else {
	                        Object.keys(value).forEach(function (k) {
	                            if (isDefined(value[k])) {
	                                result.push(encodeValue(operator, value[k], k));
	                            }
	                        });
	                    }
	                } else {
	                    var tmp = [];
	
	                    if (Array.isArray(value)) {
	                        value.filter(isDefined).forEach(function (value) {
	                            tmp.push(encodeValue(operator, value));
	                        });
	                    } else {
	                        Object.keys(value).forEach(function (k) {
	                            if (isDefined(value[k])) {
	                                tmp.push(encodeURIComponent(k));
	                                tmp.push(encodeValue(operator, value[k].toString()));
	                            }
	                        });
	                    }
	
	                    if (isKeyOperator(operator)) {
	                        result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                    } else if (tmp.length !== 0) {
	                        result.push(tmp.join(','));
	                    }
	                }
	            }
	        } else {
	            if (operator === ';') {
	                result.push(encodeURIComponent(key));
	            } else if (value === '' && (operator === '&' || operator === '?')) {
	                result.push(encodeURIComponent(key) + '=');
	            } else if (value === '') {
	                result.push('');
	            }
	        }
	
	        return result;
	    }
	
	    function isDefined(value) {
	        return value !== undefined && value !== null;
	    }
	
	    function isKeyOperator(operator) {
	        return operator === ';' || operator === '&' || operator === '?';
	    }
	
	    function encodeValue(operator, value, key) {
	
	        value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);
	
	        if (key) {
	            return encodeURIComponent(key) + '=' + value;
	        } else {
	            return value;
	        }
	    }
	
	    function encodeReserved(str) {
	        return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	            if (!/%[0-9A-Fa-f]/.test(part)) {
	                part = encodeURI(part);
	            }
	            return part;
	        }).join('');
	    }
	
	    /**
	     * URL Template (RFC 6570) Transform.
	     */
	
	    function template(options) {
	
	        var variables = [],
	            url = expand(options.url, options.params, variables);
	
	        variables.forEach(function (key) {
	            delete options.params[key];
	        });
	
	        return url;
	    }
	
	    /**
	     * Service for URL templating.
	     */
	
	    var ie = document.documentMode;
	    var el = document.createElement('a');
	
	    function Url(url, params) {
	
	        var self = this || {},
	            options = url,
	            transform;
	
	        if (isString(url)) {
	            options = { url: url, params: params };
	        }
	
	        options = merge({}, Url.options, self.$options, options);
	
	        Url.transforms.forEach(function (handler) {
	            transform = factory(handler, transform, self.$vm);
	        });
	
	        return transform(options);
	    }
	
	    /**
	     * Url options.
	     */
	
	    Url.options = {
	        url: '',
	        root: null,
	        params: {}
	    };
	
	    /**
	     * Url transforms.
	     */
	
	    Url.transforms = [template, query, root];
	
	    /**
	     * Encodes a Url parameter string.
	     *
	     * @param {Object} obj
	     */
	
	    Url.params = function (obj) {
	
	        var params = [],
	            escape = encodeURIComponent;
	
	        params.add = function (key, value) {
	
	            if (isFunction(value)) {
	                value = value();
	            }
	
	            if (value === null) {
	                value = '';
	            }
	
	            this.push(escape(key) + '=' + escape(value));
	        };
	
	        serialize(params, obj);
	
	        return params.join('&').replace(/%20/g, '+');
	    };
	
	    /**
	     * Parse a URL and return its components.
	     *
	     * @param {String} url
	     */
	
	    Url.parse = function (url) {
	
	        if (ie) {
	            el.href = url;
	            url = el.href;
	        }
	
	        el.href = url;
	
	        return {
	            href: el.href,
	            protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	            port: el.port,
	            host: el.host,
	            hostname: el.hostname,
	            pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	            search: el.search ? el.search.replace(/^\?/, '') : '',
	            hash: el.hash ? el.hash.replace(/^#/, '') : ''
	        };
	    };
	
	    function factory(handler, next, vm) {
	        return function (options) {
	            return handler.call(vm, options, next);
	        };
	    }
	
	    function serialize(params, obj, scope) {
	
	        var array = isArray(obj),
	            plain = isPlainObject(obj),
	            hash;
	
	        each(obj, function (value, key) {
	
	            hash = isObject(value) || isArray(value);
	
	            if (scope) {
	                key = scope + '[' + (plain || hash ? key : '') + ']';
	            }
	
	            if (!scope && array) {
	                params.add(value.name, value.value);
	            } else if (hash) {
	                serialize(params, value, key);
	            } else {
	                params.add(key, value);
	            }
	        });
	    }
	
	    /**
	     * XDomain client (Internet Explorer).
	     */
	
	    function xdrClient(request) {
	        return new PromiseObj(function (resolve) {
	
	            var xdr = new XDomainRequest(),
	                handler = function handler(_ref) {
	                var type = _ref.type;
	
	                var status = 0;
	
	                if (type === 'load') {
	                    status = 200;
	                } else if (type === 'error') {
	                    status = 500;
	                }
	
	                resolve(request.respondWith(xdr.responseText, { status: status }));
	            };
	
	            request.abort = function () {
	                return xdr.abort();
	            };
	
	            xdr.open(request.method, request.getUrl());
	            xdr.timeout = 0;
	            xdr.onload = handler;
	            xdr.onerror = handler;
	            xdr.ontimeout = handler;
	            xdr.onprogress = function () {};
	            xdr.send(request.getBody());
	        });
	    }
	
	    /**
	     * CORS Interceptor.
	     */
	
	    var ORIGIN_URL = Url.parse(location.href);
	    var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();
	
	    function cors(request, next) {
	
	        if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	            request.crossOrigin = true;
	        }
	
	        if (request.crossOrigin) {
	
	            if (!SUPPORTS_CORS) {
	                request.client = xdrClient;
	            }
	
	            delete request.emulateHTTP;
	        }
	
	        next();
	    }
	
	    function crossOrigin(request) {
	
	        var requestUrl = Url.parse(Url(request));
	
	        return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	    }
	
	    /**
	     * Body Interceptor.
	     */
	
	    function body(request, next) {
	
	        if (isFormData(request.body)) {
	
	            request.headers.delete('Content-Type');
	        } else if (isObject(request.body) || isArray(request.body)) {
	
	            if (request.emulateJSON) {
	                request.body = Url.params(request.body);
	                request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	            } else {
	                request.body = JSON.stringify(request.body);
	            }
	        }
	
	        next(function (response) {
	
	            Object.defineProperty(response, 'data', {
	                get: function get() {
	                    return this.body;
	                },
	                set: function set(body) {
	                    this.body = body;
	                }
	            });
	
	            return response.bodyText ? when(response.text(), function (text) {
	
	                var type = response.headers.get('Content-Type');
	
	                if (isString(type) && type.indexOf('application/json') === 0) {
	
	                    try {
	                        response.body = JSON.parse(text);
	                    } catch (e) {
	                        response.body = null;
	                    }
	                } else {
	                    response.body = text;
	                }
	
	                return response;
	            }) : response;
	        });
	    }
	
	    /**
	     * JSONP client.
	     */
	
	    function jsonpClient(request) {
	        return new PromiseObj(function (resolve) {
	
	            var name = request.jsonp || 'callback',
	                callback = '_jsonp' + Math.random().toString(36).substr(2),
	                body = null,
	                handler,
	                script;
	
	            handler = function handler(_ref) {
	                var type = _ref.type;
	
	                var status = 0;
	
	                if (type === 'load' && body !== null) {
	                    status = 200;
	                } else if (type === 'error') {
	                    status = 500;
	                }
	
	                resolve(request.respondWith(body, { status: status }));
	
	                delete window[callback];
	                document.body.removeChild(script);
	            };
	
	            request.params[name] = callback;
	
	            window[callback] = function (result) {
	                body = JSON.stringify(result);
	            };
	
	            script = document.createElement('script');
	            script.src = request.getUrl();
	            script.type = 'text/javascript';
	            script.async = true;
	            script.onload = handler;
	            script.onerror = handler;
	
	            document.body.appendChild(script);
	        });
	    }
	
	    /**
	     * JSONP Interceptor.
	     */
	
	    function jsonp(request, next) {
	
	        if (request.method == 'JSONP') {
	            request.client = jsonpClient;
	        }
	
	        next(function (response) {
	
	            if (request.method == 'JSONP') {
	
	                return when(response.json(), function (json) {
	
	                    response.body = json;
	
	                    return response;
	                });
	            }
	        });
	    }
	
	    /**
	     * Before Interceptor.
	     */
	
	    function before(request, next) {
	
	        if (isFunction(request.before)) {
	            request.before.call(this, request);
	        }
	
	        next();
	    }
	
	    /**
	     * HTTP method override Interceptor.
	     */
	
	    function method(request, next) {
	
	        if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	            request.headers.set('X-HTTP-Method-Override', request.method);
	            request.method = 'POST';
	        }
	
	        next();
	    }
	
	    /**
	     * Header Interceptor.
	     */
	
	    function header(request, next) {
	
	        var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);
	
	        each(headers, function (value, name) {
	            if (!request.headers.has(name)) {
	                request.headers.set(name, value);
	            }
	        });
	
	        next();
	    }
	
	    /**
	     * Timeout Interceptor.
	     */
	
	    function timeout(request, next) {
	
	        var timeout;
	
	        if (request.timeout) {
	            timeout = setTimeout(function () {
	                request.abort();
	            }, request.timeout);
	        }
	
	        next(function (response) {
	
	            clearTimeout(timeout);
	        });
	    }
	
	    /**
	     * XMLHttp client.
	     */
	
	    function xhrClient(request) {
	        return new PromiseObj(function (resolve) {
	
	            var xhr = new XMLHttpRequest(),
	                handler = function handler(event) {
	
	                var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	                });
	
	                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	                });
	
	                resolve(response);
	            };
	
	            request.abort = function () {
	                return xhr.abort();
	            };
	
	            if (request.progress) {
	                if (request.method === 'GET') {
	                    xhr.addEventListener('progress', request.progress);
	                } else if (/^(POST|PUT)$/i.test(request.method)) {
	                    xhr.upload.addEventListener('progress', request.progress);
	                }
	            }
	
	            xhr.open(request.method, request.getUrl(), true);
	
	            if ('responseType' in xhr) {
	                xhr.responseType = 'blob';
	            }
	
	            if (request.credentials === true) {
	                xhr.withCredentials = true;
	            }
	
	            request.headers.forEach(function (value, name) {
	                xhr.setRequestHeader(name, value);
	            });
	
	            xhr.timeout = 0;
	            xhr.onload = handler;
	            xhr.onerror = handler;
	            xhr.send(request.getBody());
	        });
	    }
	
	    /**
	     * Base client.
	     */
	
	    function Client(context) {
	
	        var reqHandlers = [sendRequest],
	            resHandlers = [],
	            handler;
	
	        if (!isObject(context)) {
	            context = null;
	        }
	
	        function Client(request) {
	            return new PromiseObj(function (resolve) {
	
	                function exec() {
	
	                    handler = reqHandlers.pop();
	
	                    if (isFunction(handler)) {
	                        handler.call(context, request, next);
	                    } else {
	                        warn('Invalid interceptor of type ' + (typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) + ', must be a function');
	                        next();
	                    }
	                }
	
	                function next(response) {
	
	                    if (isFunction(response)) {
	
	                        resHandlers.unshift(response);
	                    } else if (isObject(response)) {
	
	                        resHandlers.forEach(function (handler) {
	                            response = when(response, function (response) {
	                                return handler.call(context, response) || response;
	                            });
	                        });
	
	                        when(response, resolve);
	
	                        return;
	                    }
	
	                    exec();
	                }
	
	                exec();
	            }, context);
	        }
	
	        Client.use = function (handler) {
	            reqHandlers.push(handler);
	        };
	
	        return Client;
	    }
	
	    function sendRequest(request, resolve) {
	
	        var client = request.client || xhrClient;
	
	        resolve(client(request));
	    }
	
	    var classCallCheck = function classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    };
	
	    /**
	     * HTTP Headers.
	     */
	
	    var Headers = function () {
	        function Headers(headers) {
	            var _this = this;
	
	            classCallCheck(this, Headers);
	
	            this.map = {};
	
	            each(headers, function (value, name) {
	                return _this.append(name, value);
	            });
	        }
	
	        Headers.prototype.has = function has(name) {
	            return getName(this.map, name) !== null;
	        };
	
	        Headers.prototype.get = function get(name) {
	
	            var list = this.map[getName(this.map, name)];
	
	            return list ? list[0] : null;
	        };
	
	        Headers.prototype.getAll = function getAll(name) {
	            return this.map[getName(this.map, name)] || [];
	        };
	
	        Headers.prototype.set = function set(name, value) {
	            this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	        };
	
	        Headers.prototype.append = function append(name, value) {
	
	            var list = this.getAll(name);
	
	            if (list.length) {
	                list.push(trim(value));
	            } else {
	                this.set(name, value);
	            }
	        };
	
	        Headers.prototype.delete = function _delete(name) {
	            delete this.map[getName(this.map, name)];
	        };
	
	        Headers.prototype.forEach = function forEach(callback, thisArg) {
	            var _this2 = this;
	
	            each(this.map, function (list, name) {
	                each(list, function (value) {
	                    return callback.call(thisArg, value, name, _this2);
	                });
	            });
	        };
	
	        return Headers;
	    }();
	
	    function getName(map, name) {
	        return Object.keys(map).reduce(function (prev, curr) {
	            return toLower(name) === toLower(curr) ? curr : prev;
	        }, null);
	    }
	
	    function normalizeName(name) {
	
	        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	            throw new TypeError('Invalid character in header field name');
	        }
	
	        return trim(name);
	    }
	
	    /**
	     * HTTP Response.
	     */
	
	    var Response = function () {
	        function Response(body, _ref) {
	            var url = _ref.url;
	            var headers = _ref.headers;
	            var status = _ref.status;
	            var statusText = _ref.statusText;
	            classCallCheck(this, Response);
	
	            this.url = url;
	            this.ok = status >= 200 && status < 300;
	            this.status = status || 0;
	            this.statusText = statusText || '';
	            this.headers = new Headers(headers);
	            this.body = body;
	
	            if (isString(body)) {
	
	                this.bodyText = body;
	            } else if (isBlob(body)) {
	
	                this.bodyBlob = body;
	
	                if (isBlobText(body)) {
	                    this.bodyText = blobText(body);
	                }
	            }
	        }
	
	        Response.prototype.blob = function blob() {
	            return when(this.bodyBlob);
	        };
	
	        Response.prototype.text = function text() {
	            return when(this.bodyText);
	        };
	
	        Response.prototype.json = function json() {
	            return when(this.text(), function (text) {
	                return JSON.parse(text);
	            });
	        };
	
	        return Response;
	    }();
	
	    function blobText(body) {
	        return new PromiseObj(function (resolve) {
	
	            var reader = new FileReader();
	
	            reader.readAsText(body);
	            reader.onload = function () {
	                resolve(reader.result);
	            };
	        });
	    }
	
	    function isBlobText(body) {
	        return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	    }
	
	    /**
	     * HTTP Request.
	     */
	
	    var Request = function () {
	        function Request(options) {
	            classCallCheck(this, Request);
	
	            this.body = null;
	            this.params = {};
	
	            assign(this, options, {
	                method: toUpper(options.method || 'GET')
	            });
	
	            if (!(this.headers instanceof Headers)) {
	                this.headers = new Headers(this.headers);
	            }
	        }
	
	        Request.prototype.getUrl = function getUrl() {
	            return Url(this);
	        };
	
	        Request.prototype.getBody = function getBody() {
	            return this.body;
	        };
	
	        Request.prototype.respondWith = function respondWith(body, options) {
	            return new Response(body, assign(options || {}, { url: this.getUrl() }));
	        };
	
	        return Request;
	    }();
	
	    /**
	     * Service for sending network requests.
	     */
	
	    var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	    var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	    var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };
	
	    function Http(options) {
	
	        var self = this || {},
	            client = Client(self.$vm);
	
	        defaults(options || {}, self.$options, Http.options);
	
	        Http.interceptors.forEach(function (handler) {
	            client.use(handler);
	        });
	
	        return client(new Request(options)).then(function (response) {
	
	            return response.ok ? response : PromiseObj.reject(response);
	        }, function (response) {
	
	            if (response instanceof Error) {
	                error(response);
	            }
	
	            return PromiseObj.reject(response);
	        });
	    }
	
	    Http.options = {};
	
	    Http.headers = {
	        put: JSON_CONTENT_TYPE,
	        post: JSON_CONTENT_TYPE,
	        patch: JSON_CONTENT_TYPE,
	        delete: JSON_CONTENT_TYPE,
	        custom: CUSTOM_HEADERS,
	        common: COMMON_HEADERS
	    };
	
	    Http.interceptors = [before, timeout, method, body, jsonp, header, cors];
	
	    ['get', 'delete', 'head', 'jsonp'].forEach(function (method) {
	
	        Http[method] = function (url, options) {
	            return this(assign(options || {}, { url: url, method: method }));
	        };
	    });
	
	    ['post', 'put', 'patch'].forEach(function (method) {
	
	        Http[method] = function (url, body, options) {
	            return this(assign(options || {}, { url: url, method: method, body: body }));
	        };
	    });
	
	    /**
	     * Service for interacting with RESTful services.
	     */
	
	    function Resource(url, params, actions, options) {
	
	        var self = this || {},
	            resource = {};
	
	        actions = assign({}, Resource.actions, actions);
	
	        each(actions, function (action, name) {
	
	            action = merge({ url: url, params: assign({}, params) }, options, action);
	
	            resource[name] = function () {
	                return (self.$http || Http)(opts(action, arguments));
	            };
	        });
	
	        return resource;
	    }
	
	    function opts(action, args) {
	
	        var options = assign({}, action),
	            params = {},
	            body;
	
	        switch (args.length) {
	
	            case 2:
	
	                params = args[0];
	                body = args[1];
	
	                break;
	
	            case 1:
	
	                if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                    body = args[0];
	                } else {
	                    params = args[0];
	                }
	
	                break;
	
	            case 0:
	
	                break;
	
	            default:
	
	                throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	        }
	
	        options.body = body;
	        options.params = assign({}, options.params, params);
	
	        return options;
	    }
	
	    Resource.actions = {
	
	        get: { method: 'GET' },
	        save: { method: 'POST' },
	        query: { method: 'GET' },
	        update: { method: 'PUT' },
	        remove: { method: 'DELETE' },
	        delete: { method: 'DELETE' }
	
	    };
	
	    /**
	     * Install plugin.
	     */
	
	    function plugin(Vue) {
	
	        if (plugin.installed) {
	            return;
	        }
	
	        Util(Vue);
	
	        Vue.url = Url;
	        Vue.http = Http;
	        Vue.resource = Resource;
	        Vue.Promise = PromiseObj;
	
	        Object.defineProperties(Vue.prototype, {
	
	            $url: {
	                get: function get() {
	                    return options(Vue.url, this, this.$options.url);
	                }
	            },
	
	            $http: {
	                get: function get() {
	                    return options(Vue.http, this, this.$options.http);
	                }
	            },
	
	            $resource: {
	                get: function get() {
	                    return Vue.resource.bind(this);
	                }
	            },
	
	            $promise: {
	                get: function get() {
	                    var _this = this;
	
	                    return function (executor) {
	                        return new Vue.Promise(executor, _this);
	                    };
	                }
	            }
	
	        });
	    }
	
	    if (typeof window !== 'undefined' && window.Vue) {
	        window.Vue.use(plugin);
	    }
	
	    return plugin;
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"searchHome\">\n\t<div v-if=\"isShow\">\n\t\t<vue-dialog></vue-dialog>\n\t</div>\n\t\t<div class=\"headerBox\">\n\t\t\t<div class=\"header\">\n\t\t\t\t<i>头像</i>\n\t\t\t\t<b>发现</b>\n\t\t\t\t<i>扫一扫</i>\n\t\t\t</div>\n\t\t\t<div class=\"teamClub\">\n\t\t\t\t<div id=\"wrapper\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li v-for=\"club in searchClub\">\n\t\t\t\t\t\t\t<img v-bind:src=\"club.iconUrl\">\n\t\t\t\t\t\t\t<b>{{club.name}}</b>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"fansClub\">\n\t\t\t\t<span>粉丝俱乐部 ></span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"searchContainer\">\n\t\t\t<ul class=\"allList\">\n\t\t\t\t<li v-link=\"{path:'heroData'}\" v-for=\"al in allList\">\n\t\t\t\t\t<img v-bind:src=\"al.image_url_big\">\n\t\t\t\t\t<b>{{al.title}}</b>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"sortList\">\n\t\t\t\t<template v-for=\"sl in sortList\">\n\t\t\t\t\t<li v-if=\"$index<1||$index>3&$index<6\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"$index==1\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t\t<img src=\"/images/find_hot_tips.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"$index==3\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"download\">\n\t\t\t\t\t\t\t<b v-bind:class=\"sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'\">&#xf031;</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"$index==2\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"download\">\n\t\t\t\t\t\t\t<span class=\"downFont\" @click.stop=\"download\">下载</span>\n\t\t\t\t\t\t\t<b v-bind:class=\"sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'\">&#xf031;</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"sl.subList.length > 0 \"  data-d=\"{{sl.isHidden}}\" v-bind:class=\" sl.isHidden ? 'childLi':'childLi forHidden'\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li v-for=\"item in sl.subList\" v-on:click=\"switchClick($index,item.article_url,item.article_id,item.title)\">\n                  \t\t\t\t<img v-bind:src=\"item.image_url_big\">\n\t\t\t\t\t        \t<b>{{item.title}}</b>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\t\n\t\t\t\t</template>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"searchFooter\"></div>\n\t</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\searchHeroTime.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
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
	  var id = "_v-1fc39dc2/searchHeroTime.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="searchHeroTime">
	// 		<div class="header">
	// 			<span class="back" v-on:click="backPage">
	// 				<img src="/images/nav_back_normal.png">
	// 			</span>
	// 			<span class="title">{{headTitle}}</span>
	// 			<span class="more"></span>
	// 		</div>
	// 		<iframe v-bind:src="iframeurl+bid"></iframe>
	// 	</div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				iframeurl: '',
				bid: '',
				discuzUrl: 'http://wsq.discuz.qq.com/?siteid=187674040&c=1&f=inner&a=1&sid=$VKEY$',
				headTitle: ''
			};
		},
		ready: function ready() {
			// console.log('测试'+this.$route.query.url);
			// console.log('测试'+this.$route.query.id);
			// console.log('测试'+this.$route.query.idFlag);
			if (this.$route.query.id) {
				if (this.$route.query.c) {
					this.iframeurl = this.discuzUrl;
					this.headTitle = this.$route.query.headTitle;
				} else {
					this.bid = this.$route.query.idFlag + '=' + this.$route.query.id;
					this.iframeurl = this.$route.query.url + this.did;
					this.headTitle = this.$route.query.headTitle;
				}
			} else {
				this.iframeurl = this.$route.query.url;
				this.headTitle = this.$route.query.headTitle;
			}
		},
		methods: {
			backPage: function backPage() {
				history.go(-1);
			}
		}
	
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"searchHeroTime\">\n\t<div class=\"header\">\n\t\t<span class=\"back\" v-on:click=\"backPage\">\n\t\t\t<img src=\"/images/nav_back_normal.png\">\n\t\t</span>\n\t\t<span class=\"title\">{{headTitle}}</span>\n\t\t<span class=\"more\"></span>\n\t</div>\n\t<iframe v-bind:src=\"iframeurl+bid\"></iframe>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\heroData.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(27)
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
	  var id = "_v-3bb0c2d2/heroData.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="heroData">
	// 	<div class="heroDataHeader">
	// 		<span class="back" v-on:click="backPage">
	// 			<img src="/images/nav_back_normal.png">
	// 		</span>
	// 		<span class="title">{{headTitle}}</span>
	// 		<span class="more"></span>
	// 	</div>
	// 	<ul class="heroDataNav">
	// 		<li v-for:="nav in indexNav">{{nav}}</li>
	// 	</ul>
	// 	<div class="heroDataContainer">
	//
	//
	// 	<div class="swiper-container">
	// 	    <div class="swiper-wrapper">
	// 	        <div class="swiper-slide">Slide 1</div>
	// 	        <div class="swiper-slide">Slide 2</div>
	// 	        <div class="swiper-slide">Slide 3</div>
	// 	    </div>
	// 	</div>
	//
	//
	//
	//
	//
	// 		<router-view></router-view>
	// 	</div>
	// </div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				indexNav: ['周免英雄', '我的英雄', '全部英雄'],
				headTitle: '英雄资料'
			};
		},
	
		ready: function ready() {},
		methods: {
			backPage: function backPage() {
				history.go(-1);
			}
		}
	};
	
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		loop: true
	});
	// </script>
	/* generated by vue-loader */

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"heroData\">\r\n\t<div class=\"heroDataHeader\">\r\n\t\t<span class=\"back\" v-on:click=\"backPage\">\r\n\t\t\t<img src=\"/images/nav_back_normal.png\">\r\n\t\t</span>\r\n\t\t<span class=\"title\">{{headTitle}}</span>\r\n\t\t<span class=\"more\"></span>\r\n\t</div>\r\n\t<ul class=\"heroDataNav\">\r\n\t\t<li v-for:=\"nav in indexNav\">{{nav}}</li>\r\n\t</ul>\r\n\t<div class=\"heroDataContainer\">\r\n\r\n\r\n\t<div class=\"swiper-container\">\r\n\t    <div class=\"swiper-wrapper\">\r\n\t        <div class=\"swiper-slide\">Slide 1</div>\r\n\t        <div class=\"swiper-slide\">Slide 2</div>\r\n\t        <div class=\"swiper-slide\">Slide 3</div>\r\n\t    </div>\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t<router-view></router-view>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\freeHero.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
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
	  var id = "_v-bf18e94e/freeHero.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="freeHero">
	// 		<div class="title">
	// 			<div>更新时间:每周五中午</div>
	// 		</div>
	// 		<ul class="freeHeroList">
	// 			<template v-for="hero in heroData">
	// 			<li v-if="$index<13">
	// 			    <img v-bind:src="heroImg[hero.id]">
	// 			    <div>
	// 					<span class="name">{{hero.name}}</span>
	// 					<span class="nick">{{hero.nick}}</span>	
	// 					<span class="tag">{{hero.tag1}}  {{hero.tag2}}</span>
	// 			    </div>
	// 			</li>
	// 			</template>
	// 		</ul>
	// 	</div>
	// </template>
	// <script>
	var Vue = __webpack_require__(5);
	var VueResource = __webpack_require__(20);
	var VueRouter = __webpack_require__(6);
	Vue.use(VueResource);
	Vue.use(VueRouter);
	var router = new VueRouter();
	exports.default = {
		data: function data() {
			return {
				heroData: [],
				heroImg: []
			};
		},
	
		ready: function ready() {
			var _this = this;
	
			this.$http.get('/mock/search/hero_list.json').then(function (res) {
				console.log(res.body);
				_this.heroData = res.body;
			}, function (res) {
				console.log(res);
			});
			this.$http.get('/mock/search/heroImg.json').then(function (res) {
				console.log(res.body.heroImg);
				_this.heroImg = res.body.heroImg;
			}, function (res) {
				console.log(res);
			});
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"freeHero\">\n\t<div class=\"title\">\n\t\t<div>更新时间:每周五中午</div>\n\t</div>\n\t<ul class=\"freeHeroList\">\n\t\t<template v-for=\"hero in heroData\">\n\t\t<li v-if=\"$index<13\">\n\t\t    <img v-bind:src=\"heroImg[hero.id]\">\n\t\t    <div>\n\t\t\t\t<span class=\"name\">{{hero.name}}</span>\n\t\t\t\t<span class=\"nick\">{{hero.nick}}</span>\t\n\t\t\t\t<span class=\"tag\">{{hero.tag1}}  {{hero.tag2}}</span>\n\t\t    </div>\n\t\t</li>\n\t\t</template>\n\t</ul>\n</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\allHero.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
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
	  var id = "_v-3d41f090/allHero.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vueSearchBox = __webpack_require__(33);
	
	var _vueSearchBox2 = _interopRequireDefault(_vueSearchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="allHero">
	// 		<div class="searchBox">
	// 			<vue-search-box></vue-search-box>
	// 		</div>
	// 		<div id="wrapper">
	// 			<ul class="allHeroList">
	// 				<li v-for="hero in heroData">
	// 				    <img v-bind:src="heroImg[hero.id]">
	// 				    <div>
	// 						<span class="name">{{hero.name}}</span>
	// 						<span class="nick">{{hero.nick}}</span>	
	// 						<span class="tag">{{hero.tag1}}  {{hero.tag2}}</span>
	// 				    </div>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	</div>
	// </template>
	// <script>
	var Vue = __webpack_require__(5);
	var VueResource = __webpack_require__(20);
	var VueRouter = __webpack_require__(6);
	Vue.use(VueResource);
	Vue.use(VueRouter);
	var router = new VueRouter();
	
	Vue.use(_vueSearchBox2.default);
	var myScroll;
	exports.default = {
		data: function data() {
			return {
				heroData: [],
				heroImg: []
			};
		},
	
		ready: function ready() {
			var _this = this;
	
			this.$http.get('/mock/search/hero_list.json').then(function (res) {
				console.log(res.body);
				_this.heroData = res.body;
				setTimeout(function () {
					myScroll.refresh();
				}, 500);
			}, function (res) {
				console.log(res);
			});
			myScroll = new IScroll('#wrapper', {
				scrollX: true,
				scrollY: true,
				mouseWheel: true,
				scrollbars: false
			});
			this.$http.get('/mock/search/heroImg.json').then(function (res) {
				console.log(res.body.heroImg);
				_this.heroImg = res.body.heroImg;
			}, function (res) {
				console.log(res);
			});
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _searchBox = __webpack_require__(34);
	
	var _searchBox2 = _interopRequireDefault(_searchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueSearchBox = function VueSearchBox() {};
	VueSearchBox.install = function (Vue, options) {
		Vue.component('vue-search-box', Vue.extend(_searchBox2.default));
	};
	exports.default = VueSearchBox;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(35)
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
	  var id = "_v-1b5fd2f2/searchBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t<form class=\"yo-search\">\n\t\t<label class=\"operation\">\n\t\t    <span class=\"yo-ico\">&#xf067;</span>\n\t\t    <input type=\"text\" class=\"input\" placeholder=\"输入搜索关键字...\" />\n\t\t</label>\n\t</form>\n</div>\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"allHero\">\n\t<div class=\"searchBox\">\n\t\t<vue-search-box></vue-search-box>\n\t</div>\n\t<div id=\"wrapper\">\n\t\t<ul class=\"allHeroList\">\n\t\t\t<li v-for=\"hero in heroData\">\n\t\t\t    <img v-bind:src=\"heroImg[hero.id]\">\n\t\t\t    <div>\n\t\t\t\t\t<span class=\"name\">{{hero.name}}</span>\n\t\t\t\t\t<span class=\"nick\">{{hero.nick}}</span>\t\n\t\t\t\t\t<span class=\"tag\">{{hero.tag1}}  {{hero.tag2}}</span>\n\t\t\t    </div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\myHero.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
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
	  var id = "_v-e9f2554e/myHero.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vueSearchBox = __webpack_require__(33);
	
	var _vueSearchBox2 = _interopRequireDefault(_vueSearchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="myHero">
	// 		<div class="searchBox">
	// 			<vue-search-box></vue-search-box>
	// 		</div>
	// 		<div class="assets">
	// 			<span>英雄资产(黑色玫瑰)</span>
	// 			<span>你共有10个英雄,价值22350金币</span>
	// 		</div>
	// 		<div id="wrapper">
	// 			<ul class="myHeroList">
	// 				<li v-for="myHero in myHeroData">
	// 				    <img v-bind:src="myHero.img">
	// 				    <div>
	// 					    <div class="infoMain">
	// 							<span class="nick">{{myHero.nick}}</span>
	// 							<span class="name">{{myHero.name}}</span>	
	// 					    </div>
	// 					    <div class="infoIntro">
	// 							<span class="useOcscasionCN">{{myHero.useOccasionCN}}</span>
	// 					    	<span class="useCount">{{myHero.useCount}}</span>
	// 					    	<span class="winCN">{{myHero.winCN}}</span>
	// 					    	<span class="winPercent">{{myHero.winPercent}}</span>
	// 					    </div>
	// 				    </div>
	// 				</li>
	// 				<div class="attention">
	// 					<span>说明:英雄使用数据来自<span class="lolColor">LOL官方助手</span></span>
	// 				<span>从2013年10月开始积累，不计算人机和自定义模式</span>
	// 			</ul>
	// 		</div>
	// 		</div>
	// 	</div>
	// </template>
	// <script>
	var Vue = __webpack_require__(5);
	var VueResource = __webpack_require__(20);
	var VueRouter = __webpack_require__(6);
	Vue.use(VueResource);
	Vue.use(VueRouter);
	var router = new VueRouter();
	
	Vue.use(_vueSearchBox2.default);
	var myScroll;
	exports.default = {
		data: function data() {
			return {
				myHeroData: []
			};
		},
	
		ready: function ready() {
			var _this = this;
	
			this.$http.get('/mock/search/myHero.json').then(function (res) {
				console.log(res.body);
				_this.myHeroData = res.body;
				setTimeout(function () {
					myScroll.refresh();
				}, 500);
			}, function (res) {
				console.log(res);
			});
			myScroll = new IScroll('#wrapper', {
				scrollX: true,
				scrollY: true,
				mouseWheel: true,
				scrollbars: false
			});
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"myHero\">\n\t<div class=\"searchBox\">\n\t\t<vue-search-box></vue-search-box>\n\t</div>\n\t<div class=\"assets\">\n\t\t<span>英雄资产(黑色玫瑰)</span>\n\t\t<span>你共有10个英雄,价值22350金币</span>\n\t</div>\n\t<div id=\"wrapper\">\n\t\t<ul class=\"myHeroList\">\n\t\t\t<li v-for=\"myHero in myHeroData\">\n\t\t\t    <img v-bind:src=\"myHero.img\">\n\t\t\t    <div>\n\t\t\t\t    <div class=\"infoMain\">\n\t\t\t\t\t\t<span class=\"nick\">{{myHero.nick}}</span>\n\t\t\t\t\t\t<span class=\"name\">{{myHero.name}}</span>\t\n\t\t\t\t    </div>\n\t\t\t\t    <div class=\"infoIntro\">\n\t\t\t\t\t\t<span class=\"useOcscasionCN\">{{myHero.useOccasionCN}}</span>\n\t\t\t\t    \t<span class=\"useCount\">{{myHero.useCount}}</span>\n\t\t\t\t    \t<span class=\"winCN\">{{myHero.winCN}}</span>\n\t\t\t\t    \t<span class=\"winPercent\">{{myHero.winPercent}}</span>\n\t\t\t\t    </div>\n\t\t\t    </div>\n\t\t\t</li>\n\t\t\t<div class=\"attention\">\n\t\t\t\t<span>说明:英雄使用数据来自<span class=\"lolColor\">LOL官方助手</span></span>\n\t\t\t<span>从2013年10月开始积累，不计算人机和自定义模式</span>\n\t\t</ul>\n\t</div>\n\t</div>\n</div>\n";
=======
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
>>>>>>> master

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map