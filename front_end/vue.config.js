const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

const host = 'localhost';
const port = 9000;
const staticJs = 'static/js';
const staticFilesJsPath = path.resolve(__dirname, `../${staticJs}`);
const publicPath = process.env.NODE_ENV === 'production' ? `/${staticJs}/app/` : `http://${host}:${port}/${staticJs}/`;


module.exports = {
	publicPath: `/${staticJs}/`,
	outputDir: `../${staticJs}/app/`,  // only for "vue-cli-service build" command
	devServer: {port: port},
	configureWebpack: {
		output: {
			filename: '[name].[hash].js',
			chunkFilename: '[name].[hash].js',
		},
		resolve: {
			alias: {
				vue$: 'vue/dist/vue.esm.js',
			}
		},
		plugins: [
			new BundleTracker({
				path: staticFilesJsPath,
				filename: 'webpack-stats.json',
				publicPath: publicPath,
			}),
		],
	},
	// chainWebpack: config => {
	// 	config.plugins.delete('html');
	// 	config.plugins.delete('preload');
	// 	config.plugins.delete('prefetch');

		// Works only if "import Foo from '../assets/bar.svg' is used inside a .vue SFC"
		// const svgRule = config.module.rule('svg')
		// svgRule.uses.clear()
		// svgRule.use('vue-svg-loader').loader('vue-svg-loader')

		// config.module.rule('svg').test(() => false).use('file-loader');
		// config.module
		// 	.rule('svg-inline-loader')
		// 	.test(/\.svg$/)
		// 	.use('svg-inline-loader')
		// 	.loader('svg-inline-loader')
		// 	.end()
	// }
};
