import * as React from 'react';
import { mergeStyles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { imageStyles } from './styles';

export * from './styles';

export type ImagePropType = BoxProps & React.HTMLProps<HTMLImageElement>;

export const Image: React.FC<ImagePropType> = ({
    as = 'img',
    styles,
    ...restProps
}) => (
    <Box as={as} styles={mergeStyles(imageStyles(), styles)} {...restProps} />
);

Image.displayName = 'Image';
