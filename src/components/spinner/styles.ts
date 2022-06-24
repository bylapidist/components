import { Styles } from '@lapidist/styles';

export const spinnerBoxStyles = (styles?: Styles): Styles => ({
    display: 'flex',
    position: 'relative',
    width: 'full',
    overflow: 'hidden',
    alignItems: 'center',
    sizeHeight: styles?.sizeWidth || '16'
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
    boxShadow: '2',
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
