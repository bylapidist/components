import type { BaseProps, LevelType, SizeType } from '../types';
export interface ToggleProps {
    readonly level?: LevelType;
    readonly size?: SizeType;
    readonly onToggle?: () => void;
    readonly disabled?: boolean;
}
declare const Toggle: {
    ({ className, as, testId, level, size, onToggle, disabled, children, ...restProps }: BaseProps & ToggleProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
export default Toggle;
