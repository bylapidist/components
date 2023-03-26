/// <reference types="react" />
import { Themes } from '@lapidist/styles';
import type { BaseProps } from '../types';
export interface ThemeProviderProps {
    readonly theme?: Themes;
}
declare const ThemeProvider: {
    ({ className, as: Component, testId, theme, ...restProps }: BaseProps & ThemeProviderProps): JSX.Element;
    displayName: string;
};
export default ThemeProvider;
