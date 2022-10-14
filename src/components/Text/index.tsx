import * as React from 'react';
import cx from 'classnames';
import '@lapidist/styles/dist/css/light.css';
import type { BaseProps } from '../types';
import styles from './Text.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextProps {}

const Text = ({
    className,
    as: Component = 'div',
    testId = 'Text',
    children
}: BaseProps & TextProps) => (
    <Component className={cx(styles.text, className)} data-testid={testId}>
        {children}
    </Component>
);

Text.displayName = 'Text';
export default Text;
