import React from 'react';
import styled from 'styled-components';

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

export const Button: React.FC<ButtonProps> = ({
    id,
    className,
    text,
    handleClick = undefined,
    disabled = false,
    loading = false
}) => (
    <button
        id={id}
        className={className}
        type="button"
        onClick={handleClick}
        disabled={disabled || loading}
    >
        {text}
    </button>
);

export default styled(Button)``;
