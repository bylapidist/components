import { getProperty, Styles } from '@lapidist/styles';
import { PanelProps } from './index';

export const panelStyles = ({ theme, kind }: PanelProps): Styles => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        borderWidth: '1',
        borderStyle: 'solid',
        boxShadow: '1',
        paddingX: '4',
        paddingY: '2',
        borderColor: dark
    };
};
