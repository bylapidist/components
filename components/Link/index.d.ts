import React from '../../../node_modules/react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { BaseProps, SizeType } from '../types';
import { TextProps } from '../Text';
export interface LinkProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>, TextProps {
    readonly icon?: IconProp;
    readonly size?: SizeType;
}
declare const Link: {
    ({ className, as, testId, size, icon, children, ...restProps }: BaseProps & LinkProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
export default Link;
