import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../../types';
import ThemeProvider from '../../utility/ThemeProvider';
import Checkbox, { CheckboxProps } from './index';

export default {
    title: 'Inputs/Checkbox',
    component: Checkbox,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & CheckboxProps = {
    as: 'label',
    testId: 'Checkbox',
    label: 'Please check me',
    description: '',
    disabled: false,
    checked: false,
    indeterminate: false,
    onClick: undefined,
    children: 'I agree to the terms and conditions.'
};

const DefaultTemplate: StoryFn<BaseProps & CheckboxProps> = (args) => (
    <Checkbox {...args} />
);

export const Unchecked: StoryObj<BaseProps & CheckboxProps> =
    DefaultTemplate.bind({});
Unchecked.args = {
    ...defaultArgs
};

export const Description: StoryObj<BaseProps & CheckboxProps> =
    DefaultTemplate.bind({});
Description.args = {
    ...defaultArgs,
    description: 'I am a smaller description underneath the label'
};

export const Checked: StoryObj<BaseProps & CheckboxProps> =
    DefaultTemplate.bind({});
Checked.args = {
    ...defaultArgs,
    checked: true
};
export const Indeterminate: StoryObj<BaseProps & CheckboxProps> =
    DefaultTemplate.bind({});
Indeterminate.args = {
    ...defaultArgs,
    indeterminate: true
};

export const Disabled: StoryObj<BaseProps & CheckboxProps> =
    DefaultTemplate.bind({});
Disabled.args = {
    ...defaultArgs,
    disabled: true
};
