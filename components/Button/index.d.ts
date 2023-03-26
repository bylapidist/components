/// <reference types="react" />
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps, LevelType, SizeType } from '../types';
export interface ButtonProps {
    readonly level?: LevelType;
    readonly size?: SizeType;
    readonly icon?: IconProp;
    readonly block?: boolean;
    readonly disabled?: boolean;
}
declare const Button: {
    ({ className, as, testId, level, size, block, icon, children, ...restProps }: BaseProps & ButtonProps): JSX.Element;
    displayName: string;
};
export default Button;
