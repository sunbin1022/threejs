import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
// import { routesAuth } from 'potato-ui';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// routesAuth(router);

export default router;
