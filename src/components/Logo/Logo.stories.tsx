import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Logo, { LogoProps } from './index';

export default {
    title: 'Components/Logo',
    component: Logo,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & LogoProps = {
    as: 'div',
    testId: 'Logo',
    animated: false,
    thinking: false
};

const DefaultTemplate: StoryFn<BaseProps & LogoProps> = (args) => (
    <Logo {...args} />
);

export const Default: StoryObj<BaseProps & LogoProps> = DefaultTemplate.bind(
    {}
);
Default.args = {
    ...defaultArgs
};

export const Animated: StoryObj<BaseProps & LogoProps> = DefaultTemplate.bind(
    {}
);
Animated.args = {
    ...defaultArgs,
    animated: true
};

export const Thinking: StoryObj<BaseProps & LogoProps> = DefaultTemplate.bind(
    {}
);
Thinking.args = {
    ...defaultArgs,
    thinking: true
};
