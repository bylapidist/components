import { getProperty, Styles } from '@lapidist/styles';
import { PanelHeadingProps } from './index';

export const panelHeadingStyles = ({
    theme,
    kind
}: PanelHeadingProps): Styles => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        textColor: dark,
        fontSize: '3',
        paddingTop: '2',
        paddingBottom: '4',
        fontWeight: 500
    };
};
