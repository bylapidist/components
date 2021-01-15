import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';
import { flexStyles } from './styles';

export * from './styles';

export type FlexPropType = BoxProps & React.HTMLProps<HTMLDivElement>;

export const Flex: React.FC<FlexPropType> = ({
    as = 'div',
    styles,
    ...restProps
}) => <Box as={as} styles={deepMerge(flexStyles(), styles)} {...restProps} />;

Flex.displayName = 'Flex';
