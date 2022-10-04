import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { StyledText } from '../text';
import { BaseProps, KindType, Theme } from '../types';

export interface TagProps {
    readonly kind: KindType;
    readonly namespace?: string;
}

export type StyledTagProps = BaseProps & TagProps & ThemeProps<Theme>;

export const StyledTag = styled(StyledText)<StyledTagProps>`
    text-align: center;
    border-style: solid;
    border-width: 0;
    ${({ theme, kind }) => `
        padding: ${theme.sizes['1']} 0;
        color: ${theme.colors.base.light};
        font-size: ${theme.fontSizes['1']};
        font-weight: ${theme.fontWeights['500']};
        border-radius: ${theme.borderRadii['3']};
        background-color: ${theme.colors[kind].dark};
    `}
`;

export const StyledNamespace = styled.span<StyledTagProps>`
    ${({ theme }) => `
        color: ${theme.colors.base.light};
        background-color: ${theme.colors.grey.dark};
        padding: ${theme.sizes['1']} ${theme.sizes['2']};
    `}
`;

export const StyledChildren = styled.span<StyledTagProps>`
    ${({ theme }) => `
        padding: ${theme.sizes['1']} ${theme.sizes['2']};
    `}
`;

export const Tag = (props: BaseProps & TagProps) => (
    <StyledTag {...props} data-testid={props.testId} as={props.as || 'span'}>
        {props.namespace && (
            <StyledNamespace {...props} as="span">
                {props.namespace}
            </StyledNamespace>
        )}
        {props.children && (
            <StyledChildren {...props} as="span">
                {props.children}
            </StyledChildren>
        )}
    </StyledTag>
);

Tag.displayName = 'Tag';
