import * as React from 'react';

export type AsPropType = keyof JSX.IntrinsicElements;

export type LevelType = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type SizeType = 'small' | 'medium' | 'large';

export type BaseProps = {
    readonly className?: string;
    readonly as?: AsPropType;
    readonly testId?: string;
    readonly children?: React.ReactNode | React.ReactNode[];
    readonly style?: React.CSSProperties;
};
