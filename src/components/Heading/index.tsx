import * as React from 'react';
import cx from 'classnames';
import type { AsType, BaseProps, SizeType } from '../types';
import Text, { TextFamilyType, TextWeightType } from '../Text';
import styles from './Heading.module.css';

export interface HeadingProps {
    readonly size?: SizeType;
    readonly weight?: TextWeightType;
    readonly family?: TextFamilyType;
}

const getHeadingElement = (size: SizeType, as?: AsType) => {
    const sizeMap: { readonly [K: string]: AsType } = {
        large: 'h1',
        medium: 'h2',
        small: 'h3'
    };
    return as || sizeMap[size];
};

const Heading = ({
    className,
    as,
    testId = 'Heading',
    size = 'large',
    weight,
    family = 'sans',
    ...restProps
}: BaseProps & HeadingProps) => (
    <Text
        as={getHeadingElement(size, as)}
        className={cx(styles.Heading, styles[`size-${size}`], className)}
        weight={weight}
        family={family}
        data-testid={testId}
        {...restProps}
    />
);

Heading.displayName = 'Heading';
export default Heading;
