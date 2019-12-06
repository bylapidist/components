import React from 'react';
import styled from 'styled-components';

export interface CardProps {
    /** The Card's id. */
    readonly id?: string;
    /** The Card's classname. */
    readonly className?: string;
    /** The Card's children. */
    readonly children?: React.ReactNode;
}

const Card: React.FC<CardProps> = styled.div<CardProps>``;

export default Card;
