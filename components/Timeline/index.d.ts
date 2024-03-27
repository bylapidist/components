import { BaseProps, SizeType } from '../types';

export interface TimelineItem {
    readonly from: string;
    readonly to: string;
    readonly urlTitle: string;
    readonly url: string;
    readonly title: string;
}
export interface TimelineProps {
    readonly size?: SizeType;
    readonly items: TimelineItem[];
}
declare const Timeline: {
    ({ className, testId, size, items, ...restProps }: BaseProps & TimelineProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Timeline;
