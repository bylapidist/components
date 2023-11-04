import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Tabs, { TabsProps } from './index';

export default {
    title: 'Primitives/Tabs',
    component: Tabs,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & TabsProps = {
    as: 'div',
    testId: 'Tabs',
    size: 'medium',
    links: [
        { testId: 'Link1', href: 'javascript:void', children: 'Home' },
        { testId: 'Link2', href: 'javascript:void', children: 'About' },
        { testId: 'Link3', href: 'javascript:void', children: 'Blog' },
        { testId: 'Link4', href: 'javascript:void', children: 'Contact' }
    ],
    onChangeTab: () => {}
};

const DefaultTemplate: StoryFn<BaseProps & TabsProps> = (args) => (
    <Tabs {...args} />
);

export const Basic: StoryObj<BaseProps & TabsProps> = DefaultTemplate.bind({});
Basic.args = {
    ...defaultArgs,
    onChangeTab: undefined
};

export const Small: StoryObj<BaseProps & TabsProps> = DefaultTemplate.bind({});
Small.args = {
    ...defaultArgs,
    size: 'small'
};
export const Medium: StoryObj<BaseProps & TabsProps> = DefaultTemplate.bind({});
Medium.args = {
    ...defaultArgs,
    size: 'medium'
};
export const Large: StoryObj<BaseProps & TabsProps> = DefaultTemplate.bind({});
Large.args = {
    ...defaultArgs,
    size: 'large'
};
