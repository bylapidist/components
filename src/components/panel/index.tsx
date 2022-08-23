import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { Spinner } from '../spinner';
import { Heading, HeadingSize } from '../heading';
import { panelStyles } from './styles';

export * from './styles';

export type PanelPropType = BoxProps;

export interface PanelProps {
    readonly heading?: string;
    readonly loading?: boolean;
    readonly headingSize?: HeadingSize;
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    styles,
    heading,
    loading,
    headingSize,
    children,
    ...restProps
}) =>
    loading ? (
        <Box
            as={as}
            styles={mergeStyles(panelStyles(), {
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
        <Box as={as} styles={mergeStyles(panelStyles(), styles)} {...restProps}>
            {heading && (
                <Heading
                    size={headingSize || 3}
                    styles={{ marginBottom: '4', fontWeight: 700 }}
                >
                    {heading}
                </Heading>
            )}
            {children}
        </Box>
    );

export const Panel = withTheme(BasePanel);

Panel.displayName = 'Panel';
