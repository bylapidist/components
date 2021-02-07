import { Styles } from '@lapidist/styles';
import { StatusPanelProps } from './index';
import { panelStyles } from '../panel';

export const statusPanelStyles = ({ theme, kind }: StatusPanelProps): Styles =>
    panelStyles({ kind, theme });
