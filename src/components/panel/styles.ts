import { Styles } from '@lapidist/styles';

export const panelStyles = (): Styles => ({
    borderWidth: 'px',
    borderStyle: 'solid',
    borderRadius: '2',
    boxShadow: '2',
    paddingX: '4',
    paddingY: '3',
    sizeMinHeight: '32',
    backgroundColor: { shade: 'light', group: 'base' },
    borderColor: { shade: 'light', group: 'grey' }
});
