import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';
import { NumberOrString } from '../../theme';

export interface ContainerProps extends BoxProps {
    readonly width?: NumberOrString;
}

export const Container: React.FC<ContainerProps> = ({
    width,
    children,
    styles,
    ...restProps
}) => (
    <Box
        styles={deepMerge(styles, {
            marginLeft: 'auto',
            marginRight: 'auto',
            containerWidth: width
        })}
        {...restProps}
    >
        {children}
    </Box>
);

Container.displayName = 'Container';
