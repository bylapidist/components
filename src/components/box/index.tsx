import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PropsWithIdAndClassname, PropsWithStyle } from '../../utilities';
import { withStyles } from '../theme-provider/styles';

export interface BoxProps
    extends PropsWithIdAndClassname,
        PropsWithStyle,
        PropsWithChildren<{}> {}

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
    ${({ theme, styles }): string => withStyles(theme, styles)}
`;

Box.displayName = 'Box';
