import React from 'react';
import deepMerge from 'lodash.merge';
import { Text } from '../text';
import { BoxProps } from '../box';
import { getProperty, Styles, Theme } from '@lapidist/styles';
import { withTheme } from 'styled-components';

export type ButtonPropType = BoxProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.HTMLProps<HTMLButtonElement>;

export interface ButtonProps {
    readonly kind: string;
    readonly theme: Theme;
    readonly small?: boolean;
    readonly ghost?: boolean;
}

const colorByKind = (kind: string, theme: Theme): { [K: string]: string } =>
    getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

export const buttonStyles = (props: ButtonProps): Styles => {
    const { kind, theme, small, ghost } = props;
    const { dark, base } = colorByKind(kind, theme);

    const backgroundColor = ghost ? 'transparent' : base;
    const paddingY = small ? '1' : '2';
    const fontSize = small ? '2' : '3';
    const textColor = ghost
        ? { group: 'grey', shade: 'dark' }
        : { group: 'base', shade: 'light' };
    const hoverTextColor = { group: 'base', shade: 'light' };
    const disabledHoverBackgroundColor = ghost
        ? { group: 'grey', shade: 'lightest' }
        : dark;
    const disabledTextColor = ghost
        ? { group: 'grey', shade: 'dark' }
        : { group: 'base', shade: 'light' };
    const disabledBackgroundColor = ghost
        ? { group: 'grey', shade: 'lightest' }
        : dark;

    return {
        borderWidth: '1',
        textAlign: 'center',
        paddingX: '4',
        borderRadius: '2',
        borderStyle: 'solid',
        borderColor: dark,
        backgroundColor,
        textColor,
        paddingY,
        fontSize,
        pseudo: {
            ':hover': {
                cursor: 'pointer',
                backgroundColor: dark,
                textColor: hoverTextColor
            },
            ':hover:disabled': {
                cursor: 'not-allowed',
                backgroundColor: disabledHoverBackgroundColor
            },
            ':disabled': {
                opacity: '0.7',
                textColor: disabledTextColor,
                backgroundColor: disabledBackgroundColor
            }
        }
    };
};

const BaseButton: React.FC<ButtonPropType & ButtonProps> = ({
    as = 'button',
    styles,
    kind,
    theme,
    small,
    ghost,
    ...restProps
}) => {
    return (
        <Text
            as={as}
            styles={deepMerge(
                buttonStyles({ kind, theme, small, ghost }),
                styles
            )}
            {...restProps}
        />
    );
};

export const Button = withTheme(BaseButton);

Button.displayName = 'Button';
