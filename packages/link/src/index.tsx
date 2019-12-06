import React from 'react';
import styled from 'styled-components';

export interface LinkProps {
    /** The Link's id. */
    readonly id?: string;
    /** The Link's classname. */
    readonly className?: string;
    /** The Link's children. */
    readonly children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = styled.div<LinkProps>``;

export default Link;
