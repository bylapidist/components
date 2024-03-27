import { TextFamilyType, TextWeightType } from '../Text';
import { BaseProps, SizeType } from '../types';

export interface HeadingProps {
    readonly size?: SizeType;
    readonly weight?: TextWeightType;
    readonly family?: TextFamilyType;
}
declare const Heading: {
    ({ className, as, testId, size, weight, family, ...restProps }: BaseProps & HeadingProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Heading;
