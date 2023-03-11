import * as React from 'react';
import cx from 'classnames';
import type {BaseProps, SizeType} from '../types';
import styles from './Text.module.css';

export type TextSize = SizeType;
export interface TextProps {
    readonly variant?: TextSize;
}

const Text = ({
    className,
    as: Component = 'div',
    testId = 'Text',
    variant = 'medium',
    ...restProps
}: BaseProps & TextProps) => (
    <Component
        className={
        cx(
            styles.Text,
            styles[variant],
            className
        )}
        data-testid={testId}
        {...restProps}
    />
);

Text.displayName = 'Text';
export default Text;
