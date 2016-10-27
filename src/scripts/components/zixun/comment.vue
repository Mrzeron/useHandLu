<template>
	<div id="comment">
		<div class="header">
			<span class="back" v-on:click="backPage">
				<img src="http://127.0.0.1/images/nav_back_normal.png">
			</span>
			<span class="title">查看评论（182）</span>
			<span class="more" ></span>
			<div class="zuixin" ></div>
			
			<!-- 嵌入到header的 模态框 -->
			<div v-bind:class="mask" v-on:click="showMask('hide')">
				
				<div v-if="maskItem == 'choose'" class="choose" v-on:click.stop>
					<h3>请选择</h3>
					<p v-bind:class="huifu" v-on:click.stop="commentBox('huifu')" v-on:touchend="chooseEnd('huifu')" v-on:touchstart="chooseStart('huifu')">回复</p>
					<p v-bind:class="fuzi" v-on:click.stop="commentBox('fuzi')" v-on:touchend="chooseEnd('fuzi')" v-on:touchstart="chooseStart('fuzi')">复制</p>
					<p v-bind:class="jubao"  v-on:click.stop="commentBox('jubao')" v-on:touchend="chooseEnd('jubao')" v-on:touchstart="chooseStart('jubao')">举报</p>
				</div>
				
				<!-- 举报理由 -->
				<div v-if="maskItem == 'liyou'" class="liyou choose" v-on:click.stop>
					<h3>请选择举报理由</h3>
					<p >广告</p>
					<p >色情</p>
					<p >辱骂</p>
					<p >骚扰</p>
					<p >反动</p>
					<p >其它</p>
				</div>
				
				<!-- 评论编辑框   -->
				<div v-if="maskItem == 'eitor'" class="comment-editor" v-on:click.stop>
					<span><input type="text" /></span>
					<span>
						<span> <input type="checkbox" name="" />同步到好友动态</span>
						<span class="fabiao" v-on:click="showMask('hide')">发表</span>
					</span>
				</div>
			</div>
		</div>
		<div class="comment-scroll" v-scroll="commentScroll">
			<ul>
				<li v-for="item in comment">
					<div class="li-top">
						<div > <img v-bind:src="item.imgurl" alt="" /> </div>
						<div >
							<h3>{{item.name}} </h3>
							<div ><span> <img src="http://127.0.0.1/images/peoplenearby_woman.png" alt="" />{{item.zan}}</span><span></span><span></span> </div>
						</div>
						<div >{{item.time}}</div>
					</div>
					<div class="li-con"	 v-on:click="showMask($index)"> {{item.comment}}</div>
					<div class="li-bot"	>
						<span>{{item.zan}}个赞</span>
						<span > 
							<i v-bind:class=" zhaning == $index ? 'zhaning' : ''  "> +1 </i> 
							<template v-if="!item.iszan"><span v-on:click="zhananimation($index, false)"><img src="http://127.0.0.1/images/praise_blue.png" alt="" /> 赞 </span></template>
							<template v-if="item.iszan"><span v-on:click="zhananimation($index , true)" > 已赞 </span></template>
						</span>
					</div>
				</li>
				
			</ul>
			
		</div>
		
	</div>
</template>

<script>
var that;

export default {
	data: function(){
		return {
			huifu: '',
			fuzi:'',
			jubao: "",
			zhaning: -1,
			maskItem: 'choose',
			mask: 'none',
			comment: [],
			commentScroll : {el: '.comment-scroll'}
		};
	},
	ready: function() {
		that = this;
		// Vue.http.get('http://127.0.0.1/mock/comment.json')
		Vue.http.get('/commen.php')
        .then((res) => {
			console.log(res );
		
			var str = res.body;
        	str = str.substring(0,str.indexOf('<script'));
			this.comment  =  JSON.parse( str);
			for(var i=0; i <this.comment.length; i++){
				this.$set( 'comment['+i+'].iszan', false);
			}
			// this.comment = res.body;
			Vue.nextTick(function() {
				console.log( 'ss');
				that.$set('commentScroll.config' , { 
	        		click: true
	        	});
			})
        })
	},
	methods: {
		backPage:function(	){
			console.log( window);
			history.go(-1);
		},
		showMask(index){
			this.maskItem = 'choose';
			if( index == 'hide'){
				this.mask = 'none';
			}else{
				this.mask = this.mask == "yo-mask" ? 'none': 'yo-mask';	
			}
		},
		chooseStart(key ){
			this[key] = 'anxia';
		},
		chooseEnd(key ){
			this[key] = '';
		},
		commentBox( key ){
			console.log( key );
			switch(key){
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
		zhananimation( index,  quxiao ){
			
			if( quxiao){
				this.zhaning  = -1;
				this.comment[index].iszan = false;
				this.comment[index].zan--;
			} else{
				this.zhaning = index;
				this.comment[index].iszan = true;
				this.comment[index].zan++;
					setTimeout(function(){
					that.zhaning = -1;
				}, 1000);
			}	
		}
	}

}	
	
</script>
