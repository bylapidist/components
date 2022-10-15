import * as React from 'react';
import cx from 'classnames';
import '@lapidist/styles/dist/css/light.css';
import type { AsPropType, BaseProps } from '../types';
import styles from './Heading.module.css';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
    readonly size?: HeadingSize;
}

const getHeadingElement = (as?: AsPropType, size: HeadingSize = 1) => {
    const sizeMap: { readonly [K: number]: AsPropType } = {
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
    children
}: BaseProps & HeadingProps) => {
    const Component = getHeadingElement(as, size);

    return (
        <Component
            className={cx(
                styles.Heading,
                styles[`Heading--${size || 1}`],
                className
            )}
            data-testid={testId}
        >
            {children}
        </Component>
    );
};

Heading.displayName = 'Heading';
export default Heading;
