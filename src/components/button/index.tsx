import * as React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { KindType, Theme } from '../types';
import { Elevated } from '../elevated';
import { Box, BoxProps } from '../box';
// import { buttonSpinnerStyles } from './styles';
import { Spinner } from '../spinner';

// export * from './styles';

export type ButtonPropType = BoxProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.HTMLProps<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.HTMLProps<HTMLAnchorElement>;

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
    readonly kind: KindType;
    readonly theme: Theme;
    readonly variant?: ButtonSize;
    readonly loading?: boolean;
    readonly icon?: IconProp;
}

const BaseButton: React.FC<ButtonPropType & ButtonProps> = ({
    as,
    // kind,
    // theme,
    // variant,
    loading,
    icon,
    children,
    ...restProps
}) => {
    return (
        <Elevated
            {...restProps}
            as={as || 'button'}
            // styles={mergeStyles(buttonStyles({ kind, theme, variant }), styles)}
            elevation={1}
        >
            <Box
            // styles={{
            //     display: 'flex',
            //     alignItems: 'center',
            //     opacity: loading ? '0' : '1'
            // }}
            >
                {icon && (
                    <FontAwesomeIcon
                        style={{ marginRight: '0.5rem' }}
                        icon={icon}
                    />
                )}
                {children}
            </Box>
            {loading && (
                <Spinner
                // styles={buttonSpinnerStyles({ kind, theme, variant })}
                />
            )}
        </Elevated>
    );
};

export const Button = withTheme(BaseButton);

Button.displayName = 'Button';
