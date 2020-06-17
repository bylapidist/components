import { Styles } from './index';

export default (styles?: Styles): string =>
    styles
        ? `
        ${styles.textAlign ? `text-align: ${styles.textAlign};` : ''}

        ${styles.cursor ? `cursor: ${styles.cursor};` : ''}

        ${styles.overflow ? `overflow: ${styles.overflow};` : ''}

        ${styles.overflowX ? `overflow-x: ${styles.overflowX};` : ''}

        ${styles.overflowY ? `overflow-y: ${styles.overflowY};` : ''}
    `
        : '';
