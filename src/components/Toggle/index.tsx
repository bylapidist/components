import React, { useId, useState } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import type { BaseProps, LevelType, SizeType } from '../types';
import Text from '../Text';
import styles from './Toggle.module.scss';
import Box from '../Box';

export interface ToggleProps {
    readonly level?: LevelType;
    readonly size?: SizeType;
    readonly onToggle?: () => void;
    readonly disabled?: boolean;
}

const Toggle = ({
    className,
    as = 'label',
    testId = 'Toggle',
    level = 'primary',
    size = 'medium',
    onToggle = () => null,
    disabled,
    children,
    ...restProps
}: BaseProps & ToggleProps) => {
    const [toggled, setToggled] = useState(false);
    const inputId = useId();
    const describedById = useId();

    const handleToggle = () => {
        setToggled(!toggled);
        onToggle();
    };

    return (
        <Text
            as={as}
            data-testid={testId}
            size={size}
            weight="medium"
            className={cx(
                styles.this,
                { [styles.disabled]: disabled },
                className
            )}
            htmlFor={inputId}
            {...restProps}
        >
            <Box
                as="span"
                gutter={size}
                elevation={toggled ? 'large' : 'medium'}
                data-testid={`${testId}-inner`}
                className={cx(styles.inner, styles[`level-${level}`], {
                    [styles.toggled]: toggled
                })}
            >
                <input
                    className={styles.checkbox}
                    id={inputId}
                    aria-describedby={describedById}
                    onClick={handleToggle}
                    disabled={disabled}
                    type="checkbox"
                />
                <FontAwesomeIcon
                    icon={toggled ? faCircleCheck : faCircleXmark}
                />
                <span id={describedById}>{children}</span>
            </Box>
        </Text>
    );
};

Toggle.displayName = 'Toggle';
export default Toggle;
