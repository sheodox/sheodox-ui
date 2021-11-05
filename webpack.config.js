import path from 'path';
import svelteConfig from './svelte.config.js';

export default {
	mode: 'development',
	entry: {
		demo: './test/demo.ts',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('./test/'),
		publicPath: '',
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
	},
	module: {
		rules: [
			{
				test: /\.(html|svelte)$/,
				use: {
					loader: 'svelte-loader',
					options: {
						...svelteConfig,
					},
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
