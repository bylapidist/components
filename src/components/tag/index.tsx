import React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Text } from '../text';
import { Box, BoxProps } from '../box';
import { tagStyles, tagChildrenStyles, tagNamespaceStyles } from './styles';

export * from './styles';

export type TagPropType = BoxProps &
    React.HTMLAttributes<HTMLSpanElement> &
    React.HTMLProps<HTMLSpanElement>;

export interface TagProps {
    readonly kind: string;
    readonly theme: Theme;
    readonly namespace?: string;
    readonly href?: string;
}

interface InnerTagProps {
    readonly namespace?: string;
    readonly children?: React.ReactNode;
}

const InnerTag: React.FC<InnerTagProps> = ({ namespace, children }) => (
    <>
        {namespace && (
            <Box as="span" styles={tagNamespaceStyles()}>
                {namespace}
            </Box>
        )}

        <Box as="span" styles={tagChildrenStyles()}>
            {children}
        </Box>
    </>
);

const BaseTag: React.FC<TagPropType & TagProps> = ({
    as = 'span',
    styles,
    kind,
    theme,
    children,
    namespace,
    ...restProps
}) => (
    <Text
        as={as}
        styles={mergeStyles(tagStyles({ kind, theme }), styles)}
        {...restProps}
    >
        <InnerTag namespace={namespace}>{children}</InnerTag>
    </Text>
);

export const Tag = withTheme(BaseTag);

Tag.displayName = 'Tag';
