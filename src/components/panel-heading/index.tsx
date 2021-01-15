import React from 'react';
import deepMerge from 'lodash.merge';
import { withTheme } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { BoxProps } from '../box';
import { panelHeadingStyles } from './styles';
import { Heading, HeadingSize } from '../heading';

export * from './styles';

export type PanelHeadingPropType = BoxProps;

export interface PanelHeadingProps {
    readonly kind: string;
    readonly theme: Theme;
    readonly size?: HeadingSize;
}

const BasePanelHeading: React.FC<PanelHeadingPropType & PanelHeadingProps> = ({
    as,
    styles,
    kind,
    theme,
    children,
    size,
    ...restProps
}) => (
    <Heading
        as={as}
        size={size}
        styles={deepMerge(panelHeadingStyles({ kind, theme }), styles)}
        {...restProps}
    >
        {children}
    </Heading>
);

export const PanelHeading = withTheme(BasePanelHeading);

PanelHeading.displayName = 'PanelHeading';
