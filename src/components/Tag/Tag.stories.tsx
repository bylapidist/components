import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Tag, { TagProps } from './index';

export default {
    title: 'Components/Tag',
    component: Tag,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & TagProps = {
    as: 'span',
    testId: 'Tag',
    kind: 'primary'
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
    kind: 'secondary'
};

export const Tertiary: StoryObj<BaseProps & TagProps> = DefaultTemplate.bind(
    {}
);
Tertiary.args = {
    ...defaultArgs,
    kind: 'tertiary'
};

export const Danger: StoryObj<BaseProps & TagProps> = DefaultTemplate.bind({});
Danger.args = {
    ...defaultArgs,
    kind: 'danger'
};

export const PrimaryWithNamespace: StoryObj<BaseProps & TagProps> =
    DefaultTemplate.bind({});
PrimaryWithNamespace.args = {
    ...defaultArgs,
    namespace: 'npm'
};

export const SecondaryWithNamespace: StoryObj<BaseProps & TagProps> =
    DefaultTemplate.bind({});
SecondaryWithNamespace.args = {
    ...defaultArgs,
    kind: 'secondary',
    namespace: 'npm'
};

export const TertiaryWithNamespace: StoryObj<BaseProps & TagProps> =
    DefaultTemplate.bind({});
TertiaryWithNamespace.args = {
    ...defaultArgs,
    kind: 'tertiary',
    namespace: 'npm'
};

export const DangerWithNamespace: StoryObj<BaseProps & TagProps> =
    DefaultTemplate.bind({});
DangerWithNamespace.args = {
    ...defaultArgs,
    kind: 'danger',
    namespace: 'npm'
};
