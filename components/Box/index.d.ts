import type { BaseProps, SizeType } from '../types';
export interface BoxProps {
    readonly elevation?: SizeType;
    readonly gutter?: SizeType;
    readonly gutterX?: SizeType;
    readonly gutterY?: SizeType;
}
declare const Box: {
    ({ className, as: Component, testId, elevation, gutter, gutterX, gutterY, ...restProps }: BaseProps & BoxProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Box;
