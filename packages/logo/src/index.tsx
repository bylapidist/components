import React from 'react';
import styled from 'styled-components';

export interface LogoProps {
    /** The Logo's id. */
    readonly id?: string;
    /** The Logo's classname. */
    readonly className?: string;
    /** The Logo's children. */
    readonly children?: React.ReactNode;
}

const Logo: React.FC<LogoProps> = styled.div<LogoProps>``;

export default Logo;
