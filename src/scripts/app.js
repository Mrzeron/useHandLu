import '../styles/usage/page/app.scss';
import '../styles/usage/page/serach.scss';

/*import Vue from './libs/vue.js';*/
/*import VueRouter from './libs/vue-router.js';*/
/*import Vueresource from './libs/vue-resource';*/
//import Vuex from './libs/vuex.min.js';
//import store from './vuex/store.js';

import welcome from './components/welcome.vue';
import signin from  './components/signin.vue';
import index from  './components/index.vue';
import friend from  './components/friend.vue';


/* yjp  */
import zixun from './components/zixun/zixunhome.vue';
import zixunHome from './components/zixun/home.vue';
import zixuncontent from './components/zixun/zixuncontent.vue';
import comment from './components/zixun/comment.vue';


import common from './utils/common.util.js';
common.myScroll();



//Vue.use(Vuex);
/*Vue.use(Vueresource);
Vue.use(VueRouter);*/
let router = new VueRouter();
let App = Vue.extend({
  /*store:store*/
});
router.map({
	'/': {
		component: welcome
	},
	'/signin':{
		component:signin
	},
	'/index':{
		component:index,
		subRoutes:{
			'/':{
				component: zixun,
				subRoutes : {
					'/': {
						component: zixunHome
					}
				}
			},
			'/zixun':{
				component: zixun,
				subRoutes : {
					'/': {
						component: zixunHome
					},
					'/content': {
						component: zixuncontent
					},
					'/comment':{
						component: comment
					}
				}
			},
			'/friend':{
				component:friend
			}
		}
	}
})


router.start(App, 'body') 


//2秒后自动跳转
setTimeout(function(){
	router.go({path:'/signin'});
},2000)
