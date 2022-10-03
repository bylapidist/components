import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { BaseProps } from '../shared-types';
import { Tag, TagProps } from './index';

export default {
    title: 'Components/Tag',
    component: Tag,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & TagProps = {
    as: 'span',
    testId: 'Tag',
    kind: 'primary'
};

const DefaultTemplate = (args) => <Tag {...args}>v1.0.0</Tag>;

export const Primary = DefaultTemplate.bind({});
Primary.args = {
    ...defaultArgs,
    kind: 'primary'
};

export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
    ...defaultArgs,
    kind: 'secondary'
};

export const Tertiary = DefaultTemplate.bind({});
Tertiary.args = {
    ...defaultArgs,
    kind: 'tertiary'
};

export const Danger = DefaultTemplate.bind({});
Danger.args = {
    ...defaultArgs,
    kind: 'danger'
};

export const Grey = DefaultTemplate.bind({});
Grey.args = {
    ...defaultArgs,
    kind: 'grey'
};

export const PrimaryWithNamespace = DefaultTemplate.bind({});
PrimaryWithNamespace.args = {
    ...defaultArgs,
    kind: 'primary',
    namespace: 'npm'
};

export const SecondaryWithNamespace = DefaultTemplate.bind({});
SecondaryWithNamespace.args = {
    ...defaultArgs,
    kind: 'secondary',
    namespace: 'npm'
};

export const TertiaryWithNamespace = DefaultTemplate.bind({});
TertiaryWithNamespace.args = {
    ...defaultArgs,
    kind: 'tertiary',
    namespace: 'npm'
};

export const DangerWithNamespace = DefaultTemplate.bind({});
DangerWithNamespace.args = {
    ...defaultArgs,
    kind: 'danger',
    namespace: 'npm'
};

export const GreyWithNamespace = DefaultTemplate.bind({});
GreyWithNamespace.args = {
    ...defaultArgs,
    kind: 'grey',
    namespace: 'npm'
};
