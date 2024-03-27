import { TextProps } from '../Text';
import { BaseProps, SizeType } from '../types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { default as React } from '../../../node_modules/react';

export interface LinkProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>, TextProps {
    readonly icon?: IconProp;
    readonly size?: SizeType;
}
declare const Link: {
    ({ className, as, testId, size, icon, children, ...restProps }: BaseProps & LinkProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Link;
