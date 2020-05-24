import React from 'react';
import styled from 'styled-components';
import { PropsWithIdAndClassname } from '../../utilities';

export type Ratio = { x: number | string; y: number | string };

export interface AspectRatioProps extends PropsWithIdAndClassname {
    /** The AspectRatio's ratio. */
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

    :before {
        ${({ ratio }): string => `${padding(ratio)};`};
        display: block;
        content: '';
    }

    > :first-child {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    > img {
        height: auto;
    }
`;

AspectRatio.displayName = 'AspectRatio';
