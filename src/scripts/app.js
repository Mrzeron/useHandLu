import '../styles/usage/page/app.scss';
/*import Vue from './libs/vue.js';*/
/*import VueRouter from './libs/vue-router.js';*/
import welcome from './components/welcome.vue';
/*import Vueresource from './libs/vue-resource';*/
import signin from  './components/signin.vue';
import index from  './components/index.vue';
import friend from  './components/friend.vue';
/*import Vuex from './libs/vuex.min.js';*/
import store from './vuex/store.js';

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
            '/friend':{
              component:friend
            }
          }
       	}

    })


router.start(App, 'body') 


//2秒后自动跳转
/*setTimeout(function(){
	router.go({path:'/signin'})
},2000)*/
