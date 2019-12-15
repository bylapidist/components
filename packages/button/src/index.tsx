import React from 'react';
import styled from 'styled-components';
import {
    defaultTransition,
    focus,
    fontFamilyRegular,
    fontSizeMedium,
    relative
} from '@lapidist/design-tokens';
import { defaultTheme } from '@lapidist/theme-provider';
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
    /** The Button's color. Changes the background color or outline. */
    readonly color?: string;
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
        color = defaultTheme.colors.greys.base
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
            <ButtonInner outline={outline} color={color} elevated rounded>
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
    height: ${(props): string =>
        props.small ? defaultTheme.sizing.xxl : defaultTheme.sizing.xxxl};
    display: ${(props): string => (props.block ? 'flex' : 'inline-flex')};
    width: ${(props): string => (props.block ? '100%' : 'auto')};
    margin-right: ${defaultTheme.sizing.s};
    margin-bottom: ${defaultTheme.sizing.s};
    padding: 0;
    justify-content: center;
    color: ${(props): string =>
        props.outline
            ? props.color || defaultTheme.colors.greys.base
            : defaultTheme.colors.greys.lightest};

    :disabled {
        cursor: not-allowed;
        opacity: ${(props): string =>
            props.disabled || props.loading ? '0.6' : '1'};
    }

    :hover:not(:disabled) {
        cursor: pointer;
    }
`;

export const PrimaryButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton color={defaultTheme.colors.blues.base} {...props} />
);

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton color={defaultTheme.colors.greens.base} {...props} />
);

export const TertiaryButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton color={defaultTheme.colors.yellows.base} {...props} />
);

export const DangerButton: React.FC<ButtonProps> = (props) => (
    <DefaultButton color={defaultTheme.colors.reds.base} {...props} />
);

export default DefaultButton;
