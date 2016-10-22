# useHandLu

## ---------掌上英雄联盟




### 开发依赖（技术选型）
- 前端工程化工具 webpack
- 前端框架 Vue

		Vue版本 1.0
		路由 vue-router.js
		接口请求 vue-resource.js
		
- UI框架 YO
- 页面效果插件库 IScroll、swiper


### 使用说明

- 获取项目资源

	 	git clone git@github.com:Mrzeron/useHandLu.git

- 安装依赖包

		cnpm i 

- 编译

		webpack 或 npm run build 

- 启动server

		npm run server

### 目录说明

	prd/index.html	网站入口文件
	prd/			项目编译后目录
	prd/libs/		库文件目录
	prd/images/		图片资源文件目录
	prd/images/iconfont		图标字体目录
	prd/mock/		mock数据的json数据文件夹

	src/scripts/		js目录
	src/scripts/app.js				js入口
	src/scripts/view/*.js			每个模块的js文件
	src/scripts/utils/*.js			工具类js
	src/scripts/libs/*.js			打包依赖js库
	src/scripts/component/*.vue		vue模版文件目录


	src/styles/		css目录
	src/styles/usage/page/app.scss		scss入口文件
	src/styles/usage/fragment/*.scss	框架布局scss文件
	src/styles/usage/module/*.scss		每个模块的独立scss文件
	src/styles/usage/core/*.scss		scss配置文件（ 变量定义在这里，字体引用配置）  



### 项目内容
	
- 启动页：
- 登录页：  
		

- 页面框架：

		- 上中下三步份 中间内容，
			- header
				- 头像按钮 ——> 左侧菜单
				- 搜索 ——> 打开搜索页
			- 内容 。。。
			- footer ｛ table切换 ｝
			
		- 左侧菜单 
			- 名片 ——> 弹出窗口
			- 头像 ——> 社区资料 ｛社区资料设置｝
			- 我的动态 ——> 我的动态详情页
			- 我的下载 ——> 下载内容列表	｛视频列表， 下载设置｝
			- 我的订阅 ——> 我的订阅内容页 { 好友， 赛事， 话题}
			- 我的收藏 ——> 我的收藏内容页 ｛ 资讯， 英雄， 壁纸｝
			- 退出 ——> 退出页

		独立模版：
			- 框架
			- 社区资料
			- 名片
			- 动态
			- 视频列表
			- 下载设置
			- 订阅
			- 收藏
			- 设置
			
		技术点：
			主路由实现
			左侧菜单的显示隐藏动画（所有页面均可向右划出）
			弹出层
			
 			
- 资讯模块
		
		- banner图
		- 资讯分类列表
		- 资讯条目列表
		- 技术点：
			- 下拉刷新
			- 加载更多
			- 分类顶部固定
			
		- 资讯详情
			- header
				- 返回
				- 位置导航
				- 分享
			方案A: 
				使用 iframe 嵌入页面

			方案B：
			- 内容  加载单个h5页面
			- footer 评论轮播  
				- 全部评论  ——> 评论全部页面
				- 编辑评论 ——> 底部弹出评论输入遮罩层 
			
			方案C：

		独立模版：
			- 资讯主页
				- 
			- 资讯详情
			- 单页｛  ｝

- 好友模块

		- 框架header（不一样的地方） 
			- 好友板块分类
			- 更多按钮
				- 发起群聊 ——>  发起群聊页面
				- 添加好友 ——> 添加好友页面
				- 好友订阅 ——> 好友订阅页面
		- 好友搜索 ——> 搜索页面（好友搜索）
		- 好友动态 ——> 好友动态列表页
						- header
							- 链接到 动态发布页面
						- 我的头像 ——> 我的动态详情页
						- 列表中的头像 ——> 好友动态详情页
						- 评论点赞功能
						- 转载资讯 ——> 资讯详情页
		- 游戏好友列表
			- 列表中点击除聊天位置之外的区域 ————> 好友游戏资料
			- 点击聊天 ————> 进入好友聊天页面
								- header 右侧按钮链接到——>聊天信息设置
								- 聊天内容中的头像单击 ———> 好友游戏资料
			
		- 消息
			- 就是聊天列表

		独立模版：
			- 好友...
			- 添加好友
			- 好友订阅
			- 好友搜索
			- 好友动态列表
			- 动态发布
			- 动态详情
			- 聊天列表
			- 发起聊天
			- 聊天设置
			- 好友游戏资料

- 发现模块

		- header右侧按钮
			- 打开扫一扫
			- 打开二维码页面
		- top俱乐部列表
			- 粉丝俱乐部 ——> 全部俱乐部独立页面
			- 俱乐部列表中单击 ——> 对应俱乐部内部
		- 英雄资料 ——> 英雄资料页面｛周免英雄， 我的英雄， 全部英雄｝
		- 召唤师查询 ——> 召唤师查询页面
		- 附近玩家 ——> 附近玩家页面
		- 对战助手 ——> 对战助手页面
		- 附近特权网吧 ——> 附近特权网巴列表页
							- 点击查看网巴详情
		- 游戏资料 ｛物品资料， 天赋资料， 符文资料｝ -——> 对应页面
		- 社区｛ 兴趣部落， 官方论坛， 只是学院｝
		- 英雄时刻 ——> 英雄时刻列表页 ——> 英雄时刻详情页
		- 壁纸 ——> 壁纸页面｛最新， 最热， 分类， 收藏｝ -——> 图片查看

		独立模版：
			- 发现
			- 扫一扫
			- 二维码
			- 全部俱乐部
			- 俱乐部内部
			- 英雄资料
			- 召唤师查询
			- 附近玩家
			- 对战助手
			- 网巴列表
			- 网巴详情
			- 游戏资料
			- 社区...
			- 英雄时刻列表
			- 英雄时刻详情
			- 壁纸浏览
			- 图片查看
			
- 我的模块【好友游戏资料】

		- header右侧按钮 ——> 分享
		- top 基本资料展示
		- 战绩
			- 荣誉详情
			- 我的战绩（我的战绩查询）
				- 战绩列表
					- 单击——> 战绩详情页
		- 能力
			- 能力数据解析
			- 设置擅长位置
			- 常用英雄 ——>  英雄使用数据页
			- 游戏相册 -——> 有内容才跳转
			- 我的英雄时刻 ——> 我的全部英雄时刻页面[英雄时刻列表]
		- 资产
			- 资产记录 ——> 资产记录页{购买记录， 礼品记录}
			- 拥有英雄 ——> 英雄列表页
							- 单击英雄 -——> 英雄详情页[英雄时刻详情]
			- 皮肤列表
			
			
		独立模版：
			- 好友游戏资料
			- 荣誉详情
			- 战绩列表
			- 战绩详情
			- 能力数据解析
			- 英雄使用数据
			- 游戏相册
			- 资产记录
			- 皮肤列表
			
	
### 接口文档
	
- 登录

- 资讯

- 好友

- 发现

- 我
		


### 分工
    
    A:yjp   B:Mrzeron   C:ljhme  D:AmazingJTH

	A 资讯首页 + 资讯详情 + ...

	B 好友列表 + 好友动态 + ...
	
	C 发现首页 + 俱乐部详情页 +各种发现详情页+ ...

	D 我 + ...




