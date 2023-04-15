import {
    ElementType,
    ReactNode,
    CSSProperties,
    ComponentPropsWithoutRef
} from 'react';

export type CommonComponentProps<T extends ElementType> = {
    as?: T;
    testId?: string;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export type CommonComponentCombinedProps<
    T extends ElementType,
    K
> = CommonComponentProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof CommonComponentProps<T>> &
    K;

export type LevelType = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type SizeType = 'none' | 'small' | 'medium' | 'large';
