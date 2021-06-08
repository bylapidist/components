import { Styles } from '@lapidist/styles';

export const buttonGroupStyles = (): Styles => ({
    pseudo: {
        '> :nth-child(n)': {
            borderRadius: '0'
        },
        '> :not(:last-child):nth-child(n)': {
            marginRight: '0'
        },
        '> :not(:first-child):nth-child(n)': {
            borderLeftWidth: '0',
            marginLeft: '0'
        }
    }
});
