import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Tag, { TagProps } from './index';

export default {
    title: 'Status/Tag',
    component: Tag,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & TagProps = {
    as: 'span',
    testId: 'Tag',
    level: 'primary'
};

const DefaultTemplate: StoryFn<BaseProps & TagProps> = (args) => (
    <Tag {...args}>v1.0.0</Tag>
);

export const Primary: StoryObj<BaseProps & TagProps> = DefaultTemplate.bind({});
Primary.args = {
    ...defaultArgs
};

export const Secondary: StoryObj<BaseProps & TagProps> = DefaultTemplate.bind(
    {}
);
Secondary.args = {
    ...defaultArgs,
    level: 'secondary'
};

export const Tertiary: StoryObj<BaseProps & TagProps> = DefaultTemplate.bind(
    {}
);
Tertiary.args = {
    ...defaultArgs,
    level: 'tertiary'
};

export const Danger: StoryObj<BaseProps & TagProps> = DefaultTemplate.bind({});
Danger.args = {
    ...defaultArgs,
    level: 'danger'
};
