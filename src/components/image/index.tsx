import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../theme-provider';

export interface ImageProps {
    /** The Image's id. */
    readonly id?: string;
    /** The Image's classname. */
    readonly className?: string;
    /** The Image's alt tag. */
    readonly alt?: string;
    /** The Image's src. */
    readonly src: string;
}

const ImageContainer: React.FC<ImageProps> = ({ id, className, src, alt }) => (
    <img id={id} className={className} src={src} alt={alt} />
);

export const Image: React.FC<ImageProps> = styled(ImageContainer)<ImageProps>`
    padding-bottom: ${defaultTheme.sizing.m};
    display: block;
    width: 100%;
`;

Image.displayName = 'Image';
