import React from 'react';
import deepMerge from 'lodash.merge';
import { Styles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';

export type ImagePropType = BoxProps & React.HTMLProps<HTMLImageElement>;

export const imageStyles = (): Styles => ({});

export const Image: React.FC<ImagePropType> = ({
    as = 'img',
    styles,
    ...restProps
}) => <Box as={as} styles={deepMerge(imageStyles(), styles)} {...restProps} />;

Image.displayName = 'Image';
