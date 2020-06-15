import * as CSS from 'csstype';
import deepMerge from 'lodash.merge';
import { defaultTheme } from './defaultTheme';

export type ThemeObject<T> = { [K: string]: T };

export type ThemeArray<T> = { [K: string]: T[] };

export type NumberOrString = string | number | 0;

export type Color = { group: NumberOrString; shade: NumberOrString };

export interface Theme {
    readonly breakpoints?: ThemeObject<string>;
    readonly fontSizes?: ThemeObject<CSS.FontSizeProperty<NumberOrString>>;
    readonly fontFamilies?: ThemeArray<CSS.FontFamilyProperty>;
    readonly fontWeights?: ThemeObject<CSS.FontWeightProperty>;
    readonly lineHeights?: ThemeObject<CSS.LineHeightProperty<NumberOrString>>;
    readonly letterSpacings?: ThemeObject<
        CSS.LetterSpacingProperty<NumberOrString>
    >;
    readonly sizes?: ThemeObject<string>;
    readonly borderRadii?: ThemeObject<
        CSS.BorderRadiusProperty<NumberOrString>
    >;
    readonly borderWidths?: ThemeObject<
        CSS.BorderWidthProperty<NumberOrString>
    >;
    readonly boxShadows?: ThemeObject<CSS.BoxShadowProperty>;
    readonly widths?: ThemeObject<string>;
    readonly colors?: ThemeObject<ThemeObject<CSS.ColorProperty>>;
}

export const mergeThemes = (theme?: Theme): Theme =>
    deepMerge(defaultTheme, theme);

export const getBreakpoint = (
    theme: Theme,
    breakpoint: NumberOrString
): string => {
    if (theme.breakpoints && theme.breakpoints[breakpoint]) {
        return theme.breakpoints[breakpoint];
    }

    throw new Error(`${breakpoint} does not exist on theme.breakpoints`);
};

export const getAllBreakpoints = (theme: Theme): string[] => {
    if (theme.breakpoints) {
        return Object.keys(theme.breakpoints);
    }

    throw new Error(`theme.breakpoints does not exist`);
};

export const getAllMediaQueries = (theme: Theme): ThemeObject<string> => {
    if (theme.breakpoints) {
        const allBreakpoints = getAllBreakpoints(theme);
        const allMediaQueries: ThemeObject<string> = {};

        allBreakpoints.forEach((breakpoint) => {
            allMediaQueries[breakpoint] = `(min-width: ${getBreakpoint(
                theme,
                breakpoint
            )})`;
        });

        return allMediaQueries;
    }

    throw new Error(`theme.breakpoints does not exist`);
};

export const getFontSize = (
    theme: Theme,
    size: NumberOrString
): CSS.FontSizeProperty<NumberOrString> => {
    if (theme.fontSizes && theme.fontSizes[size]) {
        return theme.fontSizes[size];
    }

    throw new Error(`${size} does not exist on theme.fontSizes`);
};

export const getFontFamily = (
    theme: Theme,
    fontFamily: NumberOrString
): CSS.FontFamilyProperty => {
    if (theme.fontFamilies && theme.fontFamilies[fontFamily]) {
        return theme.fontFamilies[fontFamily].join(', ');
    }

    throw new Error(`${fontFamily} does not exist on theme.fontFamilies`);
};

export const getFontWeight = (
    theme: Theme,
    fontWeight: NumberOrString
): CSS.FontWeightProperty => {
    if (theme.fontWeights && theme.fontWeights[fontWeight]) {
        return theme.fontWeights[fontWeight];
    }

    throw new Error(`${fontWeight} does not exist on theme.fontWeights`);
};

export const getLineHeight = (
    theme: Theme,
    lineHeight: NumberOrString
): CSS.LineHeightProperty<NumberOrString> => {
    if (theme.lineHeights && theme.lineHeights[lineHeight]) {
        return theme.lineHeights[lineHeight];
    }

    throw new Error(`${lineHeight} does not exist on theme.lineHeights`);
};

export const getLetterSpacing = (
    theme: Theme,
    letterSpacing: NumberOrString
): CSS.LetterSpacingProperty<NumberOrString> => {
    if (theme.letterSpacings && theme.letterSpacings[letterSpacing]) {
        return theme.letterSpacings[letterSpacing];
    }

    throw new Error(`${letterSpacing} does not exist on theme.letterSpacings`);
};

export const getSize = (theme: Theme, size: NumberOrString): string => {
    if (theme.sizes && theme.sizes[size]) {
        return theme.sizes[size];
    }

    throw new Error(`${size} does not exist on theme.sizes`);
};

export const getBorderRadius = (
    theme: Theme,
    borderRadius: NumberOrString
): CSS.BorderRadiusProperty<NumberOrString> => {
    if (theme.borderRadii && theme.borderRadii[borderRadius]) {
        return theme.borderRadii[borderRadius];
    }

    throw new Error(`${borderRadius} does not exist on theme.borderRadii`);
};

export const getBorderWidth = (
    theme: Theme,
    borderWidth: NumberOrString
): CSS.BorderWidthProperty<NumberOrString> => {
    if (theme.borderWidths && theme.borderWidths[borderWidth]) {
        return theme.borderWidths[borderWidth];
    }

    throw new Error(`${borderWidth} does not exist on theme.borderWidths`);
};

export const getBoxShadow = (
    theme: Theme,
    boxShadow: NumberOrString
): CSS.BoxShadowProperty => {
    if (theme.boxShadows && theme.boxShadows[boxShadow]) {
        return theme.boxShadows[boxShadow];
    }

    throw new Error(`${boxShadow} does not exist on theme.boxShadows`);
};

export const getWidth = (
    theme: Theme,
    width: NumberOrString
): CSS.WidthProperty<NumberOrString> => {
    if (theme.widths && theme.widths[width]) {
        return theme.widths[width];
    }

    throw new Error(`${width} does not exist on theme.widths`);
};

export const getColor = (
    theme: Theme,
    group: NumberOrString,
    shade: NumberOrString
): CSS.ColorProperty => {
    if (theme.colors && theme.colors[group] && theme.colors[group][shade]) {
        return theme.colors[group][shade];
    }

    throw new Error(`${group} or ${shade} does not exist on theme.colors`);
};
