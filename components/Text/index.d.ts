import type { BaseProps, SizeType } from '../types';
export type TextFamilyType = 'sans' | 'serif' | 'mono';
export type TextWeightType = 'regular' | 'medium' | 'bold';
export interface TextProps {
    readonly size?: SizeType;
    readonly family?: TextFamilyType;
    readonly weight?: TextWeightType;
}
declare const Text: {
    ({ className, as: Component, testId, size, family, weight, ...restProps }: BaseProps & TextProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Text;
