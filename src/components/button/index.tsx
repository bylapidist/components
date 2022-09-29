import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Text } from '../text';
import { Elevated } from '../elevated';
import { Box, BoxProps } from '../box';
import { buttonSpinnerStyles, buttonStyles } from './styles';
import { Spinner } from '../spinner';

export * from './styles';

export type ButtonPropType = BoxProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.HTMLProps<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.HTMLProps<HTMLAnchorElement>;

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonKind = 'primary' | 'secondary' | 'tertiary' | 'danger';

export interface ButtonProps {
    readonly kind: ButtonKind;
    readonly theme: Theme;
    readonly variant?: ButtonSize;
    readonly loading?: boolean;
    readonly icon?: IconProp;
}

const BaseButton: React.FC<ButtonPropType & ButtonProps> = ({
    as = 'button',
    styles,
    kind,
    theme,
    variant,
    loading,
    icon,
    children,
    ...restProps
}) => {
    return (
        <Elevated
            as={(props) => <Text {...props} as={as} />}
            styles={mergeStyles(buttonStyles({ kind, theme, variant }), styles)}
            elevation="1"
            {...restProps}
        >
            <Box
                styles={{
                    display: 'flex',
                    alignItems: 'center',
                    opacity: loading ? '0' : '1'
                }}
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
                    styles={buttonSpinnerStyles({ kind, theme, variant })}
                />
            )}
        </Elevated>
    );
};

export const Button = withTheme(BaseButton);

Button.displayName = 'Button';
