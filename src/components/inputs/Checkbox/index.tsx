import React, { useId, useMemo, useState } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareCheck,
    faSquare,
    faSquareMinus
} from '@fortawesome/free-solid-svg-icons';
import type { BaseProps } from '../../types';
import Text from '../../typography/Text';
import styles from './Checkbox.module.scss';
import Box from '../../primitives/Box';

export interface CheckboxProps {
    readonly checked?: boolean;
    readonly indeterminate?: boolean;
    readonly disabled?: boolean;
    readonly label: string;
    readonly description?: string;
    readonly onClick?: () => void;
}

const Checkbox = ({
    className,
    as = 'label',
    testId = 'Checkbox',
    onClick = () => null,
    indeterminate = false,
    checked = false,
    disabled = false,
    label,
    description,
    ...restProps
}: BaseProps & CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);
    const inputId = useId();
    const describedById = useId();

    const handleClick = () => {
        if (isIndeterminate) {
            setIsIndeterminate(false);
        } else {
            setIsChecked(!isChecked);
        }
        onClick();
    };

    const icon = useMemo(() => {
        if (isChecked) return faSquareCheck;
        if (isIndeterminate) return faSquareMinus;
        return faSquare;
    }, [isChecked, isIndeterminate]);

    return (
        <Box
            as={as}
            data-testid={testId}
            className={cx(
                styles.this,
                {
                    [styles.disabled]: disabled,
                    [styles.checked]: isChecked,
                    [styles.indeterminate]: isIndeterminate
                },
                className
            )}
            gutter="medium"
            elevation={isChecked ? 'small' : 'none'}
            htmlFor={inputId}
            {...restProps}
        >
            <input
                className={styles.checkbox}
                id={inputId}
                aria-describedby={describedById}
                onClick={handleClick}
                disabled={disabled}
                checked={isChecked}
                type="checkbox"
            />
            <Text as="span" className={styles.icon}>
                <FontAwesomeIcon className={styles.icon} icon={icon} />
            </Text>
            <Box id={describedById} className={styles.label}>
                <Text>{label}</Text>
                {description && (
                    <Text as="div" size="small">
                        {description}
                    </Text>
                )}
            </Box>
        </Box>
    );
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
