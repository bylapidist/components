import React from '../../../node_modules/react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps, LevelType, SizeType } from '../types';
export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
    readonly level?: LevelType;
    readonly size?: SizeType;
    readonly icon?: IconProp;
    readonly block?: boolean;
    readonly disabled?: boolean;
}
declare const Button: {
    ({ className, as, testId, level, size, block, icon, children, ...restProps }: BaseProps & ButtonProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
export default Button;
