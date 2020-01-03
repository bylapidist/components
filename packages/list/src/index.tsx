import React, { HTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';

export type ListType = 'ol' | 'ul';

export interface ListItem {
    item: JSX.Element | string;
    key: string | number;
}

export interface ListProps {
    /** The List's id. */
    readonly id?: string;
    /** The List's classname. */
    readonly className?: string;
    /** The List's items. */
    readonly items: ListItem[];
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

const Items: React.FC<{ items: ListItem[] }> = ({ items }) => (
    <>
        {items.map((props: ListItem) => (
            <ListItem key={props.key}>{props.item}</ListItem>
        ))}
    </>
);

const OrderedOrUnordered = (
    Component: React.FC,
    items: ListItem[]
): JSX.Element => (
    <Component>
        <Items items={items} />
    </Component>
);

const List: React.FC<ListProps> = ({ type = 'ul', items }) =>
    OrderedOrUnordered(type == 'ol' ? Ordered : Unordered, items);

export default List;
