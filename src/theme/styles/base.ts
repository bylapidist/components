import { Styles } from './index';
import { Theme } from '../theme';
import withTypography from './typography';
import withBorders from './borders';
import withLayout from './layout';
import withColors from './colors';

export default (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withTypography(theme, styles)}
        ${withBorders(theme, styles)}
        ${withLayout(theme, styles)}
        ${withColors(theme, styles)}
`
        : '';
