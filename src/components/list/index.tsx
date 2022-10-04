import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { StyledText } from '../text';
import { BaseProps, Theme } from '../types';

export type ListType = 'ol' | 'ul';

export interface ListItemProps {
    readonly key: React.Key;
    readonly item: JSX.Element | string;
}

export interface ListProps
    extends React.HTMLProps<HTMLOListElement | HTMLUListElement> {
    readonly items: ListItemProps[];
    readonly type: ListType;
}

export type StyledListProps = BaseProps & ListProps & ThemeProps<Theme>;

export const StyledList = styled(StyledText)<StyledListProps>`
    ${({ type }) => `
        list-style-position: inside;
        list-style-type: ${type === 'ol' ? `decimal` : `disc`};
  `}
`;

const ListItem = styled.li``;

export const List = (props: BaseProps & ListProps) => (
    <StyledList
        {...props}
        data-testid={props.testId}
        as={props.as || (props.type === 'ol' ? 'ol' : 'ul')}
    >
        {props.items.map(({ key, item }: ListItemProps) => (
            <ListItem key={key}>{item}</ListItem>
        ))}
    </StyledList>
);

List.displayName = 'List';
