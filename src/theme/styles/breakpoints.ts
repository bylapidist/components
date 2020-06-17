import { Styles } from '../styles';
import { getBreakpoint, Theme, ThemeObject } from '../theme';
import withBase from './base';

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
                ${withBase(theme, styles)}
            }
        `
        )
        .join('');

export default (theme: Theme, styles?: Styles): string =>
    styles && styles.breakpoints
        ? `
        ${withMediaQueries(styles.breakpoints, theme)}
    `
        : '';
