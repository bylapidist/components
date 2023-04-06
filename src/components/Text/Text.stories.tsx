import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Text, { TextProps } from './index';

export default {
    title: 'Typography/Text',
    component: Text,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & TextProps = {
    as: 'p',
    testId: 'Text',
    size: 'medium',
    weight: 'regular',
    family: 'sans'
};

const DefaultTemplate: StoryFn<BaseProps & TextProps> = (args) => (
    <Text {...args}>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
        ultrices augue, et varius velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
    </Text>
);

export const SmallSize: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind(
    {}
);
SmallSize.args = {
    ...defaultArgs,
    size: 'small'
};
export const MediumSize: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind(
    {}
);
MediumSize.args = {
    ...defaultArgs,
    size: 'medium'
};

export const LargeSize: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind(
    {}
);
LargeSize.args = {
    ...defaultArgs,
    size: 'large'
};

export const RegularWeight: StoryObj<BaseProps & TextProps> =
    DefaultTemplate.bind({});
RegularWeight.args = {
    ...defaultArgs,
    weight: 'regular'
};
export const MediumWeight: StoryObj<BaseProps & TextProps> =
    DefaultTemplate.bind({});
MediumWeight.args = {
    ...defaultArgs,
    weight: 'medium'
};

export const BoldWeight: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind(
    {}
);
BoldWeight.args = {
    ...defaultArgs,
    weight: 'bold'
};

export const SansFamily: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind(
    {}
);
SansFamily.args = {
    ...defaultArgs,
    family: 'sans'
};

export const SerifFamily: StoryObj<BaseProps & TextProps> =
    DefaultTemplate.bind({});
SerifFamily.args = {
    ...defaultArgs,
    family: 'serif'
};

export const MonoFamily: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind(
    {}
);
MonoFamily.args = {
    ...defaultArgs,
    family: 'mono'
};
