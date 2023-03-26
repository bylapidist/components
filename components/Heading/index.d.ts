/// <reference types="react" />
import type { BaseProps, SizeType } from '../types';
import { TextFamilyType, TextWeightType } from '../Text';
export interface HeadingProps {
    readonly size?: SizeType;
    readonly weight?: TextWeightType;
    readonly family?: TextFamilyType;
}
declare const Heading: {
    ({ className, as, testId, size, weight, family, ...restProps }: BaseProps & HeadingProps): JSX.Element;
    displayName: string;
};
export default Heading;
