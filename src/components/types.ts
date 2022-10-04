import * as React from 'react';
import * as CSS from 'csstype';

export type AsPropType =
    | keyof JSX.IntrinsicElements
    | React.ElementType
    | string;

export type KindType = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type ThemeObjectType<T> = { [K: string]: T };

export type ThemeArrayType<T> = { [K: string]: T[] };

export type NumberOrStringType = string | number | 0 | undefined;

export type ColorGroupType = {
    group: NumberOrStringType;
    shade: NumberOrStringType;
};

export type ColorOrColorGroupType = CSS.Property.Color | ColorGroupType;

export type ThemeObjects =
    | ColorOrColorGroupType
    | NumberOrStringType
    | ThemeObjectType<CSS.Property.Color>;

export type AnyThemeObjectType =
    | ThemeObjectType<ThemeObjects>
    | ThemeArrayType<ThemeObjects>
    | undefined;

export interface Theme {
    readonly breakpoints?: ThemeObjectType<string>;
    readonly fontSizes?: ThemeObjectType<CSS.Property.FontSize>;
    readonly fontFamilies?: ThemeArrayType<CSS.Property.FontFamily>;
    readonly fontWeights?: ThemeObjectType<
        CSS.Property.FontWeight | NumberOrStringType
    >;
    readonly lineHeights?: ThemeObjectType<
        CSS.Property.LineHeight<NumberOrStringType> | NumberOrStringType
    >;
    readonly letterSpacings?: ThemeObjectType<
        CSS.Property.LetterSpacing<NumberOrStringType> | NumberOrStringType
    >;
    readonly sizes?: ThemeObjectType<string>;
    readonly borderRadii?: ThemeObjectType<
        CSS.Property.BorderRadius<NumberOrStringType>
    >;
    readonly borderWidths?: ThemeObjectType<
        | CSS.Property.BorderWidth<NumberOrStringType>
        | CSS.Property.BorderTopWidth<NumberOrStringType>
        | CSS.Property.BorderRightWidth<NumberOrStringType>
        | CSS.Property.BorderBottomWidth<NumberOrStringType>
        | CSS.Property.BorderLeftWidth<NumberOrStringType>
    >;
    readonly boxShadows?: ThemeObjectType<CSS.Property.BoxShadow>;
    readonly widths?: ThemeObjectType<CSS.Property.Width<NumberOrStringType>>;
    readonly colors?: ThemeObjectType<ThemeObjectType<CSS.Property.Color>>;
    [K: string]: AnyThemeObjectType;
}

export interface BaseProps {
    readonly as?: AsPropType;
    readonly testId?: string;
    readonly children?: React.ReactNode | React.ReactNode[];
}
