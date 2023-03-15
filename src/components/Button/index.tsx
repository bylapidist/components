import * as React from 'react';
import cx from 'classnames';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps, KindType, SizeType } from '../types';
import Elevated from '../Elevated';
import Text from '../Text';
import styles from './Button.module.css';

export interface ButtonProps {
    readonly kind?: KindType;
    readonly variant?: SizeType;
    readonly loading?: boolean;
    readonly icon?: IconProp;
    readonly disabled?: boolean;
}

const Button = ({
    className,
    as = 'button',
    testId = 'Button',
    kind = 'primary',
    variant = 'medium',
    children,
    ...restProps
}: BaseProps & ButtonProps) => (
    <Elevated
        as={as}
        elevation={2}
        data-testid={testId}
        className={cx(styles.ButtonOuter, className)}
        {...restProps}
    >
        <Text
            as="span"
            data-testid={`${testId}Text`}
            className={cx(styles.ButtonInner, styles[kind], styles[variant])}
            variant={variant}
        >
            {children}
        </Text>
    </Elevated>
);

Button.displayName = 'Button';
export default Button;
