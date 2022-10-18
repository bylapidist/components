import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import styles from './Elevated.module.css';

export type ElevationHeight = 0 | 1 | 2 | 3 | 4;

export interface ElevatedProps {
    readonly elevation: ElevationHeight;
}

const Elevated = ({
    className,
    as: Component = 'div',
    testId = 'Elevated',
    elevation,
    ...restProps
}: BaseProps & ElevatedProps) => (
    <Component
        className={cx(styles[`Elevated--elevation-${elevation}`], className)}
        data-testid={testId}
        {...restProps}
    />
);

Elevated.displayName = 'Elevated';
export default Elevated;
