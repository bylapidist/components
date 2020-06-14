import { Theme } from './theme';

export const defaultTheme: Theme = {
    breakpoints: {
        all: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
    },
    fontSizes: {
        '1': '0.75rem',
        '2': '0.875rem',
        '3': '1rem',
        '4': '1.125rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.875rem',
        '8': '2.25rem',
        '9': '3rem',
        '10': '4rem'
    },
    fontFamilies: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['Consolas', 'Courier New', 'monospace']
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
    },
    lineHeights: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2'
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
    },
    sizes: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        auto: 'auto',
        px: '1px'
    },
    borderRadii: {
        '0': '0',
        '1': '0.125rem',
        '2': '0.25rem',
        '3': '0.375rem',
        '4': '0.5rem',
        px: '1px',
        rounded: '9999px'
    },
    borderWidths: {
        '0': '0',
        '1': '2px',
        '2': '4px',
        '3': '8px',
        px: '1px'
    },
    boxShadows: {
        '0': 'none',
        '1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    },
    widths: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw'
    },
    colors: {
        base: {
            white: 'white',
            black: 'black',
            transparent: 'transparent'
        },
        grey: {
            lightest: '#ffffff',
            light: '#f3f5f9',
            base: '#66687d',
            dark: '#292b3e'
        },
        primary: {
            lightest: '#9bfff8',
            light: '#4AD6D8',
            base: '#17a3a5',
            dark: '#007072'
        },
        secondary: {
            lightest: '#fdffb5',
            light: '#fff08f',
            base: '#ebc764',
            dark: '#c99944'
        },
        tertiary: {
            lightest: '#e2f7c9',
            light: '#A7D981',
            base: '#72af5d',
            dark: '#5A8C34'
        },
        danger: {
            lightest: '#FF848B',
            light: '#E75158',
            base: '#b41e25',
            dark: '#810000'
        }
    }
};
