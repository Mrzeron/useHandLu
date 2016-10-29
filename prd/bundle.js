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
	
	var _welcome = __webpack_require__(5);
	
	var _welcome2 = _interopRequireDefault(_welcome);
	
	var _signin = __webpack_require__(8);
	
	var _signin2 = _interopRequireDefault(_signin);
	
	var _index = __webpack_require__(10);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _my = __webpack_require__(13);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _search = __webpack_require__(17);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _searchHeroTime = __webpack_require__(24);
	
	var _searchHeroTime2 = _interopRequireDefault(_searchHeroTime);
	
	var _heroData = __webpack_require__(27);
	
	var _heroData2 = _interopRequireDefault(_heroData);
	
	var _friend = __webpack_require__(42);
	
	var _friend2 = _interopRequireDefault(_friend);
	
	var _zixunhome = __webpack_require__(45);
	
	var _zixunhome2 = _interopRequireDefault(_zixunhome);
	
	var _home = __webpack_require__(47);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _zixuncontent = __webpack_require__(53);
	
	var _zixuncontent2 = _interopRequireDefault(_zixuncontent);
	
	var _comment = __webpack_require__(56);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _commonUtil = __webpack_require__(59);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//加载样式
	_commonUtil2.default.myScroll();
	
	/* yjp  */
	
	
	//加载模块
	
	
	var router = new VueRouter();
	var App = Vue.extend({
	  /*store:store*/
	});
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
	      '/': {
	        component: _zixunhome2.default,
	        subRoutes: {
	          '/': {
	            component: _home2.default
	          }
	        }
	      },
	      '/zixun': {
	        component: _zixunhome2.default,
	        subRoutes: {
	          '/': {
	            component: _home2.default
	          },
	          '/content': {
	            component: _zixuncontent2.default
	          },
	          '/comment': {
	            component: _comment2.default
	          }
	        }
	      },
	      '/friend': {
	        component: _friend2.default
	      },
	      '/my': {
	        component: _my2.default
	      },
	      '/search': {
	        component: _search2.default
	      }
	    }
	  },
	  '/searchHeroTime': {
	    component: _searchHeroTime2.default
	  },
	  '/heroData': {
	    component: _heroData2.default
	  }
	});
	
	router.start(App, 'body');
	
	//2秒后自动跳转】
	setTimeout(function () {
	  router.go({ path: '/signin' });
	}, 2000);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\welcome.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
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
	  var id = "_v-4b3a449e/welcome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"welcome-container\">\r\n\t<img src=\"http://125.39.6.156/dlied1.qq.com/qqtalk/lolApp/images/qidong/qidong-android.jpg?mkey=580a3a0162ceee9a&f=1a58&c=0&p=.jpg\"/>\r\n</div>\r\n\r\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
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
	  var id = "_v-00e38516/signin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"sigin-container\" transition=\"expand\">\r\n\t<div class=\"bg\"></div>\r\n\t<div class=\"wrap\">\r\n\t\t<header>\r\n\t\t\t登录\r\n\t\t</header>\r\n\t\t<div class=\"form\">\r\n\t\t\t<div class=\"user_name\">\r\n\t\t\t<input type=\"text\" placeholder=\"QQ/手机号/邮箱\"><span>X</span></div>\r\n\r\n\t\t\t<div class=\"user_pass\">\r\n\t\t\t<input type=\"password\" placeholder=\"密码\"><span>X</span></div>\r\n\t\t\t<button type=\"button\" v-link=\"{path:'/index'}\">登录</button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
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
	  var id = "_v-3493330e/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
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
	//     <div class="swiper-slide right" @click="hideMsg" >
	//
	//     	<!-- 路由页面 -->
	// 		<router-view></router-view>
	//
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
	// </template>
	// <script>
	var main_swiper = null;
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
					path: '/index/search'
				}, {
					img: "http://offtkz7wd.bkt.clouddn.com/img/tab_me.png",
					cli_img: "http://offtkz7wd.bkt.clouddn.com/img/tab_me_checked.png",
					title: "我的",
					path: '/index/my'
				}]
			};
		},
		ready: function ready() {
			main_swiper = new Swiper('.swiper-container', {
				slidesPerView: 'auto',
				effert: "coverflow",
				initialSlide: 2,
				click: true
			});
		},
	
		methods: {
			showMsg: function showMsg() {
				main_swiper.slideTo(0, 500, false);
			},
			hideMsg: function hideMsg() {
				main_swiper.slideTo(1, 500, false);
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
/* 12 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"index-container\"><div class=\"swiper-container\">\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"swiper-slide left\" >\r\n\t\t<header>\r\n\t\t\t<img src=\"http://offtkz7wd.bkt.clouddn.com/img/logo.jpg\" alt=\"#\">\r\n\t\t\t<h3>倚马七纸</h3>\r\n\t\t</header>\r\n\t\t<ul>\r\n\t\t\t<li v-for=\"item in list\"><img v-bind:src=\"item.img\" ><span>{{item.name}}<span></li>\r\n\t\t</ul>\r\n\t\t<div class=\"setting\"><img src=\"http://offtkz7wd.bkt.clouddn.com/img/menu_setting.png\"><span>设置</span></div>\r\n    </div>\r\n    <div class=\"swiper-slide right\" @click=\"hideMsg\" >\r\n\r\n    \t<!-- 路由页面 -->\r\n\t\t<router-view></router-view>\r\n\r\n\t\t<header><img src=\"http://offtkz7wd.bkt.clouddn.com/img/logo.jpg\" @click.stop=\"showMsg\"></header>\r\n    \t<nav>\r\n    \t\t<ul>\r\n    \t\t\t<li v-for=\"item in nav_list\" v-link=\"{path:item.path}\" @click.stop=\"change_nav($index)\">\r\n    \t\t\t<img v-show=\"cur==$index? true:false\" v-bind:src=\"item.cli_img\">\r\n    \t\t\t\t<img  v-show=\"cur!=$index\" v-bind:src=\"item.img\">\r\n    \t\t\t\t<span>{{item.title}}</span>\r\n    \t\t\t</li>\r\n    \t\t</ul>\r\n    \t</nav>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
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
	  var id = "_v-2b305c20/my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtil = __webpack_require__(15);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.use(VueResource); // <template>
	//   <div class="my-container">
	//     <div class="top">
	//       <header>
	//         <div class="userimg">
	//         </div>
	//         <div class="title">
	//           <span>比尔吉沃特<span>
	//           <i><img src="http://ofltwdk94.bkt.clouddn.com/switch_region.png" /></i>
	//         </div>
	//         <div class="share">
	//           <img src="http://ofltwdk94.bkt.clouddn.com/share.png" />
	//         </div>
	//       </header>
	//       <div class="banner">
	//         <div class="tip">
	//
	//         </div>
	//         <div class="info">
	//           <div class="touxiang">
	//             <img src="http://ofltwdk94.bkt.clouddn.com/userimg.jpg" />
	//             <span>30</span>
	//           </div>
	//           <div class="name">
	//             萝卜特大s
	//             <img src="http://ofltwdk94.bkt.clouddn.com/man.png" />
	//           </div>
	//           <div class="status">
	//             <span class="now">游戏离线</span>
	//             <span>|</span>
	//             <span>首胜可用</span>
	//           </div>
	//
	//         </div>
	//       </div>
	//     </div>
	//     <div class="daohang">
	//       <ul id="swiper-nav">
	//           <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''"><span>{{nav}}</span><img v-if="curIndex == $index?true:false" src="http://ofltwdk94.bkt.clouddn.com/tab_selected.png"/></li>
	//       </ul>
	//     </div>
	//     <section>
	//       <div class="swiper-container" id="index-swiper">
	//         <div class="swiper-wrapper">
	//           <div class="swiper-slide">
	//             <section id="index-scroll">
	//               <div class="scrollcontainer">
	//                 <div class="myhonor">
	//                   <div class="detail">
	//                     <div class="dleft">
	//                       <img src="http://ofltwdk94.bkt.clouddn.com/baijin.png" />
	//                       <span>华贵铂金 III</span>
	//                     </div>
	//                     <div class="dright">
	//                       <div class="num">
	//                         <div>胜率<span>62%</span></div>
	//                         <div>总局数<span>2867</span></div>
	//                       </div>
	//                       <div class="legend">
	//                         <div>
	//                           <div class="god"><span>165次</span></div>
	//                           <span>超神</span>
	//                         </div>
	//                         <div>
	//                           <div class="fivekill"><span>31次</span></div>
	//                           <span>五杀</span>
	//                         </div>
	//                         <div>
	//                           <div class="fourkill"><span>107次</span></div>
	//                           <span>四杀</span>
	//                         </div>
	//                       </div>
	//                     </div>
	//                   </div>
	//
	//                 </div>
	//                 <div class="shadow"></div>
	//                 <div class="myscore">
	//                   <div class="title">
	//                     我的战绩 <span><img src="http://ofltwdk94.bkt.clouddn.com/down.png"></span>
	//                   </div>
	//                   <div class="item" v-for="item in items">
	//                     <div class="date">{{item.date}}</div>
	//                     <div class="play" v-for="tip in item.detail">
	//                       <div class="hero"><img v-bind:src="tip.touxiang"></div>
	//                       <div class="playright">
	//                         <div class="ptop">{{tip.result}} {{tip.score}}</div>
	//                         <div class="pbottom">{{tip.modal}}</div>
	//                       </div>
	//                     </div>
	//                   </div>
	//                 </div>
	//               </div>
	//             </section>
	//           </div>
	//           <div class="swiper-slide">
	//             <section id="index-scroll">
	//               <div class="scrollcontainer">
	//                 <div class="myhonor">
	//                   <div class="detail">
	//                     <div class="dleft">
	//                       <img src="http://ofltwdk94.bkt.clouddn.com/baijin.png" />
	//                       <span>华贵铂金 III</span>
	//                     </div>
	//                     <div class="dright">
	//                       <div class="num">
	//                         <div>胜率<span>62%</span></div>
	//                         <div>总局数<span>2867</span></div>
	//                       </div>
	//                       <div class="legend">
	//                         <div>
	//                           <div class="god"><span>165次</span></div>
	//                           <span>超神</span>
	//                         </div>
	//                         <div>
	//                           <div class="fivekill"><span>31次</span></div>
	//                           <span>五杀</span>
	//                         </div>
	//                         <div>
	//                           <div class="fourkill"><span>107次</span></div>
	//                           <span>四杀</span>
	//                         </div>
	//                       </div>
	//                     </div>
	//                   </div>
	//
	//                 </div>
	//                 <div class="shadow"></div>
	//               </div>
	//             </section>
	//           </div>
	//           <div class="swiper-slide">
	//             <section id="index-scroll">
	//               <div class="scrollcontainer">
	//                 <div class="myhonor">
	//                   <div class="detail">
	//                     <div class="dleft">
	//                       <img src="http://ofltwdk94.bkt.clouddn.com/baijin.png" />
	//                       <span>华贵铂金 III</span>
	//                     </div>
	//                     <div class="dright">
	//                       <div class="num">
	//                         <div>胜率<span>62%</span></div>
	//                         <div>总局数<span>2867</span></div>
	//                       </div>
	//                       <div class="legend">
	//                         <div>
	//                           <div class="god"><span>165次</span></div>
	//                           <span>超神</span>
	//                         </div>
	//                         <div>
	//                           <div class="fivekill"><span>31次</span></div>
	//                           <span>五杀</span>
	//                         </div>
	//                         <div>
	//                           <div class="fourkill"><span>107次</span></div>
	//                           <span>四杀</span>
	//                         </div>
	//                       </div>
	//                     </div>
	//                   </div>
	//
	//                 </div>
	//                 <div class="shadow"></div>
	//
	//               </div>
	//             </section>
	//           </div>
	//         </div>
	//       </div>
	//     </section>
	//     <footer>
	//     </footer>
	//   </div>
	// </template>
	// <script>
	
	
	var mySwiper = null;
	
	exports.default = {
	  data: function data() {
	    return {
	      curIndex: 0,
	      indexNav: ['战绩', '能力', '资产'],
	      items: []
	    };
	  },
	
	  ready: function ready() {
	    var that = this;
	    this.$http.get('/mock/list.json').then(function (res) {
	      that.items = res.data;
	      mySwiper = new Swiper("#index-swiper", {
	        onSlideChangeStart: function onSlideChangeStart() {
	          that.curIndex = mySwiper.activeIndex;
	        }
	      });
	      Vue.nextTick(function () {
	        _commonUtil2.default.isAllLoaded('#index-scroll', function () {
	          var scroll = new IScroll('#index-scroll', { click: true });
	        });
	      });
	    });
	  },
	  methods: {
	    switchSwiper: function switchSwiper(index) {
	      this.curIndex = index;
	      mySwiper.slideTo(index);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 15 */
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
	                callback(scope);
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    myScroll: function myScroll() {
	        var that = this;
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded(value, function (value) {
	                    new IScroll(value);
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"my-container\">\n  <div class=\"top\">\n    <header>\n      <div class=\"userimg\">\n      </div>\n      <div class=\"title\">\n        <span>比尔吉沃特<span>\n        <i><img src=\"http://ofltwdk94.bkt.clouddn.com/switch_region.png\" /></i>\n      </div>\n      <div class=\"share\">\n        <img src=\"http://ofltwdk94.bkt.clouddn.com/share.png\" />\n      </div>\n    </header>\n    <div class=\"banner\">\n      <div class=\"tip\">\n\n      </div>\n      <div class=\"info\">\n        <div class=\"touxiang\">\n          <img src=\"http://ofltwdk94.bkt.clouddn.com/userimg.jpg\" />\n          <span>30</span>\n        </div>\n        <div class=\"name\">\n          萝卜特大s\n          <img src=\"http://ofltwdk94.bkt.clouddn.com/man.png\" />\n        </div>\n        <div class=\"status\">\n          <span class=\"now\">游戏离线</span>\n          <span>|</span>\n          <span>首胜可用</span>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"daohang\">\n    <ul id=\"swiper-nav\">\n        <li v-for=\"nav in indexNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\"><span>{{nav}}</span><img v-if=\"curIndex == $index?true:false\" src=\"http://ofltwdk94.bkt.clouddn.com/tab_selected.png\"/></li>\n    </ul>\n  </div>\n  <section>\n    <div class=\"swiper-container\" id=\"index-swiper\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\">\n          <section id=\"index-scroll\">\n            <div class=\"scrollcontainer\">\n              <div class=\"myhonor\">\n                <div class=\"detail\">\n                  <div class=\"dleft\">\n                    <img src=\"http://ofltwdk94.bkt.clouddn.com/baijin.png\" />\n                    <span>华贵铂金 III</span>\n                  </div>\n                  <div class=\"dright\">\n                    <div class=\"num\">\n                      <div>胜率<span>62%</span></div>\n                      <div>总局数<span>2867</span></div>\n                    </div>\n                    <div class=\"legend\">\n                      <div>\n                        <div class=\"god\"><span>165次</span></div>\n                        <span>超神</span>\n                      </div>\n                      <div>\n                        <div class=\"fivekill\"><span>31次</span></div>\n                        <span>五杀</span>\n                      </div>\n                      <div>\n                        <div class=\"fourkill\"><span>107次</span></div>\n                        <span>四杀</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"shadow\"></div>\n              <div class=\"myscore\">\n                <div class=\"title\">\n                  我的战绩 <span><img src=\"http://ofltwdk94.bkt.clouddn.com/down.png\"></span>\n                </div>\n                <div class=\"item\" v-for=\"item in items\">\n                  <div class=\"date\">{{item.date}}</div>\n                  <div class=\"play\" v-for=\"tip in item.detail\">\n                    <div class=\"hero\"><img v-bind:src=\"tip.touxiang\"></div>\n                    <div class=\"playright\">\n                      <div class=\"ptop\">{{tip.result}} {{tip.score}}</div>\n                      <div class=\"pbottom\">{{tip.modal}}</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </section>\n        </div>\n        <div class=\"swiper-slide\">\n          <section id=\"index-scroll\">\n            <div class=\"scrollcontainer\">\n              <div class=\"myhonor\">\n                <div class=\"detail\">\n                  <div class=\"dleft\">\n                    <img src=\"http://ofltwdk94.bkt.clouddn.com/baijin.png\" />\n                    <span>华贵铂金 III</span>\n                  </div>\n                  <div class=\"dright\">\n                    <div class=\"num\">\n                      <div>胜率<span>62%</span></div>\n                      <div>总局数<span>2867</span></div>\n                    </div>\n                    <div class=\"legend\">\n                      <div>\n                        <div class=\"god\"><span>165次</span></div>\n                        <span>超神</span>\n                      </div>\n                      <div>\n                        <div class=\"fivekill\"><span>31次</span></div>\n                        <span>五杀</span>\n                      </div>\n                      <div>\n                        <div class=\"fourkill\"><span>107次</span></div>\n                        <span>四杀</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"shadow\"></div>\n            </div>\n          </section>\n        </div>\n        <div class=\"swiper-slide\">\n          <section id=\"index-scroll\">\n            <div class=\"scrollcontainer\">\n              <div class=\"myhonor\">\n                <div class=\"detail\">\n                  <div class=\"dleft\">\n                    <img src=\"http://ofltwdk94.bkt.clouddn.com/baijin.png\" />\n                    <span>华贵铂金 III</span>\n                  </div>\n                  <div class=\"dright\">\n                    <div class=\"num\">\n                      <div>胜率<span>62%</span></div>\n                      <div>总局数<span>2867</span></div>\n                    </div>\n                    <div class=\"legend\">\n                      <div>\n                        <div class=\"god\"><span>165次</span></div>\n                        <span>超神</span>\n                      </div>\n                      <div>\n                        <div class=\"fivekill\"><span>31次</span></div>\n                        <span>五杀</span>\n                      </div>\n                      <div>\n                        <div class=\"fourkill\"><span>107次</span></div>\n                        <span>四杀</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"shadow\"></div>\n              \n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer>\n  </footer>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
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
	  var id = "_v-11ec6f98/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vueDialog = __webpack_require__(19);
	
	var _vueDialog2 = _interopRequireDefault(_vueDialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="searchHome">
	// 	<div v-if="isShow">
	// 		<div>
	// 		    <div v-if="isShow">
	// 		      <div class="yo-dialog yo-dialog-a">
	// 		        <header class="hd">
	// 		          <h2 class="title" yo-dialog-b>更新提示</h2>
	// 		        </header>
	// 		        <div class="bd">
	// 		          <p>下载包包含所有游戏资料,内容总计10.60M,是否确认下载?</p>
	// 		        </div>
	// 		        <footer class="ft">
	// 		          <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">取消</button>
	// 		          <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">确定</button>
	// 		        </footer>
	// 		      </div>
	// 		      <div class="yo-mask"></div>
	// 		    </div>
	// 		  </div>
	// 	</div>
	// 		<div class="headerBox">
	// 			<div class="header">
	// 				<i>头像</i>
	// 				<b>发现</b>
	// 				<i>扫一扫</i>
	// 			</div>
	// 			<div class="teamClub" >
	// 				<div id="wrapper" v-on:touchstart.stop="wrapper">
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
	// 				<li v-link="{path:'../heroData'}" v-for="al in allList">
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
	// 	</div>
	// </template>
	// <script>
	var myScroll;
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
			},
			wrapper: function wrapper() {
				console.log(0);
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _dialog = __webpack_require__(20);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueDialog = function VueDialog() {};
	VueDialog.install = function (Vue, options) {
		Vue.component('vue-dialog', Vue.extend(_dialog2.default));
	};
	exports.default = VueDialog;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\plugins\\dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
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
	  var id = "_v-f4876bf4/dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div v-if=\"isShow\">\n    <div class=\"yo-dialog yo-dialog-a\">\n      <header class=\"hd\">\n        <h2 class=\"title\" yo-dialog-b>更新提示</h2>\n      </header>\n      <div class=\"bd\">\n        <p>下载包包含所有游戏资料,内容总计10.60M,是否确认下载?</p>\n      </div>\n      <footer class=\"ft\">\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">取消</button>\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">确定</button>\n      </footer>\n    </div>\n    <div class=\"yo-mask\"></div>\n  </div>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"searchHome\">\n\t<div v-if=\"isShow\">\n\t\t<div>\n\t\t    <div v-if=\"isShow\">\n\t\t      <div class=\"yo-dialog yo-dialog-a\">\n\t\t        <header class=\"hd\">\n\t\t          <h2 class=\"title\" yo-dialog-b>更新提示</h2>\n\t\t        </header>\n\t\t        <div class=\"bd\">\n\t\t          <p>下载包包含所有游戏资料,内容总计10.60M,是否确认下载?</p>\n\t\t        </div>\n\t\t        <footer class=\"ft\">\n\t\t          <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">取消</button>\n\t\t          <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">确定</button>\n\t\t        </footer>\n\t\t      </div>\n\t\t      <div class=\"yo-mask\"></div>\n\t\t    </div>\n\t\t  </div>\n\t</div>\n\t\t<div class=\"headerBox\">\n\t\t\t<div class=\"header\">\n\t\t\t\t<i>头像</i>\n\t\t\t\t<b>发现</b>\n\t\t\t\t<i>扫一扫</i>\n\t\t\t</div>\n\t\t\t<div class=\"teamClub\" >\n\t\t\t\t<div id=\"wrapper\" v-on:touchstart.stop=\"wrapper\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li v-for=\"club in searchClub\">\n\t\t\t\t\t\t\t<img v-bind:src=\"club.iconUrl\">\n\t\t\t\t\t\t\t<b>{{club.name}}</b>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"fansClub\">\n\t\t\t\t<span>粉丝俱乐部 ></span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"searchContainer\">\n\t\t\t<ul class=\"allList\">\n\t\t\t\t<li v-link=\"{path:'../heroData'}\" v-for=\"al in allList\">\n\t\t\t\t\t<img v-bind:src=\"al.image_url_big\">\n\t\t\t\t\t<b>{{al.title}}</b>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"sortList\">\n\t\t\t\t<template v-for=\"sl in sortList\">\n\t\t\t\t\t<li v-if=\"$index<1||$index>3&$index<6\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"$index==1\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t\t<img src=\"/images/find_hot_tips.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"$index==3\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"download\">\n\t\t\t\t\t\t\t<b v-bind:class=\"sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'\">&#xf031;</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"$index==2\" class=\"parentLi\" v-on:click=\"switchClick($index,sl.article_url,sl.article_id,sl.title)\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img v-bind:src=\"sl.image_url_big\">\n\t\t\t\t\t\t\t<b>{{sl.title}}</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"download\">\n\t\t\t\t\t\t\t<span class=\"downFont\" @click.stop=\"download\">下载</span>\n\t\t\t\t\t\t\t<b v-bind:class=\"sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'\">&#xf031;</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if=\"sl.subList.length > 0 \"  data-d=\"{{sl.isHidden}}\" v-bind:class=\" sl.isHidden ? 'childLi':'childLi forHidden'\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li v-for=\"item in sl.subList\" v-on:click=\"switchClick($index,item.article_url,item.article_id,item.title)\">\n                  \t\t\t\t<img v-bind:src=\"item.image_url_big\">\n\t\t\t\t\t        \t<b>{{item.title}}</b>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\t\n\t\t\t\t</template>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\searchHeroTime.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-7551821f/searchHeroTime.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"searchHeroTime\">\n\t<div class=\"header\">\n\t\t<span class=\"back\" v-on:click=\"backPage\">\n\t\t\t<img src=\"/images/nav_back_normal.png\">\n\t\t</span>\n\t\t<span class=\"title\">{{headTitle}}</span>\n\t\t<span class=\"more\"></span>\n\t</div>\n\t<iframe v-bind:src=\"iframeurl+bid\"></iframe>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\heroData.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
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
	  var id = "_v-40c96698/heroData.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _freeHero = __webpack_require__(29);
	
	var _freeHero2 = _interopRequireDefault(_freeHero);
	
	var _myHero = __webpack_require__(32);
	
	var _myHero2 = _interopRequireDefault(_myHero);
	
	var _allHero = __webpack_require__(38);
	
	var _allHero2 = _interopRequireDefault(_allHero);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	// 		<li v-for:="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'activeHero': ''">{{nav}}</li>
	// 	</ul>
	// 	<div class="heroDataContainer">
	// 		<div class="swiper-container">
	// 		    <div class="swiper-wrapper">
	// 		        <div class="swiper-slide">
	// 					<vue-freehero></vue-freehero>
	// 		        </div>
	// 		        <div class="swiper-slide">
	// 					<vue-myhero></vue-myhero>
	// 		        </div>
	// 		        <div class="swiper-slide">
	// 					<vue-allhero></vue-allhero>
	// 		        </div>
	// 		    </div>
	// 		</div>	
	// 	</div>
	// </div>
	// </template>
	// <script>
	var mySwiper = null;
	var router = new VueRouter();
	exports.default = {
		data: function data() {
			return {
				indexNav: ['周免英雄', '我的英雄', '全部英雄'],
				headTitle: '英雄资料',
				curIndex: 0
			};
		},
	
		ready: function ready() {
			var that = this;
			mySwiper = new Swiper('.swiper-container', {
				onSlideChangeStart: function onSlideChangeStart(swiper) {
					that.curIndex = mySwiper.activeIndex;
				}
			});
		},
		methods: {
			backPage: function backPage() {
				history.go(-1);
			},
			switchSwiper: function switchSwiper(index) {
				this.curIndex = index;
				console.log(index);
				mySwiper.slideTo(index);
			}
		},
		components: {
			'vue-freehero': _freeHero2.default,
			'vue-myhero': _myHero2.default,
			'vue-allhero': _allHero2.default
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\freeHero.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-c4318d14/freeHero.vue"
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
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"freeHero\">\n\t<div class=\"title\">\n\t\t<div>更新时间:每周五中午</div>\n\t</div>\n\t<ul class=\"freeHeroList\">\n\t\t<template v-for=\"hero in heroData\">\n\t\t<li v-if=\"$index<13\">\n\t\t    <img v-bind:src=\"heroImg[hero.id]\">\n\t\t    <div>\n\t\t\t\t<span class=\"name\">{{hero.name}}</span>\n\t\t\t\t<span class=\"nick\">{{hero.nick}}</span>\t\n\t\t\t\t<span class=\"tag\">{{hero.tag1}}  {{hero.tag2}}</span>\n\t\t    </div>\n\t\t</li>\n\t\t</template>\n\t</ul>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\myHero.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
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
	  var id = "_v-32d966b6/myHero.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vueSearchBox = __webpack_require__(34);
	
	var _vueSearchBox2 = _interopRequireDefault(_vueSearchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="myHero">
	// 		<div class="searchBox">
	// 			<div>
	// 				<form class="yo-search">
	// 					<label class="operation">
	// 					    <span class="yo-ico">&#xf067;</span>
	// 					    <input type="text" class="input" placeholder="输入搜索关键字..." v-model='searchText' />
	// 					</label>
	// 				</form>
	// 			</div>
	// 		</div>
	// 		<div class="assets">
	// 			<span>英雄资产(黑色玫瑰)</span>
	// 			<span>你共有10个英雄,价值22350金币</span>
	// 		</div>
	// 		<div id="wrapper">
	// 			<ul class="myHeroList">
	// 				<li v-for="myHero in myHeroData | filterBy searchText">
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
	var router = new VueRouter();
	
	Vue.use(_vueSearchBox2.default);
	var myScroll;
	
	exports.default = {
		data: function data() {
			return {
				myHeroData: [],
				searchText: ''
			};
		},
	
		ready: function ready() {
			var _this = this;
	
			this.$http.get('/mock/search/myHero.json').then(function (res) {
				//console.log(res.body);
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
			console.log(this.searchText);
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _searchBox = __webpack_require__(35);
	
	var _searchBox2 = _interopRequireDefault(_searchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueSearchBox = function VueSearchBox() {};
	VueSearchBox.install = function (Vue, options) {
		Vue.component('vue-search-box', Vue.extend(_searchBox2.default));
	};
	exports.default = VueSearchBox;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
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
	  var id = "_v-11d36035/searchBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t<form class=\"yo-search\">\n\t\t<label class=\"operation\">\n\t\t    <span class=\"yo-ico\">&#xf067;</span>\n\t\t    <input type=\"text\" class=\"input\" placeholder=\"输入搜索关键字...\" v-model='searchText' />\n\t\t</label>\n\t</form>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"myHero\">\n\t<div class=\"searchBox\">\n\t\t<div>\n\t\t\t<form class=\"yo-search\">\n\t\t\t\t<label class=\"operation\">\n\t\t\t\t    <span class=\"yo-ico\">&#xf067;</span>\n\t\t\t\t    <input type=\"text\" class=\"input\" placeholder=\"输入搜索关键字...\" v-model='searchText' />\n\t\t\t\t</label>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div class=\"assets\">\n\t\t<span>英雄资产(黑色玫瑰)</span>\n\t\t<span>你共有10个英雄,价值22350金币</span>\n\t</div>\n\t<div id=\"wrapper\">\n\t\t<ul class=\"myHeroList\">\n\t\t\t<li v-for=\"myHero in myHeroData | filterBy searchText\">\n\t\t\t    <img v-bind:src=\"myHero.img\">\n\t\t\t    <div>\n\t\t\t\t    <div class=\"infoMain\">\n\t\t\t\t\t\t<span class=\"nick\">{{myHero.nick}}</span>\n\t\t\t\t\t\t<span class=\"name\">{{myHero.name}}</span>\t\n\t\t\t\t    </div>\n\t\t\t\t    <div class=\"infoIntro\">\n\t\t\t\t\t\t<span class=\"useOcscasionCN\">{{myHero.useOccasionCN}}</span>\n\t\t\t\t    \t<span class=\"useCount\">{{myHero.useCount}}</span>\n\t\t\t\t    \t<span class=\"winCN\">{{myHero.winCN}}</span>\n\t\t\t\t    \t<span class=\"winPercent\">{{myHero.winPercent}}</span>\n\t\t\t\t    </div>\n\t\t\t    </div>\n\t\t\t</li>\n\t\t\t<div class=\"attention\">\n\t\t\t\t<span>说明:英雄使用数据来自<span class=\"lolColor\">LOL官方助手</span></span>\n\t\t\t<span>从2013年10月开始积累，不计算人机和自定义模式</span>\n\t\t</ul>\n\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search\\allHero.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(40)
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
	  var id = "_v-33dea1fb/allHero.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vueSearchBox = __webpack_require__(34);
	
	var _vueSearchBox2 = _interopRequireDefault(_vueSearchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="allHero">
	// 		<div class="searchBox">
	// 			<div>
	// 				<form class="yo-search">
	// 					<label class="operation">
	// 					    <span class="yo-ico">&#xf067;</span>
	// 					    <input type="text" class="input" placeholder="输入搜索关键字..." v-model='searchText' />
	// 					</label>
	// 				</form>
	// 			</div>
	// 		</div>
	// 		<div id="wrapper">
	// 			<ul class="allHeroList">
	// 				<li v-for="hero in heroData | filterBy searchText">
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
	var router = new VueRouter();
	
	Vue.use(_vueSearchBox2.default);
	var myScroll;
	exports.default = {
		data: function data() {
			return {
				heroData: [],
				heroImg: [],
				earchText: ''
			};
		},
	
		ready: function ready() {
			var _this = this;
	
			this.$http.get('/mock/search/hero_list.json').then(function (res) {
				console.log(res.body);
				_this.heroData = res.body;
				setTimeout(function () {
					myScroll.refresh();
				}, 1000);
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
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"allHero\">\n\t<div class=\"searchBox\">\n\t\t<div>\n\t\t\t<form class=\"yo-search\">\n\t\t\t\t<label class=\"operation\">\n\t\t\t\t    <span class=\"yo-ico\">&#xf067;</span>\n\t\t\t\t    <input type=\"text\" class=\"input\" placeholder=\"输入搜索关键字...\" v-model='searchText' />\n\t\t\t\t</label>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div id=\"wrapper\">\n\t\t<ul class=\"allHeroList\">\n\t\t\t<li v-for=\"hero in heroData | filterBy searchText\">\n\t\t\t    <img v-bind:src=\"heroImg[hero.id]\">\n\t\t\t    <div>\n\t\t\t\t\t<span class=\"name\">{{hero.name}}</span>\n\t\t\t\t\t<span class=\"nick\">{{hero.nick}}</span>\t\n\t\t\t\t\t<span class=\"tag\">{{hero.tag1}}  {{hero.tag2}}</span>\n\t\t\t    </div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"heroData\">\r\n\t<div class=\"heroDataHeader\">\r\n\t\t<span class=\"back\" v-on:click=\"backPage\">\r\n\t\t\t<img src=\"/images/nav_back_normal.png\">\r\n\t\t</span>\r\n\t\t<span class=\"title\">{{headTitle}}</span>\r\n\t\t<span class=\"more\"></span>\r\n\t</div>\r\n\t<ul class=\"heroDataNav\">\r\n\t\t<li v-for:=\"nav in indexNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'activeHero': ''\">{{nav}}</li>\r\n\t</ul>\r\n\t<div class=\"heroDataContainer\">\r\n\t\t<div class=\"swiper-container\">\r\n\t\t    <div class=\"swiper-wrapper\">\r\n\t\t        <div class=\"swiper-slide\">\r\n\t\t\t\t\t<vue-freehero></vue-freehero>\r\n\t\t        </div>\r\n\t\t        <div class=\"swiper-slide\">\r\n\t\t\t\t\t<vue-myhero></vue-myhero>\r\n\t\t        </div>\r\n\t\t        <div class=\"swiper-slide\">\r\n\t\t\t\t\t<vue-allhero></vue-allhero>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\t\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\friend.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
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
	  var id = "_v-69937bdc/friend.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 43 */
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
	// 			    </div>
	// 			    <div class="swiper-slide fri_msg"> 
	// 			    	<div v-show="fri_msg==0" class="msgs">暂无消息</div>
	// 			    </div>			    
	// 			  </div>
	// 			</div>
	// 		</div>
	// 	<div>
	// </div>
	// </template>
	// <script>
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
		ready: function ready() {
			var _this = this;
	
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
/* 44 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"friend-container\">\r\n\t<header class=\"nav_header\">\r\n\t<div class=\"fri_btns\">\r\n\t\t\t<div v-for=\"items in menu\">\r\n\t\t\t\t<button type=\"button\"  v-show=\"cur==$index? true:false\">{{items}}</button>\r\n\t\t\t\t<button type=\"button\" v-show=\"cur!=$index?true:false\" style=\"color:#fff\" @click=\"changeIndex($index)\">{{items}}</button>\r\n\t\t\t\t<img v-show=\"cur==$index? true:false\" src=\"http://offtkz7wd.bkt.clouddn.com/img/pager_tab_selected.png\"  class=\"fri_btns_select\">\t\r\n\t\t\t\t<img v-show=\"cur!=$index?true:false\" src=\"http://offtkz7wd.bkt.clouddn.com/img/pager_tab.png\"  class=\"fri_btns_select\">\t\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"fri_menu\">\r\n\t\t\t<img  src=\"http://offtkz7wd.bkt.clouddn.com/img/add_friend_btn_normal.png\" @click=\"showmsg\">\r\n\t\t\t<div class=\"fri_menu_list\" v-show=\"menu_show\" transition=\"fri_menu_show\">\r\n\t\t\t\t<ul >\r\n\t\t\t\t\t<li v-for=\"items in menu_list\" @click=\"click_hide\"><img :src=\"items.img\">{{items.title}}</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</header>\r\n\t\t<div class=\"friend_body\">\r\n\t\t\t<div class=\"friend_body_swiper-container\">\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t    <div class=\"swiper-slide fri_list\">\r\n\t\t\t\t\t<form class=\"yo-search\">\r\n\t\t\t\t\t    <label class=\"operation\">\r\n\t\t\t\t\t        <span class=\"yo-ico\">&#xf067;</span>\r\n\t\t\t\t\t        <input type=\"text\" class=\"input\" placeholder=\"搜索你的好友...\" />\r\n\t\t\t\t\t    </label>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<div class=\"fri_aboout_msg\">\r\n\t\t\t\t\t\t<div class=\"fri_about_left\">\r\n\t\t\t\t\t\t\t好友动态\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"fri_about_right\" ></div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"zm_fri_top\" @click=\"changeList\">\r\n\t\t\t\t\t\t<div class=\"zhangmeng_fri\">\r\n\t\t\t\t\t\t\t<div class=\"zm_left\">掌盟好友</div>\r\n\t\t\t\t\t\t\t<div class=\"zm_right\">{{fri_num}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"zm_list\" v-show=\"zm_listShow\" transition=\"list_down\">\r\n\t\t\t\t\t\t\t<li v-for=\"fri in fri_list\"> \r\n\t\t\t\t\t\t\t\t<img :src=\"fri.img\">\r\n\t\t\t\t\t\t\t\t<div class=\"zmlist_title\">{{fri.name}}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"zm_state\">\r\n\t\t\t\t\t\t\t\t\t<button @click.stop=\"\">聊天</button>\r\n\t\t\t\t\t\t\t\t\t<span class=\"state\">{{fri.state}}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t    </div>\r\n\t\t\t    <div class=\"swiper-slide fri_msg\"> \r\n\t\t\t    \t<div v-show=\"fri_msg==0\" class=\"msgs\">暂无消息</div>\r\n\t\t\t    </div>\t\t\t    \r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div>\r\n</div>\r\n";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(46)
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
	  var id = "_v-fe9c8b7a/zixunhome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<router-view></router-view>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(48)
	__vue_script__ = __webpack_require__(51)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(52)
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
	  var id = "_v-4eb44ced/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 49 */,
/* 50 */,
/* 51 */
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
	// 			z-index: 99;
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
	//    					position: relative;
	//     				left: -10px;
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
	//var bannerurl = '/get.php?url=http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml?plat=android&version=9709';
	var bannerurl = '/qtqq/zixun-banner';
	
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
	                  console.log(res);
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
	            return '/qtqq/zixun-list';
	            //return '/get.php?url=http://qt.qq.com/php_cgi/news/php/varcache_getnews.php&id='+ that.nav[index].id+'&page=0&plat=android&version=9709';
	      } else {
	            return '/qtqq/zixun-list';
	            //return '/get.php?url=http://qt.qq.com/php_cgi/news/php/varcache_getnews.php&id='+ that.nav[index].id+'&page='+(that.nav[index].page++)+'&plat=android&version=9709';
	      }
	}
	
	function getJson(url, succer) {
	      Vue.http.get(url).then(function (res) {
	
	            //      	var str = res.data;
	            //      	str = str.substring(0,str.indexOf('<script'));
	            console.log(res);
	
	            succer(res.body);
	            //      	succer( JSON.parse( str ) ) ;
	      });
	}
	// </script>
	/* generated by vue-loader */

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n<div id=\"zixun-home\">\r\n\r\n\t<header v-bind:style=\"topimgurl\">\r\n\t\t<div class=\"top\" v-bind:style=\"'background: rgba(0,0,0,'+ topbgcolor+');'\" >\r\n\t\t\t<span></span>\r\n\t\t\t<span>资讯</span>\r\n\t\t\t<span> <img src=\"http://127.0.0.1/images/search_icon.png\" alt=\"\" />\r\n\t\t\t </span>\r\n\t\t</div>\r\n\t\t<div class=\"nav\" v-if=\"headerNav\">\r\n\t\t\t<span  v-bind:class=\"curlist == $index ? 'active' : '' \"  v-for=\"n in nav\"  v-on:click=\"swiperList($index)\">{{n.title}}</span>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\r\n\t<!-- 滚动 IScroll -->\r\n\t<div id=\"zixun-scroll\" v-scroll=\"zixunScroll\"><div>\r\n\r\n\t\t<div v-if=\"isPull\" class=\"pull pullDownEl\">\r\n\t\t\t<img v-bind:src=\"pullPngSrc\">\r\n\t\t\t<span>{{pullDown}}</span>\r\n\t\t</div>\r\n\r\n\t\t<!-- banner -->\r\n\t\t<div class=\"swiper-container banner\" >\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t\t    <div class=\"swiper-slide\" v-for=\"b in banner\">\r\n\t\t\t\t    \t<img  v-bind:src=\"b.image_url_big\" alt=\"\" />\r\n\t\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t</div>\r\n\r\n\t\t<!--  nav -->\r\n\t\t<div class=\"nav\">\r\n\t\t\t<span  v-bind:class=\"curlist == $index ? 'active' : '' \"  v-for=\"n in nav\"  v-on:click=\"swiperList($index)\">{{n.title}}</span>\r\n\t\t</div>\r\n\t\t<div class=\"swiper-container list\">\r\n\t\t\t  <div class=\"swiper-wrapper\">\r\n\t\t\t\t    <div class=\"swiper-slide\" v-for=\"n in nav\">\r\n\t\t\t\t    \t<ul>\r\n\t\t\t\t    \t\t<li v-for=\"li in list\"   v-on:click=\"listClick($index)\">\r\n\t\t\t\t\t\t    \t<div class=\"left\">\r\n\t\t\t\t\t\t    \t\t<i></i>\r\n\t\t\t\t\t\t    \t\t<img v-bind:src=\"li.image_url_small\">\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t    \t<div class=\"con\">\r\n\t\t\t\t\t\t    \t\t<h3>{{li.title}}</h3>\r\n\t\t\t\t\t\t    \t\t<p>{{li.summary}}</p>\r\n\t\t\t\t\t\t    \t\t<div class=\"time\">{{li.publication_date}}{{li.pv}}</div>\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t    \t<div class=\"label\" v-if=\"li.newstype\"><span>{{li.newstype}}</span></div>\r\n\t\t\t\t\t    \t</li>\r\n\t\t\t\t    \t</ul>\r\n\t\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t</div>\r\n\t\t<div  class=\"pull pullUpEl\"> <span>上拉加载更多</span></div>\r\n\t</div></div>\r\n</div>\r\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(54)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\zixuncontent.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
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
	  var id = "_v-5c03b4c5/zixuncontent.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
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
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n\r\n<div id=\"zixun-content\" v-on:click=\"fenxianghide\">\r\n\t<div class=\"header\">\r\n\r\n\t\t<span class=\"back\" v-on:click=\"backPage\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/nav_back_normal.png\">\r\n\t\t</span>\r\n\t\t<span class=\"title\">资讯详情</span>\r\n\t\t<span class=\"more\" v-on:click.stop=\"fenxianghideshow\"><img src=\"http://127.0.0.1/images/menu_more.png\"></span>\r\n\t</div>\r\n\r\n\t<iframe v-bind:src=\"iframeurl\"></iframe>\r\n\r\n\t<div class=\"footer\">\r\n\t\t\r\n\t\t<!-- 底部的评论滚动 -->\r\n\t\t<div class=\"swiper-container conSwiper\">\r\n\t\t    <div class=\"swiper-wrapper\">\r\n\t\t        <div class=\"swiper-slide\" v-for=\" com in comment\">\r\n\t\t        \t<img v-bind:src=\"com.img\">\r\n\t\t        \t<span>{{com.cat}}</span>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"comment\" v-link=\"{path:'/index/zixun/comment'}\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/news_comments_num.png\">\r\n\t\t</div>\t\r\n\t\t<div class=\"editor\" v-on:click=\"editorShow(false)\">\r\n\t\t\t<img src=\"http://127.0.0.1/images/news_comment_publish_icon.png\">\r\n\t\t</div>\r\n\t\t\r\n\t\t<!-- 评论编辑框 -->\r\n\t\t<div v-bind:class=\"mask\" v-on:click=\"editorShow(true)\">\r\n\t\t\t<div class=\"comment-editor\" v-on:click.stop>\r\n\t\t\t\t<span><input type=\"text\" /></span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span> <input type=\"checkbox\" name=\"\" />同步到好友动态</span>\r\n\t\t\t\t\t<span class=\"fabiao\" v-on:click=\"editorShow(true)\">发表</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t<!-- 分享 -->\r\n\t\t<div class=\"fenxiang\" v-bind:class=\"hide\" v-on:click.stop>\r\n\t\t\t<div >分享到</div>\r\n\t\t\t<div class=\"con\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_zm.png\" alt=\"\" />\r\n\t\t\t\t\t<i>掌盟好友</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_favor_normal.png\" alt=\"\" />\r\n\t\t\t\t\t<i>好友动态</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_wx_friends.png\" alt=\"\" />\r\n\t\t\t\t\t<i>朋友圈</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_wx.png\" alt=\"\" />\r\n\t\t\t\t\t<i>微信好友</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_qq.png\" alt=\"\" />\r\n\t\t\t\t\t<i>手机QQ</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_qq_qzone.png\" alt=\"\" />\r\n\t\t\t\t\t<i>QQ空间</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"http://127.0.0.1/images/btn_video_normal.png\" alt=\"\" />\r\n\t\t\t\t\t<i>新浪微博</i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<span class=\"backcolor\">收藏</span>\r\n\t\t\t<span v-on:click=\"fenxianghide\">取消</span>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t\r\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zixun\\comment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
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
	  var id = "_v-e3fefe7e/comment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
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
			Vue.http.get('/qtqq/comment')
			//		Vue.http.get('/commen.php')
			.then(function (res) {
				console.log(res);
	
				//			var str = res.body;
				//      	str = str.substring(0,str.indexOf('<script'));
				//			this.comment  =  JSON.parse( str);
	
				_this.comment = res.body;
	
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
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"comment\">\n\t<div class=\"header\">\n\t\t<span class=\"back\" v-on:click=\"backPage\">\n\t\t\t<img src=\"http://127.0.0.1/images/nav_back_normal.png\">\n\t\t</span>\n\t\t<span class=\"title\">查看评论（182）</span>\n\t\t<span class=\"more\" ></span>\n\t\t<div class=\"zuixin\" ></div>\n\t\t\n\t\t<!-- 嵌入到header的 模态框 -->\n\t\t<div v-bind:class=\"mask\" v-on:click=\"showMask('hide')\">\n\t\t\t\n\t\t\t<div v-if=\"maskItem == 'choose'\" class=\"choose\" v-on:click.stop>\n\t\t\t\t<h3>请选择</h3>\n\t\t\t\t<p v-bind:class=\"huifu\" v-on:click.stop=\"commentBox('huifu')\" v-on:touchend=\"chooseEnd('huifu')\" v-on:touchstart=\"chooseStart('huifu')\">回复</p>\n\t\t\t\t<p v-bind:class=\"fuzi\" v-on:click.stop=\"commentBox('fuzi')\" v-on:touchend=\"chooseEnd('fuzi')\" v-on:touchstart=\"chooseStart('fuzi')\">复制</p>\n\t\t\t\t<p v-bind:class=\"jubao\"  v-on:click.stop=\"commentBox('jubao')\" v-on:touchend=\"chooseEnd('jubao')\" v-on:touchstart=\"chooseStart('jubao')\">举报</p>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- 举报理由 -->\n\t\t\t<div v-if=\"maskItem == 'liyou'\" class=\"liyou choose\" v-on:click.stop>\n\t\t\t\t<h3>请选择举报理由</h3>\n\t\t\t\t<p >广告</p>\n\t\t\t\t<p >色情</p>\n\t\t\t\t<p >辱骂</p>\n\t\t\t\t<p >骚扰</p>\n\t\t\t\t<p >反动</p>\n\t\t\t\t<p >其它</p>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- 评论编辑框   -->\n\t\t\t<div v-if=\"maskItem == 'eitor'\" class=\"comment-editor\" v-on:click.stop>\n\t\t\t\t<span><input type=\"text\" /></span>\n\t\t\t\t<span>\n\t\t\t\t\t<span> <input type=\"checkbox\" name=\"\" />同步到好友动态</span>\n\t\t\t\t\t<span class=\"fabiao\" v-on:click=\"showMask('hide')\">发表</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"comment-scroll\" v-scroll=\"commentScroll\">\n\t\t<ul>\n\t\t\t<li v-for=\"item in comment\">\n\t\t\t\t<div class=\"li-top\">\n\t\t\t\t\t<div > <img v-bind:src=\"item.imgurl\" alt=\"\" /> </div>\n\t\t\t\t\t<div >\n\t\t\t\t\t\t<h3>{{item.name}} </h3>\n\t\t\t\t\t\t<div ><span> <img src=\"http://127.0.0.1/images/peoplenearby_woman.png\" alt=\"\" />{{item.zan}}</span><span></span><span></span> </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div >{{item.time}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"li-con\"\t v-on:click=\"showMask($index)\"> {{item.comment}}</div>\n\t\t\t\t<div class=\"li-bot\"\t>\n\t\t\t\t\t<span>{{item.zan}}个赞</span>\n\t\t\t\t\t<span > \n\t\t\t\t\t\t<i v-bind:class=\" zhaning == $index ? 'zhaning' : ''  \"> +1 </i> \n\t\t\t\t\t\t<template v-if=\"!item.iszan\"><span v-on:click=\"zhananimation($index, false)\"><img src=\"http://127.0.0.1/images/praise_blue.png\" alt=\"\" /> 赞 </span></template>\n\t\t\t\t\t\t<template v-if=\"item.iszan\"><span v-on:click=\"zhananimation($index , true)\" > 已赞 </span></template>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n\t\t\n\t</div>\n\t\n</div>\n";

/***/ },
/* 59 */
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
//# sourceMappingURL=bundle.js.map