import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Elevated, { ElevatedProps } from './index';

export default {
    title: 'Components/Elevated',
    component: Elevated,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & ElevatedProps = {
    as: 'div',
    testId: 'Elevated',
    elevation: 0
};

const DefaultTemplate: StoryFn<BaseProps & ElevatedProps> = (args) => (
    <Elevated {...args}>Hello world</Elevated>
);

export const NoElevation: StoryObj<BaseProps & ElevatedProps> =
    DefaultTemplate.bind({});
NoElevation.args = {
    ...defaultArgs
};

export const LowestElevation: StoryObj<BaseProps & ElevatedProps> =
    DefaultTemplate.bind({});
LowestElevation.args = {
    ...defaultArgs,
    elevation: 1
};

export const LowerElevation: StoryObj<BaseProps & ElevatedProps> =
    DefaultTemplate.bind({});
LowerElevation.args = {
    ...defaultArgs,
    elevation: 2
};

export const HigherElevation: StoryObj<BaseProps & ElevatedProps> =
    DefaultTemplate.bind({});
HigherElevation.args = {
    ...defaultArgs,
    elevation: 3
};

export const HighestElevation: StoryObj<BaseProps & ElevatedProps> =
    DefaultTemplate.bind({});
HighestElevation.args = {
    ...defaultArgs,
    elevation: 4
};
