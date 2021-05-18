import { ColorGroup, getProperty, Styles } from '@lapidist/styles';
import { ButtonProps } from './index';

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

const buttonSizing = (small?: boolean) => ({
    paddingY: small ? '1' : '2',
    fontSize: small ? '2' : '3'
});

const darkGrey: ColorGroup = { group: 'grey', shade: 'dark' };

const lightBase: ColorGroup = { group: 'base', shade: 'light' };

const lightestGrey: ColorGroup = { group: 'grey', shade: 'lightest' };

const buttonColors = (dark: string, base: string, ghost?: boolean) => ({
    borderColor: dark,
    hoverBackgroundColor: dark,
    hoverTextColor: lightBase,
    backgroundColor: ghost ? 'transparent' : base,
    textColor: ghost ? darkGrey : lightBase,
    disabledHoverBackgroundColor: ghost ? lightestGrey : dark,
    disabledTextColor: ghost ? darkGrey : lightBase,
    disabledBackgroundColor: ghost ? lightestGrey : dark
});

const buttonVariants = ({
    kind,
    theme,
    small,
    ghost
}: ButtonProps): ButtonVariantStyles => {
    const { dark, base } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        ...buttonSizing(small),
        ...buttonColors(dark, base, ghost)
    };
};

const buttonBaseStyles: Styles = {
    borderWidth: '1',
    textAlign: 'center',
    margin: '2',
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
