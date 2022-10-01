import * as React from 'react';
import { Box } from '../../../box';
import { Button } from '../../../button';
import { PanelProps } from '../../index';
import { panelButtonsStyles } from './styles';

export const PanelButtons: React.FC<Pick<PanelProps, 'buttons'>> = ({
    buttons
}) => {
    if (!buttons?.length) return null;

    return (
        <Box styles={panelButtonsStyles()}>
            {buttons.map((button) => (
                <Button key={button.title} kind="primary" {...button?.props}>
                    {button.title}
                </Button>
            ))}
        </Box>
    );
};

PanelButtons.displayName = 'PanelButtons';
