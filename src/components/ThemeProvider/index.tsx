import React from 'react';
import cx from 'classnames';
import '@lapidist/styles/dist/index.css';
import type { BaseProps } from '../types';

export interface ThemeProviderProps {
    readonly theme?: 'light' | 'dark';
}

const ThemeProvider = ({
    className,
    as: Component = 'div',
    testId = 'ThemeProvider',
    theme = 'light',
    ...restProps
}: BaseProps & ThemeProviderProps) => (
    <Component
        className={cx(`theme-${theme}`, className)}
        data-testid={testId}
        {...restProps}
    />
);

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
