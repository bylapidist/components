import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';

export const Image: React.FC<BoxProps & React.HTMLProps<HTMLImageElement>> = ({
    as = 'img',
    styles,
    ...restProps
}) => <Box as={as} styles={deepMerge({}, styles)} {...restProps} />;

Image.displayName = 'Image';
