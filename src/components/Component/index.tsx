import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type CommonComponentProps<T extends ElementType> = {
    as?: T;
    children?: ReactNode;
    className?: string;
    testId?: string;
};

const Component = <T extends ElementType = 'div'>({
    as,
    children,
    testId = 'Component',
    ...props
}: CommonComponentProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof CommonComponentProps<T>>) => {
    const PolymorphicComponent = as || 'div';
    return (
        <PolymorphicComponent data-testid={testId} {...props}>
            {children}
        </PolymorphicComponent>
    );
};

Component.displayName = 'Component';
export default Component;
