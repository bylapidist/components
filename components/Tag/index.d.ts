import type { BaseProps, LevelType } from '../types';
export interface TagProps {
    readonly level?: LevelType;
    readonly namespace?: string;
}
declare const Tag: {
    ({ className, as, testId, level, children, ...restProps }: BaseProps & TagProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Tag;
