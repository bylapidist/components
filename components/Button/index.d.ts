import { default as React } from '../../../node_modules/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { BaseProps, LevelType, SizeType } from '../types';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
    readonly level?: LevelType;
    readonly size?: SizeType;
    readonly icon?: IconProp;
    readonly block?: boolean;
    readonly disabled?: boolean;
}
declare const Button: {
    ({ className, as, testId, level, size, block, icon, children, ...restProps }: BaseProps & ButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Button;
