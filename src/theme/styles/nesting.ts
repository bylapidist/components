import { Styles } from '../styles';
import { Theme, ThemeObject } from '../theme';
import withBase from './base';

const withNesting = (
    pseudoSelectors: ThemeObject<Styles>,
    theme: Theme
): string =>
    Object.entries(pseudoSelectors)
        .map(
            ([selector, styles]) => `
            ${selector} {
                ${withBase(theme, styles)}
            }
        `
        )
        .join('');

export default (theme: Theme, styles?: Styles): string =>
    styles && styles.pseudo
        ? `
        ${withNesting(styles.pseudo, theme)}
    `
        : '';
