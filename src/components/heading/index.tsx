import React from 'react';
import deepMerge from 'lodash.merge';
import { Styles } from '@lapidist/styles';
import { Text } from '../text';
import { BoxProps } from '../box';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingPropType = BoxProps & React.HTMLProps<HTMLHeadingElement>;

export interface HeadingProps {
    readonly size?: HeadingSize;
}

interface HeadingMapper {
    readonly [level: string]: {
        readonly as: keyof JSX.IntrinsicElements;
        readonly fontSize: string;
    };
}

const headings: HeadingMapper = {
    1: { as: 'h1', fontSize: '9' },
    2: { as: 'h2', fontSize: '8' },
    3: { as: 'h3', fontSize: '7' },
    4: { as: 'h4', fontSize: '6' },
    5: { as: 'h5', fontSize: '5' },
    6: { as: 'h6', fontSize: '4' }
};

export const headingStyles = (props: HeadingProps): Styles => ({
    fontSize: headings[props.size || '1'].fontSize,
    lineHeight: 'tight'
});

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
