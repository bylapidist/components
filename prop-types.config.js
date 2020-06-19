#!/usr/bin/env node

const { generate } = require('typescript-proptypes-generator');

generate({
    tsConfig: './tsconfig.json',
    prettierConfig: './.prettierrc.js',
    inputPattern: './src/components/**/*.tsx'
});
