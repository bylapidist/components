import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';
import { NumberOrString } from '../theme-provider/theme';

export interface ContainerProps extends BoxProps {
    readonly maxWidth?: NumberOrString;
}

export const Container: React.FC<ContainerProps> = ({
    maxWidth = 'full',
    children,
    styles,
    ...restProps
}) => (
    <Box
        styles={deepMerge(styles, {
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: maxWidth
        })}
        {...restProps}
    >
        {children}
    </Box>
);

Container.displayName = 'Container';
