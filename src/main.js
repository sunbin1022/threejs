import '@babel/polyfill';
import Vue from 'vue';
import 'ant-design-vue/dist/antd.less';
import Antd from 'ant-design-vue';
import { authHelper } from 'potato-ui';

import App from './App.vue';
import router from './router';
import store from './store';
import components from '@/common/components';

// 引入css
import '@/common/assets/styles/reset.css';
import '@/common/assets/styles/bootstrap-spacing.css';
import '@/common/assets/styles/vue-transition.css';
import '@/common/assets/styles/mixin.scss';
import * as three from 'three';

Vue.prototype.$three = three;
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(components);

authHelper.initAppAuth(Vue, ()=> {
	Vue.prototype.$disabledAuth = true;
	new Vue({
		router,
		store,
		render: (h)=> h(App),
	}).$mount('#app');
});
