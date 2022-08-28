import * as React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
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

export const WithIcon = DefaultTemplate.bind({});
WithIcon.args = {
    kind: 'primary',
    icon: faXmark,
    styles: templateStyles
};

export const AsAnchor = DefaultTemplate.bind({});
AsAnchor.args = {
    as: 'a',
    kind: 'primary',
    href: 'https://google.com',
    target: '_blank',
    styles: templateStyles
};
