import React from 'react';
import deepMerge from 'lodash.merge';
import { Styles } from '@lapidist/styles';
import { Text } from '../text';
import { BoxProps } from '../box';

export type LinkPropType = BoxProps & React.HTMLProps<HTMLAnchorElement>;

export const linkStyles = (): Styles => ({
    borderStyle: 'solid',
    borderBottomWidth: '1',
    borderBottomColor: {
        group: 'primary',
        shade: 'light'
    },
    fontSize: 'inherit',
    textColor: {
        group: 'primary',
        shade: 'dark'
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
});

export const Link: React.FC<LinkPropType> = ({
    as = 'a',
    styles,
    ...restProps
}) => <Text as={as} styles={deepMerge(linkStyles(), styles)} {...restProps} />;

Link.displayName = 'Link';
