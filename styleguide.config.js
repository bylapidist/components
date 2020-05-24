module.exports = {
    components: 'src/components/**/*.tsx',
    webpackConfig: Object.assign({}, require('./webpack.config.js')),
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json',
        {}
    ).parse,
    skipComponentsWithoutExample: true
};
