import { Styles } from '@lapidist/styles';
import { PanelProps } from '../../index';

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
    marginBottom: '2'
});

export const panelHeadingStyles = ({
    image
}: Pick<PanelProps, 'image'>): Styles => ({
    padding: '4',
    paddingTop: image ? '2' : '4',
    paddingLeft: '4',
    paddingBottom: '0',
    fontWeight: 700
});
