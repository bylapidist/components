import * as React from 'react';
import { Box } from '../../../box';
import { PanelProps } from '../../index';
// import { panelActionsStyles } from './styles';
import { PanelIcons } from '../panel-icons';
import { PanelButtons } from '../panel-buttons';

export const PanelActions: React.FC<
    Pick<PanelProps, 'tag' | 'buttons' | 'status'>
> = ({ tag, buttons, status }) => {
    const hasTag = tag?.title;
    const hasButtons = buttons?.length;
    const hasStatus = status && status !== 'none';
    const canRender = hasTag || hasButtons || hasStatus;

    if (!canRender) return null;

    return (
        <Box
        // styles={panelActionsStyles()}
        >
            <PanelIcons status={status} tag={tag} />
            <PanelButtons buttons={buttons} />
        </Box>
    );
};

PanelActions.displayName = 'PanelActions';
