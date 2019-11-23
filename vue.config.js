const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, dir);
}

const devServer = require(resolve('config/index.js'));

const config = {
	lintOnSave: true,
	devServer: {
		...devServer,
		overlay: {
			warnings: true,
			errors: false,
		},
	},
	transpileDependencies: [],
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			//  打包上线压缩去除console、debugger、alert等
			const uglifyInstance = new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						drop_console: true,// eslint-disable-line
						drop_debugger: true,// eslint-disable-line
						pure_funcs: ['console.log', 'console.error', 'debugger', 'alert'], // eslint-disable-line
					},
				},
				sourceMap: false,
				parallel: true,
			});
			config.plugins = [...config.plugins, uglifyInstance];
		}
		if (process.env.NODE_ENV === 'development') {
			config.devtool = 'source-map';
		}
	},
	chainWebpack: (config) => {
		// 设置别名
		config.resolve.alias.set('@', resolve('src'));

		// 全局引入scss
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
	},
	css: {
		modules: false, // 是否开启支持 foo.module.css 样式
		extract: true, // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
		sourceMap: false, // 是否构建样式地图，false 将提高构建速度
		loaderOptions: {// css预设器配置项
			sass: {
				javascriptEnabled: true,
			},
			less: {
				modifyVars: {
				  "primary-color": "#316CE5", //主题色
				   "input-height-base":'30px', //input的高度
				   'font-size-base':'12px', //字体大小
				   'btn-height-base':'30px', //button高度
				   'pagination-item-size':'30px', //分页器高度
				   'text-color':'#333', //字体颜色
				   'table-padding-vertical':'14px',//表格
				   'table-padding-horizontal':'8px'
				},
				javascriptEnabled: true
			  }
		},
	},
};

function addStyleResource (rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [// 需要全局导入的scss
				path.resolve(__dirname, 'src/common/constant/constant.scss'),
				path.resolve(__dirname, 'src/common/assets/styles/mixin.scss'),
			],
		});
}

module.exports = config;