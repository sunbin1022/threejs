
const components = [];

function install(Vue) {
	components.every((component)=> {
		Vue.component(component.name, component);
		return true;
	});
}

export default {
	install,
};
