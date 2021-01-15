import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';
import { textStyles } from './styles';

export * from './styles';

export type TextPropType = BoxProps;

export const Text: React.FC<TextPropType> = ({
    as = 'div',
    styles,
    ...restProps
}) => <Box as={as} styles={deepMerge(textStyles(), styles)} {...restProps} />;

Text.displayName = 'Text';
