import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { BaseProps } from '../shared-types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextProps {}

export type StyledTextProps = BaseProps & TextProps & ThemeProps<Theme>;

export const StyledText = styled.div<StyledTextProps>`
    ${({ theme }) => `
        font-size: ${theme.fontSizes['3']};
        font-family: ${theme.fontFamilies.sans};
        line-height: ${theme.lineHeights.loose};
        font-weight: ${theme.fontWeights['400']};
        color: ${theme.colors.grey.dark};
        > p {
            margin-bottom: ${theme.sizes['2']};
        }
        > p:last-child {
            margin-bottom: 0;
        }
    `}
`;

export const Text: React.FC<BaseProps & TextProps> = (props) => (
    <StyledText {...props} data-testid={props.testId} as={props.as || 'div'} />
);

Text.displayName = 'Text';
