const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV || 'development';
const develop = env === 'development';
const test = env === 'test';
const production = env === 'production';
const port = process.env.PORT || 3001;
const paths = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    dist: path.resolve(__dirname, 'dist')
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
    externals: ['react', 'react-dom'],
    devServer: {
        port,
        historyApiFallback: true,
        contentBase: paths.dist,
        hot: true,
        inline: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
        alias: {
            lapidist: path.resolve('./src')
        },
        fallback: {
            path: false,
            constants: false,
            stream: false,
            jsonfile: false,
            fs: false
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd()
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015'
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'source-map-loader'
            },
            {
                test: /\.module.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                map: true,
                                plugins: ['postcss-preset-env']
                            }
                        }
                    }
                ]
            }
        ]
    }
};
