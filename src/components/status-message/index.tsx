import * as React from 'react';
import { withTheme } from 'styled-components';
import { mergeStyles, Theme } from '@lapidist/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClose,
    faCircleInfo,
    faCircleExclamation,
    faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import { Text } from '../text';
import { BoxProps } from '../box';
import { Elevated } from '../elevated';
import { Button } from '../button';
import {
    statusMessageIconStyles,
    statusMessageMessageStyles,
    statusMessageStyles
} from './styles';

export * from './styles';

export type StatusMessagePropType = BoxProps;

export type StatusMessageVariantType = 'info' | 'warning' | 'error' | 'success';

export interface StatusMessageProps {
    readonly variant?: StatusMessageVariantType;
    readonly message: string;
    readonly dismissable?: boolean;
    readonly theme: Theme;
}

const BaseStatusMessage: React.FC<StatusMessagePropType & StatusMessageProps> =
    ({
        as = 'div',
        styles,
        variant = 'info',
        message,
        dismissable,
        theme,
        ...restProps
    }) => {
        const [dismissed, setDismissed] = React.useState(false);

        const handleDismiss = () => setDismissed(!dismissed);

        const getIcon = (variant?: StatusMessageVariantType) => {
            switch (variant) {
                case 'warning':
                case 'error':
                    return faCircleExclamation;
                case 'success':
                    return faCircleCheck;
                case 'info':
                default:
                    return faCircleInfo;
            }
        };

        if (dismissed) return null;

        return (
            <Elevated
                as={as}
                elevation="1"
                styles={mergeStyles(
                    statusMessageStyles({ theme, message, variant }),
                    styles
                )}
                {...restProps}
            >
                <Text styles={statusMessageMessageStyles()}>
                    <Text
                        styles={statusMessageIconStyles({
                            theme,
                            message,
                            variant
                        })}
                    >
                        <FontAwesomeIcon icon={getIcon(variant)} />
                    </Text>
                    {message}
                </Text>
                {dismissable && (
                    <Button
                        kind="tertiary"
                        variant="small"
                        onClick={handleDismiss}
                        styles={{ minHeight: '2rem' }}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </Button>
                )}
            </Elevated>
        );
    };

export const StatusMessage = withTheme(BaseStatusMessage);

StatusMessage.displayName = 'StatusMessage';
