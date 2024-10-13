import { BaseProps, SizeType } from '../types';
import { LinkProps } from '../Link';
export interface TabsProps {
    readonly size?: SizeType;
    readonly links?: (LinkProps & BaseProps)[];
    readonly onChangeTab?: (activeTab: number) => void;
}
declare const Tabs: {
    ({ className, as, testId, size, links, onChangeTab, ...restProps }: BaseProps & TabsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Tabs;
