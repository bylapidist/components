import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Text from '../Text';
import Box, { BoxProps } from './index';

export default {
    title: 'Primitives/Box',
    component: Box,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultBoxArgs: BaseProps & BoxProps = {
    as: 'div',
    testId: 'Box',
    gutter: undefined,
    gutterX: undefined,
    gutterY: undefined,
    elevation: undefined
};

const DefaultBoxTemplate: StoryFn<BaseProps & BoxProps> = (args) => (
    <Box {...args}>
        <Text>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
        </Text>
    </Box>
);

export const NoGutterAndSmallElevation: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
NoGutterAndSmallElevation.args = {
    ...defaultBoxArgs,
    elevation: 'small'
};

export const SmallGutterAndSmallElevation: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
SmallGutterAndSmallElevation.args = {
    ...defaultBoxArgs,
    gutter: 'small',
    elevation: 'small'
};

export const MediumGutterAndSmallElevation: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
MediumGutterAndSmallElevation.args = {
    ...defaultBoxArgs,
    gutter: 'medium',
    elevation: 'small'
};

export const LargeGutterAndSmallElevation: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
LargeGutterAndSmallElevation.args = {
    ...defaultBoxArgs,
    gutter: 'large',
    elevation: 'small'
};

export const NoGutterAndNoElevation: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
NoGutterAndNoElevation.args = {
    ...defaultBoxArgs,
    gutter: 'medium',
    elevation: 'small'
};

export const SmallGutterAndSmallElevation2: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
SmallGutterAndSmallElevation2.args = {
    ...defaultBoxArgs,
    elevation: 'small',
    gutter: 'medium'
};

export const MediumGutterAndMediumElevation2: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
MediumGutterAndMediumElevation2.args = {
    ...defaultBoxArgs,
    elevation: 'medium',
    gutter: 'medium'
};

export const LargeGutterAndLargeElevation2: StoryObj<BaseProps & BoxProps> =
    DefaultBoxTemplate.bind({});
LargeGutterAndLargeElevation2.args = {
    ...defaultBoxArgs,
    elevation: 'large',
    gutter: 'medium'
};
