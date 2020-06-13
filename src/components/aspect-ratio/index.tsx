import React from 'react';
import styled from 'styled-components';
import { PropsWithIdAndClassname, PropsWithStyle } from '../../utilities';
import { withStyles } from '../theme-provider/styles';

export type Ratio = { x: number | string; y: number | string };

export interface AspectRatioProps
    extends PropsWithIdAndClassname,
        PropsWithStyle {
    readonly ratio: string | Ratio;
}

const splitRatio = (ratioProp: string): Ratio => ({
    x: ratioProp.split('/')[0],
    y: ratioProp.split('/')[1] || 1
});

const ratio = (ratioProp: string | Ratio): Ratio =>
    Object.prototype.hasOwnProperty.call(ratioProp, 'x') &&
    Object.prototype.hasOwnProperty.call(ratioProp, 'y')
        ? (ratioProp as Ratio)
        : splitRatio(`${ratioProp}`);

const padding = (ratioProp: string | Ratio): string =>
    `padding-bottom: calc(100% / (${ratio(ratioProp).x} / ${
        ratio(ratioProp).y
    }))`;

export const AspectRatio: React.FC<AspectRatioProps> = styled.div<
    AspectRatioProps
>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    :before {
        ${({ ratio }): string => `${padding(ratio)};`};
        display: block;
        content: '';
    }

    > :first-child {
        position: absolute;
        object-fit: scale-down;
        object-position: 50% 50%;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    > img {
        height: auto;
    }

    ${({ theme, styles }): string => withStyles(theme, styles)}
`;

AspectRatio.displayName = 'AspectRatio';
