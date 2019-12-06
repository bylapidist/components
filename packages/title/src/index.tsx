import React from 'react';
import styled from 'styled-components';

export interface TitleProps {
    /** The Title's id. */
    readonly id?: string;
    /** The Title's classname. */
    readonly className?: string;
    /** The Title's children. */
    readonly children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = styled.div<TitleProps>``;

export default Title;
