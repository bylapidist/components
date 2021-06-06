import React from 'react';
import { mergeStyles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { aspectRatioStyles } from './styles';

export type Ratio = { x: number | string; y: number | string };

export type AspectRatioPropType = BoxProps & React.HTMLProps<HTMLDivElement>;

export interface AspectRatioProps {
    readonly ratio?: string | Ratio;
}

export const AspectRatio: React.FC<AspectRatioProps & AspectRatioPropType> = ({
    as = 'div',
    styles,
    ratio,
    ...restProps
}) => (
    <Box
        as={as}
        styles={mergeStyles(aspectRatioStyles({ ratio }), styles)}
        {...restProps}
    />
);

AspectRatio.displayName = 'AspectRatio';
