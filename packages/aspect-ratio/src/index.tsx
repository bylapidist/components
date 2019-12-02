import React from 'react';
import styled from 'styled-components';

export type Ratio = { x: number | string; y: number | string };

export interface AspectRatioProps {
    /** The AspectRatio's id. */
    readonly id?: string;
    /** The AspectRatio's classname. */
    readonly className?: string;
    /** The AspectRatio's ratio. */
    readonly ratio: string | Ratio;
}

const splitRatio = (ratioProp: string): Ratio => ({
    x: ratioProp.split('/')[0],
    y: ratioProp.split('/')[1]
});

const ratio = (ratioProp: string | Ratio): Ratio =>
    Object.prototype.hasOwnProperty.call(ratioProp, 'x') &&
    Object.prototype.hasOwnProperty.call(ratioProp, 'y')
        ? (ratioProp as Ratio)
        : splitRatio(`${ratioProp}`);

const width = (ratioProp: string | Ratio): string =>
    `width: calc(100% * ${ratio(ratioProp).x})`;

const padding = (ratioProp: string | Ratio): string =>
    `padding-bottom: calc(100% / ${ratio(ratioProp).y})`;

const AspectRatio: React.FC<AspectRatioProps> = styled.div<AspectRatioProps>`
    ${({ ratio }): string => `${width(ratio)}; ${padding(ratio)};`};
    height: 0;
`;

export default AspectRatio;
