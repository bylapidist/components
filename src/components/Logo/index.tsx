import * as React from 'react';
import cx from 'classnames';
import type { BaseProps } from '../types';
import Box from '../Box';
import styles from './Logo.module.scss';

export type LogoAnimationType = 'fade' | 'slide';
export interface LogoProps {
    readonly animation?: LogoAnimationType;
}

const Logo = ({
    className,
    as = 'div',
    testId = 'Logo',
    animation = 'fade',
    ...restProps
}: BaseProps & LogoProps) => (
    <Box
        as={as}
        className={cx(styles.Logo, styles[`animation-${animation}`], className)}
        data-testid={testId}
        {...restProps}
    >
        <svg preserveAspectRatio="none" viewBox="0 0 64 64">
            <polygon className={cx(styles.A)} points="0,0 0,32 32,32" />
            <polygon className={cx(styles.B)} points="0,32 0,64 32,64" />
            <polygon className={cx(styles.C)} points="32,0 32,64 64,32" />
        </svg>
    </Box>
);

Logo.displayName = 'Logo';
export default Logo;
