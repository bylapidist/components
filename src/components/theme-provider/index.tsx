import React, { Context, PropsWithChildren } from 'react';
import {
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle
} from 'styled-components';
import { mergeThemes, Theme } from '@lapidist/styles';
import { defaultTheme } from './defaultTheme';
import { darkTheme } from './darkTheme';

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, button,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        transition: color 0.12s cubic-bezier(0.6, 0.04, 0.98, 0.7) 0s,
            border 0.12s cubic-bezier(0.6, 0.04, 0.98, 0.7) 0s,
            background-color 0.12s cubic-bezier(0.6, 0.04, 0.98, 0.7) 0s;
    }
    html { box-sizing: border-box; }
    *, *:before, *:after { box-sizing: inherit; }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section { display: block; }
    *[hidden] { display: none; }
    body { line-height: 1; font-size: 62.5%; }
    menu, ol, ul { list-style: none; }
    blockquote, q { quotes: none; }
    blockquote:before, blockquote:after,
    q:before, q:after { content: ''; content: none; }
    table { border-collapse: collapse; border-spacing: 0; }
    img { display: block; max-width: 100%; }
    a, button { text-decoration: none; outline-offset: 2px; outline: transparent solid 2px; }
    a:focus, button:focus { outline: rgb(235, 199, 100) solid 2px; }
`;

export interface ThemeProviderProps extends PropsWithChildren<unknown> {
    readonly theme?: Theme;
}

export const ThemeContext: Context<Theme> =
    React.createContext<Theme>(defaultTheme);

export const useTheme = (): Theme => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    theme
}) => {
    const initialTheme: Theme = useTheme();
    const baseTheme: Theme | undefined = mergeThemes(initialTheme, theme);

    const [themeContext, setThemeContext] = React.useState<Theme | undefined>(
        baseTheme
    );

    React.useEffect(() => {
        const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('isDarkMode') === 'true';
        setThemeContext(
            prefersDarkTheme ? mergeThemes(baseTheme, darkTheme) : baseTheme
        );
    }, [isDarkMode, baseTheme]);

    return (
        <>
            <GlobalStyle />
            <StyledThemeProvider theme={themeContext}>
                {children}
            </StyledThemeProvider>
        </>
    );
};

ThemeProvider.displayName = 'ThemeProvider';
