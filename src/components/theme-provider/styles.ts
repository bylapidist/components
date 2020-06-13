import * as CSS from 'csstype';

import {
    Color,
    getBorderRadius,
    getBorderWidth,
    getBoxShadow,
    getBreakpoint,
    getColor,
    getFontFamily,
    getFontSize,
    getFontWeight,
    getLetterSpacing,
    getLineHeight,
    getSize,
    getWidth,
    NumberOrString,
    Theme,
    ThemeObject
} from './theme';

export interface Styles {
    readonly fontSize?: CSS.FontSizeProperty<NumberOrString>;
    readonly fontFamily?: CSS.FontFamilyProperty;
    readonly fontWeight?: CSS.FontWeightProperty;
    readonly lineHeight?: CSS.LineHeightProperty<NumberOrString>;
    readonly letterSpacing?: CSS.LetterSpacingProperty<NumberOrString>;
    readonly borderRadius?: CSS.BorderRadiusProperty<NumberOrString>;
    readonly borderWidth?: CSS.BorderWidthProperty<NumberOrString>;
    readonly borderTopWidth?: CSS.BorderTopWidthProperty<NumberOrString>;
    readonly borderRightWidth?: CSS.BorderRightWidthProperty<NumberOrString>;
    readonly borderBottomWidth?: CSS.BorderBottomWidthProperty<NumberOrString>;
    readonly borderLeftWidth?: CSS.BorderLeftWidthProperty<NumberOrString>;
    readonly borderColor?: Color;
    readonly borderTopColor?: Color;
    readonly borderRightColor?: Color;
    readonly borderBottomColor?: Color;
    readonly borderLeftColor?: Color;
    readonly backgroundColor?: Color;
    readonly textColor?: Color;
    readonly boxShadow?: CSS.BoxShadowProperty;
    readonly width?: CSS.WidthProperty<NumberOrString>;
    readonly minWidth?: CSS.WidthProperty<NumberOrString>;
    readonly maxWidth?: CSS.WidthProperty<NumberOrString>;
    readonly textAlign?: CSS.TextAlignProperty;
    readonly margin?: CSS.MarginProperty<NumberOrString>;
    readonly marginX?: CSS.MarginProperty<NumberOrString>;
    readonly marginY?: CSS.MarginProperty<NumberOrString>;
    readonly marginTop?: CSS.MarginTopProperty<NumberOrString>;
    readonly marginRight?: CSS.MarginRightProperty<NumberOrString>;
    readonly marginBottom?: CSS.MarginBottomProperty<NumberOrString>;
    readonly marginLeft?: CSS.MarginLeftProperty<NumberOrString>;
    readonly padding?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingX?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingY?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingTop?: CSS.PaddingTopProperty<NumberOrString>;
    readonly paddingRight?: CSS.PaddingRightProperty<NumberOrString>;
    readonly paddingBottom?: CSS.PaddingBottomProperty<NumberOrString>;
    readonly paddingLeft?: CSS.PaddingLeftProperty<NumberOrString>;
    readonly breakpoints?: ThemeObject<Styles>;
}

const withTypography = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
    ${
        styles.fontSize
            ? `font-size: ${getFontSize(theme, styles.fontSize)};`
            : ''
    }

        ${
            styles.fontWeight
                ? `font-weight: ${getFontWeight(theme, styles.fontWeight)};`
                : ''
        }

        ${
            styles.fontFamily
                ? `font-family: ${getFontFamily(theme, styles.fontFamily)};`
                : ''
        }

        ${
            styles.lineHeight
                ? `line-height: ${getLineHeight(theme, styles.lineHeight)};`
                : ''
        }

        ${
            styles.letterSpacing
                ? `letter-spacing: ${getLetterSpacing(
                      theme,
                      styles.letterSpacing
                  )};`
                : ''
        }

        ${
            styles.textColor
                ? `text-color: ${getColor(
                      theme,
                      styles.textColor.colorGroup,
                      styles.textColor.colorShade
                  )};`
                : ''
        }
    `
        : '';

const withBorders = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
       ${
           styles.borderRadius
               ? `border-radius: ${getBorderRadius(
                     theme,
                     styles.borderRadius
                 )};`
               : ''
       }

        ${
            styles.borderWidth
                ? `border-width: ${getBorderWidth(theme, styles.borderWidth)};`
                : ''
        }

        ${
            styles.borderTopWidth
                ? `border-top-width: ${getBorderWidth(
                      theme,
                      styles.borderTopWidth
                  )};`
                : ''
        }

        ${
            styles.borderRightWidth
                ? `border-right-width: ${getBorderWidth(
                      theme,
                      styles.borderRightWidth
                  )};`
                : ''
        }

        ${
            styles.borderBottomWidth
                ? `border-bottom-width: ${getBorderWidth(
                      theme,
                      styles.borderBottomWidth
                  )};`
                : ''
        }

        ${
            styles.borderLeftWidth
                ? `border-left-width: ${getBorderWidth(
                      theme,
                      styles.borderLeftWidth
                  )};`
                : ''
        }

        ${
            styles.boxShadow
                ? `box-shadow: ${getBoxShadow(theme, styles.boxShadow)};`
                : ''
        }
    `
        : '';

const withLayout = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${styles.width ? `width: ${getWidth(theme, styles.width)};` : ''}

        ${
            styles.minWidth
                ? `min-width: ${getWidth(theme, styles.minWidth)};`
                : ''
        }

        ${
            styles.maxWidth
                ? `max-width: ${getWidth(theme, styles.maxWidth)};`
                : ''
        }

        ${styles.textAlign ? `text-align: ${styles.textAlign};` : ''}

        ${styles.margin ? `margin: ${getSize(theme, styles.margin)};` : ''}

        ${
            styles.marginX
                ? `margin-left: ${getSize(theme, styles.marginX)};`
                : ''
        }

        ${
            styles.marginX
                ? `margin-right: ${getSize(theme, styles.marginX)};`
                : ''
        }

        ${
            styles.marginY
                ? `margin-top: ${getSize(theme, styles.marginY)};`
                : ''
        }

        ${
            styles.marginY
                ? `margin-bottom: ${getSize(theme, styles.marginY)};`
                : ''
        }

        ${
            styles.marginTop
                ? `margin-top: ${getSize(theme, styles.marginTop)};`
                : ''
        }

        ${
            styles.marginRight
                ? `margin-right: ${getSize(theme, styles.marginRight)};`
                : ''
        }

        ${
            styles.marginBottom
                ? `margin-bottom: ${getSize(theme, styles.marginBottom)};`
                : ''
        }

        ${
            styles.marginLeft
                ? `margin-left: ${getSize(theme, styles.marginLeft)};`
                : ''
        }

        ${styles.padding ? `padding: ${getSize(theme, styles.padding)};` : ''}

        ${
            styles.paddingX
                ? `padding-left: ${getSize(theme, styles.paddingX)};`
                : ''
        }

        ${
            styles.paddingX
                ? `padding-right: ${getSize(theme, styles.paddingX)};`
                : ''
        }

        ${
            styles.paddingY
                ? `padding-top: ${getSize(theme, styles.paddingY)};`
                : ''
        }

        ${
            styles.paddingY
                ? `padding-bottom: ${getSize(theme, styles.paddingY)};`
                : ''
        }

        ${
            styles.paddingTop
                ? `padding-top: ${getSize(theme, styles.paddingTop)};`
                : ''
        }

        ${
            styles.paddingRight
                ? `padding-right: ${getSize(theme, styles.paddingRight)};`
                : ''
        }

        ${
            styles.paddingBottom
                ? `padding-bottom: ${getSize(theme, styles.paddingBottom)};`
                : ''
        }

        ${
            styles.paddingLeft
                ? `padding-left: ${getSize(theme, styles.paddingLeft)};`
                : ''
        }
    `
        : '';

const withColors = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${
            styles.backgroundColor
                ? `background-color: ${getColor(
                      theme,
                      styles.backgroundColor.colorGroup,
                      styles.backgroundColor.colorShade
                  )};`
                : ''
        }

        ${
            styles.borderTopColor
                ? `border-top-color: ${getColor(
                      theme,
                      styles.borderTopColor.colorGroup,
                      styles.borderTopColor.colorShade
                  )};`
                : ''
        }

        ${
            styles.borderRightColor
                ? `border-right-color: ${getColor(
                      theme,
                      styles.borderRightColor.colorGroup,
                      styles.borderRightColor.colorShade
                  )};`
                : ''
        }

        ${
            styles.borderBottomColor
                ? `border-bottom-color: ${getColor(
                      theme,
                      styles.borderBottomColor.colorGroup,
                      styles.borderBottomColor.colorShade
                  )};`
                : ''
        }

        ${
            styles.borderLeftColor
                ? `border-left-color: ${getColor(
                      theme,
                      styles.borderLeftColor.colorGroup,
                      styles.borderLeftColor.colorShade
                  )};`
                : ''
        }

        ${
            styles.borderColor
                ? `border-color: ${getColor(
                      theme,
                      styles.borderColor.colorGroup,
                      styles.borderColor.colorShade
                  )};`
                : ''
        }
    `
        : '';

export const withBaseStyles = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withTypography(theme, styles)}
        ${withBorders(theme, styles)}
        ${withLayout(theme, styles)}
        ${withColors(theme, styles)}
`
        : '';

const withMediaQueries = (
    breakpoints: ThemeObject<Styles>,
    theme: Theme
): string =>
    Object.entries(breakpoints)
        .map(
            ([breakpoint, styles]) => `
            @media only screen and (min-width: ${getBreakpoint(
                theme,
                breakpoint
            )}) {
                ${withBaseStyles(theme, styles)}
            }
        `
        )
        .join('');

const withBreakpoints = (theme: Theme, styles?: Styles): string =>
    styles && styles.breakpoints
        ? `
        ${withMediaQueries(styles.breakpoints, theme)}
    `
        : '';

export const withStyles = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withBaseStyles(theme, styles)}
        ${withBreakpoints(theme, styles)}
`
        : '';
