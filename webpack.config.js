const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', // Use 'production' for final builds
    entry: './src/scripts/main.ts', // Your TypeScript entry file
    output: {
        filename: 'scripts/main.js',
        path: path.resolve(__dirname, 'dist'), // Output folder
        clean: true, // Clean /dist folder before each build
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Handle CSS files
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Use your source HTML file
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/styles.css', // Output for CSS
        }),
    ],
    devtool: 'inline-source-map',
};
