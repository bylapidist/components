import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import styles from './Text.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextProps {}

const Text = ({
    className,
    as: Component = 'div',
    testId = 'Text',
    ...restProps
}: BaseProps & TextProps) => (
    <Component
        className={cx(styles.Text, className)}
        data-testid={testId}
        {...restProps}
    />
);

Text.displayName = 'Text';
export default Text;
