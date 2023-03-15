import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import Text, { TextProps } from '../Text';
import styles from './Link.module.css';

export interface LinkProps
    extends React.HTMLProps<HTMLAnchorElement>,
        TextProps {}

const Link = ({
    className,
    as = 'a',
    testId = 'Link',
    variant = 'medium',
    ...restProps
}: BaseProps & LinkProps) => (
    <Text
        as={as}
        className={cx(styles.Link, className)}
        data-testid={testId}
        variant={variant}
        {...restProps}
    />
);

Link.displayName = 'Link';
export default Link;
