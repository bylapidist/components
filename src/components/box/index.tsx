import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PropsWithStyles, withStyles } from '../../theme';

export interface BoxProps extends PropsWithStyles, PropsWithChildren<{}> {}

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
    ${({ theme, styles }): string => withStyles(theme, styles)}
`;

Box.displayName = 'Box';
