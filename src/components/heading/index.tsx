import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { AsPropType, BaseProps } from '../shared-types';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
    readonly size?: HeadingSize;
}

export type StyledHeadingProps = BaseProps & HeadingProps & ThemeProps<Theme>;

type HeadingConfigItem = { as: AsPropType; fontSize: string };
type HeadingConfig = { [K: number]: HeadingConfigItem };

const headingConfig: HeadingConfig = {
    1: { as: 'h1', fontSize: '7' },
    2: { as: 'h2', fontSize: '6' },
    3: { as: 'h3', fontSize: '5' },
    4: { as: 'h4', fontSize: '4' },
    5: { as: 'h5', fontSize: '3' },
    6: { as: 'h6', fontSize: '3' }
};

const getConfig = (size: HeadingSize = 1): HeadingConfigItem =>
    headingConfig[size];

const StyledHeading = styled.h1<StyledHeadingProps>`
    ${({ theme, size }) => `
        font-size: ${theme.fontSizes[getConfig(size).fontSize]};
        font-family: ${theme.fontFamilies.sans};
        line-height: ${theme.lineHeights.tight};
    `}
`;

export const Heading: React.FC<BaseProps & HeadingProps> = (props) => (
    <StyledHeading
        data-testid={props.testId}
        as={props.as || getConfig(props.size).as}
        {...props}
    />
);

Heading.displayName = 'Heading';
