import * as React from 'react';

export type AsPropType =
    | keyof JSX.IntrinsicElements
    | React.ElementType
    | string;

export type BaseProps = {
    readonly as?: AsPropType;
    readonly testId?: string;
    readonly children?: React.ReactNode | React.ReactNode[];
};
