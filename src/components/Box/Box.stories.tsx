import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Box, { BoxProps } from './index';

export default {
    title: 'Components/Box',
    component: Box,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & BoxProps = {
    as: 'div',
    testId: 'Box',
    gutter: 0,
    gutterX: undefined,
    gutterY: undefined
};

const DefaultTemplate: StoryFn<BaseProps & BoxProps> = (args) => (
    <Box {...args}>Hello world</Box>
);

export const NoGutter: StoryObj<BaseProps & BoxProps> = DefaultTemplate.bind(
    {}
);
NoGutter.args = {
    ...defaultArgs
};

export const SmallestGutter: StoryObj<BaseProps & BoxProps> =
    DefaultTemplate.bind({});
SmallestGutter.args = {
    ...defaultArgs,
    gutter: 1
};

export const SmallerGutter: StoryObj<BaseProps & BoxProps> =
    DefaultTemplate.bind({});
SmallerGutter.args = {
    ...defaultArgs,
    gutter: 2
};

export const LargerGutter: StoryObj<BaseProps & BoxProps> =
    DefaultTemplate.bind({});
LargerGutter.args = {
    ...defaultArgs,
    gutter: 3
};

export const LargestGutter: StoryObj<BaseProps & BoxProps> =
    DefaultTemplate.bind({});
LargestGutter.args = {
    ...defaultArgs,
    gutter: 4
};
