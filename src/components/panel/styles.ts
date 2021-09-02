import { getProperty, Styles } from '@lapidist/styles';
import { PanelProps } from './index';

export const panelStyles = ({ theme, kind }: PanelProps): Styles => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        borderWidth: 'px',
        borderStyle: 'solid',
        borderRadius: '2',
        boxShadow: '2',
        paddingX: '4',
        paddingY: '2',
        borderColor: dark
    };
};
