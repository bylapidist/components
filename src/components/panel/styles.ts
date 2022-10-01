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
        borderStyle: 'solid',
        borderWidth: '1',
        borderRadius: '2',
        sizeMinHeight: '32',
        backgroundColor: { shade: 'light', group: 'base' },
        ...variantStyles[status || 'none']
    };
};

export const panelImageStyles = (): Styles => ({
    borderBottomColor: { group: 'grey', shade: 'lightest' },
    borderBottomStyle: 'solid',
    borderBottomWidth: '2',
    marginBottom: '2'
});

export const panelHeadingStyles = ({ image }: PanelProps): Styles => ({
    padding: '4',
    paddingTop: image ? '2' : '4',
    paddingLeft: '4',
    paddingBottom: '0',
    fontWeight: 700
});

export const panelActionBarStyles = (): Styles => ({
    display: 'flex',
    alignItems: 'flex-end',
    borderTopColor: { group: 'grey', shade: 'lightest' },
    borderTopStyle: 'solid',
    borderTopWidth: '2',
    padding: '4',
    marginTop: '2'
});

export const panelSpinnerStyles = (): Styles => ({ sizeWidth: 16 });

export const panelBodyStyles = (): Styles => ({
    paddingX: '4',
    paddingLeft: '4',
    maxWidth: '11/12',
    marginY: '2'
});

export const panelCloseButtonStyles = (): Styles => ({
    position: 'absolute',
    top: '0',
    right: '0',
    marginTop: '6',
    marginRight: '6'
});

export const panelButtonStyles = (): Styles => ({
    display: 'flex',
    sizeGap: '2',
    width: 'full',
    justifyContent: 'end'
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

export const panelIconStyles = ({ status }: PanelProps) => {
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
