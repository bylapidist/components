import React from 'react';
import type { BaseProps } from '../types';
import { TextProps } from '../Text';
export interface LinkProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>, TextProps {
}
declare const Link: {
    ({ className, as, testId, size, ...restProps }: BaseProps & LinkProps): JSX.Element;
    displayName: string;
};
export default Link;
