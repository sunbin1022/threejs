<template>
  <div id="app">
    <a-locale-provider :locale="zhCN">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN.js';
import { banNested, log, localStore } from 'potato-utils';
import { mapMutations } from 'vuex';

const timers = {
	timer: null,
};

export default {
	data() {
		return {
			zhCN,
			counter: 0,
		};
	},
	beforeCreate() {
		banNested();
		log();
	},
	methods: {
		...mapMutations('user', ['setUser', 'setGrant']),
		init() {
			if (this.counter > 30) {
				return;
			}
			const tenantId = localStore.get('tenant_id');
			if (tenantId) {
				const userGrantInfo = localStore.get('userGrantInfo') || {};
				const roleGrant = userGrantInfo.roleGrant || [];
				this.setGrant(roleGrant);
				this.setUser(localStore.get('userInfo'));
			} else {
				timers.timer = setTimeout(()=> {
					clearTimeout(timers.timer);
					timers.timer = null;
					this.counter += 1;
					this.init();
				}, 300);
			}
		},
	},
	created() {
		// this.init();
	},
};
</script>

<style lang="scss">
* {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
  Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, simsun,
  sans-serif;
  font-size: 12px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #acacac;
    border-radius: 4px;
  }
}

#app {
  min-width: 960px;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #acacac;
    border-radius: 4px;
  }
}

</style>
