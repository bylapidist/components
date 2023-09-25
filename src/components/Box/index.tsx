import React from 'react';
import cx from 'classnames';
import type { BaseProps, SizeType } from '../types';
import styles from './Box.module.scss';

export interface BoxProps {
    readonly elevation?: SizeType;
    readonly gutter?: SizeType;
    readonly gutterX?: SizeType;
    readonly gutterY?: SizeType;
}

const Box = ({
    className: customClassName,
    as: Component = 'div',
    testId = 'Box',
    elevation = 'none',
    gutter = 'none',
    gutterX = 'none',
    gutterY = 'none',
    ...restProps
}: BaseProps & BoxProps) => (
    <Component
        className={cx(
            styles.this,
            styles[`elevation-${elevation}`],
            styles[`gutter-${gutter}`],
            {
                [styles[`gutterX-${gutterX}`]]: gutterX,
                [styles[`gutterY-${gutterY}`]]: gutterY
            },
            customClassName // Renamed className to customClassName
        )}
        data-testid={testId}
        {...restProps}
    />
);

Box.displayName = 'Box';
export default Box;
