import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Elevated } from './index';
import { AspectRatio } from '../aspect-ratio';
import { Box } from '../box';

export default {
    title: 'Components/Elevated',
    component: Elevated,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const DefaultTemplate = (args) => (
    <Elevated styles={{ sizeWidth: '64' }} {...args}>
        <AspectRatio ratio="1/1">
            <Box styles={{ padding: '4' }} />
        </AspectRatio>
    </Elevated>
);

export const ElevationScale = () => (
    <Box styles={{ display: 'flex', sizeGap: '4' }}>
        <DefaultTemplate elevation="0" />
        <DefaultTemplate elevation="1" />
        <DefaultTemplate elevation="2" />
        <DefaultTemplate elevation="3" />
        <DefaultTemplate elevation="4" />
    </Box>
);
ElevationScale.parameters = {
    controls: { disable: true },
    actions: { disable: true }
};

export const LowestElevation = DefaultTemplate.bind({});
LowestElevation.args = {
    elevation: '0'
};

export const LowElevation = DefaultTemplate.bind({});
LowElevation.args = {
    elevation: '1'
};

export const MidElevation = DefaultTemplate.bind({});
MidElevation.args = {
    elevation: '2'
};

export const HighElevation = DefaultTemplate.bind({});
HighElevation.args = {
    elevation: '3'
};

export const HighestElevation = DefaultTemplate.bind({});
HighestElevation.args = {
    elevation: '4'
};
