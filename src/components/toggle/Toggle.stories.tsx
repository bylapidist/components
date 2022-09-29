import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Toggle } from './index';
import { Box } from '../box';

export default {
    title: 'Components/Toggle',
    component: Toggle,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const DefaultTemplate = (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Toggle
            kind={args?.kind || 'primary'}
            checked={checked}
            onClick={() => setChecked(!checked)}
            {...args}
        />
    );
};

export const SingleToggle = (args) => (
    <DefaultTemplate {...args}>Toggle</DefaultTemplate>
);

export const MultiToggle = (args) => {
    const [option1Checked, setOption1Checked] = React.useState(false);
    const [option2Checked, setOption2Checked] = React.useState(false);

    return (
        <Box styles={{ display: 'flex', sizeGap: '2' }}>
            <DefaultTemplate
                kind="tertiary"
                variant="medium"
                checked={option1Checked}
                onClick={() => setOption1Checked(!option1Checked)}
                {...args}
            >
                Option 1
            </DefaultTemplate>
            <DefaultTemplate
                kind="tertiary"
                variant="medium"
                checked={option2Checked}
                onClick={() => setOption2Checked(!option2Checked)}
                {...args}
            >
                Option 2
            </DefaultTemplate>
        </Box>
    );
};
