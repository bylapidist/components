import * as React from 'react';
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
    testId: 'Text'
};

const DefaultTemplate: StoryFn<BaseProps & TextProps> = (args) => (
    <Text {...args}>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
        ultrices augue, et varius velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
    </Text>
);

export const Small: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind({});
Small.args = {
    ...defaultArgs,
    size: 'small'
};
export const Medium: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind({});
Medium.args = {
    ...defaultArgs,
    size: 'medium'
};

export const Large: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind({});
Large.args = {
    ...defaultArgs,
    size: 'large'
};

export const Sans: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind({});
Sans.args = {
    ...defaultArgs,
    variant: 'sans'
};

export const Serif: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind({});
Serif.args = {
    ...defaultArgs,
    variant: 'serif'
};

export const Mono: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind({});
Mono.args = {
    ...defaultArgs,
    variant: 'mono'
};
