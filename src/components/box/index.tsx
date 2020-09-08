import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Styles, withStyles } from '@lapidist/styles';

export interface BoxProps extends PropsWithChildren<unknown> {
    readonly styles?: Styles;
    readonly as?: keyof JSX.IntrinsicElements;
}

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
    ${({ theme, styles }): string => withStyles(theme, styles)}
`;

Box.displayName = 'Box';
