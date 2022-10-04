import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseProps, Theme } from '../types';

export type ElevationHeight = 0 | 1 | 2 | 3 | 4;

export interface ElevatedProps extends React.HTMLProps<HTMLDivElement> {
    readonly elevation: ElevationHeight;
}

export type StyledElevatedProps = BaseProps & ElevatedProps & ThemeProps<Theme>;

export const StyledElevated = styled.div<StyledElevatedProps>`
    ${({ theme, elevation }) => `
        box-shadow: ${theme.boxShadows[elevation.toString()]};
    `}
`;

export const Elevated = (props: BaseProps & ElevatedProps) => (
    <StyledElevated
        {...props}
        data-testid={props.testId}
        as={props.as || 'div'}
    />
);

Elevated.displayName = 'Elevated';
