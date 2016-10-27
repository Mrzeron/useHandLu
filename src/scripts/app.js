//加载样式
import '../styles/usage/page/app.scss';

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
    })


router.start(App, 'body') 
//2秒后自动跳转
// setTimeout(function(){
// 	router.go({path:'/signin'})
// },2000)
