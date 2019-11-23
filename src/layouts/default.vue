<template>
  <a-layout class="fy-main">
    <a-layout-header>
      <potato-header></potato-header>
    </a-layout-header>
    <a-layout-content>
      <potato-side-bar></potato-side-bar>
      <div class="fy-content" id="fyContent">
        <fy-title :title="title" :routes="routes"></fy-title>
        <div class="fy-content-div">
          <router-view />
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { PotatoHeader, PotatoSideBar } from 'potato-ui';
import { Select } from 'ant-design-vue';

export default {
	components: {
		PotatoHeader,
		PotatoSideBar,
	},
	data() {
		return {
			visible: false,
			title: 'title',
			routes: [],
		};
	},
	mounted() {
		this.$nextTick(()=> {
			this.init();
		});
	},
	watch: {
		$route(to, from) {
			this.setTitle();
		},
	},
	methods: {
		init() {
			this.antConfig();
			this.setTitle();
		},
		setTitle() {
			const { title } = this.$route.meta;
			if (Array.isArray(title)) {
				this.routes = title;
			} else {
				this.title = title;
				this.routes = [];
			}
		},
		antConfig() {
			this.$message.config({
				top: '100px',
			});
			Select.props.getPopupContainer.default = ()=> document.getElementById('fyContent') || document.body;
		},
	},
};
</script>
<style lang="scss" scoped>
.fy-main {
  height: 100%;
}

.fy-content {
  flex: 1;
  height: 100%;
  overflow: auto;
}

#fyContent {
  position: relative;

  .fy-content-div {
    margin: 20px;
  }
}

// 重写.ant-layout-header样式
.ant-layout-header {
  z-index: 4;
  width: 100%;
  height: 60px;
  padding: 0;
  box-shadow: 0 2px 8px 0 rgba(230, 230, 230, .35);
}

// 重写ant-layout-content样式
.ant-layout-content {
  display: flex;
  height: 100%;

// margin-top: $header-height;
  overflow: auto;
  background-color: #f9f9f9;

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
