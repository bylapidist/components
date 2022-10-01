import { Styles } from '@lapidist/styles';
import { PanelProps } from '../../index';

export const panelIconsStyles = (): Styles => ({
    display: 'flex',
    alignItems: 'center'
});

export const panelIconStyles = ({ status }: Pick<PanelProps, 'status'>) => {
    const variantStyles = {
        none: {
            textColor: { shade: 'base', group: 'grey' }
        },
        info: {
            textColor: { shade: 'base', group: 'grey' }
        },
        warning: {
            textColor: { shade: 'base', group: 'secondary' }
        },
        error: {
            textColor: { shade: 'base', group: 'danger' }
        },
        success: {
            textColor: { shade: 'base', group: 'tertiary' }
        }
    };

    return {
        marginRight: '4',
        fontSize: '7',
        borderRadius: 'rounded',
        lineHeight: '0',
        backgroundColor: { group: 'base', shade: 'light' },
        ...variantStyles[status || 'none']
    };
};

export const panelTagStyles = (): Styles => ({
    flex: '1 1 auto'
});
