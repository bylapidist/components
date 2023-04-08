import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { BaseProps } from '../../types';
import ThemeProvider from '../../utility/ThemeProvider';
import Button, { ButtonProps } from './index';

export default {
    title: 'Inputs/Button',
    component: Button,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & ButtonProps = {
    as: 'button',
    testId: 'Button',
    level: 'primary',
    size: 'medium',
    disabled: false,
    block: false,
    children: 'Click Me'
};

const DefaultTemplate: StoryFn<BaseProps & ButtonProps> = (args) => (
    <Button {...args} />
);

export const PrimarySmall: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
PrimarySmall.args = {
    ...defaultArgs,
    size: 'small'
};
export const PrimaryMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
PrimaryMedium.args = {
    ...defaultArgs,
    size: 'medium'
};
export const PrimaryLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
PrimaryLarge.args = {
    ...defaultArgs,
    size: 'large'
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
    level: 'secondary',
    size: 'small'
};

export const SecondaryMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
SecondaryMedium.args = {
    ...defaultArgs,
    level: 'secondary',
    size: 'medium'
};

export const SecondaryLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
SecondaryLarge.args = {
    ...defaultArgs,
    level: 'secondary',
    size: 'large'
};

export const SecondaryDisabled: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
SecondaryDisabled.args = {
    ...defaultArgs,
    level: 'secondary',
    disabled: true
};

export const TertiarySmall: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiarySmall.args = {
    ...defaultArgs,
    level: 'tertiary',
    size: 'small'
};

export const TertiaryMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiaryMedium.args = {
    ...defaultArgs,
    level: 'tertiary',
    size: 'medium'
};

export const TertiaryLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiaryLarge.args = {
    ...defaultArgs,
    level: 'tertiary',
    size: 'large'
};

export const TertiaryDisabled: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
TertiaryDisabled.args = {
    ...defaultArgs,
    level: 'tertiary',
    disabled: true
};

export const DangerSmall: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerSmall.args = {
    ...defaultArgs,
    level: 'danger',
    size: 'small'
};

export const DangerMedium: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerMedium.args = {
    ...defaultArgs,
    level: 'danger',
    size: 'medium'
};

export const DangerLarge: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerLarge.args = {
    ...defaultArgs,
    level: 'danger',
    size: 'large'
};

export const DangerDisabled: StoryObj<BaseProps & ButtonProps> =
    DefaultTemplate.bind({});
DangerDisabled.args = {
    ...defaultArgs,
    level: 'danger',
    disabled: true
};

export const WithIcon: StoryObj<BaseProps & ButtonProps> = DefaultTemplate.bind(
    {}
);
WithIcon.args = {
    ...defaultArgs,
    level: 'danger',
    icon: faXmark
};

export const Block: StoryObj<BaseProps & ButtonProps> = DefaultTemplate.bind(
    {}
);
Block.args = {
    ...defaultArgs,
    level: 'primary',
    block: true
};
