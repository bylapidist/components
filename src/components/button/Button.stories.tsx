import * as React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from '../theme-provider';
import { BaseProps } from '../types';
import { Button, ButtonProps } from './index';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & ButtonProps = {
    as: 'button',
    testId: 'Button',
    kind: 'primary',
    variant: 'medium',
    disabled: false,
    loading: false
};

const DefaultTemplate = (args) => <Button {...args}>Click Me</Button>;

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

export const WithIcon = DefaultTemplate.bind({});
WithIcon.args = {
    ...defaultArgs,
    kind: 'primary',
    icon: faXmark
};

export const AsAnchor = DefaultTemplate.bind({});
AsAnchor.args = {
    ...defaultArgs,
    as: 'a',
    kind: 'primary',
    href: 'https://google.com',
    target: '_blank'
};
