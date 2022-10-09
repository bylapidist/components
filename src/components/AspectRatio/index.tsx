import * as React from 'react';
import cx from 'classnames';
import { BaseProps } from '../types';
import styles from './AspectRatio.module.css';

export type Ratio = '1/1' | '1/2' | '3/2' | '4/3' | '16/9' | '9/16';

export interface AspectRatioProps extends React.HTMLProps<HTMLDivElement> {
    readonly ratio: Ratio;
}

const AspectRatio = ({
    as: Component = 'div',
    testId = 'AspectRatio',
    className,
    ratio,
    children
}: BaseProps & AspectRatioProps) => (
    <Component
        className={cx(
            styles.aspectratio,
            styles[`aspectratio-${ratio.replace('/', '-')}`],
            className
        )}
        data-testid={testId}
    >
        <div>{children}</div>
    </Component>
);

AspectRatio.displayName = 'AspectRatio';
export default AspectRatio;
