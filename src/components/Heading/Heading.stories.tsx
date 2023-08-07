import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Heading, { HeadingProps } from './index';

export default {
    title: 'Typography/Heading',
    component: Heading,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & HeadingProps = {
    as: 'h1',
    testId: 'Heading',
    size: 'large',
    family: 'heading',
    weight: 'regular'
};

const DefaultTemplate: StoryFn<BaseProps & HeadingProps> = (args) => (
    <Heading {...args}>Heading {args?.size}</Heading>
);

export const LargeSize: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
LargeSize.args = {
    ...defaultArgs
};

export const MediumSize: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
MediumSize.args = {
    ...defaultArgs,
    size: 'medium'
};

export const SmallSize: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
SmallSize.args = {
    ...defaultArgs,
    size: 'small'
};

export const RegularWeight: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
RegularWeight.args = {
    ...defaultArgs,
    weight: 'regular'
};
export const MediumWeight: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
MediumWeight.args = {
    ...defaultArgs,
    weight: 'medium'
};

export const BoldWeight: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
BoldWeight.args = {
    ...defaultArgs,
    weight: 'bold'
};

export const BodyFamily: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
BodyFamily.args = {
    ...defaultArgs,
    family: 'body'
};

export const HeadingFamily: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
HeadingFamily.args = {
    ...defaultArgs,
    family: 'heading'
};

export const SerifFamily: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
SerifFamily.args = {
    ...defaultArgs,
    family: 'serif'
};

export const MonoFamily: StoryObj<BaseProps & HeadingProps> =
    DefaultTemplate.bind({});
MonoFamily.args = {
    ...defaultArgs,
    family: 'mono'
};
