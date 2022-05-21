import React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { BoxProps } from '../box';
import { panelHeadingStyles, innerLinkStyles } from './styles';
import { Heading, HeadingSize } from '../heading';
import { Link } from '../link';

export * from './styles';

export type PanelHeadingPropType = BoxProps;

export interface PanelHeadingProps {
    readonly kind: string;
    readonly theme: Theme;
    readonly size?: HeadingSize;
    readonly href?: string;
    readonly target?: string;
    readonly rel?: string;
}

const BasePanelHeading: React.FC<PanelHeadingPropType & PanelHeadingProps> = ({
    as,
    styles,
    kind,
    theme,
    children,
    size,
    href,
    target,
    rel,
    ...restProps
}) => (
    <Heading
        as={as}
        size={size}
        styles={mergeStyles(panelHeadingStyles({ kind, theme }), styles)}
        {...restProps}
    >
        {href ? (
            <Link
                styles={innerLinkStyles({ kind, theme })}
                target={target}
                rel={rel}
                href={href}
            >
                {children}
            </Link>
        ) : (
            children
        )}
    </Heading>
);

export const PanelHeading = withTheme(BasePanelHeading);

PanelHeading.displayName = 'PanelHeading';
