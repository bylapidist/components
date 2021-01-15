import React from 'react';
import deepMerge from 'lodash.merge';
import { withTheme } from 'styled-components';
import { getProperty, Styles, Theme } from '@lapidist/styles';
import { Box, BoxProps } from '../box';

export type PanelPropType = BoxProps;

export interface PanelProps {
    readonly kind: string;
    readonly theme: Theme;
}

export const panelStyles = ({ theme, kind }: PanelProps): Styles => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        borderWidth: '1',
        borderStyle: 'solid',
        boxShadow: '1',
        paddingX: '4',
        paddingY: '2',
        borderColor: dark
    };
};

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    styles,
    kind,
    theme,
    ...restProps
}) => (
    <Box
        as={as}
        styles={deepMerge(panelStyles({ kind, theme }), styles)}
        {...restProps}
    />
);

export const Panel = withTheme(BasePanel);

Panel.displayName = 'Panel';
