import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClose,
    faCircleInfo,
    faCircleExclamation,
    faCircleCheck,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Elevated, ElevationHeight } from '../elevated';
import { Box, BoxProps } from '../box';
import { Spinner } from '../spinner';
import { Text } from '../text';
import { Heading, HeadingProps, HeadingPropType } from '../heading';
import { Tag, TagProps, TagPropType } from '../tag';
import { Button, ButtonProps, ButtonPropType } from '../button';
import {
    panelStyles,
    panelHeadingStyles,
    panelSpinnerStyles,
    panelActionBarStyles,
    panelLoadingStyles,
    panelCloseButtonStyles,
    panelImageStyles,
    panelBodyStyles,
    panelButtonStyles,
    panelIconStyles
} from './styles';
import { Image, ImagePropType } from '../image';

export * from './styles';

export type PanelPropType = BoxProps;

export type PanelStatusType = 'none' | 'info' | 'warning' | 'error' | 'success';

export interface PanelProps {
    readonly loading?: boolean;
    readonly dismissable?: boolean;
    readonly onDismiss?: () => void;
    readonly status?: PanelStatusType;
    readonly heading?: {
        readonly title: string;
        readonly props?: HeadingProps & HeadingPropType;
    };
    readonly elevation?: ElevationHeight;
    readonly tag?: {
        readonly title: string;
        readonly props?: Omit<Omit<TagProps & TagPropType, 'ref'>, 'theme'>;
    };
    readonly buttons?: {
        readonly title?: string;
        readonly props?: Omit<
            Omit<ButtonProps & ButtonPropType, 'ref'>,
            'theme'
        >;
    }[];
    readonly image?: ImagePropType;
    readonly theme: Theme;
}

const BasePanel: React.FC<PanelPropType & PanelProps> = ({
    as = 'div',
    styles,
    loading,
    dismissable,
    onDismiss,
    status,
    heading,
    elevation = '1',
    tag,
    buttons,
    image,
    children,
    ...restProps
}) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = () => {
        setDismissed(!dismissed);
        onDismiss && onDismiss();
    };

    const getIcon = (variant?: PanelStatusType): IconProp => {
        switch (variant) {
            case 'warning':
            case 'error':
                return faCircleExclamation;
            case 'success':
                return faCircleCheck;
            case 'info':
                return faCircleInfo;
            case 'none':
            default:
                return faComment;
        }
    };

    if (dismissed) return null;

    return (
        <Elevated
            as={as}
            elevation={elevation}
            styles={mergeStyles(panelStyles({ status, ...restProps }), {
                ...panelLoadingStyles({ loading, ...restProps }),
                ...styles
            })}
            {...restProps}
        >
            {loading && <Spinner styles={panelSpinnerStyles()} />}
            {!loading && (
                <>
                    {image && <Image styles={panelImageStyles()} {...image} />}

                    <Box styles={{ position: 'relative' }}>
                        {heading?.title && (
                            <Heading
                                styles={panelHeadingStyles({
                                    status,
                                    image,
                                    ...restProps
                                })}
                                {...heading?.props}
                            >
                                {heading.title}
                            </Heading>
                        )}
                        {children && (
                            <Text styles={panelBodyStyles()}>{children}</Text>
                        )}
                    </Box>
                    {(tag || buttons || (status && status !== 'none')) && (
                        <Box styles={panelActionBarStyles()}>
                            <Box
                                styles={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {status && status !== 'none' && (
                                    <Text
                                        styles={panelIconStyles({
                                            status,
                                            ...restProps
                                        })}
                                    >
                                        <FontAwesomeIcon
                                            icon={getIcon(status)}
                                        />
                                    </Text>
                                )}
                                {tag?.title && (
                                    <Box styles={{ flex: '1 1 auto' }}>
                                        <Tag kind="primary" {...tag?.props}>
                                            {tag.title}
                                        </Tag>
                                    </Box>
                                )}
                            </Box>
                            {buttons?.length && (
                                <Box styles={panelButtonStyles()}>
                                    {buttons.map((button) => (
                                        <Button
                                            key={button.title}
                                            kind="primary"
                                            {...button?.props}
                                        >
                                            {button.title}
                                        </Button>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    )}
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
