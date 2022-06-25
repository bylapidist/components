import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Tag } from './index';

export default {
    title: 'Components/Tag',
    component: Tag,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => <Tag {...args}>v1.0.0</Tag>;

export const Primary = DefaultTemplate.bind({});
Primary.args = {
    kind: 'primary',
    styles: templateStyles
};

export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
    kind: 'secondary',
    styles: templateStyles
};

export const Tertiary = DefaultTemplate.bind({});
Tertiary.args = {
    kind: 'tertiary',
    styles: templateStyles
};

export const Danger = DefaultTemplate.bind({});
Danger.args = {
    kind: 'danger',
    styles: templateStyles
};

export const Grey = DefaultTemplate.bind({});
Grey.args = {
    kind: 'grey',
    styles: templateStyles
};

export const PrimaryWithNamespace = DefaultTemplate.bind({});
PrimaryWithNamespace.args = {
    kind: 'primary',
    namespace: 'npm',
    styles: templateStyles
};

export const SecondaryWithNamespace = DefaultTemplate.bind({});
SecondaryWithNamespace.args = {
    kind: 'secondary',
    namespace: 'npm',
    styles: templateStyles
};

export const TertiaryWithNamespace = DefaultTemplate.bind({});
TertiaryWithNamespace.args = {
    kind: 'tertiary',
    namespace: 'npm',
    styles: templateStyles
};

export const DangerWithNamespace = DefaultTemplate.bind({});
DangerWithNamespace.args = {
    kind: 'danger',
    namespace: 'npm',
    styles: templateStyles
};

export const GreyWithNamespace = DefaultTemplate.bind({});
GreyWithNamespace.args = {
    kind: 'grey',
    namespace: 'npm',
    styles: templateStyles
};
