import React from 'react';
import styled from 'styled-components';

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

const Ordered: React.FC = styled.ol``;

const Unordered: React.FC = styled.ul``;

export const ListItem: React.FC = styled.li``;

const Items: React.FC<{ items: ListItemProps[] }> = ({ items }) => (
    <>
        {items.map((props: ListItemProps) => (
            <ListItem key={props.key}>{props.item}</ListItem>
        ))}
    </>
);

const OrderedOrUnordered = (
    isOrdered: boolean,
    items: ListItemProps[]
): JSX.Element =>
    isOrdered ? (
        <Ordered>
            <Items items={items} />
        </Ordered>
    ) : (
        <Unordered>
            <Items items={items} />
        </Unordered>
    );

const List: React.FC<ListProps> = ({ type = 'ul', items }) =>
    OrderedOrUnordered(type == 'ol', items);

export default List;
