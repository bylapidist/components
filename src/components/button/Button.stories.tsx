import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Button } from './index';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => <Button {...args}>Click Me</Button>;

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
