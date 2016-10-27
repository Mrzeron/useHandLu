//加载样式
import '../styles/usage/page/app.scss';
<<<<<<< HEAD

//加载库文件
import Vue from './libs/vue.js';
import VueRouter from './libs/vue-router.js';

//加载模块
import welcome from './components/welcome.vue';
import signin from  './components/signin.vue';
import index from  './components/index.vue';
import search from './components/search/search.vue';
import searchHeroTime from './components/search/searchHeroTime.vue';
import heroData from './components/search/heroData.vue';
=======
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

>>>>>>> master


//Vue.use(Vuex);
/*Vue.use(Vueresource);
Vue.use(VueRouter);*/
let router = new VueRouter();
let App = Vue.extend({
  /*store:store*/
});
router.map({
        '/': {
<<<<<<< HEAD
            component: welcome  
=======
            component: welcome
>>>>>>> master
        },
       	'/signin':{
       		  component:signin
       	},
       	'/index':{
<<<<<<< HEAD
       		  component:index
       	},
        '/search':{
            component:search,
            subRoutes: {
              '/searchHeroTime':{
              component:searchHeroTime
              },
              '/heroData':{
                  component:heroData,
              }
            },
        },
        '/searchHeroTime':{
            component:searchHeroTime
        },
        '/heroData':{
            component:heroData,
        }
=======
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

>>>>>>> master
    })


router.start(App, 'body') 


//2秒后自动跳转
<<<<<<< HEAD
// setTimeout(function(){
// 	router.go({path:'/signin'})
// },2000)
=======
setTimeout(function(){
	// router.go({path:'/index/zixun'});
},1000)
>>>>>>> master
