import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import {
    ButtonProps,
    StyledButton,
    Button,
    StyledButtonProps
} from '../button';
import { StyledElevated } from '../elevated';
import { BaseProps, Theme } from '../types';
import { borderColour } from '../helpers';

export interface ToggleProps extends ButtonProps {
    readonly checked?: boolean;
}

export type StyledToggleProps = BaseProps & ToggleProps & ThemeProps<Theme>;

export const StyledToggle = styled.div<StyledToggleProps & StyledButtonProps>`
    ${({ theme, checked = false }) => `
        ${StyledButton} {
            border-radius: ${theme.borderRadii.rounded};
            ${borderColour(checked, theme.colors.grey.base)}
        }
        ${StyledElevated} {
            border-radius: ${theme.borderRadii.rounded};
        }
    `}
`;

export const Toggle = (props: BaseProps & ToggleProps) => (
    <StyledToggle
        kind={props.kind}
        variant={props.variant}
        checked={props.checked}
        data-testid={props.testId}
    >
        <Button
            {...props}
            as={props.as || 'button'}
            icon={props.checked ? faDotCircle : faCircle}
        />
    </StyledToggle>
);

Toggle.displayName = 'Toggle';

// import * as React from 'react';
// import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
// import { Button, ButtonProps } from '../button';
// import { BoxProps } from '../box';
// export type TogglePropType = BoxProps & ButtonProps;
//
// export interface ToggleProps {
//     readonly checked?: boolean;
// }
//
// const Toggle: React.FC<Omit<TogglePropType & ToggleProps, 'ref'>> = ({
//     // styles,
//     checked,
//     children,
//     ...restProps
// }) => (
//     <Button
//         // styles={mergeStyles(toggleStyles({ checked }), styles)}
//         icon={checked ? faDotCircle : faCircle}
//         {...restProps}
//     >
//         {children}
//     </Button>
// );
//
// Toggle.displayName = 'Toggle';
