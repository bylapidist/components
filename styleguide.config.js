const fs = require('fs-extra');
const cp = require('child_process');
const path = require('path');

const getVersion = () => {
    try {
        return cp
            .execSync('git describe --tags --abbrev=0', { cwd: process.cwd() })
            .toString();
    } catch {
        return '0.0.0';
    }
};

const resolveDoc = (section, title) => {
    return path.resolve(__dirname, `docs/${section}/${title}.md`);
};

const componentRoot = path.join(__dirname, 'docs/components');

const styleguideComponents = {};

const componentFiles = fs.readdirSync(componentRoot);

for (const componentFile of componentFiles) {
    const refName = componentFile.replace('.tsx', '');
    styleguideComponents[refName] = path.join(componentRoot, refName);
}

module.exports = {
    version: getVersion(),
    title: 'Lapidist Components',
    skipComponentsWithoutExample: true,
    assetsDir: path.resolve(__dirname, 'docs', 'assets'),
    pagePerSection: true,
    components: 'src/components/**/*.tsx',
    webpackConfig: require('./webpack.config.js'),
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json',
        {}
    ).parse,
    moduleAliases: {
        '@lapidist/components': path.resolve(__dirname, 'src')
    },
    styleguideComponents,
    getExampleFilename(componentPath) {
        const dir = path.dirname(componentPath);
        return path.join(dir, 'README.md');
    },
    getComponentPathLine(componentPath) {
        const dir = path.dirname(componentPath);
        const getName = (baseName) =>
            baseName.replace(/(^\w|-\w)/g, (text) =>
                text.replace(/-/, '').toUpperCase()
            );
        return `import { ${getName(
            path.basename(dir)
        )} } from '@lapidist/components';`;
    },
    sections: [
        {
            name: 'Getting Started',
            sectionDepth: 0,
            content: resolveDoc('getting-started', 'index')
        },
        {
            name: 'Components',
            sectionDepth: 0,
            components: path.resolve(__dirname, 'src/components/**/*.tsx')
        }
    ],
    template: {
        favicon: 'https://lapidist.net/favicon-32x32.png',
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700'
                }
            ],
            meta: [
                {
                    name: 'description',
                    content:
                        'Lapidist Components: an opinionated React UI library, built with styled-components and TypeScript.'
                }
            ]
        }
    },
    theme: {
        fontFamily: {
            base: '"Montserrat", sans-serif'
        }
    },
    styles: {
        StyleGuide: {
            sidebar: {
                width: '280px'
            },
            hasSidebar: {
                paddingLeft: '280px'
            }
        }
    }
};
