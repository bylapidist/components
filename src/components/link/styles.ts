import { Styles } from '@lapidist/styles';

export const linkStyles = (): Styles => ({
    borderStyle: 'solid',
    borderBottomWidth: 'px',
    borderBottomColor: {
        group: 'primary',
        shade: 'light'
    },
    fontSize: '3',
    textColor: {
        group: 'primary',
        shade: 'dark'
    },
    pseudo: {
        ':hover': {
            textColor: {
                group: 'primary',
                shade: 'dark'
            },
            borderBottomColor: {
                group: 'primary',
                shade: 'dark'
            }
        }
    }
});
