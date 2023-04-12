import React from 'react';
import cx from 'classnames';
import type { BaseProps, SizeType } from '../../types';
import styles from './Text.module.scss';

export type TextFamilyType = 'sans' | 'serif' | 'mono';

export type TextWeightType = 'regular' | 'medium' | 'bold';

export interface TextProps {
    readonly size?: SizeType;
    readonly family?: TextFamilyType;
    readonly weight?: TextWeightType;
}

const Text = ({
    className,
    as: Component = 'div',
    testId = 'Text',
    size = 'medium',
    family = 'sans',
    weight = 'regular',
    ...restProps
}: BaseProps & TextProps) => (
    <Component
        className={cx(
            styles.this,
            styles[`size-${size}`],
            styles[`family-${family}`],
            styles[`weight-${weight}`],
            className
        )}
        data-testid={testId}
        {...restProps}
    />
);

Text.displayName = 'Text';
export default Text;
