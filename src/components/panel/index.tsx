import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { Spinner } from '../spinner';
import { panelStyles } from './styles';

export * from './styles';

export type PanelPropType = BoxProps;

export interface PanelProps {
    readonly kind: string;
    readonly loading?: boolean;
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    styles,
    kind,
    loading,
    theme,
    ...restProps
}) =>
    loading ? (
        <Box
            as={as}
            styles={mergeStyles(panelStyles({ kind, theme, loading }), {
                ...styles,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            })}
            {...restProps}
        >
            <Spinner styles={{ sizeWidth: 16 }} />
        </Box>
    ) : (
        <Box
            as={as}
            styles={mergeStyles(panelStyles({ kind, theme, loading }), styles)}
            {...restProps}
        />
    );

export const Panel = withTheme(BasePanel);

Panel.displayName = 'Panel';
