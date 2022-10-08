import * as React from 'react';
import { BaseProps } from '../types';
import styles from './Elevated.module.css';

export type ElevationHeight = 0 | 1 | 2 | 3 | 4;

export interface ElevatedProps extends React.HTMLProps<HTMLDivElement> {
    readonly elevation: ElevationHeight;
}

const Elevated = ({
    as: Component = 'div',
    testId = 'Elevated',
    elevation = 0,
    children
}: BaseProps & ElevatedProps) => (
    <Component
        className={styles[`elevation-${elevation}`]}
        data-testid={testId}
    >
        {children}
    </Component>
);

Elevated.displayName = 'Elevated';
export default Elevated;
