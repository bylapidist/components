import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Button, { ButtonProps } from './index';

export default {
    title: 'Inputs/Button',
    component: Button,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & ButtonProps = {
    as: 'button',
    testId: 'Button',
    kind: 'primary',
    variant: 'medium',
    disabled: false
};

const DefaultTemplate: StoryFn<BaseProps & ButtonProps> = (args) => (
    <Button {...args}>Click Me</Button>
);

export const PrimarySmall: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
PrimarySmall.args = {
    ...defaultArgs,
    variant: 'small'
};
export const PrimaryMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
PrimaryMedium.args = {
    ...defaultArgs,
    variant: 'medium'
};
export const PrimaryLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
PrimaryLarge.args = {
    ...defaultArgs,
    variant: 'large'
};

export const PrimaryDisabled: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
PrimaryDisabled.args = {
    ...defaultArgs,
    disabled: true
};

export const SecondarySmall: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
SecondarySmall.args = {
    ...defaultArgs,
    kind: 'secondary',
    variant: 'small'
};

export const SecondaryMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
SecondaryMedium.args = {
    ...defaultArgs,
    kind: 'secondary',
    variant: 'medium'
};

export const SecondaryLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
SecondaryLarge.args = {
    ...defaultArgs,
    kind: 'secondary',
    variant: 'large'
};

export const SecondaryDisabled: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
SecondaryDisabled.args = {
    ...defaultArgs,
    kind: 'secondary',
    disabled: true
};

export const TertiarySmall: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiarySmall.args = {
    ...defaultArgs,
    kind: 'tertiary',
    variant: 'small'
};

export const TertiaryMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiaryMedium.args = {
    ...defaultArgs,
    kind: 'tertiary',
    variant: 'medium'
};

export const TertiaryLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiaryLarge.args = {
    ...defaultArgs,
    kind: 'tertiary',
    variant: 'large'
};

export const TertiaryDisabled: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiaryDisabled.args = {
    ...defaultArgs,
    kind: 'tertiary',
    disabled: true
};

export const DangerSmall: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerSmall.args = {
    ...defaultArgs,
    kind: 'danger',
    variant: 'small'
};

export const DangerMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerMedium.args = {
    ...defaultArgs,
    kind: 'danger',
    variant: 'medium'
};

export const DangerLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerLarge.args = {
    ...defaultArgs,
    kind: 'danger',
    variant: 'large'
};

export const DangerDisabled: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerDisabled.args = {
    ...defaultArgs,
    kind: 'danger',
    disabled: true
};

export const WithIcon: StoryObj<BaseProps & ButtonProps> = DefaultTemplate.bind(
    {}
);
WithIcon.args = {
    ...defaultArgs,
    kind: 'danger',
    icon: faXmark
};
