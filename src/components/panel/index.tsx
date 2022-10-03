import * as React from 'react';
import { withTheme } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Elevated, ElevationHeight } from '../elevated';
import { BoxProps } from '../box';
import { Spinner } from '../spinner';
import { HeadingProps } from '../heading';
import { TagProps } from '../tag';
import { Button, ButtonProps, ButtonPropType } from '../button';
import { panelSpinnerStyles, panelCloseButtonStyles } from './styles';
import { BaseProps } from '../shared-types';
import { ImagePropType } from '../image';
import { PanelActions } from './components/panel-actions';
import { PanelBody } from './components/panel-body';

export * from './styles';

export type PanelPropType = BoxProps;

export type PanelStatusType = 'none' | 'info' | 'warning' | 'error' | 'success';

export type PanelHeadingProp = {
    readonly title: string;
    readonly props?: BaseProps & HeadingProps;
};

export type PanelTagProp = {
    readonly title: string;
    readonly props?: BaseProps & TagProps;
};

export type PanelButtonProp = {
    readonly title: string;
    readonly props?: Omit<ButtonProps & ButtonPropType, 'ref' | 'theme'>;
};

export interface PanelProps {
    readonly loading?: boolean;
    readonly dismissable?: boolean;
    readonly onDismiss?: () => void;
    readonly status?: PanelStatusType;
    readonly heading?: PanelHeadingProp;
    readonly elevation?: ElevationHeight;
    readonly tag?: PanelTagProp;
    readonly buttons?: PanelButtonProp[];
    readonly image?: ImagePropType;
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    loading,
    dismissable,
    onDismiss,
    status,
    heading,
    elevation = 1,
    tag,
    buttons,
    image,
    children
}) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = () => {
        setDismissed(!dismissed);
        onDismiss && onDismiss();
    };

    if (dismissed) return null;

    return (
        <Elevated
            as={as}
            elevation={elevation}
            // styles={mergeStyles(panelStyles({ status, ...restProps }), {
            //     ...panelLoadingStyles({ loading, ...restProps }),
            //     ...styles
            // })}
            // {...restProps}
        >
            {loading ? (
                <Spinner styles={panelSpinnerStyles()} />
            ) : (
                <>
                    <PanelBody heading={heading} image={image}>
                        {children}
                    </PanelBody>
                    <PanelActions tag={tag} buttons={buttons} status={status} />
                </>
            )}
            {dismissable && (
                <Button
                    styles={panelCloseButtonStyles()}
                    kind="tertiary"
                    onClick={handleDismiss}
                >
                    <FontAwesomeIcon icon={faClose} />
                </Button>
            )}
        </Elevated>
    );
};

export const Panel = withTheme(BasePanel);

Panel.displayName = 'Panel';
