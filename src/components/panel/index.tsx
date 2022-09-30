import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Elevated, ElevationHeight } from '../elevated';
import { Box, BoxProps } from '../box';
import { Spinner } from '../spinner';
import { Text } from '../text';
import { Heading, HeadingProps, HeadingPropType } from '../heading';
import { Tag, TagProps, TagPropType } from '../tag';
import {
    panelStyles,
    panelHeadingStyles,
    panelTagStyles,
    panelSpinnerStyles,
    panelActionBarStyles,
    panelLoadingStyles,
    panelBodyStyles
} from './styles';

export * from './styles';

export type PanelPropType = BoxProps;

export interface PanelProps {
    readonly loading?: boolean;
    readonly heading?: {
        readonly title: string;
        readonly props?: HeadingProps & HeadingPropType;
    };
    readonly elevation?: ElevationHeight;
    readonly tag?: {
        readonly title: string;
        readonly props?: Omit<Omit<TagProps & TagPropType, 'ref'>, 'theme'>;
    };
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    styles,
    loading,
    heading,
    elevation = '1',
    tag,
    children,
    ...restProps
}) => {
    return (
        <Elevated
            as={as}
            elevation={elevation}
            styles={mergeStyles(panelStyles(), {
                ...panelLoadingStyles({ loading }),
                ...styles
            })}
            {...restProps}
        >
            {loading && <Spinner styles={panelSpinnerStyles()} />}
            {!loading && (
                <>
                    {heading?.title && (
                        <Heading
                            styles={panelHeadingStyles()}
                            {...heading?.props}
                        >
                            {heading.title}
                        </Heading>
                    )}
                    {children && (
                        <Text styles={panelBodyStyles()}>{children}</Text>
                    )}
                    {tag && (
                        <Box styles={panelActionBarStyles()}>
                            {tag?.title && (
                                <Tag
                                    styles={panelTagStyles()}
                                    kind="primary"
                                    {...tag?.props}
                                >
                                    {tag.title}
                                </Tag>
                            )}
                        </Box>
                    )}
                </>
            )}
        </Elevated>
    );
};

export const Panel = withTheme(BasePanel);

Panel.displayName = 'Panel';
