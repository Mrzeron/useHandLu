var ET = require('extract-text-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/scripts/app.js', //入口
    //配置出口
    output: {
        path: __dirname + '/prd/',
        filename: 'bundle.js'
        // filename: '[name].js'
    },
    devtool: 'source-map', //配置source-map
    //配置server
    devServer: {
        contentBase: __dirname + '/prd',
        port: 80,
        inline: true,
        proxy: {
        	'/qtqq/*':{
//      		target:'http://127.0.0.1:3000/',
				target:'http://localhost:2333/',
        		secure: true,
        		pathRewrite: {
        			'^/qtqq/':''
        		}
        	},
	        '/rest/*':{
	            target: 'http://localhost:2333',
	            secure:false,
	            pathRewrite:{
	                '^/rest':''   //以rest开头的替换为空 /rest/list->localhost:8888/list
	            }
			}    //前面以/rest/开头的所有都使用代理转发
    } 
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                loader: ET.extract('style', 'css!sass')
                    /*loader: ET.extract('style', 'css!sass')*/
            }, {
                test: /\.vue$/,
                loader: 'vue'

            }] //配置模块
    },
    vue:{
		loaders:{
			js:'babel',
			css: ET.extract('vue-style-loader','css!sass')
		}
	},
    plugins: [
        new ET('bundle.css') //目标文件夹 参照上面出口
        // new ET('[name].css') //目标文件夹 参照上面出口
    ]
}
