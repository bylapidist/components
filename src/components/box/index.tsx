import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseProps, Theme } from '../types';

export type Gutter = 0 | 1 | 2 | 3 | 4;

export interface BoxProps extends React.PropsWithChildren {
    readonly gutter?: Gutter;
    readonly gutterX?: Gutter;
    readonly gutterY?: Gutter;
}

export type StyledBoxProps = BaseProps & BoxProps & ThemeProps<Theme>;

export const StyledBox = styled.div<StyledBoxProps>`
    ${({ theme, gutter = 0, gutterX = 0, gutterY = 0 }) => `
        padding: ${theme.sizes[gutter.toString()]};
        padding-top: ${
            theme.sizes[gutterY ? gutterY.toString() : gutter.toString()]
        };
        padding-bottom: ${
            theme.sizes[gutterY ? gutterY.toString() : gutter.toString()]
        };
        padding-left: ${
            theme.sizes[gutterX ? gutterX.toString() : gutter.toString()]
        };
        padding-right: ${
            theme.sizes[gutterX ? gutterX.toString() : gutterY.toString()]
        };
    `}
`;

export const Box = (props: BaseProps & BoxProps) => (
    <StyledBox {...props} data-testid={props.testId} as={props.as || 'div'} />
);

Box.displayName = 'Box';
