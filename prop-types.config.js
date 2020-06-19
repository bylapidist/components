#!/usr/bin/env node
const fs = require('fs-extra');
const generate = require('typescript-proptypes-generator').default;

const propsToGenerate = [
    'aspect-ratio',
    'box',
    'heading',
    'image',
    'link',
    'list',
    'logo',
    'responsive',
    'text',
    'theme-provider'
];

const writeLineToFile = (line, fileName) => {
    fs.ensureFile(fileName, (err) => {
        if (err) throw err;

        fs.appendFile(fileName, `${line}\n`, (err) => {
            if (err) throw err;
        });
    });
};

const generatePropTypesForComponent = (componentName) =>
    generate({
        tsConfig: './tsconfig.json',
        prettierConfig: './.prettierrc.js',
        outputDir: `./dist/prop-types/${componentName}/`,
        inputPattern: `./src/components/${componentName}/index.tsx`
    });

const generateIndexEntryForComponent = (componentName) =>
    writeLineToFile(
        `export * from './${componentName}';`,
        `./dist/prop-types/index.js`
    );

propsToGenerate.forEach((componentName) =>
    generatePropTypesForComponent(componentName)
);

propsToGenerate.forEach((componentName) =>
    generateIndexEntryForComponent(componentName)
);
