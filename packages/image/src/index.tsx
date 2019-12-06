import React from 'react';
import styled from 'styled-components';

export interface ImageProps {
    /** The Image's id. */
    readonly id?: string;
    /** The Image's classname. */
    readonly className?: string;
    /** The Image's children. */
    readonly children?: React.ReactNode;
}

const Image: React.FC<ImageProps> = styled.div<ImageProps>``;

export default Image;
