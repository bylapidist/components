import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Elevated, ElevationHeight } from '../elevated';
import { BoxProps } from '../box';
import { Spinner } from '../spinner';
import { Heading, HeadingProps, HeadingPropType } from '../heading';
import { panelStyles } from './styles';

export * from './styles';

export type PanelPropType = BoxProps;

export interface PanelProps {
    readonly loading?: boolean;
    readonly heading?: {
        title: string;
        props?: HeadingProps & HeadingPropType;
    };
    readonly elevation?: ElevationHeight;
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    styles,
    loading,
    heading,
    elevation = '1',
    children,
    ...restProps
}) =>
    loading ? (
        <Elevated
            as={as}
            elevation={elevation}
            styles={mergeStyles(panelStyles(), {
                ...styles,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            })}
            {...restProps}
        >
            <Spinner styles={{ sizeWidth: 16 }} />
        </Elevated>
    ) : (
        <Elevated
            as={as}
            elevation={elevation}
            styles={mergeStyles(panelStyles(), styles)}
            {...restProps}
        >
            {heading?.title && (
                <Heading
                    styles={{ marginBottom: '4', fontWeight: 700 }}
                    {...heading?.props}
                >
                    {heading.title}
                </Heading>
            )}
            {children}
        </Elevated>
    );

export const Panel = withTheme(BasePanel);

Panel.displayName = 'Panel';
