import React from 'react';
import { mergeStyles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { flexStyles } from './styles';

export * from './styles';

export type FlexPropType = BoxProps & React.HTMLProps<HTMLDivElement>;

export const Flex: React.FC<FlexPropType> = ({
    as = 'div',
    styles,
    ...restProps
}) => <Box as={as} styles={mergeStyles(flexStyles(), styles)} {...restProps} />;

Flex.displayName = 'Flex';
