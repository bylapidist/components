import React, { AriaAttributes, AriaRole, Key, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Styles, withStyles } from '@lapidist/styles';

export * from './styles';

export interface BoxProps extends PropsWithChildren<unknown> {
    readonly key?: Key;
    readonly styles?: Styles;
    readonly as?: keyof JSX.IntrinsicElements;
    readonly role?: AriaRole;
}

export const Box: React.FC<BoxProps> = styled.div<BoxProps & AriaAttributes>`
    ${({ theme, styles }): string => withStyles(theme, styles)}
`;

Box.displayName = 'Box';
