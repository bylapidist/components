import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';

export interface ImageProps extends BoxProps {
    readonly alt?: string;
    readonly src: string;
}

export const Image: React.FC<ImageProps> = ({
    id,
    className,
    src,
    alt,
    styles,
    ...restProps
}) => (
    <Box styles={deepMerge(styles, {})} {...restProps}>
        <img id={id} className={className} src={src} alt={alt} />
    </Box>
);

Image.displayName = 'Image';
