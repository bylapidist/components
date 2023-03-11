import * as React from 'react';
import cx from 'classnames';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type {BaseProps, KindType, SizeType} from '../types';
import Elevated from '../Elevated';
import styles from './Button.module.css';

export type ButtonSize = SizeType;

export interface ButtonProps {
    readonly kind?: KindType;
    readonly variant?: ButtonSize;
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
        className={cx(
            styles.Button,
            styles[`Button--${kind}`],
            styles[`Button--${variant}`],
            className
        )}
        {...restProps}
    >
        {children}
    </Elevated>
);

Button.displayName = 'Button';
export default Button;
