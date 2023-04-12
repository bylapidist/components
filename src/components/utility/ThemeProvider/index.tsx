import React from 'react';
import cx from 'classnames';
import { Themes } from '@lapidist/styles';
import '@lapidist/styles/dist/css/light.css';
import '@lapidist/styles/dist/css/dark.css';
import type { BaseProps } from '../../types';

export interface ThemeProviderProps {
    readonly theme?: Themes;
}

const ThemeProvider = ({
    className,
    as: Component = 'div',
    testId = 'ThemeProvider',
    theme = 'light',
    ...restProps
}: BaseProps & ThemeProviderProps) => (
    <Component
        className={cx(`theme--${theme}`, className)}
        data-testid={testId}
        {...restProps}
    />
);

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
