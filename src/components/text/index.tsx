import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';

export const Text: React.FC<BoxProps> = ({
    as = 'div',
    styles,
    ...restProps
}) => (
    <Box
        as={as}
        styles={deepMerge(
            {
                fontFamily: 'sans',
                fontWeight: 'normal',
                fontSize: 3,
                lineHeight: 'normal',
                letterSpacing: 'wide',
                textColor: {
                    group: 'grey',
                    shade: 'dark'
                }
            },
            styles
        )}
        {...restProps}
    />
);

Text.displayName = 'Text';
