<template>
	<div class="searchHome">
	<div v-if="isShow">
		<vue-dialog></vue-dialog>
	</div>
		<div class="headerBox">
			<div class="header">
				<i>头像</i>
				<b>发现</b>
				<i>扫一扫</i>
			</div>
			<div class="teamClub">
				<div id="wrapper">
					<ul>
						<li v-for="club in searchClub">
							<img v-bind:src="club.iconUrl">
							<b>{{club.name}}</b>
						</li>
					</ul>
				</div>
			</div>
			<div class="fansClub">
				<span>粉丝俱乐部 ></span>
			</div>
		</div>
		<div class="searchContainer">
			<ul class="allList">
				<li v-link="{path:'../heroData'}" v-for="al in allList">
					<img v-bind:src="al.image_url_big">
					<b>{{al.title}}</b>
				</li>
			</ul>
			<ul class="sortList">
				<template v-for="sl in sortList">
					<li v-if="$index<1||$index>3&$index<6" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
						<div>
							<img v-bind:src="sl.image_url_big">
							<b>{{sl.title}}</b>
						</div>
					</li>
					<li v-if="$index==1" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
						<div>
							<img v-bind:src="sl.image_url_big">
							<b>{{sl.title}}</b>
							<img src="/images/find_hot_tips.png">
						</div>
					</li>
					<li v-if="$index==3" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
						<div>
							<img v-bind:src="sl.image_url_big">
							<b>{{sl.title}}</b>
						</div>
						<div class="download">
							<b v-bind:class="sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'">&#xf031;</b>
						</div>
					</li>
					<li v-if="$index==2" class="parentLi" v-on:click="switchClick($index,sl.article_url,sl.article_id,sl.title)">
						<div>
							<img v-bind:src="sl.image_url_big">
							<b>{{sl.title}}</b>
						</div>
						<div class="download">
							<span class="downFont" @click.stop="download">下载</span>
							<b v-bind:class="sl.isHidden ? 'yo-ico  bRotate': 'yo-ico'">&#xf031;</b>
						</div>
					</li>
					<li v-if="sl.subList.length > 0 "  data-d="{{sl.isHidden}}" v-bind:class=" sl.isHidden ? 'childLi':'childLi forHidden'">
						<ul>
							<li v-for="item in sl.subList" v-on:click="switchClick($index,item.article_url,item.article_id,item.title)">
                  				<img v-bind:src="item.image_url_big">
					        	<b>{{item.title}}</b>
							</li>
						</ul>
					</li>	
				</template>
			</ul>
		</div>
	</div>
</template>
<script>
  	var myScroll;
	let router = new VueRouter();
	import VueDialog from '../../plugins/vue-dialog';
	Vue.use(VueDialog);
	export default {
		data(){
			return {
	           allList:[],
	           sortList:[],
	           subList:[],
	           curIndex:0,
	           searchClub:[],
	           isShow: false
			}
		},
		ready:function(){
			this.$http.get('/mock/search/searchHome.json').then((res)=>{
			var dataList = res.data.list;

			var allArr = [];
			var sortArr = [];
			var subArr = [];
            //排序
			dataList.sort(function(a,b){return a.section_index-b.section_index});
			allArr.sort(function(a,b){return a.pos_index-b.pos_index});

			for(let i = 0;i<dataList.length;i++){
				if(dataList[i].is_top == 1)
				{
          			allArr.push(dataList[i]);
				}else{
					if(dataList[i].parentid){
           				subArr.push(dataList[i]);
					}else{
					  	sortArr.push(dataList[i]);
					}
				}
			}

			for(var i = 0 ; i < sortArr.length; i++ ){
				sortArr[i].subList = [];
				for(var j =0 ; j < subArr.length ; j++){
					if( sortArr[i].article_id == subArr[j].parentid)
					sortArr[i].subList .push( subArr[j]);
				    sortArr[i].isHidden = false;
				}
			}
			this.allList =allArr;
			this.sortList = sortArr;
			this.subList = subArr;
			}, (res)=>{
				console.log(res);
			});
			this.$http.get('/mock/search/searchClub.json').then((res)=>{
				var clubData = res.data.clubs;
				this.searchClub = clubData;
				setTimeout(() => {
						myScroll.refresh();
					}, 500);
			}, (res)=>{
				console.log(res);
			});
			myScroll = new IScroll('#wrapper',{
				scrollX:true,
				scrollY:true,
				mouseWheel: true,
	        	scrollbars: false
			});
			this.$http.get('/mock/search/searchHome.json').then((res)=>{
				console.log(res);
			}, (res)=>{
				console.log(res);
			});	
		},
		methods:{
			//isHidden : true,
			switchClick(index,article_url,article_id,title){
				if(article_id==12458||article_id==12457){
					this.sortList[index].isHidden = !this.sortList[index].isHidden;
				}else if(article_id==3578){
					console.log(article_id);
					router.go({path:'/searchHeroTime?headTitle='+title+'&idFlag=#bid&id=10038&url=http://buluo.qq.com/mobile/barindex.html?#bid=10038'});
				}else if(article_id==3625){
					console.log(article_id);
					router.go({path:'/searchHeroTime?headTitle='+title+'&idFlag=siteid&id=187674040&c=index&url=http://wsq.discuz.qq.com/?siteid=187674040&c=index&f=inner&a=index&sid=$VKEY$'});
				}else{
					console.log(article_id);
					router.go({path:'/searchHeroTime?headTitle='+title+'&url='+article_url});
				}
			},
			download(){
				this.isShow = true;
			},
			hide(){
		        this.isShow = false;
		    }
		}
	}
</script>