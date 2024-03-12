import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Logo, { LogoProps } from './index';

export default {
    title: 'Primitives/Logo',
    component: Logo,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Logo>;

const defaultArgs: BaseProps & LogoProps = {
    as: 'div',
    testId: 'Logo',
    animation: 'fade'
};

export const FadeAnimation: StoryObj<BaseProps & LogoProps> = {
    args: {
        ...defaultArgs
    }
};

export const SlideAnimation: StoryObj<BaseProps & LogoProps> = {
    args: {
        ...defaultArgs,
        animation: 'slide'
    }
};
