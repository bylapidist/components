import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { BaseProps } from '../shared-types';

// export interface TextProps {}

export type StyledTextProps = BaseProps & ThemeProps<Theme>;

const StyledText = styled.div<StyledTextProps>`
    ${({ theme }) => `
        font-size: ${theme.fontSizes['3']};
        font-family: ${theme.fontFamilies.sans};
        line-height: ${theme.lineHeights.loose};
        font-weight: ${theme.fontWeights['400']};
        color: ${theme.colors.grey.dark};
        padding: ${theme.sizes['2']};
        p {
            padding-bottom: ${theme.sizes['2']};
        }
        p:last-child {
            padding-bottom: 0;
        }
    `}
`;

export const Text: React.FC<BaseProps> = (props) => (
    <StyledText {...props} data-testid={props.testId} as={props.as || 'div'} />
);

Text.displayName = 'Text';
