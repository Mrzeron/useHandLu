<template>
  <div class="my-container">
    <div class="top">
      <header>
        <div class="userimg">
          <img src="http://ofltwdk94.bkt.clouddn.com/userimg.jpg" />
        </div>
        <div class="title">
          <span>比尔吉沃特<span>
          <i><img src="http://ofltwdk94.bkt.clouddn.com/switch_region.png" /></i>
        </div>
        <div class="share">
          <img src="http://ofltwdk94.bkt.clouddn.com/share.png" />
        </div>
      </header>
      <div class="banner">
        <div class="tip">

        </div>
        <div class="info">
          <div class="touxiang">
            <img src="http://ofltwdk94.bkt.clouddn.com/userimg.jpg" />
            <span>30</span>
          </div>
          <div class="name">
            萝卜特大s
            <img src="http://ofltwdk94.bkt.clouddn.com/man.png" />
          </div>
          <div class="status">
            <span class="now">游戏离线</span>
            <span>|</span>
            <span>首胜可用</span>
          </div>

        </div>
      </div>
    </div>
    <nav>
      <ul id="swiper-nav">
          <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''"><span>{{nav}}</span><img v-if="curIndex == $index?true:false" src="/images/tab_selected.png"/></li>
      </ul>
    </nav>
    <section>
      <div class="swiper-container" id="index-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <section id="index-scroll">
              <div class="scrollcontainer">
                <div class="myhonor">
                  <div class="detail">
                    <div class="dleft">
                      <img src="http://ofltwdk94.bkt.clouddn.com/baijin.png" />
                      <span>华贵铂金 III</span>
                    </div>
                    <div class="dright">
                      <div class="num">
                        <div>胜率<span>62%</span></div>
                        <div>总局数<span>2867</span></div>
                      </div>
                      <div class="legend">
                        <div>
                          <div class="god"><span>165次</span></div>
                          <span>超神</span>
                        </div>
                        <div>
                          <div class="fivekill"><span>31次</span></div>
                          <span>五杀</span>
                        </div>
                        <div>
                          <div class="fourkill"><span>107次</span></div>
                          <span>四杀</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="shadow"></div>
                <div class="myscore">
                  <div class="title">
                    我的战绩 <span><img src="http://ofltwdk94.bkt.clouddn.com/down.png"></span>
                  </div>
                  <div class="item" v-for="item in items">
                    <div class="date">{{item.date}}</div>
                    <div class="play" v-for="tip in item.detail">
                      <div class="hero"><img v-bind:src="tip.touxiang"></div>
                      <div class="playright">
                        <div class="ptop">{{tip.result}} {{tip.score}}</div>
                        <div class="pbottom">{{tip.modal}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  var Vue = require('../libs/vue.js');
  var VueResource = require('../libs/vue-resource.js');
  import commonUtil from '../utils/commonUtil.js';

  Vue.use(VueResource);

  var mySwiper = null;

  export default {
    data(){
      return {
        curIndex: 0,
        indexNav: ['战绩', '能力', '资产'],
        items:[]
      }
    },
    ready:function(){
      var that = this;
      this.$http.get('/mock/list.json')
        .then((res) => {
          that.items = res.data;
          mySwiper = new Swiper("#index-swiper", {
            onSlideChangeStart: function(){
              that.curIndex = mySwiper.activeIndex;
            }
          });
          Vue.nextTick(function(){
            commonUtil.isAllLoaded('#index-scroll', function(){
              var scroll = new IScroll('#index-scroll',{click:true})
            });
          });
        })
    },
    methods:{
      switchSwiper(index) {
        this.curIndex = index;
        mySwiper.slideTo(index);
      }
    }
  }
</script>
