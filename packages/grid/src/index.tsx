import React from 'react';
import styled from 'styled-components';

export interface GridProps {
    /** The Grid's id. */
    readonly id?: string;
    /** The Grid's classname. */
    readonly className?: string;
    /** The Grid's children. */
    readonly children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = styled.div<GridProps>``;

export default Grid;
