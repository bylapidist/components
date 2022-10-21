import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Button, { ButtonProps } from './index';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & ButtonProps = {
    as: 'button',
    testId: 'Button',
    kind: 'primary',
    variant: 'medium',
    loading: false,
    disabled: false
};

const DefaultTemplate: StoryFn<BaseProps & ButtonProps> = (args) => (
    <Button {...args}>Click Me</Button>
);

export const Primary: StoryObj<BaseProps & ButtonProps> = DefaultTemplate.bind(
    {}
);
Primary.args = {
    ...defaultArgs
};

export const Secondary: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
Secondary.args = {
    ...defaultArgs,
    kind: 'secondary'
};

export const Tertiary: StoryObj<BaseProps & ButtonProps> = DefaultTemplate.bind(
    {}
);
Tertiary.args = {
    ...defaultArgs,
    kind: 'tertiary'
};

export const Danger: StoryObj<BaseProps & ButtonProps> = DefaultTemplate.bind(
    {}
);
Danger.args = {
    ...defaultArgs,
    kind: 'danger'
};
