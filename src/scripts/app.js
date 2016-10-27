import '../styles/usage/page/app.scss';
import '../styles/usage/page/serach.scss';

import welcome from './components/welcome.vue';
import signin from  './components/signin.vue';
import index from  './components/index.vue';

/* yjp  */
import zixun from './components/zixun/zixunhome.vue';
import zixunHome from './components/zixun/home.vue';
import zixuncontent from './components/zixun/zixuncontent.vue';
import comment from './components/zixun/comment.vue';

import store from './vuex/store.js';

import common from './utils/common.util.js';
common.myScroll();



//Vue.use(VueRouter);
let router = new VueRouter();
let App = Vue.extend({});


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


    				}
       		}
       	}

    })


router.start(App, 'body') 
//2秒后自动跳转
setTimeout(function(){
	// router.go({path:'/index/zixun'});
},1000)
