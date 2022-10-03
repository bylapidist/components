import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../theme-provider';
import { Elevated, StyledElevated, StyledElevatedProps } from './index';
import { AspectRatio } from '../aspect-ratio';
import { Box, StyledBox, StyledBoxProps } from '../box';

export default {
    title: 'Components/Elevated',
    component: Elevated,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const ElevatedBox = styled(StyledElevated)<StyledElevatedProps>`
    ${({ theme }) => `
        width: ${theme.sizes['64']};
    `}
`;

const GridBox = styled(StyledBox)<StyledBoxProps>`
    ${({ theme }) => `
        display: flex;
        grid-gap: ${theme.sizes['4']};
    `}
`;

const DefaultTemplate = (args) => (
    <ElevatedBox {...args}>
        <AspectRatio ratio="1/1">
            <Box gutter={4} />
        </AspectRatio>
    </ElevatedBox>
);

export const ElevationScale = () => (
    <GridBox gutter={4}>
        <DefaultTemplate elevation={0} />
        <DefaultTemplate elevation={1} />
        <DefaultTemplate elevation={2} />
        <DefaultTemplate elevation={3} />
        <DefaultTemplate elevation={4} />
    </GridBox>
);
ElevationScale.parameters = {
    controls: { disable: true },
    actions: { disable: true }
};

export const LowestElevation = DefaultTemplate.bind({});
LowestElevation.args = {
    elevation: 0
};

export const LowElevation = DefaultTemplate.bind({});
LowElevation.args = {
    elevation: 1
};

export const MidElevation = DefaultTemplate.bind({});
MidElevation.args = {
    elevation: 2
};

export const HighElevation = DefaultTemplate.bind({});
HighElevation.args = {
    elevation: 3
};

export const HighestElevation = DefaultTemplate.bind({});
HighestElevation.args = {
    elevation: 4
};
