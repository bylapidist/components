const { stylelintConfig } = require('@lapidist/linting');
module.exports = {
    ...stylelintConfig,
    // @TODO - lift to @lapidist/linting and fix these
    extends: 'stylelint-config-standard-scss',
    rules: {
        'custom-property-pattern': null,
        'keyframes-name-pattern': null,
        'selector-class-pattern': null,
        'block-no-empty': null
    },
    ignoreFiles: [
        './node_modules/**'
    ]
};
