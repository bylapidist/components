import { Styles } from '../styles';
import { getColor, Theme } from '../theme';

export default (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${
            styles.backgroundColor
                ? `background-color: ${getColor(
                      theme,
                      styles.backgroundColor.group,
                      styles.backgroundColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderTopColor
                ? `border-top-color: ${getColor(
                      theme,
                      styles.borderTopColor.group,
                      styles.borderTopColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderRightColor
                ? `border-right-color: ${getColor(
                      theme,
                      styles.borderRightColor.group,
                      styles.borderRightColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderBottomColor
                ? `border-bottom-color: ${getColor(
                      theme,
                      styles.borderBottomColor.group,
                      styles.borderBottomColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderLeftColor
                ? `border-left-color: ${getColor(
                      theme,
                      styles.borderLeftColor.group,
                      styles.borderLeftColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderColor
                ? `border-color: ${getColor(
                      theme,
                      styles.borderColor.group,
                      styles.borderColor.shade
                  )};`
                : ''
        }
    `
        : '';
