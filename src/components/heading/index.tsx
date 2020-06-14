import React from 'react';
import styled, {
    AnyStyledComponent,
    StyledComponent,
    ThemedStyledFunction
} from 'styled-components';
import { PropsWithIdAndClassname } from '../../utilities';
import { getFontSize, getFontWeight, NumberOrString } from '../../theme';
import { Text, TextProps } from '../text';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends TextProps, PropsWithIdAndClassname {
    readonly size?: HeadingSize;
}

interface HeadingMapper {
    [level: number]: StyledComponent<AnyStyledComponent, {}, HeadingProps>;
}

export const createHeading = (
    heading: ThemedStyledFunction<AnyStyledComponent, {}>,
    size: NumberOrString
): StyledComponent<AnyStyledComponent, {}, HeadingProps> => heading<
    HeadingProps
>`
    ${(props): string => `font-size: ${getFontSize(props.theme, size)}`};
`;

const headings: HeadingMapper = {
    1: createHeading(styled.h1, 9),
    2: createHeading(styled.h2, 8),
    3: createHeading(styled.h3, 7),
    4: createHeading(styled.h4, 6),
    5: createHeading(styled.h5, 5),
    6: createHeading(styled.h6, 4)
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
