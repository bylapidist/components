import React from 'react';
import styled from 'styled-components';
import {
    defaultTransition,
    focus,
    fontFamilyRegular,
    fontSizeMedium,
    relative
} from '@lapidist/design-tokens';
import { defaultTheme, ColorGroup } from '@lapidist/theme-provider';
import Panel, { PanelProps } from '@lapidist/panel';

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
    /** The Button's color group. Changes the background color or outline. */
    readonly colorGroup?: ColorGroup;
}

const ButtonInner: React.FC<PanelProps> = styled(Panel)<PanelProps>`
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
        loading = false,
        outline = false,
        colorGroup = defaultTheme.colors.greys
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
            <ButtonInner
                outline={outline}
                color={
                    (outline || loading) && !disabled
                        ? 'transparent'
                        : colorGroup.base
                }
                elevated
                rounded
            >
                {text}
            </ButtonInner>
        </button>
    );
});

export const DefaultButton: React.FC<ButtonProps> = styled(Button)`
    ${relative()};
    ${defaultTransition()};
    ${fontFamilyRegular()};
    ${fontSizeMedium()};
    ${focus()};
    min-width: calc(${defaultTheme.sizing.xxl} * 2);
    height: ${({ small }): string =>
        small ? defaultTheme.sizing.xxl : defaultTheme.sizing.xxxl};
    display: ${({ block }): string => (block ? 'flex' : 'inline-flex')};
    width: ${({ block }): string => (block ? '100%' : 'auto')};
    margin-right: ${defaultTheme.sizing.s};
    margin-bottom: ${defaultTheme.sizing.s};
    padding: 0;
    justify-content: center;
    opacity: ${({ disabled, loading }): string =>
        disabled || loading ? '0.6' : '1'};
    color: ${({
        outline,
        loading,
        colorGroup = defaultTheme.colors.greys
    }): string =>
        outline
            ? colorGroup.base
            : loading
            ? 'transparent'
            : defaultTheme.colors.greys.lightest};

    :disabled {
        cursor: not-allowed;
        opacity: ${({ disabled, loading }): string =>
            disabled || loading ? '0.6' : '0.8'};
        color: ${({
            loading,
            colorGroup = defaultTheme.colors.greys
        }): string => (loading ? 'transparent' : colorGroup.base)};
    }

    :hover:not(:disabled) {
        cursor: pointer;
    }
`;

export const PrimaryButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton colorGroup={defaultTheme.colors.blues} {...props} />
);

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton colorGroup={defaultTheme.colors.greens} {...props} />
);

export const TertiaryButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton colorGroup={defaultTheme.colors.yellows} {...props} />
);

export const DangerButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton colorGroup={defaultTheme.colors.reds} {...props} />
);

export default DefaultButton;
