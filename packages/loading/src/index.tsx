import React from 'react';
import styled from 'styled-components';

export interface LoadingProps {
    /** The Loading's id. */
    readonly id?: string;
    /** The Loading's classname. */
    readonly className?: string;
    /** The Loading's children. */
    readonly children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = styled.div<LoadingProps>``;

export default Loading;
