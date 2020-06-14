import { Styles } from './index';
import { getColor, Theme } from '../theme';

export default (theme: Theme, styles?: Styles): string =>
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
