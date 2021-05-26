const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const env = process.env.NODE_ENV || 'development';
const develop = env === 'development';
const test = env === 'test';
const production = env === 'production';
const port = process.env.PORT || 3001;
const paths = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    dist: path.resolve(__dirname, 'dist', 'umd')
};

module.exports = {
    devtool: (develop || test) && 'source-map',
    mode: production ? 'production' : 'development',
    entry: {
        lapidist: develop
            ? [paths.entry, `webpack-dev-server/client?http://0.0.0.0:${port}`]
            : [paths.entry]
    },
    output: {
        path: paths.dist,
        filename: develop ? '[name].dev.js' : '[name].min.js',
        library: 'lapidist-components',
        libraryTarget: 'umd',
        publicPath: '/',
        umdNamedDefine: true
    },
    externals: ['react', 'react-dom', 'styled-components'],
    devServer: {
        port,
        historyApiFallback: true,
        contentBase: paths.dist,
        hot: true,
        inline: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            lapidist: path.resolve('./src')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd()
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
