import * as React from 'react';
import cx from 'classnames';
import '@lapidist/styles/dist/css/light.css';
import type { BaseProps } from '../types';
import styles from './AspectRatio.module.css';

export type Ratio = '1/1' | '1/2' | '3/2' | '4/3' | '16/9' | '9/16';

export interface AspectRatioProps extends React.HTMLProps<HTMLDivElement> {
    readonly ratio: Ratio;
}

const AspectRatio = ({
    className,
    as: Component = 'div',
    testId = 'AspectRatio',
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
