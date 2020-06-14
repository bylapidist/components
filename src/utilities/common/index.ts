import React from 'react';
import { Styles } from '../../theme';

export interface PropsWithIdAndClassname {
    readonly id?: string;
    readonly className?: string;
}

export interface PropsWithStyle {
    readonly style?: React.CSSProperties;
    readonly styles?: Styles;
}
