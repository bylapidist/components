import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import Text, { TextProps } from '../Text';
import styles from './Link.module.scss';

export interface LinkProps
    extends Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>,
        TextProps {}

const Link = ({
    className,
    as = 'a',
    testId = 'Link',
    size = 'medium',
    ...restProps
}: BaseProps & LinkProps) => (
    <Text
        as={as}
        className={cx(styles.this, className)}
        data-testid={testId}
        size={size}
        {...restProps}
    />
);

Link.displayName = 'Link';
export default Link;
