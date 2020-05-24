import React, { PropsWithChildren } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { defaultTheme } from '../theme-provider';
import {
    defaultBorderRadius,
    defaultBoxShadow,
    PropsWithIdAndClassname
} from '../../utilities';

export interface PanelProps
    extends PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    /** The Panel's elevated state. Gives a box shadow. */
    readonly elevated?: boolean;
    /** The Panel's rounded state. Gives a rounded border. */
    readonly rounded?: boolean;
    /** The Panel's outline state. Gives an outline border. */
    readonly outline?: boolean;
    /** The Panel's color. */
    readonly color?: string;
}

export const Panel: React.FC<PanelProps> = styled.div<PanelProps>`
    ${({ elevated = false }): FlattenSimpleInterpolation | string =>
        elevated ? defaultBoxShadow() : ''};
    ${({ rounded = false }): string => (rounded ? defaultBorderRadius() : '')};
    ${({ outline = false, color = defaultTheme.colors.greys.base }): string =>
        outline
            ? `background: transparent; border: ${defaultTheme.sizing.xxxs} ${color}`
            : `background: ${color}; border: ${defaultTheme.sizing.xxxs} transparent`};
`;

Panel.displayName = 'Panel';
