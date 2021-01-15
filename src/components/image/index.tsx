import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';
import { imageStyles } from './styles';

export * from './styles';

export type ImagePropType = BoxProps & React.HTMLProps<HTMLImageElement>;

export const Image: React.FC<ImagePropType> = ({
    as = 'img',
    styles,
    ...restProps
}) => <Box as={as} styles={deepMerge(imageStyles(), styles)} {...restProps} />;

Image.displayName = 'Image';
