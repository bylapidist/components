import React from 'react';
export type AsType = keyof JSX.IntrinsicElements;
export type LevelType = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type SizeType = 'none' | 'small' | 'medium' | 'large';
export type BaseProps = {
    readonly className?: string;
    readonly as?: AsType;
    readonly testId?: string;
    readonly children?: React.ReactNode | React.ReactNode[];
    readonly style?: React.CSSProperties;
    readonly htmlFor?: string;
};
