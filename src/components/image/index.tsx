import React from 'react';
import styled from 'styled-components';
import { PropsWithIdAndClassname } from '../../utilities';

export interface ImageProps extends PropsWithIdAndClassname {
    readonly alt?: string;
    readonly src: string;
}

const ImageContainer: React.FC<ImageProps> = ({ id, className, src, alt }) => (
    <img id={id} className={className} src={src} alt={alt} />
);

export const Image: React.FC<ImageProps> = styled(ImageContainer)<ImageProps>`
    display: block;
    width: 100%;
`;

Image.displayName = 'Image';
