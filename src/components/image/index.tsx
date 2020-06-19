import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';

export type ImagePropType = BoxProps & React.HTMLProps<HTMLImageElement>;

export const Image: React.FC<ImagePropType> = ({
    as = 'img',
    styles,
    ...restProps
}) => <Box as={as} styles={deepMerge({}, styles)} {...restProps} />;

Image.displayName = 'Image';
