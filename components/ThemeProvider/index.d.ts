import type { BaseProps } from '../types';
export interface ThemeProviderProps {
    readonly theme?: 'light' | 'dark';
}
declare const ThemeProvider: {
    ({ className, as: Component, testId, theme, ...restProps }: BaseProps & ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default ThemeProvider;
