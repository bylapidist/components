import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Tag, { TagProps } from './index';

export default {
    title: 'Status/Tag',
    component: Tag,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Tag>;

const defaultArgs: BaseProps & TagProps = {
    as: 'span',
    testId: 'Tag',
    level: 'primary'
};

const DefaultTemplate: StoryFn<BaseProps & TagProps> = (args) => (
    <Tag {...args}>v1.0.0</Tag>
);

export const Primary: StoryObj<BaseProps & TagProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs
    }
};

export const Secondary: StoryObj<BaseProps & TagProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        level: 'secondary'
    }
};

export const Tertiary: StoryObj<BaseProps & TagProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        level: 'tertiary'
    }
};

export const Danger: StoryObj<BaseProps & TagProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        level: 'danger'
    }
};
