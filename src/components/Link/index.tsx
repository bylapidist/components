import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps, SizeType } from '../types';
import Box from '../Box';
import Text, { TextProps } from '../Text';
import styles from './Link.module.scss';

export interface LinkProps
    extends Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>,
        TextProps {
    readonly icon?: IconProp;
    readonly size?: SizeType;
}

const Link = ({
    className,
    as = 'a',
    testId = 'Link',
    size = 'medium',
    icon,
    children,
    ...restProps
}: BaseProps & LinkProps) => (
    <Text
        as={as}
        className={cx(styles.this, className)}
        data-testid={testId}
        size={size}
        {...restProps}
    >
        <Box as="span" data-testid={`${testId}-inner`} className={styles.inner}>
            {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
            {children}
        </Box>
    </Text>
);

Link.displayName = 'Link';
export default Link;
