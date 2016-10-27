//加载样式
import '../styles/usage/page/app.scss';

//加载模块
import welcome from './components/welcome.vue';
import signin from  './components/signin.vue';
import index from  './components/index.vue';
import search from './components/search/search.vue';
import searchHeroTime from './components/search/searchHeroTime.vue';
import heroData from './components/search/heroData.vue';


import friend from  './components/friend.vue';


/* yjp  */
import zixun from './components/zixun/zixunhome.vue';
import zixunHome from './components/zixun/home.vue';
import zixuncontent from './components/zixun/zixuncontent.vue';
import comment from './components/zixun/comment.vue';


import common from './utils/common.util.js';
common.myScroll();


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
          },
           '/search':{
        component:search,
    }
    
          }
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
setTimeout(function(){
   router.go({path:'/index/zixun'});
},2000);
