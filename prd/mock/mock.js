var fri_msg=require ("./fri_msg.js");
var zixunbanner = require ("./zixun-banner.js");
var zixunlist = require ("./zixun-list.js");
var comment = require ("./comment.js");


module.exports=function(){
	return {
		"fri_msg":fri_msg,
		"zixun-banner": zixunbanner,
		"zixun-list": zixunlist,
		"comment": comment
	}
}

