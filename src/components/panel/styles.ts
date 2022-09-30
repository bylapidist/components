import { Styles } from '@lapidist/styles';

export const panelStyles = (): Styles => ({
    borderRadius: '2',
    paddingX: '4',
    paddingY: '3',
    sizeMinHeight: '32',
    backgroundColor: { shade: 'light', group: 'base' }
});

export const panelHeadingStyles = (): Styles => ({
    marginBottom: '4',
    fontWeight: 700
});

export const panelActionBarStyles = (): Styles => ({
    display: 'flex',
    alignItems: 'flex-end',
    borderTopColor: { group: 'grey', shade: 'lightest' },
    borderTopStyle: 'solid',
    borderTopWidth: '2',
    paddingTop: '3',
    marginTop: '3'
});

export const panelSpinnerStyles = (): Styles => ({ sizeWidth: 16 });

export const panelButtonStyles = (): Styles => ({
    display: 'flex',
    sizeGap: '2',
    width: 'full',
    justifyContent: 'end'
});

export const panelLoadingStyles = ({
    loading
}: {
    loading?: boolean;
}): Styles =>
    loading
        ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
          }
        : {};
