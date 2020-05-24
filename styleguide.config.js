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

module.exports = {
    version: getVersion(),
    title: '@lapidist/components',
    assetsDir: path.resolve(__dirname, 'docs', 'assets'),
    pagePerSection: true,
    usageMode: 'expand',
    components: 'src/components/**/*.tsx',
    webpackConfig: Object.assign({}, require('./webpack.config.js')),
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json',
        {}
    ).parse,
    skipComponentsWithoutExample: true,
    template: {
        favicon: 'https://lapidist.net/favicon-32x32.png',
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css?family=Montserrat:400,600,700'
                },
                {
                    rel: 'stylesheet',
                    href: '/style.css'
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
        Logo: {
            logo: {
                backgroundImage: 'url(logo.svg)',
                backgroundRepeat: 'no-repeat',
                paddingTop: '80px',
                backgroundPosition: 'center 0',
                textAlign: 'center',
                backgroundSize: '60px 60px'
            }
        },
        Version: {
            version: {
                textAlign: 'center'
            }
        },
        StyleGuide: {
            sidebar: {
                width: '240px'
            },
            hasSidebar: {
                paddingLeft: '240px'
            }
        }
    }
};
