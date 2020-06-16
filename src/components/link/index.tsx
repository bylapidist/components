import React from 'react';
import deepMerge from 'lodash.merge';
import { Text } from '../text';
import { BoxProps } from '../box';

export const Link: React.FC<BoxProps & React.HTMLProps<HTMLAnchorElement>> = ({
    as = 'a',
    styles,
    ...restProps
}) => (
    <Text
        as={as}
        styles={deepMerge(
            {
                borderBottomWidth: 1,
                borderBottomColor: {
                    group: 'primary',
                    shade: 'base'
                },
                textColor: {
                    group: 'primary',
                    shade: 'dark'
                },
                pseudo: {
                    ':hover': {
                        textColor: {
                            group: 'primary',
                            shade: 'base'
                        },
                        borderBottomColor: {
                            group: 'primary',
                            shade: 'dark'
                        }
                    }
                }
            },
            styles
        )}
        {...restProps}
    />
);

Link.displayName = 'Link';
