import * as React from 'react';
import cx from 'classnames';
import type { AsType, BaseProps } from '../types';
import Text from '../Text';
import styles from './Heading.module.css';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
    readonly size?: HeadingSize;
}

const getHeadingElement = (as?: AsType, size: HeadingSize = 1) => {
    const sizeMap: { readonly [K: number]: AsType } = {
        1: 'h1',
        2: 'h2',
        3: 'h3',
        4: 'h4',
        5: 'h5',
        6: 'h6'
    };
    return as || sizeMap[size];
};

const Heading = ({
    className,
    as,
    testId = 'Heading',
    size,
    ...restProps
}: BaseProps & HeadingProps) => (
    <Text
        as={getHeadingElement(as, size)}
        className={cx(
            styles.Heading,
            styles[`Heading--${size || 1}`],
            className
        )}
        data-testid={testId}
        {...restProps}
    />
);

Heading.displayName = 'Heading';
export default Heading;
