import React from 'react';
import deepMerge from 'lodash.merge';
import { Styles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';

export type FlexPropType = BoxProps & React.HTMLProps<HTMLDivElement>;

export const flexStyles = (): Styles => ({
    display: 'flex'
});

export const Flex: React.FC<FlexPropType> = ({
    as = 'div',
    styles,
    ...restProps
}) => <Box as={as} styles={deepMerge(flexStyles(), styles)} {...restProps} />;

Flex.displayName = 'Flex';
