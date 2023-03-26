/// <reference types="react" />
import type { BaseProps } from '../types';
export type LogoAnimationType = 'fade' | 'slide';
export interface LogoProps {
    readonly animation?: LogoAnimationType;
}
declare const Logo: {
    ({ className, as, testId, animation, ...restProps }: BaseProps & LogoProps): JSX.Element;
    displayName: string;
};
export default Logo;
