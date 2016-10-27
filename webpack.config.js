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
    /*  devServer: {
          contentBast: __dirname +'/prd',
          port: 80,
          inline: true
      },*/
    devServer: {
        contentBase: __dirname + '/prd',
        port: 80,
        inline: true,
        proxy: {
        	'/qtqq/*':{
        		target:'http://127.0.0.1:3000/',
        		secure: true,
        		pathRewrite: {
        			'^/qtqq/':''
        		}
        	}
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
