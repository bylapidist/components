import React from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps } from '../types';
import { TextProps } from '../Text';
export interface LinkProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>, TextProps {
    readonly icon?: IconProp;
}
declare const Link: {
    ({ className, as, testId, size, icon, children, ...restProps }: BaseProps & LinkProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Link;
