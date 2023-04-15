import React, { ElementType } from 'react';
import cx from 'classnames';
import type { CommonComponentCombinedProps, SizeType } from '../types';
import styles from './Box.module.scss';

export type BoxProps = {
    elevation?: SizeType;
    gutter?: SizeType;
    gutterX?: SizeType;
    gutterY?: SizeType;
};

const Box = <T extends ElementType = 'div'>({
    as,
    className,
    testId = 'Box',
    elevation = 'none',
    gutter = 'none',
    gutterX = 'none',
    gutterY = 'none',
    ...props
}: CommonComponentCombinedProps<T, BoxProps>) => {
    const PolymorphicComponent = as || 'div';
    return (
        <PolymorphicComponent
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
};

Box.displayName = 'Box';
export default Box;
