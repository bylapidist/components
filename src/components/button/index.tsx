import React from 'react';
import deepMerge from 'lodash.merge';
import { ColorGroup, getProperty, Styles, Theme } from '@lapidist/styles';
import { Text } from '../text';
import { BoxProps } from '../box';
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

interface ButtonVariantStyles {
    borderColor: ColorGroup | string;
    backgroundColor: ColorGroup | string;
    paddingY: string;
    fontSize: string;
    textColor: ColorGroup | string;
    hoverBackgroundColor: ColorGroup | string;
    hoverTextColor: ColorGroup | string;
    disabledHoverBackgroundColor: ColorGroup | string;
    disabledTextColor: ColorGroup | string;
    disabledBackgroundColor: ColorGroup | string;
}

const colorByKind = (kind: string, theme: Theme): { [K: string]: string } =>
    getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

const sizing = (small?: boolean) => ({
    paddingY: small ? '1' : '2',
    fontSize: small ? '2' : '3'
});

const darkGrey: ColorGroup = { group: 'grey', shade: 'dark' };

const lightBase: ColorGroup = { group: 'base', shade: 'light' };

const lightestGrey: ColorGroup = { group: 'grey', shade: 'lightest' };

const buttonVariants = (props: ButtonProps): ButtonVariantStyles => {
    const { kind, theme, small, ghost } = props;
    const { dark, base } = colorByKind(kind, theme);

    const colors = (ghost?: boolean) => ({
        borderColor: dark,
        hoverBackgroundColor: dark,
        hoverTextColor: lightBase,
        backgroundColor: ghost ? 'transparent' : base,
        textColor: ghost ? darkGrey : lightBase,
        disabledHoverBackgroundColor: ghost ? lightestGrey : dark,
        disabledTextColor: ghost ? darkGrey : lightBase,
        disabledBackgroundColor: ghost ? lightestGrey : dark
    });

    return {
        ...sizing(small),
        ...colors(ghost)
    };
};

const buttonBaseStyles: Styles = {
    borderWidth: '1',
    textAlign: 'center',
    paddingX: '4',
    borderRadius: '2',
    borderStyle: 'solid'
};

const buttonVariantStyles = ({
    borderColor,
    backgroundColor,
    textColor,
    paddingY,
    fontSize,
    hoverBackgroundColor,
    hoverTextColor,
    disabledHoverBackgroundColor,
    disabledTextColor,
    disabledBackgroundColor
}: ButtonVariantStyles): Styles => ({
    ...buttonBaseStyles,
    borderColor,
    backgroundColor,
    textColor,
    paddingY,
    fontSize,
    pseudo: {
        ':hover': {
            cursor: 'pointer',
            backgroundColor: hoverBackgroundColor,
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
});

export const buttonStyles = (props: ButtonProps): Styles =>
    buttonVariantStyles(buttonVariants(props));

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
