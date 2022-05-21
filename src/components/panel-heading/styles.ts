import { getProperty, Styles } from '@lapidist/styles';
import { PanelHeadingProps } from './index';

const baseStyles = {
    fontSize: '3',
    marginBottom: '4',
    fontWeight: 700
};

export const panelHeadingStyles = ({
    theme,
    kind
}: PanelHeadingProps): Styles => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        textColor: dark,
        ...baseStyles
    };
};

export const innerLinkStyles = ({ theme, kind }: PanelHeadingProps) => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        textColor: dark,
        lineHeight: 'initial',
        pseudo: {
            ':hover': {
                textColor: dark
            }
        },
        ...baseStyles
    };
};
