export interface ColorGroup {
    lightest: string;
    light: string;
    base: string;
    dark: string;
}

export interface SizingGroup {
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
}

export interface BreakpointGroup {
    s: string;
    m: string;
    l: string;
}

export interface DefaultTheme {
    colors: {
        greys: ColorGroup;
        blues: ColorGroup;
        yellows: ColorGroup;
        greens: ColorGroup;
        reds: ColorGroup;
    };
    sizing: SizingGroup;
    breakpoints: {
        mobile: BreakpointGroup;
        tablet: BreakpointGroup;
        laptop: BreakpointGroup;
    };
}

export const greys: ColorGroup = {
    lightest: '#ffffff',
    light: '#f3f5f9',
    base: '#66687d',
    dark: '#292b3e'
};

export const blues: ColorGroup = {
    lightest: '#9bfff8',
    light: '#4AD6D8',
    base: '#17a3a5',
    dark: '#007072'
};

export const yellows: ColorGroup = {
    lightest: '#fdffb5',
    light: '#fff08f',
    base: '#ebc764',
    dark: '#c99944'
};

export const greens: ColorGroup = {
    lightest: '#e2f7c9',
    light: '#A7D981',
    base: '#72af5d',
    dark: '#5A8C34'
};

export const reds: ColorGroup = {
    lightest: '#FF848B',
    light: '#E75158',
    base: '#b41e25',
    dark: '#810000'
};

export const defaultTheme: DefaultTheme = {
    colors: {
        greys,
        blues,
        yellows,
        greens,
        reds
    },
    sizing: {
        xxxs: '2px',
        xxs: '4px',
        xs: '10px',
        s: '14px',
        m: '16px',
        l: '24px',
        xl: '36px',
        xxl: '45px',
        xxxl: '57px'
    },
    breakpoints: {
        mobile: {
            s: '320px',
            m: '375px',
            l: '425px'
        },
        tablet: {
            s: '580px',
            m: '640px',
            l: '768px'
        },
        laptop: {
            s: '1024px',
            m: '1280px',
            l: '1440px'
        }
    }
};

export default defaultTheme;
