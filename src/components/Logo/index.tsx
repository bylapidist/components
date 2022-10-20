import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import Box from '../Box';
import styles from './Logo.module.css';

export interface LogoProps {
    readonly animated?: boolean;
    readonly thinking?: boolean;
}

const Logo = ({
    className,
    as = 'div',
    testId = 'Logo',
    animated = false,
    thinking = false,
    ...restProps
}: BaseProps & LogoProps) => (
    <Box
        as={as}
        className={cx(styles.Logo, className)}
        data-testid={testId}
        {...restProps}
    >
        <svg preserveAspectRatio="none" viewBox="0 0 64 64">
            <polygon
                className={cx(styles['Logo--bUp'], {
                    [styles['Logo--bUp-animated']]: animated,
                    [styles['Logo--thinking']]: thinking
                })}
                points="0,0 0,32 32,32"
            />
            <polygon
                className={cx(styles['Logo--bDown'], {
                    [styles['Logo--bDown-animated']]: animated,
                    [styles['Logo--thinking']]: thinking
                })}
                points="0,32 0,64 32,64"
            />
            <polygon
                className={cx(styles['Logo--d'], {
                    [styles['Logo--d-animated']]: animated,
                    [styles['Logo--thinking']]: thinking
                })}
                points="32,0 32,64 64,32"
            />
        </svg>
    </Box>
);

Logo.displayName = 'Logo';
export default Logo;
