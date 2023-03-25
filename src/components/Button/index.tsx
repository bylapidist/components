import * as React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps, LevelType, SizeType } from '../types';
import Box from '../Box';
import Text from '../Text';
import styles from './Button.module.scss';

export interface ButtonProps {
    readonly level?: LevelType;
    readonly size?: SizeType;
    readonly icon?: IconProp;
    readonly block?: boolean;
    readonly disabled?: boolean;
}

const Button = ({
    className,
    as = 'button',
    testId = 'Button',
    level = 'primary',
    size = 'medium',
    block = false,
    icon,
    children,
    ...restProps
}: BaseProps & ButtonProps) => (
    <Text
        as={as}
        data-testid={testId}
        size={size}
        weight="medium"
        className={cx(styles.ButtonOuter, { [styles.block]: block }, className)}
        {...restProps}
    >
        <Box
            as="span"
            gutter={size}
            elevation="medium"
            data-testid={`${testId}Inner`}
            className={cx(styles.ButtonInner, styles[`level-${level}`])}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            {children}
        </Box>
    </Text>
);

Button.displayName = 'Button';
export default Button;
