import { Styles } from '@lapidist/styles';
import { StatusMessageProps } from './index';

export const statusMessageStyles = ({
    variant
}: StatusMessageProps): Styles => {
    const baseStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '2',
        boxShadow: '3',
        borderLeftWidth: '2',
        borderWidth: 'px',
        borderStyle: 'solid',
        paddingX: '4',
        paddingY: '2',
        backgroundColor: { shade: 'light', group: 'base' }
    };

    const variantStyles = {
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
        ...baseStyles,
        ...variantStyles[variant || 'info']
    };
};

export const statusMessageMessageStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '2'
});

export const statusMessageIconStyles = ({ variant }: StatusMessageProps) => {
    const variantStyles = {
        info: {
            textColor: { shade: 'dark', group: 'grey' }
        },
        warning: {
            textColor: { shade: 'dark', group: 'secondary' }
        },
        error: {
            textColor: { shade: 'dark', group: 'danger' }
        },
        success: {
            textColor: { shade: 'dark', group: 'tertiary' }
        }
    };

    return {
        ...variantStyles[variant || 'info'],
        display: 'inline',
        marginRight: '3',
        fontSize: '3'
    };
};
