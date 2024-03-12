import type { BaseProps, SizeType } from '../types';
export interface BoxProps {
    readonly elevation?: SizeType;
    readonly gutter?: SizeType;
    readonly gutterX?: SizeType;
    readonly gutterY?: SizeType;
    readonly roundness?: SizeType;
}
declare const Box: {
    ({ className, as: Component, testId, elevation, gutter, gutterX, gutterY, roundness, ...restProps }: BaseProps & BoxProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
export default Box;
