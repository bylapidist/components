import React from 'react';
import styled from 'styled-components';
import { PropsWithIdAndClassname } from '../../utilities';
import { getFontSize, getFontWeight } from '../theme-provider/theme';
import { Text, TextProps } from '../text';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends TextProps, PropsWithIdAndClassname {
    readonly size?: HeadingSize;
}

interface HeadingMapper {
    [level: number]: React.FC<HeadingProps>;
}

const H1: React.FC<HeadingProps> = styled.h1`
    ${(props): string => `font-size: ${getFontSize(props.theme, 9)}`};
`;

const H2: React.FC<HeadingProps> = styled.h2`
    ${(props): string => `font-size: ${getFontSize(props.theme, 8)}`};
`;

const H3: React.FC<HeadingProps> = styled.h3`
    ${(props): string => `font-size: ${getFontSize(props.theme, 7)}`};
`;

const H4: React.FC<HeadingProps> = styled.h4`
    ${(props): string => `font-size: ${getFontSize(props.theme, 6)}`};
`;

const H5: React.FC<HeadingProps> = styled.h5`
    ${(props): string => `font-size: ${getFontSize(props.theme, 5)}`};
`;

const H6: React.FC<HeadingProps> = styled.h6`
    ${(props): string => `font-size: ${getFontSize(props.theme, 4)}`};
`;

const headings: HeadingMapper = {
    1: H1,
    2: H2,
    3: H3,
    4: H4,
    5: H5,
    6: H6
};

const HeadingBySize: React.FC<HeadingProps> = ({
    id,
    className,
    children,
    size = 1
}) => {
    const HeadingToUse = headings[size];
    return (
        <HeadingToUse id={id} className={className}>
            {children}
        </HeadingToUse>
    );
};

const BaseHeading: React.FC<HeadingProps> = styled(HeadingBySize)<HeadingProps>`
    ${(props): string =>
        props.fontWeight
            ? `font-weight: ${getFontWeight(props.theme, props.fontWeight)}`
            : `font-weight: ${getFontWeight(props.theme, 'medium')}`};

    ${(props): string =>
        props.fontSize
            ? `font-size: ${getFontSize(props.theme, props.fontSize)}`
            : ``};

    display: block;
    width: 100%;
`;

export const Heading: React.FC<HeadingProps> = ({
    children,
    size,
    ...restProps
}) => (
    <Text {...restProps}>
        <BaseHeading
            size={size}
            fontSize={restProps.fontSize}
            fontWeight={restProps.fontWeight}
        >
            {children}
        </BaseHeading>
    </Text>
);

Heading.displayName = 'Heading';
