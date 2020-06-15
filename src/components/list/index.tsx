import React, { HTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Text } from '../text';

export type ListType = 'ol' | 'ul';

interface ListItemProps {
    readonly item: JSX.Element | string;
    readonly key: string | number;
}

export interface ListProps {
    readonly items: ListItemProps[];
    readonly type?: ListType;
}

const Ordered: StyledComponent<
    'ol',
    HTMLAttributes<HTMLOListElement>
> = styled.ol<ListProps>`
    list-style-type: decimal;
    list-style-position: inside;
`;

const Unordered: StyledComponent<
    'ul',
    HTMLAttributes<HTMLUListElement>
> = styled.ul<ListProps>`
    list-style-type: disc;
    list-style-position: inside;
`;

const ListItem: StyledComponent<
    'li',
    HTMLAttributes<HTMLLIElement>
> = styled.li``;

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
