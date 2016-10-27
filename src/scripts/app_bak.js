import '../styles/usage/page/app.scss';
import Vue from './libs/vue.js';
import VueRouter from './libs/vue-router.js';
import welcome from './components/welcome.vue';
import signin from  './components/signin.vue';
import index from  './components/index.vue';


/*
 * yjp
 */
import zixun from './components/zixun/zixunhome.vue';
import zixunHome from './components/zixun/home.vue';
import zixuncontent from './components/zixun/zixuncontent.vue';


Vue.use(VueRouter);
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
                      }
                  }


    				}
       		}
       	}

    })


router.start(App, 'body') 
//2秒后自动跳转
setTimeout(function(){
	router.go({path:'/index/zixun'});
},1000)
