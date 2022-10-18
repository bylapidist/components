import * as React from 'react';
import cx from 'classnames';
import { Themes } from '@lapidist/styles';
import '@lapidist/styles/dist/css/light.css';
import '@lapidist/styles/dist/css/dark.css';
import type { BaseProps } from '../types';

export interface ThemeProviderProps {
    readonly theme?: Themes;
}

export const ThemeContext: React.Context<Themes> =
    React.createContext<Themes>('light');

export const useThemeContext = (): Themes => React.useContext(ThemeContext);

const ThemeProvider = ({
    className,
    as: Component = 'div',
    testId = 'ThemeProvider',
    theme,
    ...restProps
}: BaseProps & ThemeProviderProps) => {
    const defaultTheme: Themes = useThemeContext();
    const [themeContext, setThemeContext] = React.useState<Themes>(
        theme || defaultTheme
    );

    React.useEffect(() => {
        setThemeContext(theme || defaultTheme);
    }, [theme]);

    React.useEffect(() => {
        if (
            (typeof window.matchMedia === 'function' &&
                window.matchMedia('(prefers-color-scheme: dark)')?.matches) ||
            localStorage.getItem('prefersDarkMode') === 'true'
        ) {
            setThemeContext('dark');
        }
    }, []);

    return (
        <Component
            className={cx(`theme--${themeContext}`, className)}
            data-testid={testId}
            {...restProps}
        />
    );
};

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
