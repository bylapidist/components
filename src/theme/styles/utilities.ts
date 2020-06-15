import { Styles } from './index';

export default (styles?: Styles): string =>
    styles
        ? `
        ${styles.textAlign ? `text-align: ${styles.textAlign};` : ''}

        ${styles.cursor ? `cursor: ${styles.cursor};` : ''}
    `
        : '';
