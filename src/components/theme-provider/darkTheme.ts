import { Theme } from '@lapidist/styles';

export const darkTheme: Theme = {
    boxShadows: {
        '1':
            '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)'
    },
    colors: {
        base: {
            light: 'black',
            dark: 'white',
            transparent: 'transparent'
        },
        grey: {
            lightest: '#292B3E',
            light: '#73748b',
            base: '#d4d4d4',
            dark: '#E8E8E8'
        },
        primary: {
            lightest: '#1a8385',
            light: '#17a3a5',
            base: '#4AD6D8',
            dark: '#9bfff8'
        },
        secondary: {
            lightest: '#c99944',
            light: '#ebc764',
            base: '#fff08f',
            dark: '#fdffb5'
        },
        tertiary: {
            lightest: '#5A8C34',
            light: '#72af5d',
            base: '#A7D981',
            dark: '#e2f7c9'
        },
        danger: {
            lightest: '#810000',
            light: '#b41e25',
            base: '#E75158',
            dark: '#FF848B'
        }
    }
};
