import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Link, { LinkProps } from './index';
export default {
    title: 'Typography/Link',
    component: Link,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & LinkProps = {
    as: 'a',
    testId: 'Link',
    href: 'javascript:void(0)'
};

const DefaultTemplate: StoryFn<BaseProps & LinkProps> = (args) => (
    <Link {...args}>Hello world</Link>
);

export const Small: StoryObj<BaseProps & LinkProps> = DefaultTemplate.bind({});
Small.args = {
    ...defaultArgs,
    size: 'small'
};
export const Medium: StoryObj<BaseProps & LinkProps> = DefaultTemplate.bind({});
Medium.args = {
    ...defaultArgs,
    size: 'medium'
};

export const Large: StoryObj<BaseProps & LinkProps> = DefaultTemplate.bind({});
Large.args = {
    ...defaultArgs,
    size: 'large'
};

export const WithIcon: StoryObj<BaseProps & LinkProps> = DefaultTemplate.bind(
    {}
);
WithIcon.args = {
    ...defaultArgs,
    icon: faXmark
};
