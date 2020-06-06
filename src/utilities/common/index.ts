import React from 'react';

export interface PropsWithIdAndClassname {
    /** The id. */
    readonly id?: string;
    /** The classname. */
    readonly className?: string;
}

export interface PropsWithStyle {
    /** The inline style. */
    readonly style?: React.CSSProperties;
}
