import { Styles } from '../styles';
import {
    getColor,
    getFontFamily,
    getFontSize,
    getFontWeight,
    getLetterSpacing,
    getLineHeight,
    Theme
} from '../theme';

export default (theme: Theme, styles?: Styles): string =>
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
                ? `color: ${getColor(
                      theme,
                      styles.textColor.group,
                      styles.textColor.shade
                  )};`
                : ''
        }
    `
        : '';
