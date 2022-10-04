import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseProps, Theme } from '../types';
import { StyledText } from '../text';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {}

export type StyledLinkProps = BaseProps & LinkProps & ThemeProps<Theme>;

export const StyledLink = styled(StyledText)<StyledLinkProps>`
    ${({ theme }) => `
        border-bottom: ${theme.borderWidths['px']} solid ${theme.colors.primary.light};
        color: ${theme.colors.primary.dark};

        :hover {
            border-bottom: ${theme.borderWidths['px']} solid ${theme.colors.primary.dark};
        }
    `}
`;

export const Link = (props: BaseProps & LinkProps) => (
    <StyledLink {...props} data-testid={props.testId} as={props.as || 'a'} />
);

Link.displayName = 'Link';
