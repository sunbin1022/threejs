module.exports = {
	presets: [
		['@vue/app', {
			useBuiltIns: 'entry'
		}]
	],
	plugins: [
		[
		  "@babel/plugin-transform-runtime",
		  {
			"absoluteRuntime": false,
			"corejs": false,
			"helpers": true,
			"regenerator": true,
			"useESModules": false
		  }
		]
	]
};