import * as React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps, LevelType, SizeType } from '../types';
import Box from '../Box';
import Text from '../Text';
import styles from './Button.module.css';

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
    <Box
        as={as}
        elevation={2}
        data-testid={testId}
        className={cx(styles.ButtonOuter, { [styles.block]: block }, className)}
        {...restProps}
    >
        <Text
            as="span"
            data-testid={`${testId}Text`}
            className={cx(styles.ButtonInner, styles[level], styles[size])}
            size={size}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            {children}
        </Text>
    </Box>
);

Button.displayName = 'Button';
export default Button;
