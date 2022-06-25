import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { PanelHeading } from './index';

export default {
    title: 'Components/PanelHeading',
    component: PanelHeading,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => (
    <PanelHeading {...args}>Heading</PanelHeading>
);

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
