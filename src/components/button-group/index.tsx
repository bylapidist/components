import React from 'react';
import { mergeStyles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { Button, ButtonProps } from '../button';
import { buttonGroupStyles } from './styles';

export * from './styles';

export type ButtonGroupPropType = BoxProps;

export type ButtonGroupChildrenType = React.ReactElement<ButtonProps>[];

export interface ButtonGroupProps {
    readonly children: ButtonGroupChildrenType;
}

export const ButtonGroup: React.FC<ButtonGroupPropType & ButtonGroupProps> = ({
    as = 'div',
    styles,
    children,
    ...restProps
}) => (
    <Box
        role="group"
        as={as}
        styles={mergeStyles(buttonGroupStyles(), styles)}
        {...restProps}
    >
        {children.map(
            ({ props }, index) =>
                props && <Button key={`Button${index}`} {...props} />
        )}
    </Box>
);

ButtonGroup.displayName = 'ButtonGroup';
