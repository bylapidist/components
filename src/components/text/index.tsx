import React from 'react';
import { mergeStyles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { textStyles } from './styles';

export * from './styles';

export type TextPropType = BoxProps;

export const Text: React.FC<TextPropType> = ({
    as = 'div',
    styles,
    ...restProps
}) => <Box as={as} styles={mergeStyles(textStyles(), styles)} {...restProps} />;

Text.displayName = 'Text';
