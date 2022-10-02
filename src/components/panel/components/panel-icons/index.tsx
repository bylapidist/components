import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faCircleCheck,
    faCircleExclamation,
    faCircleInfo,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../../box';
import { Text } from '../../../text';
import { Tag } from '../../../tag';
import { PanelProps, PanelStatusType } from '../../index';
import { panelIconsStyles, panelTagStyles } from './styles';

export const PanelIcons: React.FC<Pick<PanelProps, 'status' | 'tag'>> = ({
    status,
    tag
}) => {
    const hasStatus = status && status !== 'none';
    const hasTag = tag?.title;
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

    return (
        <Box styles={panelIconsStyles()}>
            {hasStatus && (
                <Text>
                    <FontAwesomeIcon icon={getIcon(status)} />
                </Text>
            )}
            {hasTag && (
                <Box styles={panelTagStyles()}>
                    <Tag kind="primary" {...tag?.props}>
                        {tag.title}
                    </Tag>
                </Box>
            )}
        </Box>
    );
};

PanelIcons.displayName = 'PanelIcons';
