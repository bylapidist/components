import React from 'react';
import deepMerge from 'lodash.merge';
import { Text } from '../text';
import { BoxProps } from '../box';
import { headings, headingStyles } from './styles';

export * from './styles';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingPropType = BoxProps & React.HTMLProps<HTMLHeadingElement>;

export interface HeadingProps {
    readonly size?: HeadingSize;
}

export const Heading: React.FC<HeadingProps & HeadingPropType> = ({
    as,
    styles,
    size = 1,
    ...restProps
}) => (
    <Text
        as={as || headings[size].as}
        styles={deepMerge(headingStyles({ size }), styles)}
        {...restProps}
    />
);

Heading.displayName = 'Heading';
