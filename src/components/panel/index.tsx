import React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { panelStyles } from './styles';

export * from './styles';

export type PanelPropType = BoxProps;

export interface PanelProps {
    readonly kind: string;
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    styles,
    kind,
    theme,
    ...restProps
}) => (
    <Box
        as={as}
        styles={mergeStyles(panelStyles({ kind, theme }), styles)}
        {...restProps}
    />
);

export const Panel = withTheme(BasePanel);

Panel.displayName = 'Panel';
