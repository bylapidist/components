import React, { HTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';

export type ListType = 'ol' | 'ul';

export interface ListItemProps {
    item: JSX.Element | string;
    key: string | number;
}

export interface ListProps {
    /** The List's id. */
    readonly id?: string;
    /** The List's classname. */
    readonly className?: string;
    /** The List's items. */
    readonly items: ListItemProps[];
    /** The List's type. */
    readonly type?: ListType;
}

const Ordered: StyledComponent<
    'ol',
    HTMLAttributes<HTMLOListElement>
> = styled.ol``;

const Unordered: StyledComponent<
    'ul',
    HTMLAttributes<HTMLUListElement>
> = styled.ul``;

export const ListItem: StyledComponent<
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

export const List: React.FC<ListProps> = ({ type = 'ul', items }) =>
    OrderedOrUnordered(type == 'ol' ? Ordered : Unordered, items);

List.displayName = 'List';
