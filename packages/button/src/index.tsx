import React from 'react';
import styled from 'styled-components';
import {
    defaultBorderRadius,
    defaultBoxShadow,
    defaultTransition,
    focus,
    fontFamilyRegular,
    fontSizeMedium,
    relative
} from '@lapidist/design-tokens';
import { defaultTheme, ColorGroup } from '@lapidist/theme-provider';

export interface ButtonProps {
    /** The Button's id. */
    readonly id?: string;
    /** The Button's classname. */
    readonly className?: string;
    /** The Button's onClick callback function. */
    readonly handleClick?: (event: React.MouseEvent) => void;
    /** The Button's text. */
    readonly text: string;
    /** The Button's disabled state. Fades the Button out. */
    readonly disabled?: boolean;
    /** The Button's block state. Makes the Button full width. */
    readonly block?: boolean;
    /** The Button's outline state. Makes the Button have a border with no background. */
    readonly outline?: boolean;
    /** The Button's small state. Makes the button small. */
    readonly small?: boolean;
    /** The Button's loading state. Makes the button disabled and display loading icon. */
    readonly loading?: boolean;
}

const buttonStyles = (
    colorGroup: ColorGroup,
    block = false,
    outline = false,
    small = false,
    loading = false
): string => `
    ${relative()};
    display: ${block ? 'flex' : 'inline-flex'};
    width: ${block ? '100%' : 'auto'};
    min-width: calc(${defaultTheme.sizing.xxl} * 2);
    height: ${small ? defaultTheme.sizing.xxl : defaultTheme.sizing.xxxl};
    color: ${
        outline
            ? colorGroup.base
            : loading
            ? 'transparent'
            : defaultTheme.colors.greys.lightest
    };
    background-color: ${outline || loading ? 'transparent' : colorGroup.base};
    border: ${defaultTheme.sizing.xxxs}
        ${outline || loading ? colorGroup.base : 'transparent'}
        solid;
    margin-right: ${defaultTheme.sizing.s};
    margin-bottom: ${defaultTheme.sizing.s};
    padding: 0;
    justify-content: center;

    :disabled {
        cursor: not-allowed;
        opacity: ${loading ? '1' : '0.6'};
        color: ${loading ? 'transparent' : colorGroup.base};
        background-color: ${
            outline
                ? colorGroup.light
                : loading
                ? 'transparent'
                : colorGroup.dark
        };
    }

    :hover:not(:disabled) {
        cursor: pointer;
        color: ${colorGroup.dark};
        background-color: ${colorGroup.light};
    }
`;

const ButtonText: React.FC = styled.div`
    padding: 0 ${defaultTheme.sizing.s};
    text-align: center;
    line-height: 1.18;
    letter-spacing: 1px;
    text-decoration: none;
`;

export const Button: React.FC<ButtonProps> = React.forwardRef<
    HTMLButtonElement,
    ButtonProps
>(function Button(
    {
        id,
        className,
        text,
        handleClick = undefined,
        disabled = false,
        loading = false
    },
    ref
) {
    return (
        <button
            id={id}
            className={className}
            type="button"
            onClick={handleClick}
            disabled={disabled || loading}
            ref={ref}
        >
            <ButtonText>{text}</ButtonText>
        </button>
    );
});

export const DefaultButton: React.FC<ButtonProps> = styled(Button)`
    ${defaultTransition()};
    ${defaultBoxShadow()};
    ${fontFamilyRegular()};
    ${defaultBorderRadius()};
    ${fontSizeMedium()};
    ${focus()};
    ${(props): string =>
        buttonStyles(
            defaultTheme.colors.greys,
            props.block,
            props.outline,
            props.small,
            props.loading
        )};
`;

export const PrimaryButton: React.FC<ButtonProps> = styled(DefaultButton)`
    ${(props): string =>
        buttonStyles(
            defaultTheme.colors.blues,
            props.block,
            props.outline,
            props.small,
            props.loading
        )};
`;

export const SecondaryButton: React.FC<ButtonProps> = styled(DefaultButton)`
    ${(props): string =>
        buttonStyles(
            defaultTheme.colors.greens,
            props.block,
            props.outline,
            props.small,
            props.loading
        )};
`;

export const TertiaryButton: React.FC<ButtonProps> = styled(DefaultButton)`
    ${(props): string =>
        buttonStyles(
            defaultTheme.colors.yellows,
            props.block,
            props.outline,
            props.small,
            props.loading
        )};
`;

export const DangerButton: React.FC<ButtonProps> = styled(DefaultButton)`
    ${(props): string =>
        buttonStyles(
            defaultTheme.colors.reds,
            props.block,
            props.outline,
            props.small,
            props.loading
        )};
`;

export default DefaultButton;
