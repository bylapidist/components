import React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Text } from '../text';
import { BoxProps } from '../box';
import { TagStyles } from './styles';

export * from './styles';

export type TagPropType = BoxProps &
    React.HTMLAttributes<HTMLSpanElement> &
    React.HTMLProps<HTMLSpanElement>;

export interface TagProps {
    readonly kind: string;
    readonly theme: Theme;
}

const BaseTag: React.FC<TagPropType & TagProps> = ({
    as = 'span',
    styles,
    kind,
    theme,
    ...restProps
}) => (
    <Text
        as={as}
        styles={mergeStyles(TagStyles({ kind, theme }), styles)}
        {...restProps}
    />
);

export const Tag = withTheme(BaseTag);

Tag.displayName = 'Tag';
