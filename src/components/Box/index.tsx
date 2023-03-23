import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import styles from './Box.module.css';

export type GutterType = 0 | 1 | 2 | 3 | 4;

export type ElevationType = 0 | 1 | 2 | 3 | 4;

export interface BoxProps {
    readonly gutter?: GutterType;
    readonly gutterX?: GutterType;
    readonly gutterY?: GutterType;
    readonly elevation?: ElevationType;
}

const Box = ({
    className,
    as: Component = 'div',
    testId = 'Box',
    gutter = 0,
    elevation = 0,
    gutterX,
    gutterY,
    ...restProps
}: BaseProps & BoxProps) => (
    <Component
        className={cx(
            styles[`gutter-${gutter}`],
            styles[`elevation-${elevation}`],
            {
                [styles[`gutterX-${gutterX}`]]: gutterX,
                [styles[`gutterY-${gutterY}`]]: gutterY
            },
            className
        )}
        data-testid={testId}
        {...restProps}
    />
);

Box.displayName = 'Box';
export default Box;
