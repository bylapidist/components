import * as React from 'react';
import * as CSS from 'csstype';

export type AsPropType =
    | keyof JSX.IntrinsicElements
    | React.ElementType
    | string;

export interface BaseProps {
    readonly as?: AsPropType;
    readonly testId?: string;
    readonly children?: React.ReactNode | React.ReactNode[];
}

export type KindType = 'primary' | 'secondary' | 'tertiary' | 'danger';

export declare type ThemeObject<T> = {
    [K: string]: T;
};
export declare type ThemeArray<T> = {
    [K: string]: T[];
};
export declare type NumberOrString = string | number | 0 | undefined;

export declare type ColorGroup = {
    group: NumberOrString;
    shade: NumberOrString;
};

export type ColorOrColorGroup = NumberOrString | ColorGroup;

export type ThemeObjects =
    | ColorOrColorGroup
    | NumberOrString
    | ThemeObject<NumberOrString>;

export type AnyThemeObject =
    | ThemeObject<ThemeObjects>
    | ThemeArray<ThemeObjects>
    | undefined;

export interface Theme {
    readonly breakpoints?: ThemeObject<NumberOrString>;
    readonly fontSizes?: ThemeObject<NumberOrString>;
    readonly fontFamilies?: ThemeArray<NumberOrString>;
    readonly fontWeights?: ThemeObject<NumberOrString>;
    readonly lineHeights?: ThemeObject<NumberOrString>;
    readonly letterSpacings?: ThemeObject<NumberOrString>;
    readonly sizes?: ThemeObject<NumberOrString>;
    readonly borderRadii?: ThemeObject<NumberOrString>;
    readonly borderWidths?: ThemeObject<NumberOrString>;
    readonly boxShadows?: ThemeObject<NumberOrString>;
    readonly widths?: ThemeObject<CSS.Property.Width<NumberOrString>>;
    readonly colors?: ThemeObject<ThemeObject<NumberOrString>>;
    [K: string]: AnyThemeObject;
}
