const path = require('path');

module.exports = {
    entry: './src/widget.js', // Entry point for your widget
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'widget.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Transpile .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Transpile ES6+ and React
                    },
                },
            },
            {
                test: /\.css$/, // Match .css files
                use: [
                    'style-loader', // Injects CSS into the DOM
                    'css-loader',   // Resolves CSS imports and URLs
                ],
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@wordpress/widgets': 'wp.widgets',
        '@wordpress/blocks': 'wp.blocks',
        '@wordpress/components': 'wp.components',
        '@wordpress/editor': 'wp.editor',
        '@wordpress/element': 'wp.element',
    },
    mode: 'production', // Minify the output for production
};