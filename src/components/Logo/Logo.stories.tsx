import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Logo, { LogoProps } from './index';

export default {
    title: 'Primitives/Logo',
    component: Logo,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & LogoProps = {
    as: 'div',
    testId: 'Logo',
    animation: 'fade'
};

const DefaultTemplate: StoryFn<BaseProps & LogoProps> = (args) => (
    <Logo {...args} />
);

export const FadeAnimation: StoryObj<BaseProps & LogoProps> =
    DefaultTemplate.bind({});
FadeAnimation.args = {
    ...defaultArgs
};

export const SlideAnimation: StoryObj<BaseProps & LogoProps> =
    DefaultTemplate.bind({});
SlideAnimation.args = {
    ...defaultArgs,
    animation: 'slide'
};
