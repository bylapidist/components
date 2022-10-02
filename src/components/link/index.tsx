import * as React from 'react';
import { Text } from '../text';
import { BoxProps } from '../box';

export * from './styles';

export type LinkPropType = BoxProps & React.HTMLProps<HTMLAnchorElement>;

export const Link: React.FC<LinkPropType> = ({ as = 'a', ...restProps }) => (
    <Text as={as} {...restProps} />
);

Link.displayName = 'Link';
