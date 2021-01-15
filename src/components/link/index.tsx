import React from 'react';
import deepMerge from 'lodash.merge';
import { Text } from '../text';
import { BoxProps } from '../box';
import { linkStyles } from './styles';

export * from './styles';

export type LinkPropType = BoxProps & React.HTMLProps<HTMLAnchorElement>;

export const Link: React.FC<LinkPropType> = ({
    as = 'a',
    styles,
    ...restProps
}) => <Text as={as} styles={deepMerge(linkStyles(), styles)} {...restProps} />;

Link.displayName = 'Link';
