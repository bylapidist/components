import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { AsPropType, BaseProps } from '../shared-types';

export interface HeadingProps {
    readonly size?: HeadingSize;
}

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export type StyledHeadingProps = BaseProps & HeadingProps & ThemeProps<Theme>;

type HeadingConfigItem = {
    readonly as: AsPropType;
    readonly fontSize: string;
    readonly fontWeight: string;
};

type HeadingConfig = { readonly [K: number]: HeadingConfigItem };

const headingConfig: HeadingConfig = {
    1: { as: 'h1', fontSize: '7', fontWeight: '700' },
    2: { as: 'h2', fontSize: '6', fontWeight: '500' },
    3: { as: 'h3', fontSize: '5', fontWeight: '500' },
    4: { as: 'h4', fontSize: '4', fontWeight: '500' },
    5: { as: 'h5', fontSize: '3', fontWeight: '500' },
    6: { as: 'h6', fontSize: '3', fontWeight: '500' }
};

const getConfig = (size: HeadingSize = 1): HeadingConfigItem =>
    headingConfig[size];

const StyledHeading = styled.h1<StyledHeadingProps>`
    ${({ theme, size }) => `
        font-size: ${theme.fontSizes[getConfig(size).fontSize]};
        font-family: ${theme.fontFamilies.sans};
        line-height: ${theme.lineHeights.tight};
        font-weight: ${theme.fontWeights[getConfig(size).fontWeight]};
        color: ${theme.colors.grey.dark};
    `}
`;

export const Heading: React.FC<BaseProps & HeadingProps> = (props) => (
    <StyledHeading
        {...props}
        data-testid={props.testId}
        as={props.as || getConfig(props.size).as}
    />
);

Heading.displayName = 'Heading';
