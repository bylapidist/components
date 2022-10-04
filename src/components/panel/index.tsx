import * as React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Elevated, ElevationHeight } from '../elevated';
import { BoxProps } from '../box';
import { Spinner } from '../spinner';
import { HeadingProps } from '../heading';
import { TagProps } from '../tag';
import { Button, ButtonProps } from '../button';
// import { panelSpinnerStyles, panelCloseButtonStyles } from './styles';
import { BaseProps, Theme } from '../types';
import { PanelActions } from './components/panel-actions';
import { PanelBody } from './components/panel-body';
import { ImageProps } from '../image';

// export * from './styles';

export type PanelPropType = BaseProps & BoxProps;

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
    readonly props?: BaseProps & ButtonProps;
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
    readonly image?: ImageProps;
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
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
            elevation={elevation}
            // styles={mergeStyles(panelStyles({ status, ...restProps }), {
            //     ...panelLoadingStyles({ loading, ...restProps }),
            //     ...styles
            // })}
            // {...restProps}
        >
            {loading ? (
                <Spinner
                // styles={panelSpinnerStyles()}
                />
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
                    // styles={panelCloseButtonStyles()}
                    kind="tertiary"
                    variant="medium"
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
