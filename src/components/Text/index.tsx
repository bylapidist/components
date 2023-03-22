import * as React from 'react';
import cx from 'classnames';
import type { BaseProps, SizeType } from '../types';
import styles from './Text.module.css';

export type TextVariantType = 'sans' | 'serif' | 'mono';
export interface TextProps {
    readonly size?: SizeType;
    readonly variant?: TextVariantType;
}

const Text = ({
    className,
    as: Component = 'div',
    testId = 'Text',
    size = 'medium',
    variant = 'sans',
    ...restProps
}: BaseProps & TextProps) => (
    <Component
        className={cx(styles.Text, styles[size], styles[variant], className)}
        data-testid={testId}
        {...restProps}
    />
);

Text.displayName = 'Text';
export default Text;
