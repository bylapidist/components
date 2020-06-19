import React from 'react';
import deepMerge from 'lodash.merge';
import { Text } from '../text';
import { BoxProps } from '../box';

export type LinkPropType = BoxProps & React.HTMLProps<HTMLAnchorElement>;

export const Link: React.FC<LinkPropType> = ({
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
                    shade: 'light'
                },
                textColor: {
                    group: 'primary',
                    shade: 'base'
                },
                pseudo: {
                    ':hover': {
                        textColor: {
                            group: 'primary',
                            shade: 'dark'
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
