import * as React from 'react';
import cx from 'classnames';
import '@lapidist/styles/dist/css/light.css';
import type { BaseProps } from '../types';
import styles from './Box.module.css';

export type Gutter = 0 | 1 | 2 | 3 | 4;

export interface BoxProps {
    readonly gutter?: Gutter;
    readonly gutterX?: Gutter;
    readonly gutterY?: Gutter;
}

const Box = ({
    className,
    as: Component = 'div',
    testId = 'Box',
    gutter = 0,
    gutterX,
    gutterY,
    ...restProps
}: BaseProps & BoxProps) => (
    <Component
        className={cx(
            styles.Box,
            styles[`Box--gutter-${gutter}`],
            {
                [styles[`Box--gutterX-${gutterX}`]]: gutterX,
                [styles[`Box--gutterY-${gutterY}`]]: gutterY
            },
            className
        )}
        data-testid={testId}
        {...restProps}
    />
);

Box.displayName = 'Box';
export default Box;
