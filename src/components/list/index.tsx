import React from 'react';
import { Text } from '../text';
import { Box, BoxProps } from '../box';
import {
    listItemStyles,
    orderedListStyles,
    unorderedListStyles
} from './styles';

export * from './styles';

export type ListType = 'ol' | 'ul';

interface ListItemProps {
    readonly item: JSX.Element | string;
    readonly key: string | number;
}

export interface ListProps {
    readonly items: ListItemProps[];
    readonly type?: ListType;
}

const Ordered: React.FC<BoxProps> = ({ children }) => (
    <Box as={'ol'} styles={orderedListStyles()}>
        {children}
    </Box>
);

const Unordered: React.FC<BoxProps> = ({ children }) => (
    <Box as={'ul'} styles={unorderedListStyles()}>
        {children}
    </Box>
);

const ListItem: React.FC<BoxProps> = ({ children }) => (
    <Box as={'li'} styles={listItemStyles()}>
        {children}
    </Box>
);

const Items: React.FC<{ items: ListItemProps[] }> = ({ items }) => (
    <>
        {items.map((props: ListItemProps) => (
            <ListItem key={props.key}>{props.item}</ListItem>
        ))}
    </>
);

const OrderedOrUnordered = (
    Component: React.FC,
    items: ListItemProps[]
): JSX.Element => (
    <Component>
        <Items items={items} />
    </Component>
);

export const List: React.FC<ListProps> = ({
    type = 'ul',
    items,
    ...restProps
}) => (
    <Text {...restProps}>
        {OrderedOrUnordered(type == 'ol' ? Ordered : Unordered, items)}
    </Text>
);

List.displayName = 'List';
