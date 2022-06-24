import { Styles } from '@lapidist/styles';

export const buttonGroupStyles = (): Styles => ({
    pseudo: {
        '> :nth-child(n)': {
            borderRadius: '0'
        },
        '> :not(:last-child):nth-child(n)': {
            marginRight: '2'
        }
    }
});
