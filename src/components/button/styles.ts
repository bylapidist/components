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

const scale = (variant = 'medium', start = 1): string => {
    switch (variant) {
        case 'small':
            return (start - 1).toString(10);
        case 'medium':
            return start.toString(10);
        case 'large':
        default:
            return (start + 1).toString(10);
    }
};

const buttonSizing = (variant: string) => ({
    paddingY: scale(variant, 1),
    fontSize: scale(variant, 2)
});

const primaryBase: ColorGroup = { group: 'primary', shade: 'base' };

const darkBase: ColorGroup = { group: 'primary', shade: 'dark' };

const darkGrey: ColorGroup = { group: 'grey', shade: 'dark' };

const baseGrey: ColorGroup = { group: 'grey', shade: 'base' };

const lightBase: ColorGroup = { group: 'base', shade: 'light' };

const lightGrey: ColorGroup = { group: 'grey', shade: 'light' };

const lightestGrey: ColorGroup = { group: 'grey', shade: 'lightest' };

const buttonColors = (dark: string, base: string, kind: string) => {
    const isPrimary = kind === 'primary';
    const isSecondary = kind === 'secondary';
    const isTertiary = kind === 'tertiary';

    const textColor = (): ColorGroup | string => {
        if (isPrimary) return lightBase;
        if (isSecondary) return primaryBase;
        if (isTertiary) return baseGrey;
        return base;
    };

    const hoverTextColor = (): ColorGroup | string => {
        if (isPrimary) return lightBase;
        if (isSecondary) return darkBase;
        if (isTertiary) return darkGrey;
        return dark;
    };

    return {
        borderColor: isPrimary ? base : lightGrey,
        backgroundColor: isPrimary ? base : 'transparent',
        textColor: textColor(),
        hoverBackgroundColor: isPrimary ? dark : lightestGrey,
        hoverTextColor: hoverTextColor(),
        disabledHoverBackgroundColor: isPrimary ? dark : lightestGrey,
        disabledTextColor: isPrimary ? lightBase : darkGrey,
        disabledBackgroundColor: isPrimary ? dark : lightestGrey
    };
};

const buttonVariants = ({
    kind,
    theme,
    variant
}: ButtonProps): ButtonVariantStyles => {
    const { dark, base } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        ...buttonSizing(variant || 'large'),
        ...buttonColors(dark, base, kind)
    };
};

const buttonBaseStyles: Styles = {
    display: 'inline-block',
    position: 'relative',
    borderWidth: '1',
    boxShadow: '1',
    textAlign: 'center',
    paddingX: '4',
    borderRadius: '2',
    borderStyle: 'solid',
    fontWeight: '500'
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

export const buttonSpinnerStyles = ({ variant }: ButtonProps): Styles => ({
    width: 'full',
    position: 'absolute',
    top: 'calc(50% - 0.375rem)',
    left: '0',
    right: '0',
    paddingX: scale(variant, 2)
});
