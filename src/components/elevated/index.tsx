import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { elevatedStyles } from './styles';

export * from './styles';

export type ElevatedPropType = BoxProps;

export type ElevationHeight = '0' | '1' | '2' | '3' | '4';

export interface ElevatedProps {
    readonly elevation?: ElevationHeight;
    readonly theme: Theme;
}

const BaseElevated: React.FC<ElevatedPropType & ElevatedProps> = ({
    as = 'div',
    styles,
    elevation = '0',
    theme,
    ...restProps
}) => (
    <Box
        as={as}
        styles={mergeStyles(elevatedStyles({ elevation, theme }), styles)}
        {...restProps}
    />
);

export const Elevated = withTheme(BaseElevated);

Elevated.displayName = 'Elevated';
