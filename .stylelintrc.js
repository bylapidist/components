const { stylelintConfig } = require('@lapidist/linting');
module.exports = {
    ...stylelintConfig,
    ignoreFiles: [
        './src/components/theme-provider/*.tsx',
        './node_modules/**'
    ]
};
