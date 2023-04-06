import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Toggle, { ToggleProps } from './index';

export default {
    title: 'Inputs/Toggle',
    component: Toggle,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & ToggleProps = {
    as: 'label',
    testId: 'Toggle',
    level: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Toggle Me'
};

const DefaultTemplate: StoryFn<BaseProps & ToggleProps> = (args) => (
    <Toggle {...args} />
);

export const PrimarySmall: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
PrimarySmall.args = {
    ...defaultArgs,
    size: 'small'
};

export const PrimaryMedium: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
PrimaryMedium.args = {
    ...defaultArgs,
    size: 'medium'
};
export const PrimaryLarge: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
PrimaryLarge.args = {
    ...defaultArgs,
    size: 'large'
};

export const PrimaryDisabled: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
PrimaryDisabled.args = {
    ...defaultArgs,
    disabled: true
};

export const SecondarySmall: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
SecondarySmall.args = {
    ...defaultArgs,
    level: 'secondary',
    size: 'small'
};

export const SecondaryMedium: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
SecondaryMedium.args = {
    ...defaultArgs,
    level: 'secondary',
    size: 'medium'
};

export const SecondaryLarge: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
SecondaryLarge.args = {
    ...defaultArgs,
    level: 'secondary',
    size: 'large'
};

export const SecondaryDisabled: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
SecondaryDisabled.args = {
    ...defaultArgs,
    level: 'secondary',
    disabled: true
};

export const TertiarySmall: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
TertiarySmall.args = {
    ...defaultArgs,
    level: 'tertiary',
    size: 'small'
};

export const TertiaryMedium: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
TertiaryMedium.args = {
    ...defaultArgs,
    level: 'tertiary',
    size: 'medium'
};

export const TertiaryLarge: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
TertiaryLarge.args = {
    ...defaultArgs,
    level: 'tertiary',
    size: 'large'
};

export const TertiaryDisabled: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
TertiaryDisabled.args = {
    ...defaultArgs,
    level: 'tertiary',
    disabled: true
};

export const DangerSmall: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
DangerSmall.args = {
    ...defaultArgs,
    level: 'danger',
    size: 'small'
};

export const DangerMedium: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
DangerMedium.args = {
    ...defaultArgs,
    level: 'danger',
    size: 'medium'
};

export const DangerLarge: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
DangerLarge.args = {
    ...defaultArgs,
    level: 'danger',
    size: 'large'
};

export const DangerDisabled: StoryObj<BaseProps & ToggleProps> =
    DefaultTemplate.bind({});
DangerDisabled.args = {
    ...defaultArgs,
    level: 'danger',
    disabled: true
};
