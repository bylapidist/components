import { getProperty, Styles } from '@lapidist/styles';
import { PanelProps } from './index';

export const panelStyles = ({ theme, kind }: PanelProps): Styles => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        borderWidth: 'px',
        borderStyle: 'solid',
        borderRadius: '3',
        boxShadow: '2',
        paddingX: '4',
        paddingY: '3',
        sizeMinHeight: '32',
        backgroundColor: { shade: 'light', group: 'base' },
        borderColor: dark
    };
};
