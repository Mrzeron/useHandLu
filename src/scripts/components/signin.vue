<template>
<div class="sigin-container">
	<div class="bg"></div>
	<div class="wrap">
		<header>
			登录
		</header>
		<div class="form">
		<div class="user_name">
		<input type="text" placeholder="QQ/手机号/邮箱"><span>X</span></div>
		
		<div class="user_pass">
		<input type="text" placeholder="密码"><span>X</span></div>
		<button type="button" v-link="{path:'/index'}">登录</button>
		</div>
	</div>
		
</div>

</template>
