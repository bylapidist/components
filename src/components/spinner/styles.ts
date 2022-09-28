import { Styles } from '@lapidist/styles';

export const spinnerBoxStyles = (): Styles => ({
    display: 'flex',
    position: 'relative',
    width: 'full',
    overflow: 'hidden',
    alignItems: 'center'
});

export const spinnerInnerStyles = (): Styles => ({
    width: 'full',
    sizeHeight: '3',
    backgroundColor: {
        group: 'base',
        shade: 'light'
    },
    borderWidth: 'px',
    borderStyle: 'solid',
    borderColor: {
        group: 'grey',
        shade: 'light'
    },
    borderRadius: '2'
});

export const spinnerPingPongStyles = (): Styles => ({
    content: '',
    sizeWidth: '3',
    sizeHeight: '3',
    backgroundColor: {
        group: 'grey',
        shade: 'light'
    },
    position: 'relative',
    top: '-1px',
    left: '0',
    borderRadius: '3'
});
