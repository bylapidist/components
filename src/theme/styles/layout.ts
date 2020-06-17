import { Styles } from './index';
import { getBreakpoint, getSize, getWidth, Theme } from '../theme';

export default (theme: Theme, styles?: Styles): string =>
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

        ${
            styles.containerWidth
                ? `max-width: ${getBreakpoint(theme, styles.containerWidth)};`
                : ''
        }

        ${styles.sizeWidth ? `width: ${getSize(theme, styles.sizeWidth)};` : ''}

        ${styles.height ? `height: ${getWidth(theme, styles.height)};` : ''}

        ${
            styles.minHeight
                ? `min-height: ${getWidth(theme, styles.minHeight)};`
                : ''
        }

        ${
            styles.maxHeight
                ? `max-height: ${getWidth(theme, styles.maxHeight)};`
                : ''
        }

        ${
            styles.containerHeight
                ? `max-height: ${getBreakpoint(theme, styles.containerHeight)};`
                : ''
        }

        ${
            styles.sizeHeight
                ? `height: ${getSize(theme, styles.sizeHeight)};`
                : ''
        }

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
