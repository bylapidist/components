import { Styles } from '@lapidist/styles';
import { PanelProps } from './index';

export const panelStyles = ({ status }: PanelProps): Styles => {
    const variantStyles = {
        none: {
            borderColor: { shade: 'transparent', group: 'base' }
        },
        info: {
            borderColor: { shade: 'base', group: 'grey' }
        },
        warning: {
            borderColor: { shade: 'base', group: 'secondary' }
        },
        error: {
            borderColor: { shade: 'base', group: 'danger' }
        },
        success: {
            borderColor: { shade: 'base', group: 'tertiary' }
        }
    };

    return {
        position: 'relative',
        borderStyle: 'solid',
        borderWidth: '1',
        borderRadius: '2',
        sizeMinHeight: '32',
        backgroundColor: { shade: 'light', group: 'base' },
        ...variantStyles[status || 'none']
    };
};

export const panelSpinnerStyles = (): Styles => ({ sizeWidth: 16 });

export const panelCloseButtonStyles = (): Styles => ({
    position: 'absolute',
    top: '0',
    right: '0',
    marginTop: '2',
    marginRight: '2'
});

export const panelLoadingStyles = ({ loading }: PanelProps): Styles =>
    loading
        ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: '0'
          }
        : {};

export const panelMessageStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '2'
});
