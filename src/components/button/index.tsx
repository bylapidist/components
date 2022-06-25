import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { Text } from '../text';
import { BoxProps } from '../box';
import { buttonStyles } from './styles';

export * from './styles';

export type ButtonPropType = BoxProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.HTMLProps<HTMLButtonElement>;

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
    readonly kind: string;
    readonly theme: Theme;
    readonly variant?: ButtonSize;
    readonly ghost?: boolean;
}

const BaseButton: React.FC<ButtonPropType & ButtonProps> = ({
    as = 'button',
    styles,
    kind,
    theme,
    variant,
    ghost,
    ...restProps
}) => (
    <Text
        as={as}
        styles={mergeStyles(
            buttonStyles({ kind, theme, variant, ghost }),
            styles
        )}
        {...restProps}
    />
);

export const Button = withTheme(BaseButton);

Button.displayName = 'Button';
