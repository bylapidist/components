import React, { ComponentProps, ElementType } from 'react';
import cx from 'classnames';
import type { BaseProps, SizeType } from '../types';
import styles from './Box.module.scss';
import Component, { CommonComponentProps } from '../Component';

export type BoxProps<T> = {
    elevation?: SizeType;
    stroke?: SizeType;
    gutter?: SizeType;
    gutterX?: SizeType;
    gutterY?: SizeType;
} & CommonComponentProps<T>;

const Box = <T extends ElementType = 'div'>({
    as,
    className,
    testId = 'Box',
    elevation = 'none',
    gutter = 'none',
    gutterX = 'none',
    gutterY = 'none',
    ...props
}: BoxProps<T>) => (
    <Component
        as={as}
        className={cx(
            styles.this,
            styles[`elevation-${elevation}`],
            styles[`gutter-${gutter}`],
            {
                [styles[`gutterX-${gutterX}`]]: gutterX,
                [styles[`gutterY-${gutterY}`]]: gutterY
            },
            className
        )}
        testId={testId}
        {...props}
    />
);

Box.displayName = 'Box';
export default Box;
