import * as CSS from 'csstype';
import { defaultTheme } from './defaultTheme';

type ThemeObject<T> = { [K: string]: T };

type ThemeArray<T> = { [K: string]: T[] };

export type NumberOrString = string | number | 0;

export type Color = { colorGroup: NumberOrString; colorShade: NumberOrString };

export interface Theme {
    breakpoints?: ThemeObject<string>;
    fontSizes?: ThemeObject<CSS.FontSizeProperty<NumberOrString>>;
    fontFamilies?: ThemeArray<CSS.FontFamilyProperty>;
    fontWeights?: ThemeObject<CSS.FontWeightProperty>;
    lineHeights?: ThemeObject<CSS.LineHeightProperty<NumberOrString>>;
    letterSpacings?: ThemeObject<CSS.LetterSpacingProperty<NumberOrString>>;
    sizes?: ThemeObject<string>;
    borderRadii?: ThemeObject<CSS.BorderRadiusProperty<NumberOrString>>;
    borderWidths?: ThemeObject<CSS.BorderWidthProperty<NumberOrString>>;
    boxShadows?: ThemeObject<CSS.BoxShadowProperty>;
    widths?: ThemeObject<string>;
    colors?: ThemeObject<ThemeObject<CSS.ColorProperty>>;
}

export const mergeThemes = (theme?: Theme): Theme => {
    if (!theme) return defaultTheme;

    return { ...theme, ...defaultTheme };
};

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
    colorGroup: NumberOrString,
    colorShade: NumberOrString
): CSS.ColorProperty => {
    if (
        theme.colors &&
        theme.colors[colorGroup] &&
        theme.colors[colorGroup][colorShade]
    ) {
        return theme.colors[colorGroup][colorShade];
    }

    throw new Error(
        `${colorGroup} or ${colorShade} does not exist on theme.colors`
    );
};
