const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'demo': './test/demo.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './test/'),
        publicPath: ""
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main'],
    },
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                use: 'svelte-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
