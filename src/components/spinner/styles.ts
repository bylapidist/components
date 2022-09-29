import { Styles } from '@lapidist/styles';

export const spinnerBoxStyles = (): Styles => ({
    display: 'flex',
    position: 'relative',
    width: 'full',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: '3',
    boxShadow: '1'
});

export const spinnerInnerStyles = (): Styles => ({
    width: 'full',
    sizeHeight: '3',
    backgroundColor: {
        group: 'grey',
        shade: 'lightest'
    },
    borderWidth: 'px',
    borderStyle: 'solid',
    borderColor: {
        group: 'grey',
        shade: 'light'
    },
    borderRadius: '3'
});

export const spinnerPingPongStyles = (): Styles => ({
    sizeWidth: '6',
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
