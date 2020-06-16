import { Styles } from './index';
import { getBorderRadius, getBorderWidth, getBoxShadow, Theme } from '../theme';

export default (theme: Theme, styles?: Styles): string =>
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
                ? `
                border: solid;
                border-width: ${getBorderWidth(theme, styles.borderWidth)};`
                : ''
        }

        ${
            styles.borderTopWidth
                ? `
                border-top: solid;
                border-top-width: ${getBorderWidth(
                    theme,
                    styles.borderTopWidth
                )};`
                : ''
        }

        ${
            styles.borderRightWidth
                ? `
                border-right: solid;
                border-right-width: ${getBorderWidth(
                    theme,
                    styles.borderRightWidth
                )};`
                : ''
        }

        ${
            styles.borderBottomWidth
                ? `
                border-bottom: solid;
                border-bottom-width: ${getBorderWidth(
                    theme,
                    styles.borderBottomWidth
                )};`
                : ''
        }

        ${
            styles.borderLeftWidth
                ? `
                border-left: solid;
                border-left-width: ${getBorderWidth(
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
