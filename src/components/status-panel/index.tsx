import React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Text } from '../text';
import { Box, BoxProps } from '../box';
import { PanelHeading } from '../panel-heading';
import { statusPanelStyles } from './styles';

export * from './styles';

export type StatusPanelPropType = BoxProps;

export interface StatusPanelProps {
    readonly kind: string;
    readonly theme: Theme;
    readonly heading?: string;
    readonly value?: number;
    readonly symbol?: string;
    readonly symbolPrefixed?: boolean;
    readonly large?: boolean;
}

const BaseStatusPanel: React.FC<StatusPanelPropType & StatusPanelProps> = ({
    as = 'div',
    styles,
    kind,
    theme,
    heading = '',
    value = 0,
    symbol = '£',
    symbolPrefixed = true,
    large = false,
    ...restProps
}) => (
    <Box
        as={as}
        styles={mergeStyles(statusPanelStyles({ kind, theme }), styles)}
        {...restProps}
    >
        <PanelHeading kind={kind}>{heading}</PanelHeading>
        <Box>
            <Text
                styles={{
                    fontSize: '7',
                    lineHeight: 'relaxed',
                    breakpoints: {
                        lg: {
                            fontSize: large ? '9' : '8'
                        }
                    }
                }}
            >
                {symbolPrefixed && symbol}
                {value.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}
                {!symbolPrefixed && symbol}
            </Text>
        </Box>
    </Box>
);

export const StatusPanel = withTheme(BaseStatusPanel);

StatusPanel.displayName = 'StatusPanel';
