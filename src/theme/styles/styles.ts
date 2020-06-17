import withBase from './base';
import withBreakpoints from './breakpoints';
import withNesting from './nesting';
import { Theme } from '../theme';
import { Styles } from '../styles';

export default (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withBase(theme, styles)}
        ${withBreakpoints(theme, styles)}
        ${withNesting(theme, styles)}
`
        : '';
