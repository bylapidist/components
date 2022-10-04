import * as React from 'react';
import { withTheme } from 'styled-components';
// import { mergeStyles } from '@lapidist/styles';
import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
// import { toggleStyles } from './styles';
import { Button, ButtonProps, ButtonPropType } from '../button';
import { BoxProps } from '../box';

// export * from './styles';

export type TogglePropType = BoxProps & ButtonProps & ButtonPropType;

export interface ToggleProps {
    readonly checked?: boolean;
}

const BaseToggle: React.FC<Omit<TogglePropType & ToggleProps, 'ref'>> = ({
    // styles,
    checked,
    children,
    ...restProps
}) => (
    <Button
        // styles={mergeStyles(toggleStyles({ checked }), styles)}
        icon={checked ? faDotCircle : faCircle}
        {...restProps}
    >
        {children}
    </Button>
);

export const Toggle = withTheme(BaseToggle);

Toggle.displayName = 'Toggle';
