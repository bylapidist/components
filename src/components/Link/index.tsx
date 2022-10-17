import * as React from 'react';
import cx from 'classnames';
import '@lapidist/styles/dist/css/light.css';
import type { BaseProps } from '../types';
import Text from '../Text';
import styles from './Link.module.css';

export type LinkProps = React.HTMLProps<HTMLAnchorElement>;

const Link = ({
    className,
    as = 'a',
    testId = 'Link',
    ...restProps
}: BaseProps & LinkProps) => (
    <Text
        as={as}
        className={cx(styles.Link, className)}
        data-testid={testId}
        {...restProps}
    />
);

Link.displayName = 'Link';
export default Link;
