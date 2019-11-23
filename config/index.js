/**
 * @file 设置接口代理
 * @author kuan.qin@i-tudou.com
 */

// 这里添加要设置代理的接口
const proxys = [
	'/xx',
];
const devServer = {
	host: '0.0.0.0',
	port: 10000,
	https: false,
	hotOnly: false,
	disableHostCheck: true,
	proxy: {},
};
const devEnv = require('./dev.env.js');
const testEnv = require('./test.env.js');
const prodEnv = require('./prod.env.js');

const env = process.env.NODE_ENV;
let target = devEnv.host;
const proxyObj = {};

if (env === 'production') {
	target = prodEnv.host;
} else if (env === 'test') {
	target = testEnv.host;
}

proxys.every((item)=> {
	proxyObj[item] = {
		target,
		changeOrigin: true,
		pathRewrite: {
			[`^${item}`]: `${item}`,
		},
	};
	return true;
});
proxyObj['/xx'] = {
	target: 'http://10.4.1.112:18603',
	changeOrigin: true,
	pathRewrite: {
		'^/xx': '/xx',
	},
};
devServer.proxy = proxyObj;
module.exports = devServer;
