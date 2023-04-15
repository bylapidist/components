import React, { ElementType } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type {
    CommonComponentCombinedProps,
    LevelType,
    SizeType
} from '../types';
import Box from '../Box';
import Text from '../Text';
import styles from './Button.module.scss';

export type ButtonProps = {
    level?: LevelType;
    size?: SizeType;
    icon?: IconProp;
    block?: boolean;
    disabled?: boolean;
};

const Button = <T extends ElementType = 'button'>({
    className,
    as,
    testId = 'Button',
    level = 'primary',
    size = 'medium',
    block = false,
    icon,
    children,
    ...restProps
}: CommonComponentCombinedProps<T, ButtonProps>) => {
    const PolymorphicComponent = as || 'button';
    return (
        <PolymorphicComponent
            as={as}
            data-testid={testId}
            size={size}
            weight="medium"
            className={cx(styles.this, { [styles.block]: block }, className)}
            {...restProps}
        >
            <Text
                as={Box}
                gutter={size}
                elevation="medium"
                data-testid={`${testId}-inner`}
                className={cx(styles.inner, styles[`level-${level}`])}
            >
                {icon && <FontAwesomeIcon icon={icon} />}
                {children}
            </Text>
        </PolymorphicComponent>
    );
};

Button.displayName = 'Button';
export default Button;
