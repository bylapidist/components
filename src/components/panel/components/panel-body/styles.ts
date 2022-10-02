import { Styles } from '@lapidist/styles';

export const panelBodyStyles = (): Styles => ({
    paddingX: '4',
    paddingLeft: '4',
    maxWidth: '11/12',
    marginY: '2'
});

export const panelImageStyles = (): Styles => ({
    borderBottomColor: { group: 'grey', shade: 'lightest' },
    borderBottomStyle: 'solid',
    borderBottomWidth: '2',
    marginBottom: '2',
    width: 'full'
});
