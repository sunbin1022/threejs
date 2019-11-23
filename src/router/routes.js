/**
 * @file 这是模块页面的路由配置
 * @author kuan.qin@i-tudou.com
 */


const routes = [
	{
		path: '/',
		redirect: '/demo1',
	},
	{
		path: '/demo1',
		component: ()=> import('@/views/demo1'),
	},
];

export default routes;
