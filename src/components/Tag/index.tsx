import * as React from 'react';
import cx from 'classnames';
import type { BaseProps, LevelType } from '../types';
import Text from '../Text';
import styles from './Tag.module.css';

export interface TagProps {
    readonly kind?: LevelType;
    readonly namespace?: string;
}

const Tag = ({
    className,
    as = 'span',
    testId = 'Tag',
    kind = 'primary',
    namespace,
    children,
    ...restProps
}: BaseProps & TagProps) => (
    <Text
        as={as}
        className={cx(styles.Tag, styles[`Tag--${kind}`], className)}
        data-testid={testId}
        size="small"
        {...restProps}
    >
        {namespace && (
            <span className={styles['Tag--namespace']}>{namespace}</span>
        )}
        <span className={styles['Tag--children']}>{children}</span>
    </Text>
);

Tag.displayName = 'Tag';
export default Tag;
