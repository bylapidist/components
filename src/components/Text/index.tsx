import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import styles from './Text.module.css';

export interface TextProps {
    readonly small: boolean;
}

const Text = ({
    className,
    as: Component = 'div',
    testId = 'Text',
    small,
    ...restProps
}: BaseProps & TextProps) => (
    <Component
        className={
        cx(
            styles.Text,
            { [styles[`Text--small`]]: small },
            className
        )}
        data-testid={testId}
        {...restProps}
    />
);

Text.displayName = 'Text';
export default Text;
