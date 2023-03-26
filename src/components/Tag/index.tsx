import * as React from 'react';
import cx from 'classnames';
import type { BaseProps, LevelType } from '../types';
import Text from '../Text';
import Box from '../Box';
import styles from './Tag.module.scss';

export interface TagProps {
    readonly level?: LevelType;
    readonly namespace?: string;
}

const Tag = ({
    className,
    as = 'span',
    testId = 'Tag',
    level = 'primary',
    children,
    ...restProps
}: BaseProps & TagProps) => (
    <Text
        as={as}
        className={cx(styles.this, styles[`level-${level}`], className)}
        data-testid={testId}
        size="small"
        weight="medium"
        {...restProps}
    >
        <Box
            className={styles.children}
            gutterX="medium"
            gutterY="small"
            elevation="small"
        >
            {children}
        </Box>
    </Text>
);

Tag.displayName = 'Tag';
export default Tag;
