import React from 'react';
import deepMerge from 'lodash.merge';
import { Box, BoxProps } from '../box';

export type TextPropType = BoxProps;

export const Text: React.FC<TextPropType> = ({
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
                lineHeight: 'loose',
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
